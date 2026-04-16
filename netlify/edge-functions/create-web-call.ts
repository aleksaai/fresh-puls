export default async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  }

  if (req.method !== "POST") {
    return Response.json({ error: "POST only" }, { status: 405 })
  }

  const apiKey = Deno.env.get("RETELL_AI_API_KEY")
  if (!apiKey) {
    return Response.json({ error: "RETELL_AI_API_KEY not configured" }, { status: 500 })
  }

  try {
    const { agent_id } = await req.json()
    if (!agent_id) {
      return Response.json({ error: "Missing agent_id" }, { status: 400 })
    }

    const res = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id }),
    })

    const data = await res.json()

    if (!res.ok) {
      return Response.json({ error: data.error_message || "Retell API error" }, {
        status: res.status,
        headers: { "Access-Control-Allow-Origin": "*" },
      })
    }

    return Response.json(data, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
  } catch (err) {
    return Response.json({ error: String(err) }, {
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
    })
  }
}

export const config = { path: "/api/create-web-call" }
