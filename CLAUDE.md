# Fresh Puls Solution — fp-solution.de

Voice-Agent-Reseller-Website für Thomas Luderer (Forchheim). Live auf Netlify. Repo: `aleksaai/fresh-puls`.

## Team Context (lies das, wenn du Marcus bist)

Dieser Repo ist ein **Client-Projekt** im Aleksa-AI-Team-System. Für Team-Kontext, Agent-Persönlichkeiten, Wiki und Cross-Project-Lernen lies:

- `/Users/destinypraktika/Desktop/claude-team/CLAUDE.md` — Team-Office-Architektur
- `/Users/destinypraktika/Desktop/claude-team/ai-team/projects/fresh-puls/SUMMARY.md` — Was dieses Projekt ist
- `/Users/destinypraktika/Desktop/claude-team/ai-team/projects/fresh-puls/COMPONENTS.md` — Wiederverwendbare Patterns aus diesem Build
- `/Users/destinypraktika/Desktop/claude-team/ai-team/projects/fresh-puls/LESSONS.md` — Was wir gelernt haben

## Quick Facts

- **Stack:** Vite + React 18 + TS + Tailwind + Motion + Supabase Edge Functions + Retell Web SDK
- **Live-URL:** https://fp-solution.de
- **Netlify-Failover-URL:** https://fresh-puls.netlify.app — funktioniert immer, auch wenn DNS bei IONOS kaputt ist (siehe Outage 2026-05-05). Bei Custom-Domain-Problemen kann der Kunde temporär diese URL nutzen.
- **Voice Agent Nummer (Sophia):** +49 227 148 12992 → siehe `src/config/voice-agent.ts`
- **Deploy:** Netlify (auto-deploy on `git push origin main`)
- **Uptime-Monitoring:** UptimeRobot (`fp-solution.de`, 5-Min-Interval, Email-Alert an info@aleksa.ai) — eingerichtet 2026-05-05
- **DNS:** IONOS. Bei Site-Outage zuerst `dig +short fp-solution.de A` prüfen — wenn leer, sind die A/CNAME-Records weg. Standard-Netlify-Setup: A apex `75.2.60.5`, CNAME www `fresh-puls.netlify.app`.
- **Sekret-Home:** Supabase Secrets (Retell, etc) — niemals lokale `.env` Dateien

## Starten

```bash
npm install
npm run dev  # läuft auf :5200 per Claude Code launch.json, sonst :5173
```

## Wichtig beim Bearbeiten

- **Content-Änderungen:** `src/config/content.ts` — alle Texte liegen dort zentral
- **Voice-Agent-Nummer ändern:** nur `src/config/voice-agent.ts`, nicht durch JSX-Suchen
- **Voice-Picker-Page (`/stimmen`):** Daten in `src/config/voices.ts`, Audio in `public/audio/voices/{id}.mp3`. Re-Gen via `./scripts/generate-voice-samples.sh` — nutzt die `tts-bridge` Edge Function, kein lokaler ElevenLabs-Key nötig.
- **Neue Bilder:** Nanobanana Pro, immer mit "no text/captions", in `public/images/`
- **Mobile:** responsive von Anfang an (`p-6 sm:p-8 lg:p-12`)

## Routes (Stand 2026-05-09)

| Route | Zweck |
|---|---|
| `/` | Landing |
| `/b2b-call-service`, `/b2b-marketing`, `/ki-voice-agents` | Service-Detail-Pages |
| `/stimmen` | **Voice-Picker** — 10 DE ElevenLabs-Stimmen als MP3-Samples (`eleven_v3` + voice-eigene Settings). Sales-Tool für Voice-Agent-Interessenten. |
| `/ueber-uns`, `/partner`, `/faq` | Standard |
| `/impressum`, `/datenschutz` | Legal |

Bei Fragen oder neuen Tasks: `/marcus` aufrufen — er liest diese Datei + die Karteikarte und ist sofort drin.
