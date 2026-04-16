import { motion } from "motion/react"
import { STEPS } from "../config/content"

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
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
              So arbeiten wir
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            In 3 Schritten zum{" "}
            <span className="heading-accent text-4xl sm:text-5xl lg:text-6xl">Erfolg</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="glass-card w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
