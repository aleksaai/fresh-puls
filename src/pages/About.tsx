import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { Target, BarChart3, Lightbulb, ArrowRight } from "lucide-react"
import { COMPANY } from "../config/content"

const VALUES = [
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description:
      "Jede Maßnahme wird an messbaren Ergebnissen gemessen. Wir liefern Leads, Termine und Umsatz — keine leeren Versprechen.",
  },
  {
    icon: BarChart3,
    title: "Transparent",
    description:
      "Regelmäßige Reports mit klaren KPIs. Du weißt jederzeit, was wir tun, was es bringt und wo wir optimieren.",
  },
  {
    icon: Lightbulb,
    title: "Innovativ",
    description:
      "Wir setzen auf modernste KI-Technologie und datengetriebene Strategien, um deinem Vertrieb einen echten Vorsprung zu geben.",
  },
] as const

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[10%] left-[5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.06] bottom-[10%] right-[15%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                {"\u00DC"}ber uns
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
            >
              Ihr Partner f{"\u00FC"}r{" "}
              <span className="heading-accent text-5xl sm:text-6xl lg:text-7xl">Wachstum</span>
              <span className="text-brand-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed"
            >
              {COMPANY.name} aus Forchheim — B2B-Vertrieb, der wirklich funktioniert.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* About Thomas + Company */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.05] top-[20%] right-[-10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Photo */}
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.10)] max-w-sm">
                <img
                  src="/images/thomas-luderer.jpg"
                  alt="Thomas Luderer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-brand-500 rounded-full" />
                <span className="text-sm font-semibold text-brand-500 tracking-wider uppercase">
                  Gesch{"\u00E4"}ftsf{"\u00FC"}hrer
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Thomas Luderer
              </h2>

              <div className="space-y-5 text-lg text-foreground-muted leading-relaxed">
                <p>
                  {COMPANY.name} wurde mit einer klaren Mission gegr{"\u00FC"}ndet: B2B-Unternehmen dabei zu
                  helfen, planbar und nachhaltig zu wachsen. Thomas Luderer verbindet jahrelange
                  Vertriebserfahrung mit einem tiefen Verst{"\u00E4"}ndnis f{"\u00FC"}r die Herausforderungen
                  moderner Kundengewinnung.
                </p>
                <p>
                  Als Gesch{"\u00E4"}ftsf{"\u00FC"}hrer leitet er ein Team, das sich auf professionelle
                  Kaltakquise, datengetriebenes Marketing und den Einsatz von KI-Sprachassistenten
                  spezialisiert hat. Sein Ansatz: Jedes Unternehmen braucht einen Vertriebspartner,
                  der nicht nur Leads liefert, sondern echte Gesch{"\u00E4"}ftsbeziehungen aufbaut.
                </p>
                <p>
                  Von Forchheim aus betreut {COMPANY.name} Kunden in ganz Deutschland und
                  der DACH-Region — mit pers{"\u00F6"}nlicher Betreuung, transparenten Ergebnissen und
                  innovativen L{"\u00F6"}sungen, die den Unterschied machen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
                Unsere Werte
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Wof{"\u00FC"}r wir{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">stehen</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <div className="glass w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[600px] h-[400px] bg-brand-500/[0.06] bottom-[0%] left-[20%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-12 sm:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Bereit f{"\u00FC"}r den n{"\u00E4"}chsten Schritt?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Lernen Sie uns kennen und erfahren Sie, wie wir Ihren Vertrieb auf das n{"\u00E4"}chste Level bringen.
            </p>
            <Link
              to="/#contact"
              className="btn-glass-accent inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold"
            >
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
