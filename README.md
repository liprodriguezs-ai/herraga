# HERRAGA Refacciones — landing

Static landing for [herraga.com](https://herraga.com), built with Astro 7. It replaces the GoDaddy Website Builder page: every text that lived inside images is now real HTML (see `_source/CONTENT.md`).

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies (Node ≥ 22.12) |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `npm run check:content` | Verify every text, phone and link from the original site exists in `dist/index.html` (run after `build`) |

## Deploy

`dist/` is plain static HTML/CSS/JS. Upload it to any static host (Cloudflare Pages/Workers static assets, Netlify, Vercel, or cPanel via FTP into `public_html`). `site` in `astro.config.mjs` is `https://herraga.com`, which drives the canonical URL, Open Graph URLs and the sitemap.

## Newsletter

The subscription form posts `nombre`, `email` and a `_gotcha` honeypot as `multipart/form-data` with `Accept: application/json` to `PUBLIC_NEWSLETTER_ENDPOINT` (works with Formspree, Getform, Basin and similar). Copy `.env.example` to `.env`, set the endpoint and rebuild. Without an endpoint, the form opens WhatsApp with the subscriber's name and email.

## Editing content

All copy, phones, branches, engine lists and social links live in `src/data/site.ts`. Images live in `src/assets/` and are optimized at build time (WebP, responsive sizes).

## Structure

```
src/
  data/site.ts          single source of truth for content
  layouts/Layout.astro  <head>, SEO meta, JSON-LD
  components/           Header, Hero, Engines (engine finder), Pillars, Products,
                        Brands, Branches, Quote (WhatsApp form), Footer (newsletter), WhatsAppFab
  styles/global.css     design tokens and shared styles
_source/                original site captures, original images and content inventory
```

## Data to confirm with HERRAGA

- Cuautitlán Izcalli and Huehuetoca share the same phone (557 479 7258) in the original image.
- The catalog slides print `www.herrgara.com` (typo); the site uses `herraga.com`.
- The original TikTok, X and YouTube links were malformed; they were corrected to `@herraga_refacciones`, `@herraga_` and `@HERRAGA`.
- The catalog slide titles a product "Filtros de aire", but its photo and description show fuel, lube and water filters (Fleetguard WF2127, LF14000NN, FF2200, FS19729). The site titles it "Filtros"; restore "Filtros de aire" in `src/data/site.ts` if that is the intended wording.
- Branch street addresses are not published, so the structured data lists city and state only. Adding full addresses improves local SEO.
