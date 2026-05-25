const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  return runAiAssistant(context.request, context.env);
}

async function runAiAssistant(request, env) {
  try {
    const body = await request.json();
    const action = normalizeAction(body.action);
    const language = String(body.language || "html").toLowerCase().slice(0, 20);
    const uiLanguage = String(body.ui_language || "ar").toLowerCase() === "en" ? "English" : "Arabic";
    const code = String(body.code || "").slice(0, 20000);
    const message = String(body.message || "").slice(0, 4000);
    if (!["chat", "generate_example"].includes(action) && !code.trim()) {
      return json({ error: "Code is empty." }, 400);
    }
    if (action === "chat" && !message.trim()) {
      return json({ error: "Message is empty." }, 400);
    }
    const source = action === "chat" ? message : code;
    if (env.CEREBRAS_API_KEY) {
      const parsed = await callCerebrasAssistant(action, language, uiLanguage, source, env);
      return json(normalizeAiPayload(parsed));
    }

    if (!env.OPENAI_API_KEY) {
      return json(buildLocalAiResponse(action, language, uiLanguage, source));
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: [
          "You are the Abdalla Academy compiler assistant.",
          "Answer only for learning and coding help.",
          "Be direct, practical, and beginner-friendly.",
          "Do not solve the whole task for the learner. Point to the problem, explain why it happens, and give ordered hints so the learner can fix it.",
          "For compiler help actions, keep the code field empty. Do not return a full corrected solution.",
          "For generate_example, return complete runnable starter code. For PHP, return files for index.php, style.css, script.js, and page.html.",
          "Return valid JSON matching the schema.",
          `Write the explanation and tips in ${uiLanguage}.`
        ].join(" "),
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: buildAiPrompt(action, language, source)
              }
            ]
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "compiler_ai_response",
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                explanation: { type: "string" },
                code: { type: "string" },
                files: {
                  type: "object",
                  additionalProperties: { type: "string" }
                },
                tips: {
                  type: "array",
                  items: { type: "string" }
                }
              },
              required: ["title", "explanation", "code", "files", "tips"]
            }
          }
        }
      })
    });

    const result = await response.json();
    if (!response.ok) {
      return json({ error: result.error?.message || result.message || "AI request failed." }, response.status);
    }

    const parsed = tryParseJsonRobust(extractResponseText(result));
    if (!parsed) throw new Error("Invalid AI response.");
    return json(normalizeAiPayload(parsed));
  } catch (error) {
    return json({ error: error.message || "AI failed." }, 500);
  }
}

async function callCerebrasAssistant(action, language, uiLanguage, source, env) {
  const response = await fetch("https://api.cerebras.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.CEREBRAS_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: env.CEREBRAS_MODEL || "llama3.1-8b",
      temperature: 0.25,
      max_tokens: 1200,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You are the Abdalla Academy compiler assistant.",
            "Answer only for programming, web development, compilers, debugging, and learning code.",
            "Do not solve the whole task for the learner.",
            "Point to the problem, explain why it happens, and give ordered hints.",
            "For compiler help actions, keep the code field empty.",
            "For generate_example, return complete runnable starter code. For PHP, return files for index.php, style.css, script.js, and page.html.",
            "Return valid JSON only. No markdown. No extra text.",
            `Write the explanation and tips in ${uiLanguage}.`
          ].join(" ")
        },
        {
          role: "user",
          content: buildAiPrompt(action, language, source)
        }
      ]
    })
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || `Cerebras API error: ${response.status}`);
  }

  const content = data?.choices?.[0]?.message?.content;
  const parsed = tryParseJsonRobust(content);
  if (!parsed) throw new Error("Invalid Cerebras response.");
  return parsed;
}

function normalizeAiPayload(parsed) {
  return {
    title: String(parsed?.title || "AI"),
    explanation: String(parsed?.explanation || ""),
    code: String(parsed?.code || ""),
    files: parsed?.files && typeof parsed.files === "object" ? parsed.files : {},
    tips: Array.isArray(parsed?.tips) ? parsed.tips.map(String).slice(0, 6) : []
  };
}

function normalizeAction(action) {
  const value = String(action || "explain").toLowerCase();
  return ["explain", "fix", "improve", "example", "teach", "chat", "generate_example"].includes(value) ? value : "explain";
}

function buildAiPrompt(action, language, code) {
  const tasks = {
    explain: "Scan the code and runtime output. Name the important tags/functions/ids/names/classes, then point out suspicious lines. Do not rewrite the code.",
    fix: "Use the code and runtime output to find likely mistakes. For each mistake, mention the file/line/section, why it is wrong, and one hint to fix it. Do not return corrected code.",
    improve: "Give learning hints for structure, readability, accessibility, debugging, and how to test the next step. Do not return rewritten code.",
    example: "Create one clear practice task related to this code, then teach the learner how to analyze the task before coding. Include: the task text, required input or user action, expected output, data needed, conditions, step order, and simple tests. Do not provide the final solution or corrected code.",
    teach: "Act as a programming coach. If the code includes a Learning focus value, explain that exact concept first. Explain what it means, where it appears in the code, when it is used, and one small experiment the learner can try. Do not rewrite the solution.",
    chat: "Answer this message only if it is about programming, web development, compilers, debugging, code structure, or learning code. If it is not programming-related, politely say you can only help with programming. Keep code empty unless a short example is necessary.",
    generate_example: "Generate a fresh beginner-friendly runnable example for the selected language. It must be different from the current code, valid, organized, and ready to run. Use meaningful ids, functions, names, and clear structure. Return full code. For PHP, return files with index.php, style.css, script.js, and page.html."
  };
  if (action === "chat") {
    return [
      "Action: chat",
      tasks.chat,
      "Return JSON with title, explanation, code, and tips.",
      "User message:",
      code
    ].join("\n");
  }
  return [
    `Action: ${action}`,
    `Language: ${language}`,
    tasks[action],
    action === "generate_example"
      ? "Return JSON with title, explanation, code, files, and tips. For non-PHP put the full runnable example in code and files as {}. For PHP put files for index.php, style.css, script.js, and page.html; code may repeat index.php."
      : "Return JSON with title, explanation, code, files, and tips. The code field must be an empty string for compiler help actions and files must be {}.",
    "Code:",
    code
  ].join("\n");
}

function buildLocalAiResponse(action, language, uiLanguage, source) {
  const ar = uiLanguage !== "English";
  const text = String(source || "");
  if (action === "chat") {
    const programming = /(html|css|js|javascript|php|c\+\+|cpp|code|compiler|function|class|variable|array|debug|error|syntax|برمجة|كود|دالة|متغير|مصفوفة|خطأ|تصحيح)/i.test(text);
    return programming
      ? {
          title: ar ? "فحص برمجي" : "Code check",
          explanation: ar ? "اكتب الكود داخل صفحة Compiler واضغط فحص حتى أحدد لك المكان المحتمل للمشكلة." : "Paste the code in the Compiler page and press Scan so I can point to the likely issue.",
          code: "",
          tips: ar
            ? ["ابدأ من رسالة الخطأ إن وجدت.", "راجع السطر القريب من الخطأ.", "غيّر خطوة واحدة ثم شغل الكود مرة ثانية."]
            : ["Start from the error message if one exists.", "Check the line near the error.", "Change one thing, then run again."]
        }
      : {
          title: ar ? "خارج النطاق" : "Out of scope",
          explanation: ar ? "لا أستطيع المساعدة في هذا الطلب." : "I cannot help with this request.",
          code: "",
          tips: []
        };
  }

  if (action === "generate_example") {
    return buildLocalGeneratedExample(language, ar);
  }

  if (action === "teach") {
    return buildLocalTeachingResponse(language, text, ar);
  }

  if (action === "example") {
    return buildLocalPracticeResponse(language, ar);
  }

  const lines = text.split(/\r?\n/);
  const tips = [];
  const add = (condition, arTip, enTip) => {
    if (condition) tips.push(ar ? arTip : enTip);
  };
  const numbered = (pattern) => {
    const index = lines.findIndex((line) => pattern.test(line));
    return index >= 0 ? index + 1 : null;
  };
  const hasText = text.trim().length > 0;

  add(language === "html" && !/<!doctype html>/i.test(text), "أضف DOCTYPE في بداية الصفحة.", "Add DOCTYPE at the top of the page.");
  add(language === "html" && /id\s*=\s*["'][^"']+["']/i.test(text), "راجع أن كل id مستخدم مرة واحدة فقط.", "Make sure each id is used only once.");
  add(language === "css" && /#[\w-]+/.test(text), "راجع أن id في CSS مطابق لنفس id داخل HTML.", "Make sure the CSS id matches the same id in HTML.");
  add(language === "css" && /:\s*[^;{}\n]+(?:\n|$)/.test(text), "راجع الفاصلة المنقوطة ; بعد خصائص CSS.", "Check the semicolon after CSS properties.");
  add(language === "js" && /\b(document|getElementById|querySelector)\b/.test(text), "تأكد أن العنصر موجود قبل تشغيل JavaScript.", "Make sure the element exists before JavaScript runs.");
  add(language === "js" && numbered(/console\.log\([^)]*[^;]\s*$/), ar ? `راجع نهاية السطر ${numbered(/console\.log\([^)]*[^;]\s*$/)}.` : `Check the end of line ${numbered(/console\.log\([^)]*[^;]\s*$/)}.`, ar ? "راجع نهاية السطر." : "Check the line ending.");
  add(language === "php" && !/<\?php/.test(text), "ابدأ جزء PHP بـ <?php.", "Start the PHP part with <?php.");
  add(language === "php" && /\$_(GET|POST)/.test(text) && !/(htmlspecialchars|filter_input|filter_var)/.test(text), "عند قراءة GET أو POST أضف فحص وتنظيف للمدخلات.", "When reading GET or POST, add validation and escaping.");
  add(language === "cpp" && !/int\s+main\s*\(/.test(text), "برنامج C++ يحتاج int main().", "A C++ program needs int main().");
  add(language === "cpp" && /cout|cin/.test(text) && !/#include\s*<iostream>/.test(text), "لاستخدام cout أو cin أضف include الخاص بـ iostream.", "To use cout or cin, include iostream.");
  add((text.match(/\{/g) || []).length !== (text.match(/\}/g) || []).length, "عدد الأقواس { } غير متوازن.", "The { } braces are not balanced.");
  add((text.match(/\(/g) || []).length !== (text.match(/\)/g) || []).length, "عدد الأقواس ( ) غير متوازن.", "The ( ) parentheses are not balanced.");

  if (!tips.length) {
    tips.push(ar ? "الكود لا يظهر فيه خطأ واضح من الفحص السريع." : "No obvious issue appeared in the quick scan.");
    tips.push(ar ? "إذا ظهرت رسالة خطأ، ابدأ من أول سطر مذكور فيها." : "If an error appears, start from the first line mentioned in it.");
  }

  const titles = {
    explain: ar ? "فحص الكود" : "Code scan",
    fix: ar ? "مكان المشكلة" : "Problem location",
    improve: ar ? "تلميحات التحسين" : "Improvement hints",
    example: ar ? "تدريب" : "Practice",
    teach: ar ? "تعلم المفاهيم" : "Learn the concepts"
  };
  return {
    title: titles[action] || "AI",
    explanation: hasText
      ? (ar ? "هذا فحص تعليمي سريع. أصلح خطوة واحدة ثم شغل الكود مرة ثانية." : "This is a quick learning scan. Fix one step, then run the code again.")
      : (ar ? "ضع الكود أولاً حتى أقدر أفحصه." : "Add code first so I can scan it."),
    code: "",
    files: {},
    tips: tips.slice(0, 6)
  };
}

function buildLocalPracticeResponse(language, ar) {
  const tasks = {
    html: {
      ar: "قم ببناء صفحة بطاقة طالب تحتوي عنوانا، صورة، وصفا قصيرا، رابطا، وزرا واضحا.",
      en: "Build a student card page with a title, image, short description, link, and clear button.",
      inputAr: "المحتوى الذي سيظهر داخل الصفحة: اسم، صورة، وصف، رابط.",
      inputEn: "The page content: name, image, description, and link.",
      outputAr: "صفحة مرتبة بعناصر HTML واضحة وسهلة القراءة.",
      outputEn: "A structured page with clear readable HTML elements."
    },
    css: {
      ar: "قم بتنسيق بطاقة دورة بحيث يكون لها خلفية داكنة، عنوان واضح، زر، وحالة hover.",
      en: "Style a course card with a dark background, clear title, button, and hover state.",
      inputAr: "عناصر HTML الموجودة: card، title، button.",
      inputEn: "Existing HTML elements: card, title, and button.",
      outputAr: "تصميم واضح ومتجاوب مع حركة hover بسيطة.",
      outputEn: "A clear responsive design with a simple hover interaction."
    },
    js: {
      ar: "قم ببناء عداد نقاط يزيد عند الضغط على زر، ويعرض رسالة عند الوصول إلى 10.",
      en: "Build a score counter that increases on button click and shows a message at 10.",
      inputAr: "ضغط المستخدم على الزر.",
      inputEn: "The user's button click.",
      outputAr: "تحديث الرقم ورسالة عند تحقق الشرط.",
      outputEn: "An updated number and a message when the condition is met."
    },
    php: {
      ar: "قم ببناء نموذج اسم وبريد إلكتروني يعرض رسالة ترحيب بعد الإرسال.",
      en: "Build a name and email form that shows a welcome message after submission.",
      inputAr: "بيانات POST: الاسم والبريد الإلكتروني.",
      inputEn: "POST data: name and email.",
      outputAr: "رسالة آمنة تعرض الاسم بعد فحصه وتنظيفه.",
      outputEn: "A safe message that displays the name after validation and escaping."
    },
    cpp: {
      ar: "قم ببناء برنامج يقرأ درجة طالب ويطبع ناجح أو يحتاج مراجعة حسب الدرجة.",
      en: "Build a program that reads a student grade and prints passed or needs review.",
      inputAr: "رقم يمثل الدرجة.",
      inputEn: "A number representing the grade.",
      outputAr: "رسالة تعتمد على شرط if.",
      outputEn: "A message based on an if condition."
    }
  };
  const task = tasks[language] || tasks.html;

  return {
    title: ar ? "تدريب" : "Practice",
    explanation: ar ? `المطلوب: ${task.ar}` : `Task: ${task.en}`,
    code: "",
    files: {},
    tips: ar
      ? [
          `المدخلات: ${task.inputAr}`,
          `المخرجات: ${task.outputAr}`,
          "حدد العناصر أو المتغيرات قبل كتابة الكود.",
          "اكتب الخطوات بالترتيب: قراءة البيانات، تنفيذ الشرط، عرض النتيجة.",
          "اختبر حالة صحيحة وحالة خطأ قبل اعتبار التدريب منتهيا."
        ]
      : [
          `Input: ${task.inputEn}`,
          `Output: ${task.outputEn}`,
          "Identify the elements or variables before writing code.",
          "Order the steps: read data, apply condition, show result.",
          "Test a valid case and an invalid case before finishing."
        ]
  };
}

function buildLocalGeneratedExample(language, ar) {
  const stamp = Date.now() % 1000;
  if (language === "php") {
    const files = {
      "index.php": `<?php
$title = "PHP Lab ${stamp}";
$skills = ["HTML", "CSS", "JavaScript", "PHP"];
?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <main class="panel">
      <h1><?php echo htmlspecialchars($title); ?></h1>
      <ul>
        <?php foreach ($skills as $skill): ?>
          <li><?php echo htmlspecialchars($skill); ?></li>
        <?php endforeach; ?>
      </ul>
      <p id="status">PHP ready</p>
    </main>
    <script src="script.js"></script>
  </body>
</html>`,
      "style.css": `body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #05070d; color: #eefcff; font-family: Arial, sans-serif; }
.panel { width: min(560px, 90vw); border: 1px solid #00e5ff; border-radius: 8px; padding: 28px; box-shadow: 0 0 36px rgba(0, 229, 255, .24); }
li { color: #b7ff00; margin: 8px 0; }`,
      "script.js": `const status = document.getElementById("status");
if (status) {
  status.textContent = "PHP + JS ready";
  console.log("example ${stamp}");
}`,
      "page.html": `<section class="panel">
  <h2>Extra Block</h2>
  <p>Injected HTML section ${stamp}</p>
</section>`
    };
    return {
      title: ar ? "مثال PHP جديد" : "New PHP example",
      explanation: ar ? "تم تجهيز مشروع PHP بملفات HTML وCSS وJavaScript." : "A PHP project with HTML, CSS, and JavaScript files is ready.",
      code: files["index.php"],
      files,
      tips: ar ? ["شغل الكود.", "غيّر قيمة داخل المصفوفة.", "راقب النتيجة."] : ["Run the code.", "Change one array value.", "Watch the result."]
    };
  }

  const examples = {
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Terminal Card ${stamp}</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #05070d; color: #eefcff; font-family: Arial, sans-serif; }
      .terminal { width: min(520px, 90vw); border: 1px solid #00e5ff; border-radius: 8px; padding: 24px; box-shadow: 0 0 32px rgba(0, 229, 255, .24); }
      strong { color: #b7ff00; }
    </style>
  </head>
  <body>
    <main class="terminal">
      <strong>$ html example ${stamp}</strong>
      <h1>Terminal Card</h1>
      <p>Semantic HTML with a clean visual block.</p>
    </main>
  </body>
</html>`,
    js: `<main>
  <h1>Command Counter ${stamp}</h1>
  <button id="run">Run</button>
  <p id="output">Waiting...</p>
</main>

<script>
  let count = 0;
  const output = document.getElementById("output");

  document.getElementById("run").addEventListener("click", () => {
    count += 1;
    output.textContent = "Command executed: " + count;
    console.log("run", count);
  });
</script>`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {${stamp % 9 + 1}, 4, 7, 10};
    int total = 0;

    for (int number : numbers) {
        total += number;
    }

    cout << "Total: " << total << endl;
    return 0;
}`
  };
  return {
    title: ar ? "مثال جديد" : "New example",
    explanation: ar ? "تم تجهيز مثال مختلف وقابل للتشغيل." : "A different runnable example is ready.",
    code: examples[language] || examples.html,
    files: {},
    tips: ar ? ["شغل المثال.", "غيّر قيمة واحدة.", "اقرأ النتيجة."] : ["Run the example.", "Change one value.", "Read the output."]
  };
}

function buildLocalTeachingResponse(language, text, ar) {
  const focus = (text.match(/Learning focus:\s*([^\n]+)/i)?.[1] || "").trim();
  const tips = [];
  getFocusedLearningTips(focus, ar).forEach((tip) => tips.push(tip));
  const add = (pattern, arTip, enTip) => {
    if (pattern.test(text)) tips.push(ar ? arTip : enTip);
  };
  add(/\bif\s*\(/, "if تستخدم لاتخاذ قرار: إذا تحقق الشرط ينفذ الكود داخلها.", "if is used for decisions: when the condition is true, the code inside runs.");
  add(/\b(for|while|foreach)\b/, "التكرار يستخدم لتنفيذ نفس الفكرة على أكثر من عنصر أو أكثر من مرة.", "Loops repeat the same idea for multiple items or multiple times.");
  add(/\bfunction\b|[a-zA-Z_]\w*\s*\([^)]*\)\s*\{/, "function تجمع خطوات باسم واحد حتى تعيد استخدامها بوضوح.", "A function groups steps under one name so you can reuse them clearly.");
  add(/\$[a-zA-Z_]\w*|\b(let|const|var)\b/, "المتغير يخزن قيمة مؤقتة يستخدمها البرنامج أثناء التشغيل.", "A variable stores a temporary value while the program runs.");
  add(/\[[\s\S]*\]|\barray\s*\(/, "المصفوفة تحفظ أكثر من قيمة تحت اسم واحد.", "An array stores multiple values under one name.");
  add(/id\s*=|getElementById/, "id يحدد عنصرا واحدا حتى يصل له CSS أو JavaScript مباشرة.", "id identifies one element so CSS or JavaScript can reach it directly.");
  add(/class\s*=|querySelector|\./, "class تستخدم لتنسيق أو اختيار مجموعة عناصر لها نفس الدور.", "class is used to style or select a group of elements with the same role.");
  add(/addEventListener|onclick/, "event يربط فعل المستخدم مثل الضغط بكود يتم تنفيذه.", "An event connects a user action, like a click, to code that runs.");

  if (!tips.length) {
    tips.push(ar ? "ابدأ بقراءة أسماء المتغيرات والعناصر؛ غالبا تخبرك بفكرة الكود." : "Start by reading variable and element names; they often reveal the code idea.");
    tips.push(ar ? "اسأل: ما الذي يدخل؟ ما الذي يخرج؟ وما الشرط الذي يغيّر النتيجة؟" : "Ask: what goes in, what comes out, and what condition changes the result?");
  }

  return {
    title: focus ? (ar ? `تعلم ${focus}` : `Learn ${focus}`) : (ar ? "تعلم المفاهيم" : "Learn the concepts"),
    explanation: ar
      ? (focus ? `ركز على ${focus} داخل كود ${language}. اقرأ مكانها، ثم جرّب تغييرها وشغّل الكود.` : `هذا تدريب سريع على قراءة كود ${language}. اقرأ الفكرة، ثم جرّب تغيير قيمة واحدة وشغّل الكود.`)
      : (focus ? `Focus on ${focus} inside the ${language} code. Find where it appears, then change it and run the code.` : `This is a quick practice for reading ${language} code. Read the idea, then change one value and run it.`),
    code: "",
    files: {},
    tips: tips.slice(0, 6)
  };
}

function getFocusedLearningTips(focus, ar) {
  const key = String(focus || "").toLowerCase();
  const concepts = {
    if: [
      "if تستخدم لاتخاذ قرار: إذا كان الشرط true ينفذ الكود داخل الأقواس.",
      "غيّر قيمة الشرط وشغّل الكود لترى كيف تتغير النتيجة."
    ],
    tags: [
      "وسوم HTML تبني هيكل الصفحة مثل h1 للعناوين وp للفقرات وbutton للأزرار.",
      "كل وسم له دور، واختيار الوسم الصحيح يجعل الصفحة أوضح."
    ],
    id: [
      "id اسم فريد لعنصر واحد فقط داخل الصفحة.",
      "يستخدمه CSS أو JavaScript للوصول إلى عنصر محدد مباشرة."
    ],
    class: [
      "class اسم مشترك يمكن وضعه على أكثر من عنصر.",
      "يستخدم غالبا للتنسيق أو لاختيار مجموعة عناصر لها نفس الشكل أو الدور."
    ],
    name: [
      "name يستخدم كثيرا داخل النماذج لإرسال قيمة الحقل إلى PHP أو السيرفر.",
      "إذا تغيّر name، يتغير الاسم الذي تقرأ منه البيانات لاحقا."
    ],
    function: [
      "function تجمع أوامر تحت اسم واحد حتى تستدعيها عند الحاجة.",
      "ابحث عن اسم الدالة ثم ابحث أين تم استدعاؤها."
    ],
    variable: [
      "المتغير يخزن قيمة يمكن استخدامها أو تغييرها أثناء التشغيل.",
      "اسأل دائما: ما القيمة التي يحملها هذا المتغير الآن؟"
    ],
    event: [
      "event يعني حدثا من المستخدم مثل click أو input.",
      "الكود داخل الحدث لا يعمل إلا عندما يحدث الفعل المرتبط به."
    ],
    dom: [
      "DOM هو طريقة JavaScript للوصول إلى عناصر HTML وتعديلها.",
      "getElementById يبحث عن عنصر، ثم تستطيع تغيير نصه أو شكله."
    ],
    array: [
      "array تحفظ أكثر من قيمة داخل اسم واحد.",
      "تستخدمها عندما يكون عندك قائمة مثل أسماء أو درجات أو منتجات."
    ],
    loop: [
      "loop يكرر نفس الخطوة أكثر من مرة.",
      "استخدمه عندما تريد المرور على عناصر قائمة أو تنفيذ عداد."
    ],
    selector: [
      "selector في CSS يحدد أي عنصر سيتم تنسيقه.",
      "النقطة تعني class، والرمز # يعني id."
    ],
    hover: [
      ":hover يطبق تنسيقا عندما يمر المستخدم فوق العنصر.",
      "استخدمه للأزرار والبطاقات حتى يشعر المستخدم بالتفاعل."
    ],
    color: [
      "color يغير لون النص، وbackground يغير لون الخلفية.",
      "انتبه للتباين حتى يكون النص مريحا للقراءة."
    ],
    display: [
      "display يحدد طريقة ظهور العنصر وترتيب داخله.",
      "grid وflex يساعدان في بناء تقسيمات منظمة ومتجاوبة."
    ],
    grid: [
      "grid يستخدم لتقسيم الواجهة إلى صفوف وأعمدة.",
      "مفيد للبطاقات واللوحات التي تحتاج ترتيب واضح."
    ],
    flex: [
      "flex يستخدم لترتيب العناصر في اتجاه واحد مع تحكم بالمسافات.",
      "مفيد للأزرار، القوائم، والعناصر الصغيرة داخل السطر."
    ],
    echo: [
      "echo في PHP يطبع نصا أو نتيجة إلى الصفحة.",
      "إذا طبعت HTML عن طريق echo سيظهر داخل المعاينة كجزء من الصفحة."
    ],
    post: [
      "POST يحمل بيانات النموذج بعد الإرسال.",
      "اقرأه بحذر واستخدم فحص وتنظيف قبل عرض البيانات."
    ],
    get: [
      "GET يحمل بيانات ظاهرة في رابط الصفحة.",
      "استخدمه للبحث أو الفلاتر، ولا تضع فيه بيانات حساسة."
    ],
    htmlspecialchars: [
      "htmlspecialchars يحمي الصفحة عند عرض نص كتبه المستخدم.",
      "يحوّل الرموز الخطرة إلى نص عادي بدل تنفيذها كـ HTML."
    ],
    main: [
      "main هي نقطة بداية تشغيل برنامج C++.",
      "أي برنامج C++ يحتاج main حتى يعرف من أين يبدأ التنفيذ."
    ],
    cout: [
      "cout يطبع نصا أو قيمة في مخرجات C++.",
      "استخدمه لترى نتيجة الحساب أو حالة المتغير."
    ],
    cin: [
      "cin يقرأ قيمة يدخلها المستخدم في C++.",
      "بعد القراءة خزّن القيمة في متغير ثم استخدمها في الشرط أو الحساب."
    ]
  };
  const englishConcepts = {
    if: ["if makes a decision: when the condition is true, the code inside runs.", "Change the condition value and run the code to see the result change."],
    tags: ["HTML tags build the page structure, such as h1 for headings, p for paragraphs, and button for buttons.", "Each tag has a role; choosing the right tag makes the page clearer."],
    id: ["id is a unique name for one element only.", "CSS or JavaScript uses it to reach one specific element directly."],
    class: ["class is a shared name that can be used on many elements.", "It is usually used to style or select a group of similar elements."],
    name: ["name is often used in forms to send a field value to PHP or the server.", "If name changes, the value must be read using the new name."],
    function: ["A function groups commands under one name.", "Find the function name, then find where it is called."],
    variable: ["A variable stores a value that can be used or changed while the program runs.", "Always ask: what value does this variable hold now?"],
    event: ["An event is a user action like click or input.", "The code inside the event runs only when that action happens."],
    dom: ["DOM is how JavaScript reaches and changes HTML elements.", "getElementById finds an element so you can change its text or style."],
    array: ["An array stores multiple values under one name.", "Use it for lists such as names, grades, or products."],
    loop: ["A loop repeats the same step more than once.", "Use it to go through list items or build a counter."],
    selector: ["A CSS selector decides which element gets styled.", "A dot means class, and # means id."],
    hover: [":hover applies styling when the pointer is over an element.", "Use it for buttons and cards to show interaction."],
    color: ["color changes text color, and background changes the background.", "Watch contrast so text stays readable."],
    display: ["display controls how an element and its children are laid out.", "grid and flex help build organized responsive layouts."],
    grid: ["grid divides a layout into rows and columns.", "It is useful for cards and panels that need clear structure."],
    flex: ["flex arranges elements in one direction with spacing control.", "It is useful for buttons, menus, and small inline groups."],
    echo: ["echo prints text or a result into the PHP response.", "If it prints HTML, it appears in the preview as part of the page."],
    post: ["POST carries form data after submission.", "Read it carefully and validate or escape before displaying data."],
    get: ["GET carries data visible in the page URL.", "Use it for search or filters, not sensitive data."],
    htmlspecialchars: ["htmlspecialchars protects the page when showing user text.", "It turns dangerous symbols into normal text instead of executable HTML."],
    main: ["main is the starting point of a C++ program.", "Every C++ program needs main so execution knows where to begin."],
    cout: ["cout prints text or values in C++ output.", "Use it to see calculation results or variable state."],
    cin: ["cin reads a value entered by the user in C++.", "Store the value in a variable, then use it in a condition or calculation."]
  };
  return ar ? (concepts[key] || []) : (englishConcepts[key] || []);
}

function extractResponseText(result) {
  if (result.output_text) return result.output_text;
  const parts = [];
  for (const item of result.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) parts.push(content.text);
    }
  }
  return parts.join("\n");
}

function tryParseJsonRobust(raw) {
  if (!raw) return null;
  if (typeof raw !== "string") return raw;

  const cleaned = raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (_) {
    const first = cleaned.indexOf("{");
    const last = cleaned.lastIndexOf("}");
    if (first === -1 || last === -1 || last <= first) return null;

    try {
      return JSON.parse(cleaned.slice(first, last + 1));
    } catch (_) {
      return null;
    }
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
