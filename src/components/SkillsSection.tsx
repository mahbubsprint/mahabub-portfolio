import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { skills } = content;

export default function SkillsSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// skills</div>
      <h2>Technical <span className="accent-text">Skills</span></h2>
      <MacWindow title="mahabub@portfolio — skills" cmd="Stack Initialized Successfully.">
        <div className="skills-grid">
          {skills.map((cat) => (
            <div key={cat.label} className="card skill-cat-card">
              <div className="skill-cat-ghost">{cat.ghost}</div>
              <div className="skill-cat-head">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h4>{cat.label}</h4>
              </div>
              <hr />
              <div className="chip-row wrap">
                {cat.skills.map((s) => (
                  <span key={s.name} className="tech-chip">
                    <span className="chip-dot" style={{ background: s.color }} />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
