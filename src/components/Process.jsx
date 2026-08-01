const STEPS = [
  {
    num: '01',
    title: 'Cast your model',
    body: 'Tell us the look your brand needs — build, features, presence. We generate a consistent identity and hand you a reference sheet before anything gets dressed.',
  },
  {
    num: '02',
    title: 'Dress every piece',
    body: 'Send garments as you finish them. We place each one on your model, matched to real fit, fabric weight, and drape — not a flat overlay.',
  },
  {
    num: '03',
    title: 'Ship stills and reels',
    body: 'You get full photo sets and short vertical reels back, sized for your site, lookbook, or ad placements — ready the same week a shoot would normally still be on the calendar.',
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">How a roll gets shot</div>
          <h2>Three steps, in the order they actually happen.</h2>
        </div>
        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-item" key={step.num}>
              <span className="process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
