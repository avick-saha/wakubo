import { useState } from 'react';
import { SETS } from '../content';
import Reveal from './Reveal';

/* Packshot on top, finished look underneath. Pointer hover previews the swap;
   a click pins it, so touch and keyboard get the same thing without hover. */
function SetCard({ set }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const worn = pinned || hovered;

  return (
    <figure className="setcard">
      <button
        type="button"
        className={`setcard-frame${worn ? ' worn' : ''}`}
        aria-pressed={pinned}
        aria-label={`${set.garment}: show the ${worn ? 'packshot' : 'finished look'}`}
        onClick={() => setPinned((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <img
          className="setcard-flat"
          src={`/media/${set.flat}.webp`}
          alt={set.flatAlt}
          loading="lazy"
          decoding="async"
        />
        <img
          className="setcard-worn"
          src={`/media/${set.worn}.webp`}
          srcSet={`/media/${set.worn}-560.webp 560w, /media/${set.worn}.webp 900w`}
          sizes="(max-width: 760px) 92vw, 44vw"
          alt={set.wornAlt}
          loading="lazy"
          decoding="async"
        />
        <span className="setcard-state">{worn ? 'Finished look' : 'Packshot'}</span>
      </button>

      <figcaption>
        <span>{set.garment}</span>
        <span className="setcard-hint">Hover or tap to dress it</span>
      </figcaption>
    </figure>
  );
}

export default function Range() {
  return (
    <section id="range" className="range">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Range</p>
          <h2>
            Different label. Different body. <em>Same forty-eight hours.</em>
          </h2>
          <p>
            Everything above is menswear knitwear on warm grey. This is
            womenswear on high-key white, from the same week. The garment
            changed, the category changed, the lighting changed — the process
            did not.
          </p>
        </Reveal>

        <Reveal className="setcards">
          {SETS.map((set) => (
            <SetCard key={set.id} set={set} />
          ))}
        </Reveal>

        <Reveal className="lockup">
          <div className="lockup-faces">
            {SETS.map((set) => (
              <img
                key={set.id}
                src={`/media/${set.face}.webp`}
                alt={set.faceAlt}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <p>
            <b>Same model in both.</b> Cast once, then held for the rest of the
            collection — which is why two unrelated garments still cut together
            as one shoot. That is the part a studio day cannot give you twice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
