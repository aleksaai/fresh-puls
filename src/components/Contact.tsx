import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"
import { COMPANY } from "../config/content"

const CALENDAR_DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
const BOOKED_DAYS = [3, 7, 11, 15, 19, 22, 26]
const AVAILABLE_DAYS = [4, 8, 10, 12, 16, 17, 18, 23, 24, 25, 29, 30]

function DecorativeCalendar() {
  const today = new Date()
  const month = today.toLocaleString("de-DE", { month: "long" })
  const year = today.getFullYear()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
  const offset = firstDay === 0 ? 6 : firstDay - 1
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()

  return (
    <div className="glass-card rounded-3xl p-4 sm:p-6 w-full">
      {/* Month header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-foreground text-lg capitalize">
          {month} {year}
        </h4>
        <div className="flex gap-1">
          <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground-subtle text-sm">&lsaquo;</div>
          <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground-subtle text-sm">&rsaquo;</div>
        </div>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {CALENDAR_DAYS.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-foreground-subtle py-1">{d}</div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`e-${i}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const isBooked = BOOKED_DAYS.includes(day)
          const isAvailable = AVAILABLE_DAYS.includes(day)
          return (
            <div
              key={day}
              className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                isBooked
                  ? "bg-brand-500 text-white"
                  : isAvailable
                  ? "bg-brand-500/[0.08] text-brand-600"
                  : "text-foreground-subtle hover:bg-black/[0.03]"
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-brand-500" />
          <span className="text-xs text-foreground-muted">Gebucht</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-brand-500/[0.15]" />
          <span className="text-xs text-foreground-muted">Verfügbar</span>
        </div>
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

          {/* Right — Decorative Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <DecorativeCalendar />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
