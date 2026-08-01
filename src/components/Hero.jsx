export default function Hero() {
  return (
    <section className="hero wrap" style={{ paddingTop: 70 }} id="top">
      <div>
        <div className="eyebrow">Wakubo Studio</div>
        <h1>
          Cast a model
          <br />
          once. Dress her
          <br />
          in <em>every</em> piece
          <br />
          you make.
        </h1>
        <p className="lede">
          Wakubo builds your brand a consistent AI fashion model, then places your
          garments on her — true to fit, fabric, and drape — so a full catalog of
          stills and reels ships without booking a single studio day.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-solid">
            Book a shoot
          </a>
          <a href="#sheet" className="btn">
            See a contact sheet
          </a>
        </div>
        <div className="hero-note">No studio rental — No model day-rate — No reshoot fees</div>
      </div>
      <div className="hero-visual">
        <div className="frame">
          <span className="tag">SOUL 04 — LIVE</span>
          <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3A362F" />
                <stop offset="100%" stopColor="#161510" />
              </linearGradient>
            </defs>
            <rect width="300" height="400" fill="url(#g1)" />
            <ellipse cx="150" cy="150" rx="58" ry="70" fill="#5C5648" opacity="0.9" />
            <path
              d="M75 400 C75 280 105 235 150 235 C195 235 225 280 225 400 Z"
              fill="#4A453A"
            />
            <path
              d="M150 235 C170 235 195 250 205 285 L205 400 L150 400 Z"
              fill="#A9814B"
              opacity="0.55"
            />
            <line x1="0" y1="60" x2="300" y2="60" stroke="#EDEAE2" strokeOpacity="0.06" />
            <line x1="0" y1="340" x2="300" y2="340" stroke="#EDEAE2" strokeOpacity="0.06" />
          </svg>
        </div>
        <div className="frame-cap">
          <span>
            <b>f/2.8</b> · 85mm
          </span>
          <span>generated in 38s</span>
        </div>
      </div>
    </section>
  );
}
