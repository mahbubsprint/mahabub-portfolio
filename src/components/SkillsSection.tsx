const skills = [
  { name: "PHP", color: "#e44d26" },
  { name: "Laravel", color: "#ff2d20" },
  { name: "CakePHP", color: "#e84393" },
  { name: "Magento 2x", color: "#ff6700" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "jQuery", color: "#0769ad" },
  { name: "React.js", color: "#61dafb" },
  { name: "Node.js", color: "#68a063" },
  { name: "Next.js", color: "#555" },
  { name: "Express.js", color: "#68a063" },
  { name: "MongoDB", color: "#4db33d" },
  { name: "Ajax", color: "#0076c6" },
  { name: "JSON", color: "#5a5a5a" },
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#1572b6" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container section">
      <div className="eyebrow">// skills</div>
      <h2>Technical <span className="accent-text">Skills</span></h2>
      <div className="card skills-card">
        <div className="chip-row wrap">
          {skills.map((s) => (
            <span key={s.name} className="tech-chip">
              <span className="chip-dot" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
