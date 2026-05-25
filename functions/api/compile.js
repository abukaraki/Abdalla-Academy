const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const language = String(body.language || "").toLowerCase();
    const languageIds = LANGUAGE_IDS[language];
    if (!languageIds) {
      return json({ error: "Only PHP and C++ are enabled on this endpoint." }, 400);
    }

    const sourceCode = String(body.code || "").slice(0, 20000);
    if (!sourceCode.trim()) {
      return json({ error: "Code is empty." }, 400);
    }

    const result = await judge0Submit(context.env, languageIds, sourceCode, String(body.stdin || "").slice(0, 8000));

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

const LANGUAGE_IDS = {
  cpp: [105, 54, 53],
  php: [98, 68]
};

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

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
