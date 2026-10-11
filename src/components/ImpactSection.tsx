import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { impact } = content;

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="container text-center">
        <h2>Engineering <span className="accent-text">Impact</span>.</h2>
        <p className="impact-sub placeholder-text">{impact.subtitle}</p>
        <MacWindow title="mahabub@portfolio — impact" cmd="Engineering Impact Loaded.">
          <div className="stat-grid">
            {impact.stats.map((s) => (
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
        </MacWindow>
      </div>
    </section>
  );
}
