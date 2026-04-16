import { motion } from "motion/react"
import { Phone } from "lucide-react"
import { VOICE_AGENT } from "../config/voice-agent"

export function VoiceDemo() {
  return (
    <section id="voice-demo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.06] top-[10%] left-[-5%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-400/[0.04] bottom-[10%] right-[5%]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                KI Voice Agent
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Sprich mit{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">
                {VOICE_AGENT.name}
              </span>
              <span className="text-brand-500">.</span>
            </h2>

            <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
              {VOICE_AGENT.name} ist unsere KI-Sprachassistentin. Sie nimmt Anrufe entgegen,
              beantwortet Fragen, qualifiziert Leads und vereinbart Termine — rund um die Uhr,
              natürlich und professionell.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["24/7 erreichbar", "Natürliche Sprache", "Sofortige Antworten", "Termin-Buchung"].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  <span className="text-sm text-foreground-muted">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Call Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="glass-card rounded-3xl p-10 w-full max-w-sm text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-[-8px] rounded-full bg-brand-500/10 animate-[pulse-glow_3s_ease-in-out_infinite]" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{VOICE_AGENT.name}</h3>
              <p className="text-sm text-foreground-subtle mb-8">KI-Sprachassistentin</p>

              <div className="flex items-center justify-center gap-[3px] h-10 mb-8">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[3px] bg-brand-500/30 rounded-full"
                    style={{
                      height: "100%",
                      animation: `waveform ${0.8 + Math.random() * 0.6}s ease-in-out ${i * 0.05}s infinite`,
                    }}
                  />
                ))}
              </div>

              <a
                href={`tel:${VOICE_AGENT.phone}`}
                className="btn-glass-accent flex items-center justify-center gap-3 rounded-2xl py-4 text-lg font-semibold w-full"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>

              <p className="mt-4 text-sm text-foreground-subtle">{VOICE_AGENT.phoneFormatted}</p>
              <p className="text-xs text-foreground-subtle/60 mt-1">{VOICE_AGENT.available} verfügbar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
