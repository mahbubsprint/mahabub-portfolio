import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { projects } = content;

export default function ProjectsSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// projects</div>
      <h2>Let&apos;s See My <span className="accent-text">Work</span></h2>
      <MacWindow title="mahabub@portfolio — projects" cmd="Projects Initialized.">
        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.title} className="card project-card">
              <div className="project-header">
                <h4>{p.title}</h4>
                <span className="period-badge">{p.period}</span>
              </div>
              <ul className="bullet-list">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="project-footer">
                <p className="project-stack">{p.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
