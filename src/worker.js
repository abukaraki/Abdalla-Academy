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

    return env.ASSETS.fetch(request);
  }
};

const LANGUAGE_IDS = {
  cpp: 105,
  php: 98
};

async function compileCode(request, env) {
  try {
    const body = await request.json();
    const language = String(body.language || "").toLowerCase();
    const languageId = LANGUAGE_IDS[language];
    if (!languageId) {
      return json({ error: "Only PHP and C++ are enabled." }, 400);
    }

    const sourceCode = String(body.code || "").slice(0, 20000);
    if (!sourceCode.trim()) {
      return json({ error: "Code is empty." }, 400);
    }

    const baseUrl = env.JUDGE0_URL || "https://ce.judge0.com";
    const token = env.JUDGE0_TOKEN || "";
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "X-Auth-Token": token } : {})
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: sourceCode,
        stdin: String(body.stdin || "").slice(0, 8000)
      })
    });

    const result = await response.json();
    if (!response.ok) {
      return json({ error: result.error || result.message || "Compiler API error." }, response.status);
    }

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

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
