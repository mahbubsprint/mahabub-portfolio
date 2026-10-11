import Link from "next/link";
import TypewriterText from "./TypewriterText";
import content from "@/data/content.json";

const { site, social, home } = content;

export default function HomeSection() {
  return (
    <section id="home" className="container bento-section">
      {/* Hero row — full width */}
      <div className="bento-row">
        <div className="card hero-card hero-full">
          <div className="hero-bg" />
          <div className="hero-content">
            <p className="hero-hello">Hello <span>👋</span>, I&apos;m</p>
            <h1 className="hero-name">{site.name}</h1>
            <p className="hero-tagline">
              {site.tagline} <TypewriterText />
            </p>
            <p className="hero-connect">Let&apos;s Connect <span>🤝</span></p>
            <ul className="social">
              <li><a href={social.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
              <li><a href={social.github} target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
              <li><a href={social.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href={social.skype}><i className="fa fa-skype" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Stack row */}
      <div className="bento-row">
        <div className="card stack-card stack-full">
          <div className="stack-head">
            <h4>Core Stack</h4>
            <Link href="/skills">View All →</Link>
          </div>
          <hr />
          <div className="chip-row wrap">
            {home.coreStack.map((t) => (
              <span key={t.name} className="tech-chip">
                <span className="chip-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ask & Explore — hidden until implemented */}
      <div hidden>
        <div className="card ask-card">
          <div className="card-head">
            <span className="card-icon icon-indigo">💬</span>
            <h3>AskMahabub</h3>
          </div>
          <p className="ask-desc">I&apos;m powered by Mahabub&apos;s data. Ask me anything about his projects, skills, or experience.</p>
          <input className="ask-input" type="text" placeholder="What experience does Mahabub have?" disabled />
        </div>
        <div className="card explore-card">
          <h4>Explore</h4>
          <Link className="explore-row" href="/projects">View Projects <span>→</span></Link>
          <Link className="explore-row" href="/experience">View Career Path <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
