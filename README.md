# Kameamecha — site vitrine

Homepage (Écran A) reproduced from the Claude Design handoff (`Wireframe de contenu Kameamecha.dc.html` for copy/structure, `Maquette Kameamecha.dc.html` for the finished visual identity — palette "Pierre chaude", Archivo typeface). Built with **Tailwind CSS v4 + daisyUI v5**, plain HTML/CSS/JS — no bundler, so it drops straight into a static host like WAMP's `www/`.

## Local setup

```bash
npm install
npm run build:css      # one-off build -> dist/output.css
npm run watch:css       # rebuild on change, while you edit index.html
```

Then open `index.html` directly, or serve the folder (e.g. copy it into `C:\wamp64\www\kameamecha\` and browse to `http://localhost/kameamecha/`).

## Deploy on Vercel

The repo is zero-config-ready (`vercel.json` runs `npm run build` and serves the root as static output — no framework detection needed). Easiest path: [import the repo on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/NathanaelKenzeyGit/kameamecha-site) once, then every push to `main` auto-deploys.

## Structure

- `index.html` — the homepage markup (daisyUI components: navbar, card, stats, form, footer)
- `src/input.css` — Tailwind entry point + the custom `kameamecha` daisyUI theme (brand colors/typography/radii mapped from DESIGN.md's token table)
- `dist/output.css` — generated, do not edit by hand
- `js/main.js` — the key-metrics counter (GSAP, IntersectionObserver-triggered, degrades to the static final value with no JS)

## Design notes carried over from the handoff

- Theme tokens (`--color-primary`, `--color-base-100/200/300`, etc.) are the exact hex values from the validated maquette, not re-picked.
- Radii follow the spec: `0` on structural/badge elements, `2px` on buttons/fields, `4px` on cards.
- Yellow/amber is intentionally unused on this page — reserved for high-criticality alerts in the client portal, per the brand rule ("le jaune ne sert jamais à un bouton ordinaire").
- The partner logo strip is a pure-CSS marquee (no JS/GSAP) — this mirrors a fix made mid-project after the GSAP-driven version proved unreliable on first paint.
- Real partner/press logo assets, the hero/atelier photography, and the head office address/phone are still marked "à fournir" in the source docs — placeholders are used until the client supplies them.

## Next pages

This is the homepage only (as requested to start). The wireframe/maquette bundle also specs the 4 pôle template (Écran E), client portal (B/C/D/O/P/Q), and several public pages (À propos, Ressources, Contact, Légal) — happy to continue with any of those next.
