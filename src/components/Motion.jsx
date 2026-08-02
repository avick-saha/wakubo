import { FEATURE_REEL, REELS } from '../content';
import Reveal from './Reveal';

export default function Motion() {
  return (
    <section id="motion" className="motion">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Motion, included</p>
          <h2>
            Stills sell the garment. <em>Motion</em> sells the drape.
          </h2>
          <p>
            A second crew and a second budget is how the industry prices video.
            We shoot it in the same pass as the stills, from the same garment,
            on the same model — and hand it to you cut for the feed.
          </p>
        </Reveal>

        <Reveal className="reel-grid">
          {REELS.map((reel) => (
            <figure key={reel.slug} className="reel">
              <video
                src={`/media/${reel.slug}.mp4`}
                poster={`/media/${reel.slug}.webp`}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label={reel.alt}
              />
              <figcaption>
                <span>{reel.label}</span>
                <span className="reel-meta">{reel.meta}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal className="feature">
          <video
            src={`/media/${FEATURE_REEL.slug}.mp4`}
            poster={`/media/${FEATURE_REEL.slug}.webp`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label={FEATURE_REEL.alt}
          />
          <div className="feature-copy">
            <p>
              Thirteen seconds, head to hem, no cut — the long hold that is
              always first out of a shoot budget.
            </p>
            <span className="feature-meta">{FEATURE_REEL.meta}</span>
            <span className="feature-tag">Included in every plan</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
