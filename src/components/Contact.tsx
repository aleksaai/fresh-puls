import { useEffect } from "react"
import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { COMPANY } from "../config/content"

function BookingCalendar() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "beratungstermin" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <div className="glass-card rounded-3xl p-2 sm:p-4 w-full overflow-hidden">
      <div className="rounded-2xl overflow-hidden h-[640px] sm:h-[720px]">
        <Cal
          namespace="beratungstermin"
          calLink="thomas-luderer-h07mqh/beratungstermin"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="glow-orb w-[700px] h-[500px] bg-brand-500/[0.05] bottom-[-10%] left-[30%]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text + Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Kontakt
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bereit für mehr{" "}
              <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">Umsatz</span>
              <span className="text-brand-500">?</span>
            </h2>

            <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
              Buche jetzt einen kostenlosen Beratungstermin. Das Gespräch dauert etwa 30 Minuten
              und ist völlig unverbindlich.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, text: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
                { icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, text: COMPANY.address },
              ].map(({ icon: Icon, text, href }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  {href ? (
                    <a href={href} className="flex items-center gap-4 text-foreground-muted hover:text-foreground transition-colors">
                      <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <span>{text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-foreground-muted">
                      <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <span>{text}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Cal.com Booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <BookingCalendar />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
