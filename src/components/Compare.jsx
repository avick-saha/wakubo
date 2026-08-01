const ROWS = [
  {
    label: 'Timeline',
    old: '4–6 weeks with booking, fittings, retouching',
    next: 'Days from garment to delivered set',
  },
  {
    label: 'Formats',
    old: 'Separate photo and video shoots, separate crews',
    next: 'Stills and reels from the same cast model',
  },
  {
    label: 'Cost per look',
    old: 'Studio, crew, model day-rate, retouch fees',
    next: 'A fraction of a single shoot day',
  },
  {
    label: 'Reshoots',
    old: 'Re-book everyone, re-pay everyone',
    next: 'Send the correction, get a new frame',
  },
  {
    label: 'Model exclusivity',
    old: 'Shared with other brands the model books',
    next: 'A face generated for, and owned by, you',
  },
];

export default function Compare() {
  return (
    <section id="compare">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why brands switch</div>
          <h2>
            The traditional shoot, <em>line by line</em>.
          </h2>
        </div>
        <table className="compare">
          <thead>
            <tr>
              <th></th>
              <th>Traditional shoot</th>
              <th>Wakubo</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td className="old">{row.old}</td>
                <td className="new">{row.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
