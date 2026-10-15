# HERRAGA Refacciones — landing

Static landing for [herraga.com](https://herraga.com), built with Astro 7. It replaces the GoDaddy Website Builder page: every text that lived inside images is now real HTML (see `_source/CONTENT.md`).

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies (Node ≥ 22.12) |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `npm run deploy` | Publish `dist/` to the `herraga-landing` Worker (run `build` first) |
| `npm run check:content` | Verify every text, phone and link from the original site exists in `dist/index.html` (run after `build`) |

## Deploy

Production runs on Cloudflare Workers (static assets) as the Worker `herraga-landing` (account li.prodriguezs), served at https://herraga.novarek.mx and auto-deployed by Workers Builds on every push to the production branch `main`. Dashboard settings for the Worker's Builds section:

| Setting | Value |
| --- | --- |
| Repository | `liprodriguezs-ai/herraga` |
| Production branch | `main` |
| Build command | `npm run build` (builds only) |
| Deploy command | `npm run deploy` (`wrangler deploy`, publishes only) |
| Root directory | `/` |
| Builds for non-production branches | off |

Each push to `main` therefore builds once and deploys once. Do not put a deploying script in the build command.

`wrangler.jsonc` deliberately has no `routes` or custom domains; add domains in the dashboard (Worker → Domains). Node version for builds comes from `.node-version`.

`dist/` is plain static HTML/CSS/JS. Upload it to any static host (Cloudflare Pages/Workers static assets, Netlify, Vercel, or cPanel via FTP into `public_html`). `site` in `astro.config.mjs` is `https://www.herraga.com`, which drives the canonical URL, Open Graph URLs and the sitemap.

## Domains

| Host | Served by |
| --- | --- |
| `www.herraga.com` | Cloudflare for SaaS custom hostname on the `novarek.mx` zone (fallback origin `saas.novarek.mx`), Worker route `www.herraga.com/*` → `herraga-landing`. GoDaddy DNS: `CNAME www → saas.novarek.mx` plus the `_cf-custom-hostname.www` and `_acme-challenge.www` TXT records. |
| `herraga.com` | GoDaddy domain forwarding → `https://www.herraga.com` (302 for now; switch to 301 once the move is final). Nameservers stay at GoDaddy. |
| `herraga.novarek.mx` | Worker custom domain on `herraga-landing`. |

The `novarek.mx` zone redirect rule "Redirigir de WWW a raíz" must stay scoped to `https://www.novarek.mx/*`; a wildcard `https://www.*` also catches `www.herraga.com` and bounces it back to the apex.

## Newsletter

The subscription form posts `nombre`, `email` and a `_gotcha` honeypot as `multipart/form-data` with `Accept: application/json` to `PUBLIC_NEWSLETTER_ENDPOINT` (works with Formspree, Getform, Basin and similar). Copy `.env.example` to `.env`, set the endpoint and rebuild. Without an endpoint, the form opens WhatsApp with the subscriber's name and email.

## Contact form

The floating button opens the contact panel from the original site (Nombre, Correo electrónico, ¿Cómo te podemos ayudar?, subscription checkbox) plus a direct WhatsApp link. It posts `nombre`, `email`, `mensaje`, `suscripcion` and `_gotcha` the same way as the newsletter, to `PUBLIC_CONTACT_ENDPOINT`. Without an endpoint, submitting opens WhatsApp with the message prefilled.

## Analytics

Google Tag Manager (container `GTM_ID` in `src/data/site.ts`) loads on every page; GA4 and any ad tags are configured inside GTM, not in this code. The site pushes these events to the `dataLayer` (`src/lib/track.ts`):

| Event | When | Parameters |
| --- | --- | --- |
| `whatsapp_click` | Any `wa.me` / `api.whatsapp.com` link is clicked | `link_location` (nearest section id), `link_text` |
| `phone_click` | Any `tel:` link is clicked | `link_location`, `phone_number` |
| `quote_form_submit` | The quote form passes validation and opens WhatsApp | `channel` |
| `contact_form_submit` | The floating contact form is sent | `channel` (`whatsapp` or `email`), `subscribe` |

In GTM, create a Custom Event trigger per event name and a GA4 Event tag for each, then mark them as key events in GA4.

## Editing content

All copy, phones, branches, engine lists and social links live in `src/data/site.ts`. Images live in `src/assets/` and are optimized at build time (WebP, responsive sizes).

## Structure

```
src/
  data/site.ts          single source of truth for content
  layouts/Layout.astro  <head>, SEO meta, JSON-LD
  components/           Header, Hero, Engines (engine finder), Pillars, Products,
                        Brands, Branches, Quote (WhatsApp form), Footer (newsletter),
                        ContactWidget (floating contact form)
  styles/global.css     design tokens and shared styles
_source/                original site captures, original images and content inventory
```

## Data to confirm with HERRAGA

- Cuautitlán Izcalli and Huehuetoca share the same phone (557 479 7258) in the original image.
- The catalog slides print `www.herrgara.com` (typo); the site uses `herraga.com`.
- The original TikTok, X and YouTube links were malformed; they were corrected to `@herraga_refacciones`, `@herraga_` and `@HERRAGA`.
- The catalog slide titles a product "Filtros de aire", but its photo and description show fuel, lube and water filters (Fleetguard WF2127, LF14000NN, FF2200, FS19729). The site titles it "Filtros"; restore "Filtros de aire" in `src/data/site.ts` if that is the intended wording.
- Branch street addresses are not published, so the structured data lists city and state only. Adding full addresses improves local SEO.
