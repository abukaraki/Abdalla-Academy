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
  return ["explain", "fix", "improve", "example", "chat", "generate_example"].includes(value) ? value : "explain";
}

function buildAiPrompt(action, language, code) {
  const tasks = {
    explain: "Scan the code and runtime output. Name the important tags/functions/ids/names/classes, then point out suspicious lines. Do not rewrite the code.",
    fix: "Use the code and runtime output to find likely mistakes. For each mistake, mention the file/line/section, why it is wrong, and one hint to fix it. Do not return corrected code.",
    improve: "Give learning hints for structure, readability, accessibility, debugging, and how to test the next step. Do not return rewritten code.",
    example: "Create a small practice challenge related to this code with steps the learner should try. Do not provide the final solution.",
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
          title: ar ? "برمجة فقط" : "Programming only",
          explanation: ar ? "هذا المساعد مخصص للأسئلة البرمجية فقط." : "This assistant is only for programming questions.",
          code: "",
          tips: []
        };
  }

  if (action === "generate_example") {
    return buildLocalGeneratedExample(language, ar);
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
    example: ar ? "تدريب" : "Practice"
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
