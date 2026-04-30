import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, Headphones, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { VoiceCard } from "../components/VoiceCard"
import { FEMALE_VOICES, MALE_VOICES, SAMPLE_TEXT } from "../config/voices"

export function StimmenPage() {
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pb-16 overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[5%] left-[-5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.05] bottom-[5%] right-[5%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6"
            >
              <Headphones className="w-4 h-4 text-brand-500" />
              <span className="text-sm font-medium text-foreground-muted">Stimmen-Galerie</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
            >
              Hör dir die Stimme an,{" "}
              <span className="heading-accent text-5xl sm:text-6xl lg:text-7xl">
                die für dich spricht
              </span>
              <span className="text-brand-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed"
            >
              Zehn deutsche KI-Stimmen — fünf weibliche, fünf männliche.
              Klick auf <span className="font-semibold text-foreground">Anhören</span>, vergleiche und
              entscheide selbst, welche Stimme zu deiner Marke passt.
            </motion.p>

            {/* Sample text card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass rounded-2xl px-6 py-5 mt-10 max-w-2xl mx-auto text-left"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-brand-500 mb-2">
                    Alle Stimmen sprechen denselben Text
                  </p>
                  <p className="text-base text-foreground-muted italic font-serif leading-relaxed">
                    „{SAMPLE_TEXT}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Female Voices */}
      <section className="relative py-12 sm:py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Weibliche Stimmen
            </h2>
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-medium text-foreground-subtle">
              {FEMALE_VOICES.length} Stimmen
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {FEMALE_VOICES.map((voice, i) => (
              <VoiceCard
                key={voice.id}
                voice={voice}
                index={i}
                isActive={activeVoiceId === voice.id}
                onPlay={(id) => setActiveVoiceId(id)}
                onStop={() => setActiveVoiceId(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Male Voices */}
      <section className="relative py-12 sm:py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Männliche Stimmen
            </h2>
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-medium text-foreground-subtle">
              {MALE_VOICES.length} Stimmen
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {MALE_VOICES.map((voice, i) => (
              <VoiceCard
                key={voice.id}
                voice={voice}
                index={i}
                isActive={activeVoiceId === voice.id}
                onPlay={(id) => setActiveVoiceId(id)}
                onStop={() => setActiveVoiceId(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.06] top-[20%] left-[10%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.05] bottom-[10%] right-[10%]" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Stimme gefunden?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
              Sag uns welche Stimme dich überzeugt hat — wir bauen deinen
              KI-Voice-Agent damit. Inkl. Konfiguration, Integration und Live-Betrieb.
            </p>
            <Link
              to="/#contact"
              className="btn-glass-accent inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold mt-8"
            >
              Termin vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
