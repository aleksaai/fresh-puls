import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react"
import { COMPANY } from "../config/content"
import { VOICE_AGENT } from "../config/voice-agent"

const SERVICE_LINKS = [
  { label: "B2B Call Service", href: "/b2b-call-service" },
  { label: "B2B Marketing", href: "/b2b-marketing" },
  { label: "KI Voice Agents", href: "/ki-voice-agents" },
  { label: "Stimmen-Galerie", href: "/stimmen" },
]

const NAV_LINKS = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Partner", href: "/partner" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-[0_2px_8px_rgba(38,92,242,0.3)]">
                <Phone className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-foreground font-semibold text-lg tracking-tight">
                {COMPANY.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56"
                    >
                      <div className="glass rounded-xl py-2 shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                        {SERVICE_LINKS.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-black/[0.03] transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regular nav links */}
              {NAV_LINKS.map((link) =>
                link.href.startsWith("#") || link.href.includes("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${VOICE_AGENT.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-brand-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {VOICE_AGENT.phoneFormatted}
              </a>
              <Link
                to="/#contact"
                className="btn-glass-accent inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
              >
                Termin buchen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-foreground-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="pt-4 pb-2 border-t border-black/[0.06] mt-3 space-y-1">
                  <p className="px-3 py-1.5 text-xs font-semibold text-foreground-subtle uppercase tracking-wider">
                    Services
                  </p>
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground rounded-lg hover:bg-black/[0.03] transition-colors pl-6"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="h-px bg-black/[0.04] my-2" />
                  {NAV_LINKS.map((link) =>
                    link.href.startsWith("#") || link.href.includes("#") ? (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground rounded-lg hover:bg-black/[0.03] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground rounded-lg hover:bg-black/[0.03] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <Link
                    to="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-glass-accent flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold mt-3"
                  >
                    Termin buchen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
