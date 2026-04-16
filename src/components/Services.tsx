import { motion } from "motion/react"
import { SERVICES } from "../config/content"

const SERVICE_IMAGES = [
  "/images/service-calls.png",
  "/images/service-marketing.png",
  "/images/service-voice.png",
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-brand-500/[0.05] top-[20%] right-[-10%]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="glass inline-flex items-center rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
              Was wir tun
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Drei Wege zu mehr{" "}
            <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">Umsatz</span>
          </h2>
        </motion.div>

        {/* Editorial service sections — alternating layout */}
        <div className="space-y-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-500 rounded-full" />
                  <span className="text-sm font-semibold text-brand-500 tracking-wider uppercase">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
                  {service.title}
                </h3>

                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      <span className="text-sm text-foreground-muted leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual side — service image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-3xl aspect-[4/3] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  <img
                    src={SERVICE_IMAGES[i]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
