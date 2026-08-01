import { useState } from 'react';

const VIDEO_MODES = [
  { id: 'runway', name: 'Catwalk / Runway Motion', desc: 'Full-body natural gait, fabric movement, studio spotlight camera motion' },
  { id: 'spin', name: '360° Product Spin', desc: 'Seamless 360-degree rotation view for interactive PDP product cards' },
  { id: 'detail', name: 'Macro Detail Zoom', desc: 'Slow-motion close up on fabric weave, lapels, buttons, and stitching' },
  { id: 'street', name: 'Urban Social Reel', desc: 'High-energy vertical video for TikTok, IG Reels & Youtube Shorts' },
];

export default function AIVideoSuite() {
  const [url, setUrl] = useState('');
  const [activeMode, setActiveMode] = useState(VIDEO_MODES[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setIsGenerating(true);
    setGeneratedSuccess(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedSuccess(true);
    }, 1200);
  };

  return (
    <section id="video-suite" className="video-suite-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FlixStock MetaVideos Engine</div>
          <h2>
            URL to <em>Runway Video</em> & 360° Motion.
          </h2>
          <p>
            Eliminate expensive video shoot days, lighting crews, and video editing timelines.
            Paste any product link or still, and get platform-optimized 4K fashion videos in under 45 seconds.
          </p>
        </div>

        {/* Video Mode Selection Tabs */}
        <div className="v-mode-tabs">
          {VIDEO_MODES.map((mode) => (
            <button
              key={mode.id}
              className={`v-mode-tab ${activeMode.id === mode.id ? 'active' : ''}`}
              onClick={() => setActiveMode(mode)}
            >
              <span className="mode-title">{mode.name}</span>
              <span className="mode-sub">{mode.desc}</span>
            </button>
          ))}
        </div>

        <div className="v-suite-grid">
          {/* Main Reel Player Simulator */}
          <div className="v-player-container">
            <div className="v-player-frame">
              <div className="v-player-overlay">
                <span className="v-badge">4K 60FPS · {activeMode.name.toUpperCase()}</span>
                <span className="v-aspect">9:16 VERTICAL</span>
              </div>

              {/* Animated Motion Simulation Canvas */}
              <div className={`v-motion-canvas ${isPlaying ? 'playing' : 'paused'} ${activeMode.id}`}>
                <svg viewBox="0 0 270 480" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2F2B26" />
                      <stop offset="100%" stopColor="#141311" />
                    </linearGradient>
                  </defs>
                  <rect width="270" height="480" fill="url(#vGrad)" />
                  
                  {/* Dynamic Motion Elements */}
                  <g className="model-motion-group">
                    <ellipse cx="135" cy="115" rx="36" ry="46" fill="#3D352D" />
                    <path
                      d="M75 185 C75 185 115 175 135 175 C155 175 195 185 195 185 L215 320 L185 325 L175 480 L95 480 L85 325 L55 320 Z"
                      fill="#1E1C18"
                    />
                    <path
                      d="M135 175 C150 175 180 190 190 230 L190 480 L135 480 Z"
                      fill="#A9814B"
                      opacity="0.55"
                    />
                    <circle cx="135" cy="115" r="50" fill="none" stroke="#A9814B" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
                  </g>

                  {/* 360 Spin Axis overlay */}
                  {activeMode.id === 'spin' && (
                    <g className="spin-axis">
                      <ellipse cx="135" cy="450" rx="90" ry="20" fill="none" stroke="#A9814B" strokeWidth="1.5" strokeDasharray="4,4" />
                      <path d="M125 435 L135 450 L145 435" fill="none" stroke="#A9814B" strokeWidth="1.5" />
                    </g>
                  )}
                </svg>
              </div>

              {/* Player Controls Bar */}
              <div className="v-player-controls">
                <button
                  className="v-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <div className="v-progress-bar">
                  <div className={`v-progress-fill ${isPlaying ? 'animate' : ''}`}></div>
                </div>
                <span className="v-time">00:06 / 00:15</span>
              </div>
            </div>
          </div>

          {/* Generator Form & Features Panel */}
          <div className="v-generator-side">
            <div className="v-gen-box">
              <h3>Instant URL-to-Video Reel</h3>
              <p className="v-gen-desc">
                Provide your product page URL or drop a mannequin still to generate high-converting video reels.
              </p>

              <form onSubmit={handleGenerate} className="v-form">
                <div className="v-input-group">
                  <label htmlFor="p-url">Product Page URL</label>
                  <input
                    id="p-url"
                    type="text"
                    placeholder="https://yourbrand.com/products/cashmere-coat"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>

                <div className="v-options-row">
                  <div className="v-opt">
                    <span>Aspect Ratio</span>
                    <strong>9:16 (Reels/TikTok)</strong>
                  </div>
                  <div className="v-opt">
                    <span>Target FPS</span>
                    <strong>60 FPS Ultra-Smooth</strong>
                  </div>
                </div>

                <button type="submit" className="btn btn-solid v-submit-btn" disabled={isGenerating}>
                  {isGenerating ? 'Synthesizing Runway Video…' : 'Generate Runway Reel'}
                </button>
              </form>

              {isGenerating && (
                <div className="v-gen-status loading">
                  <div className="spinner"></div>
                  Generating camera tracking & lighting pass...
                </div>
              )}

              {generatedSuccess && (
                <div className="v-gen-status success">
                  ✓ Reel generated in 34s! Added to your video roll.
                </div>
              )}
            </div>

            <div className="v-specs-card">
              <h4>MetaVideos Technical Highlights</h4>
              <ul className="v-specs-list">
                <li>
                  <strong>Zero Studio Setup:</strong> No camera rigging, studio hire, or lighting setup required.
                </li>
                <li>
                  <strong>Garment Drape Simulation:</strong> Physics-based fabric movement that matches real walking physics.
                </li>
                <li>
                  <strong>Omni-Channel Export:</strong> Auto-formatted for TikTok, Instagram Reels, Youtube Shorts & Amazon PDP video.
                </li>
                <li>
                  <strong>360° Rotational Spin:</strong> Interactive 3D/video spins that increase PDP conversions by up to 34%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
