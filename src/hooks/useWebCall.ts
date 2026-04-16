import { useState, useRef, useCallback } from "react"
import { RetellWebClient } from "retell-client-js-sdk"
import { VOICE_AGENT } from "../config/voice-agent"

export type CallStatus = "idle" | "connecting" | "active" | "ended" | "error"

export function useWebCall() {
  const [status, setStatus] = useState<CallStatus>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const clientRef = useRef<RetellWebClient | null>(null)

  const startCall = useCallback(async () => {
    if (status === "connecting" || status === "active") return

    setStatus("connecting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/create-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent_id: VOICE_AGENT.agentId }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `Server error ${res.status}`)
      }

      const { access_token } = await res.json()
      if (!access_token) throw new Error("No access token received")

      const client = new RetellWebClient()
      clientRef.current = client

      client.on("call_started", () => setStatus("active"))
      client.on("call_ended", () => {
        setStatus("idle")
        clientRef.current = null
      })
      client.on("error", (e) => {
        console.error("Retell error:", e)
        setStatus("error")
        setErrorMsg("Verbindung fehlgeschlagen")
        clientRef.current = null
      })

      await client.startCall({ accessToken: access_token })
    } catch (err) {
      console.error("Web call error:", err)
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Verbindung fehlgeschlagen")
    }
  }, [status])

  const endCall = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.stopCall()
      clientRef.current = null
    }
    setStatus("idle")
    setErrorMsg("")
  }, [])

  const reset = useCallback(() => {
    setStatus("idle")
    setErrorMsg("")
  }, [])

  return { status, errorMsg, startCall, endCall, reset }
}
