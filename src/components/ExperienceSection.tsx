import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { experience } = content;

export default function ExperienceSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// experience</div>
      <h2>Professional <span className="accent-text">Experience</span></h2>
      <MacWindow title="mahabub@portfolio — experience" cmd="Career Path Loaded.">

        <div className="timeline">
          {experience.jobs.map((j) => (
            <div key={j.title + j.org} className="card timeline-item">
              <div className="timeline-header">
                <div>
                  <h5>{j.title}</h5>
                  <h6>{j.org} &mdash; {j.location}</h6>
                </div>
                <span className="period-badge">{j.period}</span>
              </div>
              <ul className="bullet-list">
                {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mac-section-title">Education</h3>
        <div className="timeline">
          {experience.education.map((e) => (
            <div key={e.title} className="card timeline-item">
              <h5>{e.title}</h5>
              <h6>{e.org}</h6>
              <p className="timeline-desc">{e.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mac-section-title">Certifications & <span className="accent-text">Awards</span></h3>
        <div className="cert-grid">
          {experience.certifications.map((c) => (
            <div key={c.title} className="card cert-card">
              <span className="cert-icon">🏅</span>
              <h5>{c.title}</h5>
              <p>{c.org}</p>
            </div>
          ))}
          {experience.awards.map((a) => (
            <div key={a.title} className="card cert-card award-card">
              <span className="cert-icon">🏆</span>
              <h5>{a.title}</h5>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

      </MacWindow>
    </section>
  );
}
