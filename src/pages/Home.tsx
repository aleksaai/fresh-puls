import { Hero } from "../components/Hero"
import { Services } from "../components/Services"
import { VoiceDemo } from "../components/VoiceDemo"
import { Process } from "../components/Process"
import { Contact } from "../components/Contact"

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VoiceDemo />
      <Process />
      <Contact />
    </>
  )
}
