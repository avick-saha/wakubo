import { silhouetteFrame } from '../utils/silhouette';

const FRAME_COUNT = 12;

export default function PhotoSheet() {
  return (
    <section id="sheet">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The contact sheet</div>
          <h2>
            One identity. <em>Every</em> look this season ships in.
          </h2>
          <p>
            Your model is generated once and locked as a reference — same face,
            same proportions, same presence in every frame. From there, every
            garment you send just gets placed on her.
          </p>
        </div>

        <div className="sheet-wrap">
          <div className="sheet-top">
            <span>Roll — AW26 Outerwear</span>
            <span>{FRAME_COUNT} frames · 1 model</span>
          </div>
          <div className="sheet-grid">
            {Array.from({ length: FRAME_COUNT }, (_, i) => {
              const { bodyTone, accent, shift, label } = silhouetteFrame(i);
              return (
                <div key={i} className={`cell${i % 5 === 0 ? ' pick' : ''}`}>
                  <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice">
                    <rect width="200" height="260" fill={bodyTone} />
                    <ellipse cx={100 + shift} cy="92" rx="34" ry="42" fill="#1C1B18" opacity="0.5" />
                    <path
                      d={`M${50 + shift} 260 C${50 + shift} 175 ${68 + shift} 150 ${100 + shift} 150 C${132 + shift} 150 ${150 + shift} 175 ${150 + shift} 260 Z`}
                      fill="#1C1B18"
                      opacity="0.65"
                    />
                    <path
                      d={`M${100 + shift} 150 C${115 + shift} 150 ${132 + shift} 160 ${138 + shift} 185 L${138 + shift} 260 L${100 + shift} 260 Z`}
                      fill={accent}
                      opacity="0.5"
                    />
                  </svg>
                  <span className="fnum">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
