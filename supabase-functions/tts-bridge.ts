// =============================================================================
// tts-bridge — Stateless ElevenLabs Text-to-Speech proxy
// =============================================================================
// Why: existing elevenlabs-bridge has no TTS action. This adds it as a
// separate, single-purpose function so we don't risk breaking the main bridge.
//
// Usage (POST):
//   POST https://znltfcxpngtztiwbcamm.supabase.co/functions/v1/tts-bridge
//   Headers: Authorization: Bearer <SUPABASE_ANON_KEY>
//   Body: { "voice_id": "...", "text": "...", "model_id": "eleven_v3" }
//   → returns audio/mpeg binary on 200, JSON error on 4xx/5xx.
//
// ElevenLabs API key is read from Supabase Secret `ELEVENLABS_API_KEY`.
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

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  if (req.method !== "POST") {
    return jsonError(405, "Use POST")
  }

  const apiKey = Deno.env.get("ELEVENLABS_API_KEY")
  if (!apiKey) return jsonError(500, "ELEVENLABS_API_KEY secret not configured")

  let body: { voice_id?: string; text?: string; model_id?: string; voice_settings?: unknown }
  try {
    body = await req.json()
  } catch {
    return jsonError(400, "Invalid JSON body")
  }

  const { voice_id, text } = body
  const model_id = body.model_id || "eleven_v3"
  const voice_settings = body.voice_settings || {
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.0,
    use_speaker_boost: true,
  }

  if (!voice_id) return jsonError(400, "Missing: voice_id")
  if (!text) return jsonError(400, "Missing: text")

  const upstream = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({ text, model_id, voice_settings }),
    },
  )

  if (!upstream.ok) {
    const errText = await upstream.text()
    return jsonError(upstream.status, `ElevenLabs ${upstream.status}: ${errText}`)
  }

  const audioBuf = await upstream.arrayBuffer()
  return new Response(audioBuf, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(audioBuf.byteLength),
      ...corsHeaders,
    },
  })
})
