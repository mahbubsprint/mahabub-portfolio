const stats = [
  { label: "Metric One", value: "XX", unit: "+", icon: "👥", arrow: false, desc: "Describe this stat here." },
  { label: "Metric Two", value: "XX", unit: "%", icon: "⚡", arrow: true, desc: "Describe this stat here." },
  { label: "Metric Three", value: "XX", unit: "+", icon: "🌍", arrow: false, desc: "Describe this stat here." },
  { label: "Metric Four", value: "XX", unit: "%", icon: "🛡️", arrow: true, desc: "Describe this stat here." },
];

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="container text-center">
        <h2>Engineering <span className="accent-text">Impact</span>.</h2>
        <p className="impact-sub placeholder-text">
          Add a short line here about the measurable impact of your engineering work.
        </p>
        <div className="stat-grid">
          {stats.map((s) => (
            <div key={s.label} className="card stat-card">
              <div className="stat-bg-icon">{s.icon}</div>
              <h5>{s.label}</h5>
              <div className="stat-value">
                {s.value}
                <span className="unit">{s.unit}</span>
                {s.arrow && <span className="stat-icon-up">↑</span>}
              </div>
              <hr />
              <p className="placeholder-text">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
