const QUOTES = [
  {
    quote:
      'We cut our external studio bookings by most of what we used to pay for outerwear season, and the model still looks like ours across every drop.',
    name: 'Studio Lead',
    org: 'Resort knitwear label',
  },
  {
    quote:
      'The reels were the surprise. We used to shoot stills only and pay a separate crew for marketplace video — now both come off the same roll.',
    name: 'Growth Marketing',
    org: 'DTC footwear brand',
  },
  {
    quote:
      'Reshoots used to mean re-booking a model and a studio day. Now a correction is just a new frame sent back the same afternoon.',
    name: 'Production Manager',
    org: 'Multi-brand marketplace',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">From the studio floor</div>
          <h2>
            What brands notice <em>first</em>.
          </h2>
        </div>
        <div className="testimonial-grid">
          {QUOTES.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <span className="quote-mark">&ldquo;</span>
              <p className="quote">{t.quote}</p>
              <div className="attr">
                <b>{t.name}</b>
                {t.org}
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-note">Illustrative quotes — composited from early studio pilots.</div>
      </div>
    </section>
  );
}
