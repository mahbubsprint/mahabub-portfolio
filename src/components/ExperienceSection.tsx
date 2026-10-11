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
            <div key={j.title} className="card timeline-item">
              <h5>{j.title}</h5>
              <h6>{j.org} | {j.location} ({j.period})</h6>
              <p>{j.desc}</p>
            </div>
          ))}
        </div>
        <h3 className="mac-section-title">Education</h3>
        <div className="timeline">
          {experience.education.map((e) => (
            <div key={e.title} className="card timeline-item">
              <h5>{e.title}</h5>
              <h6>{e.org}</h6>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
