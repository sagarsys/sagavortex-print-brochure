# SagaVortex — Fine-art Print Brochure

A single-page fine-art print brochure for **SagaVortex Art Photography**, built
with **Vite + React**. Deep near-black canvas, Cormorant Garamond + Mulish, a
single warm-gold accent, gentle scroll-reveal. Mobile-first, with a wider,
gallery-style layout on desktop.

Ported from the original SagaVortex design — same copy, palette and type,
rebuilt as a real responsive, SEO-friendly site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

## Editing content

All copy lives in small arrays at the top of `src/App.jsx` (`pieces`,
`features`, `prices`) plus the `SHOP_URL` / Instagram constants. Styling and the
colour palette live in `src/index.css` (`:root` variables at the top). The
desktop layout lives in the `@media (min-width: 900px)` block at the bottom of
that file.

## Images

The real photos, logos and the QR (which points to
`https://bio.site/sagavortex.art`) are in `public/assets/`. Each photo ships as
an optimized JPEG **and** a WebP; the page serves WebP where supported via
`<picture>`. To swap any image, drop a new file in with the **same filename**
(regenerate the `.webp` alongside it). See `public/assets/ASSETS.md` for the map.

## SEO & performance

- Full head meta, canonical, Open Graph/Twitter, geo tags (Amsterdam / NL), and
  JSON-LD `ProfessionalService` structured data with the print offers.
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, favicons
  and apple-touch icon.
- WebP images, hero preload, `width`/`height` on every image (no layout shift),
  lazy-loading below the fold, and `content-visibility` on off-screen sections.
- Dofollow links back to `sagavortex.art` from the logo, the collection link,
  the "moment" section, and the footer.

> After the site is live, set the real subdomain in `index.html` — it's used in
> `<link rel="canonical">`, `og:url`, `robots.txt` and `sitemap.xml` (currently
> `https://soulprints.sagavortex.art`).

## Deploying

Hosting/CI is handled by the host — connect this repo to **Netlify** once and it
auto-builds (`npm run build`) and deploys on every push to the production
branch. Build settings are pinned in `netlify.toml` (no GitHub Actions needed).
