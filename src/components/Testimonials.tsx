import { motion } from "motion/react"
import { TESTIMONIALS } from "../config/content"

export function Testimonials() {
  const testimonial = TESTIMONIALS[0]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.04] top-[20%] right-[-10%]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-12 sm:p-16 lg:p-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-brand-500 rounded-full" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">
                Kundenstimme
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed font-medium mb-10">
              &bdquo;{testimonial.quote}&ldquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-500/[0.08] flex items-center justify-center">
                <span className="text-brand-500 font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <a
                  href={`https://${testimonial.company}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-500 hover:text-brand-600 transition-colors"
                >
                  {testimonial.company}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
