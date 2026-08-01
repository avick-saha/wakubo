export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Complete AI Fashion Suite</div>
          <h2>
            MetaModels for Stills. <em>MetaVideos</em> for Reels.
          </h2>
          <p>
            Wakubo combines studio-grade AI generation with model identity locking to produce full e-commerce PDP lookbooks
            and marketplace video reels from ghost mannequins, flat lays, or product URLs.
          </p>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <span className="pnum">01 — AI IMAGE STUDIO (METAMODELS)</span>
            <h3>
              Photo <em>MetaModels</em>
            </h3>
            <p>
              Lock a custom AI model identity for your label. Convert flat-lays and ghost mannequin shots into 4K retouched PDP stills,
              lifestyle campaign imagery, and multi-angle catalog shots with zero fabric distortion.
            </p>
            <div className="product-badges">
              <span>Ghost Mannequin to Model</span>
              <span>100% Locked Identity</span>
              <span>Fabric Drape Protection</span>
            </div>
            <a className="plink" href="#image-studio">
              Explore AI Image Studio
            </a>
          </div>

          <div className="product-card">
            <span className="pnum">02 — AI VIDEO ENGINE (METAVIDEOS)</span>
            <h3>
              Runway & <em>360° Motion</em>
            </h3>
            <p>
              Paste any product URL or flat image to generate 60FPS vertical catwalk videos, 360-degree interactive product spins,
              and high-converting social reels for TikTok, Instagram, and Amazon PDPs.
            </p>
            <div className="product-badges">
              <span>URL-to-Video Reel</span>
              <span>360° Rotational Spin</span>
              <span>4K 60FPS Render</span>
            </div>
            <a className="plink" href="#video-suite">
              Explore AI Video Suite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
