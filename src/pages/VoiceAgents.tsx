import { motion } from "motion/react"
import { ArrowRight, CheckCircle, Phone, PhoneOff, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { VOICE_AGENT } from "../config/voice-agent"
import { useWebCall } from "../hooks/useWebCall"

const FEATURES = [
  {
    title: "24/7 Erreichbarkeit",
    description: "Kein Anruf geht verloren. Dein KI-Assistent nimmt rund um die Uhr Anrufe entgegen.",
  },
  {
    title: "Natürliche Gesprächsführung",
    description: "Modernste Sprachsynthese sorgt für ein Gesprächserlebnis, das sich menschlich anfühlt.",
  },
  {
    title: "Automatische Terminbuchung",
    description: "Leads werden qualifiziert und Termine direkt in deinen Kalender eingetragen.",
  },
  {
    title: "CRM-Integration",
    description: "Nahtlose Anbindung an dein CRM — alle Gesprächsdaten werden automatisch erfasst.",
  },
  {
    title: "Lead-Qualifizierung",
    description: "Der KI-Agent stellt die richtigen Fragen und bewertet Leads nach deinen Kriterien.",
  },
  {
    title: "Mehrsprachig",
    description: "Dein Voice Agent spricht Deutsch, Englisch und weitere Sprachen fließend.",
  },
]

const STEPS = [
  { number: "01", title: "Konfiguration", text: "Wir definieren Gesprächsflüsse, Tonalität und Qualifizierungskriterien." },
  { number: "02", title: "Integration", text: "Dein Voice Agent wird mit CRM, Kalender und Telefonie verbunden." },
  { number: "03", title: "Training", text: "Feintuning der Gesprächsführung anhand realer Szenarien und Feedback." },
  { number: "04", title: "Live-Betrieb", text: "Dein KI-Assistent geht live und bearbeitet Anrufe vollautomatisch." },
]

export function VoiceAgentsPage() {
  const { status, errorMsg, startCall, endCall, reset } = useWebCall()
  const isActive = status === "active"
  const isConnecting = status === "connecting"
  const isError = status === "error"

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[10%] left-[5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.05] bottom-[15%] right-[10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
              >
                <span className="text-sm font-medium text-foreground-muted">KI Voice Agents</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
              >
                Dein Telefon,{" "}
                <span className="heading-accent text-5xl sm:text-6xl lg:text-7xl">immer besetzt</span>
                <span className="text-brand-500">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-6 text-lg text-foreground-muted leading-relaxed max-w-xl"
              >
                Intelligente KI-Sprachassistenten, die rund um die Uhr Anrufe entgegennehmen,
                Termine vereinbaren und Leads qualifizieren — vollautomatisch und natürlich.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  className="btn-glass-accent inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold"
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rounded-3xl aspect-[4/3] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <img
                  src="/images/subpage-voice.png"
                  alt="KI Voice Agents"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.05] top-[20%] right-[-10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Vorteile
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              KI-Telefonie der{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">nächsten Generation</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-7"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed pl-8">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.04] top-[30%] left-[50%] -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                So starten wir
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Dein Voice Agent in{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">4 Schritten</span>
            </h2>
          </motion.div>

          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="text-center"
                >
                  <div className="glass-card w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-500">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed max-w-xs mx-auto">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sophia Call Widget */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.06] top-[10%] left-[-5%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                  Live testen
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Sprich jetzt mit{" "}
                <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">
                  {VOICE_AGENT.name}
                </span>
                <span className="text-brand-500">.</span>
              </h2>

              <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
                {VOICE_AGENT.name} ist unsere KI-Sprachassistentin. Ruf sie an und erlebe selbst,
                wie natürlich und professionell ein KI Voice Agent klingt — rund um die Uhr,
                ohne Wartezeit.
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="glass-card rounded-3xl p-10 w-full max-w-sm text-center">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className={`absolute inset-[-8px] rounded-full ${isActive ? "bg-green-500/20 animate-[pulse-glow_1.5s_ease-in-out_infinite]" : "bg-brand-500/10 animate-[pulse-glow_3s_ease-in-out_infinite]"}`} />
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center ${isActive ? "bg-gradient-to-br from-green-500 to-green-700" : "bg-gradient-to-br from-brand-500 to-brand-700"}`}>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{VOICE_AGENT.name}</h3>
                <p className="text-sm text-foreground-subtle mb-8">
                  {isActive ? "Gespräch läuft..." : isConnecting ? "Verbinde..." : "KI-Sprachassistentin"}
                </p>

                <div className="flex items-center justify-center gap-[3px] h-10 mb-8">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-[3px] rounded-full ${isActive ? "bg-green-500/50" : "bg-brand-500/30"}`}
                      style={{
                        height: "100%",
                        animation: isActive
                          ? `waveform ${0.4 + Math.random() * 0.4}s ease-in-out ${i * 0.03}s infinite`
                          : `waveform ${0.8 + Math.random() * 0.6}s ease-in-out ${i * 0.05}s infinite`,
                      }}
                    />
                  ))}
                </div>

                {isActive || isConnecting ? (
                  <button
                    onClick={endCall}
                    className="flex items-center justify-center gap-3 rounded-2xl py-4 text-lg font-semibold w-full bg-red-500 text-white hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Verbinde...
                      </>
                    ) : (
                      <>
                        <PhoneOff className="w-5 h-5" />
                        Auflegen
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={startCall}
                    className="btn-glass-accent flex items-center justify-center gap-3 rounded-2xl py-4 text-lg font-semibold w-full cursor-pointer"
                  >
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </button>
                )}

                {isError && (
                  <p className="mt-4 text-sm text-red-500 cursor-pointer" onClick={reset}>
                    {errorMsg || "Fehler"} — Erneut versuchen
                  </p>
                )}
                {!isError && (
                  <>
                    <p className="mt-4 text-sm text-foreground-subtle">{VOICE_AGENT.phoneFormatted}</p>
                    <p className="text-xs text-foreground-subtle/60 mt-1">{VOICE_AGENT.available} verfügbar</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[600px] h-[400px] bg-brand-500/[0.06] top-[20%] left-[30%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-12 sm:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
              Bereit für deinen eigenen
              <br />
              <span className="heading-accent text-4xl sm:text-5xl">KI-Assistenten</span>
              <span className="text-brand-500">?</span>
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Lass uns gemeinsam deinen Voice Agent konfigurieren — individuell auf dein
              Unternehmen zugeschnitten, einsatzbereit in wenigen Tagen.
            </p>
            <Link
              to="/#contact"
              className="btn-glass-accent inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold"
            >
              Jetzt Beratung buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
