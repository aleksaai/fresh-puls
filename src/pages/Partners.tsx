import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ExternalLink, Mail, Phone, ArrowRight, Handshake } from "lucide-react"
import { PARTNERS } from "../config/content"

export function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] top-[10%] right-[5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-300/[0.06] bottom-[15%] left-[10%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
            >
              Starke{" "}
              <span className="heading-accent text-5xl sm:text-6xl lg:text-7xl">Partner</span>
              <span className="text-brand-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed"
            >
              Gemeinsam mit unseren strategischen Partnern bieten wir L{"\u00F6"}sungen,
              die den gesamten Vertriebsprozess abdecken.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* Partner Cards */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.05] top-[10%] left-[-5%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Netzwerk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Unsere{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">Experten</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{partner.name}</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">{partner.description}</p>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <div className="glass w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <Handshake className="w-4 h-4 text-brand-500" />
                    </div>
                    <span className="font-medium text-foreground">{partner.contact}</span>
                  </div>

                  {"phone" in partner && (
                    <a
                      href={`tel:${(partner as { phone: string }).phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
                    >
                      <div className="glass w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-brand-500" />
                      </div>
                      <span>{(partner as { phone: string }).phone}</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${partner.email}`}
                    className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <div className="glass w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-500" />
                    </div>
                    <span>{partner.email}</span>
                  </a>

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <div className="glass w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <ExternalLink className="w-4 h-4 text-brand-500" />
                    </div>
                    <span>{partner.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Werden Sie Partner CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="glow-orb w-[600px] h-[400px] bg-brand-500/[0.06] bottom-[0%] right-[20%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Werden Sie Partner
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Sie bieten eine Dienstleistung, die den B2B-Vertrieb st{"\u00E4"}rkt?
              Lassen Sie uns gemeinsam Mehrwert schaffen.
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
    </>
  )
}
