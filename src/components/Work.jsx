import { LOOKS } from '../content';
import Reveal from './Reveal';

const INPUTS = [
  { slug: 'flat-top', alt: 'Flat lay of a grey knitted polo', label: 'Top' },
  { slug: 'flat-bottom', alt: 'Flat lay of black wide-leg trousers', label: 'Trousers' },
  { slug: 'flat-outfit', alt: 'The full outfit laid out with glasses and boots', label: 'Full styling' },
];

function Look({ look, className }) {
  return (
    <figure className={`look${className ? ` ${className}` : ''}`}>
      <img
        src={`/media/${look.slug}.webp`}
        srcSet={`/media/${look.slug}-800.webp 800w, /media/${look.slug}.webp 1400w`}
        sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 31vw"
        alt={look.alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{look.label}</figcaption>
    </figure>
  );
}

export default function Work() {
  const [hero, ...rest] = LOOKS;

  return (
    <section id="work" className="work">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The output</p>
          <h2>
            One flat lay in. <em>A whole campaign</em> out.
          </h2>
          <p>
            Everything below came from the three photographs on the left. No
            studio was booked, no model was hired, and nothing was shipped
            anywhere.
          </p>
        </Reveal>

        <Reveal className="io-row">
          <div className="io-side">
            <p className="io-label">What you send</p>
            <div className="flats">
              {INPUTS.map((f) => (
                <figure key={f.slug} className="flat">
                  <img src={`/media/${f.slug}.webp`} alt={f.alt} loading="lazy" decoding="async" />
                  <figcaption>{f.label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="io-note">
              A packshot, a flat lay, or a phone photo on a hanger. If it shows
              the fabric, the cut and the colour, it is enough.
            </p>
          </div>

          <div className="io-arrow" aria-hidden="true">
            <span />
          </div>

          <div className="io-side io-side-out">
            <p className="io-label">What you get back</p>
            <p className="io-big">
              7 stills &amp; 4 reels
              <span>per garment, per model, in one delivery</span>
            </p>
            <ul className="io-list">
              <li>Full length, three-quarter, back and high angle</li>
              <li>Portrait and fabric-detail crops for product pages</li>
              <li>9:16 motion cut for Reels, Shorts and TikTok</li>
              <li>Ghost-mannequin versions on request</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="looks-grid">
          <Look look={hero} className="look-lead" />
          {rest.map((look) => (
            <Look key={look.slug} look={look} />
          ))}
          <div className="look-copy">
            <p>
              Same model. Same light. Same day.
              <br />
              Add the next garment and it drops straight into this set.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="branded">
          <figure className="branded-img">
            <img
              src="/media/look-branded.webp"
              srcSet="/media/look-branded-800.webp 800w, /media/look-branded.webp 1400w"
              sizes="(max-width: 1024px) 92vw, 44vw"
              alt="Model wearing a white henley with the brand's script logo embroidered on the chest"
              loading="lazy"
              decoding="async"
            />
            <span className="branded-inset">
              <img
                src="/media/detail-logo.webp"
                alt="Close crop of the chest logo, showing the script embroidery and the waffle weave"
                loading="lazy"
                decoding="async"
              />
              <em>100% crop</em>
            </span>
          </figure>
          <div className="branded-copy">
            <p className="eyebrow">Your label, not a stand-in</p>
            <h3>
              Logos, prints and trims come through <em>exactly</em> as you made
              them.
            </h3>
            <p>
              Embroidery keeps its thread. Screen prints keep their weight.
              Waffle knit still reads as waffle knit at 100% zoom — because we
              render your garment onto the model rather than asking a machine to
              imagine one.
            </p>
            <a href="#start" className="btn">
              Send us your hardest piece
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
