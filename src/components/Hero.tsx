import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Ambient glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[10%] left-[5%]" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-300/[0.06] bottom-[10%] right-[10%]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-10"
          >
            <span className="text-sm font-medium text-foreground-muted">
              B2B Call Service · Marketing · KI Voice Agents
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
          >
            Marketing, das sich{" "}
            <span className="heading-accent text-5xl sm:text-6xl lg:text-8xl">
              auszahlt
            </span>
            <span className="text-brand-500">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-7 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed"
          >
            Wir eröffnen die Gespräche, die deinen Umsatz steigern.
            Effektiver B2B-Vertrieb mit professionellem Call Service,
            gezieltem Marketing und intelligenten KI-Sprachassistenten.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-glass-accent flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold"
            >
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="glass flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-medium text-foreground-muted hover:text-foreground transition-colors"
            >
              Unsere Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}
