# cardfinder24.de

Affiliate-Landingpage für Kreditkarten. Next.js 14 + Tailwind, gebaut für Mobile-Traffic von TikTok/Instagram/YouTube.

## Starten

```bash
npm install
npm run dev
```

Öffnet auf `http://localhost:3000`.

## Was du selbst noch tun musst

### 1. Affiliate-URLs eintragen
Sobald du bei Financeads (oder dem jeweiligen Partner) freigeschaltet bist, trag die echten URLs in [`lib/cards.ts`](lib/cards.ts) ein — Feld `affiliateUrl` pro Karte.

### 2. Impressum mit echten Daten füllen
[`app/impressum/page.tsx`](app/impressum/page.tsx) — alle `[Platzhalter]` ersetzen oder Impressum-Service einbinden.

### 3. Datenschutz rechtlich prüfen
[`app/datenschutz/page.tsx`](app/datenschutz/page.tsx) — Vorlage ist da, vor Veröffentlichung über eRecht24-Generator oder Anwalt validieren.

### 4. Karten-Bilder (optional)
Die Karten haben aktuell SVG-Platzhalter in `public/cards/`. Wenn du echte Karten-Renderings willst, ersetze die SVGs durch PNGs gleichen Namens (`amex-payback.svg` → `amex-payback.png`) und passe `imagePath` in `lib/cards.ts` entsprechend an.

## Deployment auf Vercel

1. GitHub-Repo erstellen, Code pushen.
2. Auf [vercel.com](https://vercel.com) einloggen → "New Project" → Repo wählen → Deploy.
3. Domain verbinden: In Vercel "Domains" → `cardfinder24.de` hinzufügen → die zwei DNS-Einträge bei United Domains setzen (Vercel zeigt dir die genauen Werte).

## Deep-Link-Mechanismus (gegen TikTok In-App-Browser)

- [`lib/inAppBrowser.ts`](lib/inAppBrowser.ts) erkennt TikTok, Instagram, Facebook, Snapchat, LinkedIn, Pinterest.
- [`components/DeepLinkBanner.tsx`](components/DeepLinkBanner.tsx) zeigt bei Erkennung einen Banner mit "In Safari/Chrome öffnen"-Button.
- iOS: `x-safari-https://`-Schema. Android: Chrome-Intent-URL. Fallback: Inline-Anleitung.
- Affiliate-Klicks gehen über `/api/go/[card]` für sauberes Tracking + Server-Redirect.

## Test-Checkliste vor Launch

- [ ] `npm run build` läuft ohne Errors
- [ ] Mobile-Ansicht in Chrome DevTools (iPhone 14, Pixel 7) prüfen
- [ ] User-Agent auf TikTok setzen → DeepLinkBanner muss erscheinen
- [ ] Jeden CTA-Button antippen → muss zur Platzhalter-URL weiterleiten
- [ ] Impressum-Daten echt eingetragen
- [ ] Affiliate-URLs in `lib/cards.ts` echt eingetragen
- [ ] Lighthouse-Score ≥ 90 auf allen Achsen

## Phase 2 (später)

- `/selbststaendig`-Seite mit Finom für Selbstständige/Content-Creator
- Plausible oder Umami für privacy-friendly Analytics
- Blog-Sektion für SEO
