import { useState } from 'react';

const MODELS = [
  { id: 'm1', name: 'Soul 01 — Maya', ethnic: 'European / editorial', height: '5\'10"', bodyTone: '#3A322B', accent: '#A9814B' },
  { id: 'm2', name: 'Soul 02 — Marcus', ethnic: 'Afro-Carib / menswear', height: '6\'2"', bodyTone: '#29231E', accent: '#D4AF37' },
  { id: 'm3', name: 'Soul 03 — Priya', ethnic: 'South Asian / high-fashion', height: '5\'9"', bodyTone: '#44382F', accent: '#C5A059' },
  { id: 'm4', name: 'Soul 04 — Kenji', ethnic: 'East Asian / streetwear', height: '6\'1"', bodyTone: '#332E28', accent: '#8A6636' },
];

const BACKGROUNDS = [
  { id: 'b1', name: 'Studio Minimal', desc: 'Neutral grey backdrop, soft fill light', bgGrad: 'linear-gradient(135deg, #2D2A26 0%, #1A1917 100%)' },
  { id: 'b2', name: 'Soho Loft', desc: 'Exposed brick, natural morning window tint', bgGrad: 'linear-gradient(135deg, #3C362F 0%, #201D19 100%)' },
  { id: 'b3', name: 'Parisian Sun', desc: 'Warm golden hour balconies & haussmann mouldings', bgGrad: 'linear-gradient(135deg, #4A3E31 0%, #261F18 100%)' },
  { id: 'b4', name: 'Urban Concrete', desc: 'Architectural shadows, brutalist concrete texture', bgGrad: 'linear-gradient(135deg, #313335 0%, #17181A 100%)' },
];

const GARMENTS = [
  { id: 'g1', name: 'Silk Trench Coat', category: 'Outerwear', fit: 'Tailored drape' },
  { id: 'g2', name: 'Cashmere Knit Sweater', category: 'Knitwear', fit: 'Relaxed fit' },
  { id: 'g3', name: 'Structured Blazer', category: 'Tailoring', fit: 'Sharp shoulder line' },
];

export default function AIImageStudio() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [selectedBg, setSelectedBg] = useState(BACKGROUNDS[0]);
  const [selectedGarment, setSelectedGarment] = useState(GARMENTS[0]);
  const [viewMode, setViewMode] = useState('model'); // 'model' | 'mannequin'
  const [generating, setGenerating] = useState(false);

  const handleSelectModel = (model) => {
    setGenerating(true);
    setSelectedModel(model);
    setTimeout(() => setGenerating(false), 400);
  };

  const handleSelectBg = (bg) => {
    setGenerating(true);
    setSelectedBg(bg);
    setTimeout(() => setGenerating(false), 400);
  };

  return (
    <section id="image-studio" className="studio-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FlixStock AI MetaModels Suite</div>
          <h2>
            Ghost Mannequin to <em>On-Model</em> Studio Stills.
          </h2>
          <p>
            Transform flat-lays, ghost mannequins, or raw sketches into hyper-realistic 4K on-model lookbooks.
            Lock your custom model identity once — update garments and backgrounds infinitely.
          </p>
        </div>

        <div className="studio-demo-grid">
          {/* Controls Side */}
          <div className="studio-controls">
            <div className="control-group">
              <label className="control-label">1. Select AI Model Identity (MetaModel)</label>
              <div className="model-selector-grid">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    className={`model-chip ${selectedModel.id === m.id ? 'active' : ''}`}
                    onClick={() => handleSelectModel(m)}
                  >
                    <span className="m-name">{m.name}</span>
                    <span className="m-meta">{m.ethnic} · {m.height}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">2. Select Studio Environment & Lighting</label>
              <div className="bg-selector-grid">
                {BACKGROUNDS.map((bg) => (
                  <button
                    key={bg.id}
                    className={`bg-chip ${selectedBg.id === bg.id ? 'active' : ''}`}
                    onClick={() => handleSelectBg(bg)}
                  >
                    <span className="bg-name">{bg.name}</span>
                    <span className="bg-desc">{bg.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">3. Garment & Drape Style</label>
              <div className="garment-selector">
                {GARMENTS.map((g) => (
                  <button
                    key={g.id}
                    className={`garment-btn ${selectedGarment.id === g.id ? 'active' : ''}`}
                    onClick={() => setSelectedGarment(g)}
                  >
                    <span>{g.name}</span>
                    <span className="g-tag">{g.fit}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-features-list">
              <div className="s-feat-item">
                <span className="s-icon">✓</span>
                <div>
                  <strong>Fabric Weave & Drape Protection</strong>
                  <p>AI accurately preserves texture, seams, pattern alignment & natural stretch.</p>
                </div>
              </div>
              <div className="s-feat-item">
                <span className="s-icon">✓</span>
                <div>
                  <strong>Multi-Angle PDP Exports</strong>
                  <p>Instant batch generation of Front, 45° Side, Back, and Fabric Detail close-ups.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Preview Frame */}
          <div className="studio-preview-box">
            <div className="preview-header">
              <div className="p-badge">
                <span className="dot"></span> LIVE AI RENDER STUDIO
              </div>
              <div className="view-toggle">
                <button
                  className={viewMode === 'mannequin' ? 'active' : ''}
                  onClick={() => setViewMode('mannequin')}
                >
                  Ghost Mannequin
                </button>
                <button
                  className={viewMode === 'model' ? 'active' : ''}
                  onClick={() => setViewMode('model')}
                >
                  On-Model (MetaModel)
                </button>
              </div>
            </div>

            <div className="preview-canvas" style={{ background: selectedBg.bgGrad }}>
              {generating && (
                <div className="generating-overlay">
                  <div className="spinner"></div>
                  <span>Synthesizing Model & Fabric Drape…</span>
                </div>
              )}

              {viewMode === 'mannequin' ? (
                /* Ghost Mannequin View */
                <div className="canvas-visual mannequin-view">
                  <span className="canvas-tag">SOURCE: FLAT LAY / GHOST MANNEQUIN</span>
                  <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
                    <path
                      d="M100 90 L130 90 C130 110 170 110 170 90 L200 90 L240 160 L200 170 L190 350 L110 350 L100 170 L60 160 Z"
                      fill="#2A2824"
                      stroke="#A9814B"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                    />
                    <path d="M130 110 Q150 140 170 110" fill="none" stroke="#6E6957" strokeWidth="1" />
                    <line x1="150" y1="120" x2="150" y2="350" stroke="#6E6957" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                  <div className="mannequin-caption">Original Flat-Lay / Garment Photo</div>
                </div>
              ) : (
                /* On-Model AI View */
                <div className="canvas-visual model-view">
                  <span className="canvas-tag">{selectedModel.name.toUpperCase()} · {selectedBg.name.toUpperCase()}</span>
                  <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
                    {/* Head / Face Silhouette */}
                    <ellipse cx="150" cy="95" rx="42" ry="52" fill={selectedModel.bodyTone} />
                    <path d="M132 147 C132 147 150 156 168 147 L168 175 L132 175 Z" fill={selectedModel.bodyTone} />
                    
                    {/* Garment Drape Body */}
                    <path
                      d="M85 175 C85 175 130 165 150 165 C170 165 215 175 215 175 L235 270 L205 275 L195 400 L105 400 L95 275 L65 270 Z"
                      fill="#1E1C18"
                    />
                    
                    {/* Garment Highlights / Texture Accent */}
                    <path
                      d="M150 165 C165 165 195 180 205 215 L205 400 L150 400 Z"
                      fill={selectedModel.accent}
                      opacity="0.6"
                    />
                    
                    {/* Fabric Lapel & Texture Overlay */}
                    <path d="M125 175 L150 250 L175 175" fill="none" stroke="#EDEAE2" strokeOpacity="0.25" strokeWidth="1.5" />
                    <line x1="150" y1="250" x2="150" y2="400" stroke="#EDEAE2" strokeOpacity="0.15" strokeWidth="1" />
                  </svg>
                  <div className="model-caption">
                    <span>Garment: <b>{selectedGarment.name}</b></span>
                    <span>Resolution: <b>4K PDP Ready</b></span>
                  </div>
                </div>
              )}
            </div>

            <div className="preview-footer">
              <div className="p-spec">
                <span>MODEL: <b>{selectedModel.name}</b></span>
                <span>ENVIRONMENT: <b>{selectedBg.name}</b></span>
              </div>
              <a href="#contact" className="btn btn-solid p-btn">
                Export catalog stills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
