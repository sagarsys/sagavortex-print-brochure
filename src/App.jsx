import { useEffect, useRef } from 'react'

/* Change these in one place if anything moves. */
const SHOP_URL = 'https://sagavortex.art'
const CONTACT_URL = 'https://sagavortex.art/contact'
const COLLECTION_URL = 'https://sagavortex.art'
const BIO_URL = 'https://bio.site/sagavortex.art'
const INSTAGRAM_URL = 'https://instagram.com/sagavortex.life'
const INSTAGRAM_HANDLE = '@sagavortex.life'

/* --- Content -------------------------------------------------------------- */
const pieces = [
  { name: 'hero-redhead',  w: 1100, h: 733,  alt: 'Amber-light fine-art portrait print',           caption: 'Amber Light · Portrait' },
  { name: 'full-print',    w: 1342, h: 913,  alt: 'A4 fine-art print on the studio cutting table', caption: 'A4 Print · Straight off the press' },
  { name: 'lotus-portrait',w: 733,  h: 1100, alt: 'Close detail of an archival matte print',        caption: 'Detail · Archival matte paper' },
  { name: 'stack',         w: 733,  h: 1100, alt: 'A stack of signed archival prints',              caption: 'Signed editions · Ready to travel' },
  { name: 'hero-water',    w: 1200, h: 1500, alt: 'Water-lilies fine-art portrait print',           caption: 'Beauty and Grace · Portrait' },
  { name: 'true-beauty',     w: 1280, h: 1600, alt: 'True beauty — fine-art portrait print',            caption: 'True beauty · Portrait' },
  { name: 'sun-kissed',      w: 1280, h: 1600, ratio: '5 / 4', alt: 'Sun-kissed — a golden-hour embrace',           caption: 'Sun kissed · Event' },
  { name: 'art-of-receiving',w: 1600, h: 1280, ratio: '5 / 4', alt: 'The Art of Receiving — a workshop moment',     caption: 'The Art of Receiving · Event' },
  { name: 'sleeping-beauty', w: 1600, h: 1200, full: true, alt: 'Sleeping beauty — resting in a field of tulips',   caption: 'Sleeping beauty · Portrait' },
]

const features = [
  { h: 'Printed & signed by the artist', p: 'Self-printed in the Amsterdam studio. Hand-signed, every piece.' },
  { h: 'Museum-quality archival paper',  p: 'Made to last — colour-true for decades.' },
  { h: 'Three sizes, ready to frame',    p: 'A4 · A3 · A2.' },
  { h: '1% for regreening',              p: '1% of every print funds regreening, automatically at checkout.' },
]

const prices = [
  { size: 'A4', dim: '21 × 29.7 cm', amount: '€ 75' },
  { size: 'A3', dim: '29.7 × 42 cm', amount: '€ 100' },
  { size: 'A2', dim: '42 × 59.4 cm', amount: '€ 150' },
]

const asset = (name) => `${import.meta.env.BASE_URL}assets/images/${name}`

/* <picture> with a WebP source + JPEG fallback. width/height reserve space so
   there is no layout shift; priority images load eagerly for a fast LCP. */
function Pic({ name, w, h, alt, className, priority = false, ratio }) {
  return (
    <picture>
      <source srcSet={asset(`${name}.webp`)} type="image/webp" />
      <img
        className={className}
        src={asset(`${name}.jpg`)}
        alt={alt}
        width={w}
        height={h}
        style={ratio ? { aspectRatio: ratio, objectFit: 'cover' } : undefined}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}

/* Reveal-on-scroll: adds .is-visible to every [data-reveal] as it enters view. */
function useReveal() {
  const root = useRef(null)
  useEffect(() => {
    const els = root.current.querySelectorAll('[data-reveal]')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return root
}

export default function App() {
  const root = useReveal()

  return (
    <div className="page" ref={root}>
      {/* Fixed wordmark — the single logo, stays at the top on scroll */}
      <header className="sitebar">
        <a href={SHOP_URL} target="_blank" rel="noopener"
           aria-label="SagaVortex Art Photography — sagavortex.art">
          <picture>
            <source srcSet={asset('wordmark.webp')} type="image/webp" />
            <img src={asset('wordmark.png')} width={640} height={165} alt="SagaVortex Art Photography" />
          </picture>
        </a>
      </header>

      {/* 1 · Cover */}
      <section className="cover" aria-label="SagaVortex fine-art prints">
        <Pic className="cover__img" name="hero-crown" w={880} h={1100}
             alt="SagaVortex fine-art portrait — a figure crowned in wildflowers" priority />
        <div className="cover__scrim" />
        <div className="cover__foot">
          <div>
            <p className="eyebrow">Fine-art prints · Amsterdam</p>
            <h1 className="cover__title">Moments,<br />made to keep.</h1>
          </div>
          <div className="cover__cue" aria-hidden="true">
            <span className="cover__cue-line" />
            <span className="cover__cue-label">Scroll</span>
          </div>
        </div>
      </section>

      {/* 2 · The pieces */}
      <section className="pieces" aria-label="The pieces">
        <div className="pieces__intro reveal" data-reveal>
          <p className="eyebrow">The pieces</p>
          <h2 className="pieces__title">The Boundless. Made to be held.</h2>
        </div>
        <div className="pieces__grid">
          {pieces.map((p) => (
            <figure className={`piece reveal${p.full ? ' piece--full' : ''}`} data-reveal key={p.name}>
              <Pic name={p.name} w={p.w} h={p.h} alt={p.alt} className="piece__img" ratio={p.ratio} />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 3 · Why these prints */}
      <section className="why" aria-label="Why these prints">
        <p className="eyebrow reveal" data-reveal>Why these prints</p>
        <div className="why__list">
          {features.map((f) => (
            <div className="why__row reveal" data-reveal key={f.h}>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · Sizes & prices */}
      <section className="prices" aria-label="Sizes and prices">
        <p className="eyebrow reveal" data-reveal>Sizes &amp; prices</p>
        <div className="prices__list reveal" data-reveal>
          {prices.map((row) => (
            <div className="prices__row" key={row.size}>
              <div className="prices__size">
                <b>{row.size}</b>
                <span className="prices__dim">{row.dim}</span>
              </div>
              <span className="prices__amt">{row.amount}</span>
            </div>
          ))}
        </div>
        <p className="prices__note reveal" data-reveal>
          Museum-quality archival paper · printed &amp; signed by the artist · 1% for regreening.
        </p>
        <a className="prices__link reveal" data-reveal href={COLLECTION_URL} target="_blank" rel="noopener">
          View the full collection at sagavortex.art →
        </a>
      </section>

      {/* 5 · Your moment, printed */}
      <section className="moment" aria-label="Your moment, printed">
        <Pic className="moment__img" name="studio" w={733} h={1100}
             alt="Portraits and print collections on the SagaVortex studio table" />
        <div className="moment__body reveal" data-reveal>
          <p className="eyebrow">Your moment, printed</p>
          <h2 className="moment__title">Were you photographed today?</h2>
          <p>Your captured moment becomes a signed fine-art print — same archival paper, same three sizes. Yours within days.</p>
          <a className="moment__link" href={CONTACT_URL} target="_blank" rel="noopener">Order your print →</a>
        </div>
      </section>

      {/* 6 · Footer / CTA */}
      <footer className="footer" aria-label="Contact and links">
        <picture>
          <source srcSet={asset('mark.webp')} type="image/webp" />
          <img className="footer__mark reveal" data-reveal src={asset('mark.png')} width={248} height={248} alt="SagaVortex mark" loading="lazy" />
        </picture>
        <a data-reveal className="footer__cta reveal" href={BIO_URL} target="_blank" rel="noopener">
          sagavortex.art
        </a>
        <div className="footer__qr-wrap reveal" data-reveal>
          <img className="footer__qr" src={asset('qr-brand.png')} width={900} height={900}
               alt="QR code — bio.site/sagavortex.art (all SagaVortex links)" loading="lazy" decoding="async" />
          <a className="footer__qr-link" href={BIO_URL} target="_blank" rel="noopener">bio.site/sagavortex.art</a>
        </div>
        <div className="footer__social reveal" data-reveal>
          <a className="footer__handle" href={INSTAGRAM_URL} target="_blank" rel="noopener">{INSTAGRAM_HANDLE}</a>
          <p className="footer__nudge">Ask me about printing your shots — today.</p>
        </div>
        <p className="footer__copy reveal" data-reveal>
          © SagaVortex Art Photography · Amsterdam, Netherlands · <a href={SHOP_URL} rel="noopener">sagavortex.art</a>
        </p>
      </footer>
    </div>
  )
}
