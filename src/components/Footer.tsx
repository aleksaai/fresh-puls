import { Link } from "react-router-dom"
import { Phone } from "lucide-react"
import { COMPANY } from "../config/content"
import { VOICE_AGENT } from "../config/voice-agent"

const FOOTER_LINKS = {
  Services: [
    { label: "B2B Call Service", href: "/b2b-call-service" },
    { label: "B2B Marketing", href: "/b2b-marketing" },
    { label: "KI Voice Agents", href: "/ki-voice-agents" },
  ],
  Unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Partner", href: "/partner" },
    { label: "FAQ", href: "/faq" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-5">
              <div className="h-9 w-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-[0_2px_8px_rgba(38,92,242,0.2)]">
                <Phone className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-foreground font-semibold text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
              B2B Call Service, Marketing & KI Voice Agents aus Forchheim.
            </p>
            <a
              href={`tel:${VOICE_AGENT.phone}`}
              className="text-sm text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              {VOICE_AGENT.phoneFormatted}
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="text-center sm:text-left">
              <h4 className="text-sm font-semibold text-foreground mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-foreground-subtle">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-foreground-subtle">
            {COMPANY.owner} · {COMPANY.address}
          </p>
        </div>
      </div>
    </footer>
  )
}
