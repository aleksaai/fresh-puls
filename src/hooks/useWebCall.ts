import { useState, useRef, useCallback } from "react"
import { RetellWebClient } from "retell-client-js-sdk"
import { VOICE_AGENT } from "../config/voice-agent"

const SUPABASE_URL = "https://znltfcxpngtztiwbcamm.supabase.co/functions/v1/retell-mcp-server"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpubHRmY3hwbmd0enRpd2JjYW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NTk4NTksImV4cCI6MjA1NTIzNTg1OX0.depMJBa6NYlSV9t-gNJliYOO8LjxsVb2gJ0DFmskYUM"

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
      const res = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ action: "create_web_call", agent_id: VOICE_AGENT.agentId }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || `Server error ${res.status}`)
      }

      const result = await res.json()
      const access_token = result.data?.access_token
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
