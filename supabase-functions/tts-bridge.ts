// =============================================================================
// tts-bridge — ElevenLabs Text-to-Speech + Voice Info proxy
// =============================================================================
// Two endpoints:
//
// 1) POST {voice_id, text, model_id?, voice_settings?}
//    → audio/mpeg binary (TTS render)
//
// 2) POST {action: "get_voice", voice_id}
//    → JSON { name, category, labels, ... } (voice metadata)
//
// 3) POST {action: "list_voices"}
//    → JSON { voices: [...] } (all account-owned voices)
//
// ElevenLabs API key from Supabase Secret `ELEVENLABS_API_KEY`.
// =============================================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
}

function jsonError(status: number, message: string): Response {
  return new Response(JSON.stringify({ status: "error", message }), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  })
}

function jsonOk(data: unknown): Response {
  return new Response(JSON.stringify({ status: "success", data }), {
    headers: { "Content-Type": "application/json", ...corsHeaders },
  })
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders })
  if (req.method !== "POST") return jsonError(405, "Use POST")

  const apiKey = Deno.env.get("ELEVENLABS_API_KEY")
  if (!apiKey) return jsonError(500, "ELEVENLABS_API_KEY not configured")

  let body: Record<string, unknown>
  try { body = await req.json() } catch { return jsonError(400, "Invalid JSON") }

  const action = body.action as string | undefined

  // get_voice — returns metadata about a voice (name, category, labels)
  if (action === "get_voice") {
    const voice_id = body.voice_id as string
    if (!voice_id) return jsonError(400, "Missing: voice_id")
    const r = await fetch(`https://api.elevenlabs.io/v1/voices/${voice_id}`, {
      headers: { "xi-api-key": apiKey },
    })
    const text = await r.text()
    if (!r.ok) return jsonError(r.status, `ElevenLabs ${r.status}: ${text}`)
    return jsonOk(JSON.parse(text))
  }

  // list_voices — all account-owned voices
  if (action === "list_voices") {
    const r = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: { "xi-api-key": apiKey },
    })
    const text = await r.text()
    if (!r.ok) return jsonError(r.status, `ElevenLabs ${r.status}: ${text}`)
    return jsonOk(JSON.parse(text))
  }

  // Default: TTS render
  const voice_id = body.voice_id as string
  const text = body.text as string
  const model_id = (body.model_id as string) || "eleven_v3"
  const voice_settings = body.voice_settings || {
    stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true,
  }

  if (!voice_id) return jsonError(400, "Missing: voice_id")
  if (!text) return jsonError(400, "Missing: text")

  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, {
    method: "POST",
    headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
    body: JSON.stringify({ text, model_id, voice_settings }),
  })

  if (!r.ok) {
    const errText = await r.text()
    return jsonError(r.status, `ElevenLabs ${r.status}: ${errText}`)
  }

  const audioBuf = await r.arrayBuffer()
  return new Response(audioBuf, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(audioBuf.byteLength),
      ...corsHeaders,
    },
  })
})
