const STATS = [
  { num: '85%', lbl: 'AVERAGE COST SAVINGS VS TRADITIONAL SHOOTS' },
  { num: '< 60s', lbl: 'AI STILL & VIDEO GENERATION SPEED' },
  { num: '$2.50', lbl: 'EFFECTIVE COST PER HIGH-RES ON-MODEL LOOK' },
  { num: '100%', lbl: 'MODEL IDENTITY CONSISTENCY ACROSS SEASONS' },
];

export default function Stats() {
  return (
    <div className="stats wrap" style={{ marginTop: 0 }}>
      {STATS.map((s) => (
        <div className="stat" key={s.lbl}>
          <div className="num">{s.num}</div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
