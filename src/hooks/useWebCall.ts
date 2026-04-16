import { useState, useRef, useCallback } from "react"
import { RetellWebClient } from "retell-client-js-sdk"
import { VOICE_AGENT } from "../config/voice-agent"

export type CallStatus = "idle" | "connecting" | "active" | "ended"

export function useWebCall() {
  const [status, setStatus] = useState<CallStatus>("idle")
  const clientRef = useRef<RetellWebClient | null>(null)

  const startCall = useCallback(async () => {
    if (status === "connecting" || status === "active") return

    setStatus("connecting")

    try {
      const res = await fetch("/api/create-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent_id: VOICE_AGENT.agentId }),
      })

      if (!res.ok) {
        throw new Error("Failed to create web call")
      }

      const { access_token } = await res.json()

      const client = new RetellWebClient()
      clientRef.current = client

      client.on("call_started", () => setStatus("active"))
      client.on("call_ended", () => setStatus("ended"))
      client.on("error", () => setStatus("ended"))

      await client.startCall({ accessToken: access_token })
    } catch {
      setStatus("idle")
    }
  }, [status])

  const endCall = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.stopCall()
      clientRef.current = null
    }
    setStatus("idle")
  }, [])

  return { status, startCall, endCall }
}
