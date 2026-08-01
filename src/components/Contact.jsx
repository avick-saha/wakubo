import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState('growth');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="cta-band" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: 'var(--brass)' }}>
            Start Your Sample Shoot
          </div>
          <h2>
            Let's shoot your <em>next collection</em> with AI models.
          </h2>
          <p>
            Tell us about your label and expected catalog volume. We'll send back a free sample lookbook
            featuring your garments on a custom AI Soul model with video reels included.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="brand">Brand name</label>
              <input id="brand" type="text" placeholder="Your label / E-commerce brand" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@yourbrand.com" required />
            </div>

            <div className="field">
              <label htmlFor="plan">Target Plan Interest</label>
              <select
                id="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="select-field"
              >
                <option value="starter">Starter Plan ($49/mo — 25 looks)</option>
                <option value="growth">Growth Pro ($199/mo — 200 looks + Custom Model)</option>
                <option value="enterprise">Enterprise Scale ($499/mo — Unlimited + API)</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="msg">Catalog volume & timeline</label>
              <textarea id="msg" placeholder="Category (e.g. Outerwear, Swimwear), estimated looks per season, website URL..." />
            </div>

            <div style={{ marginTop: 8 }}>
              <button
                type="submit"
                className="btn btn-solid"
                style={{ borderColor: 'var(--brass)', background: 'var(--brass-deep)' }}
              >
                Request Sample AI Shoot & Quote
              </button>
            </div>

            {submitted && (
              <div
                className="submit-note"
                style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--brass)', marginTop: 8 }}
              >
                ✓ Request received! Our AI studio team will generate your sample renders within 24 hours.
              </div>
            )}
          </form>

          <div className="contact-side">
            <div>
              <div>Wakubo AI Studio</div>
              <div className="line"></div>
              <div>
                General & Partner Enquiries
                <br />
                <a href="mailto:hello@wakubo.studio">hello@wakubo.studio</a>
              </div>
            </div>

            <div>
              <div className="line"></div>
              <div>
                <strong>Turnaround SLA:</strong> Under 24 hours for custom model onboarding and sample catalog renders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
