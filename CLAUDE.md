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
- **Voice Agent Nummer (Sophia):** +49 227 148 12992 → siehe `src/config/voice-agent.ts`
- **Deploy:** Netlify (auto-deploy on `git push origin main`)
- **Sekret-Home:** Supabase Secrets (Retell, etc) — niemals lokale `.env` Dateien

## Starten

```bash
npm install
npm run dev  # läuft auf :5200 per Claude Code launch.json, sonst :5173
```

## Wichtig beim Bearbeiten

- **Content-Änderungen:** `src/config/content.ts` — alle Texte liegen dort zentral
- **Voice-Agent-Nummer ändern:** nur `src/config/voice-agent.ts`, nicht durch JSX-Suchen
- **Neue Bilder:** Nanobanana Pro, immer mit "no text/captions", in `public/images/`
- **Mobile:** responsive von Anfang an (`p-6 sm:p-8 lg:p-12`)

Bei Fragen oder neuen Tasks: `/marcus` aufrufen — er liest diese Datei + die Karteikarte und ist sofort drin.
