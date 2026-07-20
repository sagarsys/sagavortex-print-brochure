# Image assets

These are the **real brochure assets**, exported from the SagaVortex design
bundle. Everything the page needs is already here — no action required.

| Filename            | Where it appears            | Content                                          |
|---------------------|-----------------------------|--------------------------------------------------|
| `hero-crown.jpg`    | Full-screen cover           | Crowned-in-wildflowers portrait                  |
| `full-print.jpg`    | Pieces #1                   | A4 print on the studio cutting table             |
| `hero-redhead.jpg`  | Pieces #2                   | "Amber Light" portrait                           |
| `stack.jpg`         | Pieces #3                   | Stack of signed prints                           |
| `hero-water.jpg`    | Pieces #4                   | "Beauty and Grace" — water-lilies portrait       |
| `lotus-portrait.jpg`| Pieces #5                   | Close detail of an archival print                |
| `studio.jpg`        | "Your moment, printed"      | Portraits & collections on the studio table      |
| `wordmark.png`      | Cover logo (transparent)    | SagaVortex wordmark                              |
| `mark.png`          | Footer mark (transparent)   | SagaVortex signature mark                        |
| `qr-brand.png`      | Footer QR                   | QR → https://bio.site/sagavortex.art             |
| `favicon.png`       | Browser tab icon            | 64×64 mark                                        |

To swap any image later, drop a new file in with the **same filename** — CSS
handles the cropping (`object-fit`), so any high-res JPG/PNG works as-is.

Note: the design bundle also contained `face.jpg` and `hero-lavender.jpg`, which
this particular layout doesn't use, so they're intentionally not included.

## Optimized formats
Each photo has a matching **`.webp`** (served first via `<picture>`, JPEG
fallback). Also generated from the mark: `favicon.png`, `favicon-32.png`,
`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`. The QR is a compact
520×520 PNG encoding `https://bio.site/sagavortex.art`.
