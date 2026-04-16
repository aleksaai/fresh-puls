import { motion } from "motion/react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const FEATURES = [
  {
    title: "Zielgruppenanalyse",
    description: "Wir identifizieren deine idealen Kunden und entwickeln datenbasierte Buyer Personas.",
  },
  {
    title: "Kampagnen-Management",
    description: "Von der Planung bis zur Auswertung steuern wir deine Kampagnen über alle relevanten Kanäle.",
  },
  {
    title: "Content-Strategie",
    description: "Relevante Inhalte, die deine Expertise zeigen und Vertrauen bei Entscheidern aufbauen.",
  },
  {
    title: "Performance-Tracking",
    description: "Transparente Dashboards und regelmäßige Reports zeigen dir genau, was funktioniert.",
  },
  {
    title: "SEO & SEA",
    description: "Sichtbarkeit in Suchmaschinen — organisch und bezahlt, mit messbarem ROI.",
  },
  {
    title: "Social Media Marketing",
    description: "Gezielte B2B-Kampagnen auf LinkedIn, Facebook und weiteren Plattformen.",
  },
]

const STEPS = [
  { number: "01", title: "Analyse", text: "Wir analysieren dein Marktumfeld, deine Zielgruppe und den Wettbewerb." },
  { number: "02", title: "Strategie", text: "Wir entwickeln einen maßgeschneiderten Marketing-Plan mit klaren KPIs." },
  { number: "03", title: "Umsetzung", text: "Wir setzen die Kampagnen um und optimieren sie laufend." },
  { number: "04", title: "Wachstum", text: "Transparente Ergebnisse und skalierbare Prozesse für nachhaltiges Wachstum." },
]

export function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[10%] right-[5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.05] bottom-[15%] left-[10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
              >
                <span className="text-sm font-medium text-foreground-muted">B2B Marketing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
              >
                Strategien, die{" "}
                <span className="heading-accent text-5xl sm:text-6xl lg:text-7xl">Kunden bringen</span>
                <span className="text-brand-500">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-6 text-lg text-foreground-muted leading-relaxed max-w-xl"
              >
                Wir entwickeln und implementieren B2B-Marketing-Strategien, die deine Marke
                stärken, qualifizierte Leads generieren und deinen Umsatz nachhaltig steigern.
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
                  src="/images/subpage-marketing.png"
                  alt="B2B Marketing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.05] top-[20%] left-[-10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Unsere Leistungen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Dein Marketing,{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">neu gedacht</span>
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
                Unser Prozess
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Von der Analyse zum{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">Wachstum</span>
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

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[600px] h-[400px] bg-brand-500/[0.06] top-[20%] left-[30%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
              Bereit für Marketing, das{" "}
              <span className="heading-accent text-4xl sm:text-5xl">wirkt</span>
              <span className="text-brand-500">?</span>
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Lass uns gemeinsam eine Strategie entwickeln, die deine Zielgruppe erreicht
              und messbare Ergebnisse liefert.
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
