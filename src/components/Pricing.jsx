import { useState } from 'react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for boutique brands and emerging labels',
    monthlyPrice: 49,
    yearlyPrice: 39,
    perLookCost: '$6.00',
    features: [
      '25 AI Studio Stills / mo',
      '5 AI Motion Reels / mo',
      '4 Standard Studio Backgrounds',
      'Ghost Mannequin Conversion',
      'Full Commercial Usage Rights',
      'Email Support (24h SLA)',
    ],
    cta: 'Start Starter Plan',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth Pro',
    tagline: 'For fast-scaling e-commerce fashion brands',
    monthlyPrice: 199,
    yearlyPrice: 159,
    perLookCost: '$2.50',
    features: [
      '200 AI Studio Stills / mo',
      '30 AI Motion Reels / mo',
      '1 Custom Locked Model Identity (Soul Cast)',
      '12+ Premium Environments & Lighting',
      '4K Resolution Ultra-HD Exports',
      'Fabric Drape Protection Engine',
      'Priority Render Queue',
    ],
    cta: 'Start Growth Pro',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Scale',
    tagline: 'For high-volume catalogs and multi-brand retailers',
    monthlyPrice: 499,
    yearlyPrice: 399,
    perLookCost: '$1.20',
    features: [
      'Unlimited Batch Shoots & Exports',
      '100 AI Motion Reels + 360° Spins / mo',
      'Unlimited Custom Model Castings',
      'Custom Background Environment Creation',
      'API & Shopify Catalog Sync Integration',
      'Dedicated AI Stylist & Account Manager',
      '1-Hour Render SLA',
    ],
    cta: 'Contact Enterprise Team',
    popular: false,
  },
];

const COMPARISON_MATRIX = [
  { metric: 'Cost per garment look', traditional: '$250 – $400', flixstock: '$25 – $50 (+ Retainer)', wakubo: '$2.50 – $6.00' },
  { metric: 'Turnaround speed', traditional: '4 – 6 weeks', flixstock: '3 – 5 business days', wakubo: '< 60 seconds instant' },
  { metric: 'Model Identity Locking', traditional: 'Re-hire model each shoot', flixstock: 'Custom MetaModels', wakubo: '100% Locked Soul Cast' },
  { metric: 'Video Reels & 360° Spins', traditional: 'Separate crew & video budget', flixstock: 'MetaVideos add-on', wakubo: 'Included in every plan' },
  { metric: 'Reshoot & Correction Fees', traditional: '$1,500+ studio re-booking', flixstock: 'Included in enterprise tier', wakubo: '$0 Instant free reshoots' },
  { metric: 'Upfront Setup & Commitments', traditional: 'Studio contracts & retainers', flixstock: 'Enterprise contract required', wakubo: 'Zero setup fees, cancel anytime' },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [garmentsCount, setGarmentsCount] = useState(50);

  // Calculations for ROI Calculator
  const traditionalCost = garmentsCount * 280;
  const flixstockCost = garmentsCount * 35 + 2000;
  const wakuboCost = Math.round(garmentsCount * 3.5 + 199);
  const totalSavings = traditionalCost - wakuboCost;
  const timeSavedWeeks = Math.max(2, Math.round(garmentsCount / 10));

  return (
    <section id="pricing" className="pricing-section">
      <div className="wrap">
        <div className="section-head text-center">
          <div className="eyebrow">Pricing & Cost Study</div>
          <h2>
            Transparent Pricing. <em>Zero</em> Studio Overhead.
          </h2>
          <p>
            Unlike traditional photoshoots that cost thousands per collection or enterprise software with hidden quotes,
            Wakubo offers simple, predictable plans with upfront costs.
          </p>

          {/* Billing Switcher */}
          <div className="billing-toggle">
            <button
              className={`b-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`b-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly Billing <span className="save-tag">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="badge-popular">MOST POPULAR FOR BRANDS</span>}
                <div className="p-card-top">
                  <h3 className="p-plan-name">{plan.name}</h3>
                  <p className="p-plan-tagline">{plan.tagline}</p>
                  <div className="p-price-box">
                    <span className="p-currency">$</span>
                    <span className="p-amount">{price}</span>
                    <span className="p-period">/ month</span>
                  </div>
                  <div className="p-look-cost">Effective cost: <strong>{plan.perLookCost} / look</strong></div>
                </div>

                <ul className="p-feat-list">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <span className="chk">✓</span> {feat}
                    </li>
                  ))}
                </ul>

                <div className="p-card-bottom">
                  <a href="#contact" className={`btn ${plan.popular ? 'btn-solid' : ''} p-cta-btn`}>
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI / Cost Savings Calculator */}
        <div className="roi-calculator-box">
          <div className="roi-head">
            <div className="eyebrow" style={{ color: 'var(--brass)' }}>Interactive Cost Calculator</div>
            <h3>Calculate Your Collection Production Savings</h3>
            <p>Compare actual production costs for your seasonal catalog volume across all approaches.</p>
          </div>

          <div className="roi-slider-container">
            <div className="slider-label-row">
              <span>Garments / Products per Season:</span>
              <strong className="garment-count-display">{garmentsCount} Products</strong>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={garmentsCount}
              onChange={(e) => setGarmentsCount(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="slider-ticks">
              <span>10 looks</span>
              <span>100 looks</span>
              <span>200 looks</span>
              <span>300 looks</span>
            </div>
          </div>

          <div className="roi-results-grid">
            <div className="roi-res-card traditional">
              <span className="r-label">Traditional Photo Shoot</span>
              <div className="r-val">${traditionalCost.toLocaleString()}</div>
              <span className="r-sub">Studio, Model, Photographer & Retoucher</span>
            </div>

            <div className="roi-res-card flixstock">
              <span className="r-label">FlixStock Enterprise</span>
              <div className="r-val">${flixstockCost.toLocaleString()}</div>
              <span className="r-sub">Software SaaS + Setup & Per-Image Fee</span>
            </div>

            <div className="roi-res-card wakubo highlight">
              <span className="r-label">Wakubo Platform</span>
              <div className="r-val">${wakuboCost.toLocaleString()}</div>
              <span className="r-sub">All-in-one AI Stills, Reels & Model Cast</span>
            </div>
          </div>

          <div className="roi-banner">
            <div className="roi-banner-stat">
              <span>YOUR ESTIMATED SEASONAL SAVINGS:</span>
              <strong className="savings-amount">${totalSavings.toLocaleString()} Saved</strong>
            </div>
            <div className="roi-banner-time">
              <span>TURNAROUND SAVED:</span>
              <strong>{timeSavedWeeks} Weeks Faster</strong>
            </div>
          </div>
        </div>

        {/* Cost Matrix Comparison Table */}
        <div className="matrix-container">
          <h3>Cost & Feature Matrix: Traditional vs FlixStock vs Wakubo</h3>
          <div className="matrix-table-wrapper">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Feature / Cost Dimension</th>
                  <th>Traditional Shoot</th>
                  <th>FlixStock.com</th>
                  <th className="wakubo-col">Wakubo Studio</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx}>
                    <td className="m-metric">{row.metric}</td>
                    <td className="m-trad">{row.traditional}</td>
                    <td className="m-flix">{row.flixstock}</td>
                    <td className="m-wakubo">{row.wakubo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
