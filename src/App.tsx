import { useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Lenis from "lenis"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { CallServicePage } from "./pages/CallService"
import { MarketingPage } from "./pages/Marketing"
import { VoiceAgentsPage } from "./pages/VoiceAgents"
import { StimmenPage } from "./pages/Stimmen"
import { AboutPage } from "./pages/About"
import { PartnersPage } from "./pages/Partners"
import { FAQPage } from "./pages/FAQ"
import { ImpressumPage } from "./pages/Impressum"
import { DatenschutzPage } from "./pages/Datenschutz"

function AppShell() {
  const lenisRef = useRef<Lenis | null>(null)
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Two-pass: first scroll quickly to get close, then re-scroll once layout
      // settles (motion-triggered children can grow the page after mount).
      const scrollToEl = () => {
        const el = document.getElementById(id)
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -80 })
        } else if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
      const t1 = setTimeout(scrollToEl, 120)
      const t2 = setTimeout(scrollToEl, 600)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/b2b-call-service" element={<CallServicePage />} />
        <Route path="/b2b-marketing" element={<MarketingPage />} />
        <Route path="/ki-voice-agents" element={<VoiceAgentsPage />} />
        <Route path="/stimmen" element={<StimmenPage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/partner" element={<PartnersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
