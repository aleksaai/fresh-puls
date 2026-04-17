import { useEffect } from "react"
import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { COMPANY } from "../config/content"

function BookingCalendar() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "beratungstermin" })
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      })
    })()
  }, [])

  return (
    <div className="glass-card rounded-3xl p-2 sm:p-3 w-full overflow-hidden">
      <div className="rounded-2xl overflow-hidden bg-white h-[640px] sm:h-[720px]">
        <Cal
          namespace="beratungstermin"
          calLink="thomas-luderer-h07mqh/beratungstermin"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  )
}

const CONTACT_ITEMS = [
  { icon: Phone, label: "Telefon", text: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "E-Mail", text: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Adresse", text: COMPANY.address, href: undefined as string | undefined },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="glow-orb w-[700px] h-[500px] bg-brand-500/[0.05] bottom-[-10%] left-[30%]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
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
        </motion.div>

        {/* Contact info — horizontal cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACT_ITEMS.map(({ icon: Icon, label, text, href }, i) => {
            const inner = (
              <>
                <div className="glass w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-foreground-subtle uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="text-sm text-foreground mt-0.5 truncate">{text}</div>
                </div>
              </>
            )
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-black/[0.02] transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
                    {inner}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Cal.com embed — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <BookingCalendar />
        </motion.div>
      </div>
    </section>
  )
}
