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
    if (!env.OPENAI_API_KEY) {
      return json({ error: "OPENAI_API_KEY is not configured in Cloudflare." }, 501);
    }

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

    const parsed = JSON.parse(extractResponseText(result));
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
    explain: "Explain what the code does, name the important tags/functions/ids/names/classes, and point out possible problems. Do not rewrite the whole code unless needed.",
    fix: "Find mistakes and return a corrected version of the code. Keep the same intent.",
    improve: "Improve the code style, structure, readability, accessibility, and beginner clarity. Return an improved version.",
    example: "Create a stronger learning example in the same language, using the same topic when possible.",
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
    "Return JSON with title, explanation, code, and tips. For explain, code may be an empty string.",
    "Code:",
    code
  ].join("\n");
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
