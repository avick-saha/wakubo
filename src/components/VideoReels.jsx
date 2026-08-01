import { useState } from 'react';
import { silhouetteFrame, reelDuration, reelGeneratedTime } from '../utils/silhouette';

const REEL_COUNT = 5;

function PlayIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none">
      <path d="M1 0.5L9 5L1 9.5V0.5Z" fill="#EDEAE2" />
    </svg>
  );
}

export default function VideoReels() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus('generating');
    window.setTimeout(() => setStatus('done'), 1400);
  };

  return (
    <section id="reels">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The reels generator</div>
          <h2>
            Paste a product link. Get a <em>reel</em> back.
          </h2>
          <p>
            No timeline, no cuts to make, no editing skills required. Send a
            product page or a still from your contact sheet, and your model turns
            it into a short marketplace-ready video on the same identity.
          </p>
        </div>

        <div className="reel-generator">
          <div className="reel-generator-top">
            <span>Try it — AW26 Outerwear</span>
            <span>demo</span>
          </div>
          <form className="reel-form" onSubmit={handleSubmit}>
            <div className="reel-field">
              <label htmlFor="reel-url">Product page URL</label>
              <input
                id="reel-url"
                type="text"
                placeholder="yourbrand.com/products/wool-coat"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-solid">
              Generate reel
            </button>
          </form>
          {status === 'generating' && (
            <div className="reel-status">Placing garment on model, cutting frames…</div>
          )}
          {status === 'done' && (
            <div className="reel-status">Done — a new reel just joined the roll below.</div>
          )}
        </div>

        <div className="sheet-wrap">
          <div className="sheet-top">
            <span>Roll — AW26 Outerwear</span>
            <span>{REEL_COUNT + (status === 'done' ? 1 : 0)} reels · 1 model</span>
          </div>
          <div className="reel-strip">
            {Array.from({ length: REEL_COUNT + (status === 'done' ? 1 : 0) }, (_, i) => {
              const { bodyTone, accent, shift } = silhouetteFrame(i + 3);
              return (
                <div key={i} className="reel-cell">
                  <svg viewBox="0 0 140 248" preserveAspectRatio="xMidYMid slice">
                    <rect width="140" height="248" fill={bodyTone} />
                    <ellipse cx={70 + shift} cy="86" rx="26" ry="32" fill="#1C1B18" opacity="0.5" />
                    <path
                      d={`M${40 + shift} 248 C${40 + shift} 165 ${54 + shift} 142 ${70 + shift} 142 C${86 + shift} 142 ${100 + shift} 165 ${100 + shift} 248 Z`}
                      fill="#1C1B18"
                      opacity="0.65"
                    />
                    <path
                      d={`M${70 + shift} 142 C${82 + shift} 142 ${96 + shift} 150 ${101 + shift} 172 L${101 + shift} 248 L${70 + shift} 248 Z`}
                      fill={accent}
                      opacity="0.5"
                    />
                    <line x1="0" y1="30" x2="140" y2="30" stroke="#EDEAE2" strokeOpacity="0.05" />
                  </svg>
                  <span className="rduration">{reelDuration(i)}</span>
                  <span className="rlabel">generated in {reelGeneratedTime(i)}</span>
                  <span className="rplay">
                    <PlayIcon />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
