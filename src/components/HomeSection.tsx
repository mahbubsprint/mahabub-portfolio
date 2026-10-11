export default function HomeSection() {
  return (
    <section id="home" className="container bento-section">
      {/* Hero row */}
      <div className="bento-row hero-row">
        <div className="card hero-card">
          <div className="hero-bg" />
          <div className="hero-content">
            <p className="hero-hello">Hello <span>👋</span>, I&apos;m</p>
            <h1 className="hero-name">Mahabub Mollah</h1>
            <p className="hero-tagline">
              Architecting <span className="accent-text">Scalable Web Apps</span>
              <span className="cursor">_</span>
            </p>
            <p className="hero-connect">Let&apos;s Connect <span>🤝</span></p>
            <ul className="social">
              <li><a href="https://bd.linkedin.com/in/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.facebook.com/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href="skype:extreme_mahbub?userinfo"><i className="fa fa-skype" /></a></li>
            </ul>
          </div>
        </div>

        <div className="side-col">
          <div className="card ask-card">
            <div className="card-head">
              <span className="card-icon icon-indigo">💬</span>
              <h3>AskMahabub</h3>
              <a className="ext-link" href="#contact"><i className="fa fa-external-link" /></a>
            </div>
            <p className="ask-desc">I&apos;m powered by Mahabub&apos;s data. Ask me anything about his projects, skills, or experience.</p>
            <input className="ask-input" type="text" placeholder="What experience does Mahabub have?" disabled />
            <div className="chip-row">
              <button className="suggest-chip" type="button">Tell me about Mahabub.</button>
              <button className="suggest-chip active" type="button">What experience does Mahabub have?</button>
              <button className="suggest-chip" type="button">Give me important links.</button>
            </div>
          </div>
          <div className="card explore-card">
            <h4>Explore</h4>
            <a className="explore-row" href="#projects">View Projects <span>→</span></a>
            <a className="explore-row" href="#experience">View Career Path <span>→</span></a>
          </div>
        </div>
      </div>

      {/* Three-col row */}
      <div className="bento-row three-col">
        <div className="card mini-card">
          <div className="card-head">
            <span className="card-icon icon-purple">🎤</span>
            <a className="ext-link" href="#contact"><i className="fa fa-external-link" /></a>
          </div>
          <h4>Talks</h4>
          <p className="mini-desc placeholder-text">Add your speaking engagements here</p>
        </div>

        <div className="card mini-card">
          <div className="card-head">
            <span className="card-icon icon-green">🌿</span>
            <a className="ext-link" href="https://github.com/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-external-link" /></a>
          </div>
          <h4>Top Contributions</h4>
          <p className="mini-desc placeholder-text">Add your open-source contributions here</p>
        </div>

        <div className="card stack-card">
          <div className="stack-head">
            <h4>Core Stack</h4>
            <a href="#skills">View All →</a>
          </div>
          <hr />
          <div className="chip-row wrap">
            {[
              { name: "PHP", color: "#e44d26" },
              { name: "Laravel", color: "#ff2d20" },
              { name: "CakePHP", color: "#e84393" },
              { name: "JavaScript", color: "#f7df1e" },
              { name: "React.js", color: "#61dafb" },
              { name: "Node.js", color: "#68a063" },
              { name: "Next.js", color: "#555" },
              { name: "Express.js", color: "#68a063" },
              { name: "MongoDB", color: "#4db33d" },
            ].map((t) => (
              <span key={t.name} className="tech-chip">
                <span className="chip-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
