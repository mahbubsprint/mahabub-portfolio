const categories = [
  {
    icon: "💻",
    ghost: "</>",
    label: "Languages",
    skills: [
      { name: "PHP", color: "#e44d26" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "HTML", color: "#e34c26" },
      { name: "CSS", color: "#1572b6" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "SQL", color: "#4479a1" },
    ],
  },
  {
    icon: "🖥️",
    ghost: "◻",
    label: "Frontend",
    skills: [
      { name: "React.js", color: "#61dafb" },
      { name: "Next.js", color: "#555" },
      { name: "jQuery", color: "#0769ad" },
      { name: "Bootstrap", color: "#7952b3" },
      { name: "Ajax", color: "#0076c6" },
    ],
  },
  {
    icon: "⚙️",
    ghost: "⚙",
    label: "Backend",
    skills: [
      { name: "Laravel", color: "#ff2d20" },
      { name: "CakePHP", color: "#e84393" },
      { name: "Node.js", color: "#68a063" },
      { name: "Express.js", color: "#68a063" },
      { name: "Magento 2x", color: "#f47621" },
    ],
  },
  {
    icon: "🗄️",
    ghost: "◫",
    label: "Databases",
    skills: [
      { name: "MongoDB", color: "#4db33d" },
      { name: "MySQL", color: "#4479a1" },
      { name: "PostgreSQL", color: "#336791" },
    ],
  },
  {
    icon: "🔧",
    ghost: "⚒",
    label: "Tools & DevOps",
    skills: [
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#555" },
      { name: "VS Code", color: "#007acc" },
      { name: "Postman", color: "#ff6c37" },
      { name: "npm", color: "#cb3837" },
    ],
  },
  {
    icon: "☁️",
    ghost: "☁",
    label: "Cloud & Hosting",
    skills: [
      { name: "GitHub Pages", color: "#333" },
      { name: "Vercel", color: "#555" },
      { name: "AWS", color: "#ff9900" },
      { name: "cPanel", color: "#ff6c37" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// skills</div>
      <h2>Technical <span className="accent-text">Skills</span></h2>

      <div className="mac-window">
        {/* Title bar */}
        <div className="mac-titlebar">
          <span className="mac-dot mac-red" />
          <span className="mac-dot mac-yellow" />
          <span className="mac-dot mac-green" />
          <span className="mac-title">mahabub@portfolio — skills</span>
        </div>

        {/* Skills grid inside */}
        <div className="mac-body">
          <div className="skills-grid">
            {categories.map((cat) => (
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
        </div>

        {/* Terminal footer */}
        <div className="mac-footer">
          <span className="mac-prompt">~</span>
          <span className="mac-cmd">echo <span className="mac-str">&quot;Stack Initialized Successfully.&quot;</span></span>
        </div>
      </div>
    </section>
  );
}
