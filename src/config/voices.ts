// =============================================================================
// Voice Picker — Sales Tool für Fresh Puls Voice-Agent-Kunden
// =============================================================================
// 10 deutsche ElevenLabs-Stimmen zum Anhören. Kunden picken die Stimme die
// sie für ihren Voice Agent wollen.
//
// Sample-Satz (alle Stimmen sprechen denselben Text — Apples-to-Apples):
//   "Hallo, ich bin Ihr persönlicher KI-Assistent und freue mich darauf,
//    Sie heute bei Ihrem Anliegen zu unterstützen."
//
// Audio: pre-generierte MP3s in `public/audio/voices/{id}.mp3` (eleven_v3 TTS).
// Statisch — kein Live-API-Call, 0 Cent pro Visit, <100ms Playback.
//
// Generierung: ./scripts/generate-voice-samples.sh
// =============================================================================

export const SAMPLE_TEXT =
  "Hallo, ich bin Ihr persönlicher KI-Assistent und freue mich darauf, Sie heute bei Ihrem Anliegen zu unterstützen."

export type VoiceGender = "female" | "male"
export type VoiceAge = "young" | "middle_aged" | "old"

export interface Voice {
  id: string                  // slug for URL + filename, e.g. "susi"
  name: string                // display name, e.g. "Susi"
  voiceId: string             // ElevenLabs voice_id
  gender: VoiceGender
  age: VoiceAge
  description: string         // 1 short sentence, what makes this voice unique
  tags: string[]              // 2-3 short tags
  audioUrl: string            // /audio/voices/{id}.mp3
}

export const VOICES: Voice[] = [
  // ───────────────── Weibliche Stimmen ─────────────────
  {
    id: "susi",
    name: "Susi",
    voiceId: "v3V1d2rk6528UrLKRuy8",
    gender: "female",
    age: "young",
    description: "Warm, freundlich und professionell — der Allrounder für Service und Beratung.",
    tags: ["freundlich", "warm", "Service"],
    audioUrl: "/audio/voices/susi.mp3",
  },
  {
    id: "doreen",
    name: "Doreen",
    voiceId: "mDRP1h6KfUD1XAUJxqr0",
    gender: "female",
    age: "middle_aged",
    description: "Klar und souverän — bringt Erfahrung und Vertrauen in jedes Gespräch.",
    tags: ["souverän", "klar", "Beratung"],
    audioUrl: "/audio/voices/doreen.mp3",
  },
  {
    id: "ela",
    name: "Ela",
    voiceId: "NE7AIW5DoJ7lUosXV2KR",
    gender: "female",
    age: "young",
    description: "Lebendig und sympathisch — perfekt für moderne Marken und Sales.",
    tags: ["lebendig", "sympathisch", "Sales"],
    audioUrl: "/audio/voices/ela.mp3",
  },
  {
    id: "irene",
    name: "Irene",
    voiceId: "NkMe1eztMQReztnhYfeX",
    gender: "female",
    age: "middle_aged",
    description: "Ruhig und kompetent — passt zu Healthcare, Finanzen und Premium-Services.",
    tags: ["ruhig", "kompetent", "Premium"],
    audioUrl: "/audio/voices/irene.mp3",
  },
  {
    id: "berta",
    name: "Berta",
    voiceId: "CoFoB7a7PXA8RBsMHbua",
    gender: "female",
    age: "old",
    description: "Reif und herzlich — Stimme mit Erfahrung, Wärme und Gewicht.",
    tags: ["reif", "herzlich", "Autorität"],
    audioUrl: "/audio/voices/berta.mp3",
  },

  // ───────────────── Männliche Stimmen ─────────────────
  {
    id: "finn",
    name: "Finn",
    voiceId: "1J0wWp4zPQIvsK7Xwh34",
    gender: "male",
    age: "young",
    description: "Frisch und dynamisch — perfekt für Tech-Startups und moderne Marken.",
    tags: ["dynamisch", "frisch", "Tech"],
    audioUrl: "/audio/voices/finn.mp3",
  },
  {
    id: "felix",
    name: "Felix",
    voiceId: "MbbPUteESkJWr4IAaW35",
    gender: "male",
    age: "young",
    description: "Locker und nahbar — funktioniert in Service und B2C-Vertrieb.",
    tags: ["nahbar", "locker", "Service"],
    audioUrl: "/audio/voices/felix.mp3",
  },
  {
    id: "ben",
    name: "Ben",
    voiceId: "MMwckqU477oQxnAk1SgA",
    gender: "male",
    age: "young",
    description: "Klar und zugänglich — der Allrounder für Kundenkontakt und Beratung.",
    tags: ["klar", "zugänglich", "Beratung"],
    audioUrl: "/audio/voices/ben.mp3",
  },
  {
    id: "elias",
    name: "Elias",
    voiceId: "1h6gHcRvQugDNZgdAo9N",
    gender: "male",
    age: "middle_aged",
    description: "Professionell und seriös — der Klassiker für B2B und Consulting.",
    tags: ["seriös", "professionell", "B2B"],
    audioUrl: "/audio/voices/elias.mp3",
  },
  {
    id: "benjamin",
    name: "Benjamin",
    voiceId: "buUrS4YSeOZtlCKnzwkC",
    gender: "male",
    age: "middle_aged",
    description: "Tief und sonor — ideal für Premium-Marken und Voice-Branding.",
    tags: ["sonor", "premium", "Branding"],
    audioUrl: "/audio/voices/benjamin.mp3",
  },
]

export const FEMALE_VOICES = VOICES.filter((v) => v.gender === "female")
export const MALE_VOICES = VOICES.filter((v) => v.gender === "male")
