import Image from "next/image";
import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { about, site } = content;

export default function AboutSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// about</div>

      <MacWindow title="mahabub@portfolio — about" cmd="Profile Loaded Successfully.">
        <div className="about-grid">
          <div className="about-pic-wrap">
            <div className="card about-pic">
              <Image src={site.profileImage} alt={site.name} width={400} height={400} style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
          <div className="about-text-col">
            <p className="about-role-label">{site.role}</p>
            <h2>Architecting <span className="accent-text">Scalable Systems</span>.</h2>
            <p className="about-body">{about.bio}</p>
            <div className="chip-row wrap">
              {about.techStack.map((t) => (
                <span key={t.name} className="tech-chip">
                  <span className="chip-dot" style={{ background: t.color }} />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mac-section-title">Engineering <span className="accent-text">Philosophy</span></h3>
        <div className="philosophy-grid">
          {about.philosophy.map((p) => (
            <div key={p.title} className="card philosophy-card">
              <span className={`card-icon ${p.cls}`}>{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mac-section-title"><span className="accent-text">Professional</span> Trust</h3>
        <div className="testimonial-grid">
          {about.testimonials.map((t, i) => (
            <div key={i} className="card testimonial-card">
              <div className="quote-mark">❝</div>
              <p className="testimonial-text placeholder-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div>
                  <div className="author-name placeholder-text">{t.name}</div>
                  <div className="author-title placeholder-text">{t.jobTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
