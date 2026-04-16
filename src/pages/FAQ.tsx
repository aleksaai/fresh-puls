import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const FAQ_ITEMS = [
  {
    question: "Was kostet der B2B Call Service?",
    answer:
      "Die Preise hängen vom Umfang und den individuellen Anforderungen ab. Wir bieten ein kostenloses Erstgespräch an, in dem wir Ihre Situation analysieren und ein maßgeschneidertes Angebot erstellen.",
  },
  {
    question: "Wie schnell kann es losgehen?",
    answer:
      "In der Regel können wir innerhalb von 1–2 Wochen nach dem Strategiegespräch starten. Je nach Komplexität des Projekts kann die Einrichtungszeit variieren.",
  },
  {
    question: "Was ist ein KI Voice Agent?",
    answer:
      "Ein KI Voice Agent ist ein intelligenter Sprachassistent, der rund um die Uhr Anrufe entgegennimmt, Fragen beantwortet und Termine bucht. Er klingt natürlich und kann nahtlos in bestehende Systeme integriert werden.",
  },
  {
    question: "Kann ich den Voice Agent testen?",
    answer:
      "Ja, rufen Sie unsere Demo-Nummer an und sprechen Sie direkt mit Sophia, unserer KI-Sprachassistentin. So können Sie sich selbst von der Qualität überzeugen.",
  },
  {
    question: "Welche CRM-Systeme werden unterstützt?",
    answer:
      "Wir integrieren mit allen gängigen CRM-Systemen wie Salesforce, HubSpot, Pipedrive und weiteren. Falls Sie ein anderes System nutzen, finden wir gemeinsam eine Lösung.",
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer:
      "Nein, wir arbeiten mit flexiblen Vereinbarungen ohne lange Bindung. Unsere Leistung spricht für sich, deshalb setzen wir auf Zufriedenheit statt Vertragszwang.",
  },
]

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen bg-surface overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.06] top-[5%] right-[-5%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.05] bottom-[10%] left-[-5%]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Häufig gestellte{" "}
            <span className="heading-accent text-5xl sm:text-6xl">Fragen</span>
          </h1>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-foreground leading-snug">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-foreground-muted" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-foreground-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Noch Fragen?
          </h2>
          <p className="text-foreground-muted mb-8">
            Wir beraten Sie gerne persönlich und unverbindlich.
          </p>
          <Link
            to="/#contact"
            className="btn-glass-accent inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
