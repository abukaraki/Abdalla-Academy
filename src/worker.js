const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/compile") {
      if (request.method === "OPTIONS") {
        return new Response(null, { headers: CORS_HEADERS });
      }
      if (request.method !== "POST") {
        return json({ error: "Method not allowed." }, 405);
      }
      return compileCode(request, env);
    }

    if (url.pathname === "/api/ai") {
      if (request.method === "OPTIONS") {
        return new Response(null, { headers: CORS_HEADERS });
      }
      if (request.method !== "POST") {
        return json({ error: "Method not allowed." }, 405);
      }
      return runAiAssistant(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

const LANGUAGE_IDS = {
  cpp: [105, 54, 53],
  php: [98, 68]
};

async function compileCode(request, env) {
  try {
    const body = await request.json();
    const language = String(body.language || "").toLowerCase();
    const languageIds = LANGUAGE_IDS[language];
    if (!languageIds) {
      return json({ error: "Only PHP and C++ are enabled." }, 400);
    }

    const sourceCode = String(body.code || "").slice(0, 20000);
    if (!sourceCode.trim()) {
      return json({ error: "Code is empty." }, 400);
    }

    const result = await judge0Submit(env, languageIds, sourceCode, String(body.stdin || "").slice(0, 8000));

    return json({
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      compile_output: result.compile_output || "",
      message: result.message || "",
      status: result.status || null
    });
  } catch (error) {
    return json({ error: error.message || "Compiler API failed." }, 500);
  }
}

async function judge0Submit(env, languageIds, sourceCode, stdin) {
  const baseUrl = env.JUDGE0_URL || "https://ce.judge0.com";
  const token = env.JUDGE0_TOKEN || "";
  let lastError = "";

  for (const languageId of languageIds) {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "X-Auth-Token": token } : {})
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: sourceCode,
        stdin
      })
    });
    const result = await response.json();
    if (response.ok && !result.error) return result;
    lastError = result.error || result.message || `Compiler API error (${response.status}).`;
  }

  throw new Error(lastError || "Compiler API error.");
}

async function runAiAssistant(request, env) {
  try {
    const body = await request.json();
    const action = normalizeAction(body.action);
    const language = String(body.language || "html").toLowerCase().slice(0, 20);
    const uiLanguage = String(body.ui_language || "ar").toLowerCase() === "en" ? "English" : "Arabic";
    const code = String(body.code || "").slice(0, 20000);
    const message = String(body.message || "").slice(0, 4000);
    if (action !== "chat" && !code.trim()) {
      return json({ error: "Code is empty." }, 400);
    }
    if (action === "chat" && !message.trim()) {
      return json({ error: "Message is empty." }, 400);
    }
    if (!env.OPENAI_API_KEY) {
      return json(buildLocalAiResponse(action, language, uiLanguage, action === "chat" ? message : code));
    }

    const model = env.OPENAI_MODEL || "gpt-4.1-mini";
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        instructions: [
          "You are the Abdalla Academy compiler assistant.",
          "Answer only for learning and coding help.",
          "Be direct, practical, and beginner-friendly.",
          "Do not solve the whole task for the learner. Point to the problem, explain why it happens, and give ordered hints so the learner can fix it.",
          "For compiler help actions, keep the code field empty. Do not return a full corrected solution.",
          "Return valid JSON matching the schema.",
          `Write the explanation and tips in ${uiLanguage}.`
        ].join(" "),
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: buildAiPrompt(action, language, action === "chat" ? message : code)
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
                tips: {
                  type: "array",
                  items: { type: "string" }
                }
              },
              required: ["title", "explanation", "code", "tips"]
            }
          }
        }
      })
    });

    const result = await response.json();
    if (!response.ok) {
      return json({ error: result.error?.message || result.message || "AI request failed." }, response.status);
    }

    const text = extractResponseText(result);
    const parsed = JSON.parse(text);
    return json({
      title: String(parsed.title || "AI"),
      explanation: String(parsed.explanation || ""),
      code: String(parsed.code || ""),
      tips: Array.isArray(parsed.tips) ? parsed.tips.map(String).slice(0, 6) : []
    });
  } catch (error) {
    return json({ error: error.message || "AI failed." }, 500);
  }
}

function normalizeAction(action) {
  const value = String(action || "explain").toLowerCase();
  return ["explain", "fix", "improve", "example", "chat"].includes(value) ? value : "explain";
}

function buildAiPrompt(action, language, code) {
  const tasks = {
    explain: "Scan the code. Name the important tags/functions/ids/names/classes and point out suspicious lines. Do not rewrite the code.",
    fix: "Find the likely mistakes. For each mistake, mention the line/section, why it is wrong, and one hint to fix it. Do not return corrected code.",
    improve: "Give learning hints for structure, readability, accessibility, and debugging. Do not return rewritten code.",
    example: "Create a small practice challenge related to this code with steps the learner should try. Do not provide the final solution.",
    chat: "Answer this message only if it is about programming, web development, compilers, debugging, code structure, or learning code. If it is not programming-related, politely say you can only help with programming. Keep code empty unless a short example is necessary."
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
    "Return JSON with title, explanation, code, and tips. The code field must be an empty string for compiler help actions.",
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
    tips: tips.slice(0, 6)
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

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
