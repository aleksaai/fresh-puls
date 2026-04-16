export const COMPANY = {
  name: "Fresh Puls Solution",
  tagline: "Marketing, das sich auszahlt.",
  subtitle: "Wir eröffnen die Gespräche, die deinen Umsatz steigern.",
  email: "info@fp-solution.de",
  phone: "+49 15563 035374",
  address: "Hainbrunnenstr. 31, 91301 Forchheim",
  owner: "Thomas Luderer",
  bookingUrl: "https://fp-solution.de/#bookCall",
} as const

export const SERVICES = [
  {
    id: "call-service",
    title: "B2B Call Service",
    description: "Wir übernehmen die Erstkontakte, Terminvereinbarung und Lead-Qualifizierung — damit dein Vertrieb sich auf den Abschluss konzentrieren kann.",
    features: ["Terminvereinbarung & Kaltakquise", "Lead-Qualifizierung", "Marktforschung & Adressqualifizierung", "Outbound-Telefonie"],
    icon: "phone",
    href: "/b2b-call-service",
  },
  {
    id: "marketing",
    title: "B2B Marketing",
    description: "Wir entwickeln und implementieren Strategien, die deine Marke stärken und qualifizierte Leads generieren.",
    features: ["Zielgruppenanalyse", "Kampagnen-Management", "Content-Strategie", "Performance-Tracking"],
    icon: "target",
    href: "/b2b-marketing",
  },
  {
    id: "voice-agents",
    title: "KI Voice Agents",
    description: "Intelligente Sprachassistenten die rund um die Uhr Anrufe entgegennehmen, Termine vereinbaren und Leads qualifizieren — vollautomatisch.",
    features: ["24/7 Erreichbarkeit", "Natürliche Gesprächsführung", "Automatische Terminbuchung", "CRM-Integration"],
    icon: "bot",
    href: "/ki-voice-agents",
  },
] as const

export const STATS = [
  { value: 5000, suffix: "+", label: "B2B Calls geführt" },
  { value: 1200, suffix: "+", label: "Leads generiert" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
  { value: 24, suffix: "/7", label: "KI-Erreichbarkeit" },
] as const

export const STEPS = [
  {
    number: "01",
    title: "Strategiegespräch",
    description: "Wir lernen dein Unternehmen, deine Ziele und deine Herausforderungen kennen, um einen maßgeschneiderten Plan zu erstellen.",
  },
  {
    number: "02",
    title: "Umsetzung & Start",
    description: "Wir beginnen mit der Arbeit — von der Marketing-Kampagne bis zur ersten Kontaktaufnahme durch unser Call-Team oder deine KI.",
  },
  {
    number: "03",
    title: "Ergebnisse & Wachstum",
    description: "Du erhältst regelmäßige Berichte über Leads, Termine und Umsatz. Wir optimieren kontinuierlich für maximalen ROI.",
  },
] as const

export const TESTIMONIALS = [
  {
    quote: "Die Zusammenarbeit mit FP Solution ist sehr empfehlenswert und unkompliziert. Die vereinbarten Leistungen wurden zeitgerecht umgesetzt. Ich war anfangs zwar sehr skeptisch, habe es aber gewagt und war mit dem Ergebnis positiv überrascht.",
    author: "Oliver F.",
    company: "tourly.at",
    companyUrl: "https://tourly.at/",
  },
] as const

export const PARTNERS = [
  {
    name: "von Drandorff Consulting",
    description: "Spezialist für datenbasiertes Google Ads Tracking und SEA-Optimierung mit über 280 erfolgreich betreuten Kunden.",
    contact: "Stefan Hoffmann",
    phone: "+49 151-29009202",
    email: "sh@von-drandorff-consulting.de",
    url: "https://von-drandorff-consulting.de/",
  },
  {
    name: "Aleksa AI",
    description: "KI-Infrastruktur und Voice Agent Entwicklung. Modernste Sprachassistenten für den B2B-Vertrieb.",
    contact: "Aleksa",
    email: "info@aleksa.ai",
    url: "https://aleksa.ai/",
  },
] as const
