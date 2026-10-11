import Image from "next/image";
import Link from "next/link";

const philosophy = [
  { icon: "🖥️", cls: "icon-teal", title: "User-Centric Engineering", desc: "I build applications that feel as good as they look — balancing architectural discipline with focus on user experience and accessibility." },
  { icon: "⚙️", cls: "icon-purple", title: "Scalable Architecture", desc: "My backend philosophy is simple: use the best tool for the job. I architect high-concurrency services using Laravel, Node.js, and RESTful APIs." },
  { icon: "🗄️", cls: "icon-green", title: "Robust Infrastructure", desc: "Great software needs a solid foundation. From relational databases to MongoDB, I design data ecosystems that scale with the product." },
  { icon: "👥", cls: "icon-amber", title: "Collaboration & Growth", desc: "Engineering is a team sport. I value clear communication, thorough code reviews, and mentoring — building better engineers alongside better products." },
];

const aboutChips = [
  { name: "PHP", color: "#e44d26" },
  { name: "Laravel", color: "#ff2d20" },
  { name: "React.js", color: "#61dafb" },
  { name: "Node.js", color: "#68a063" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Next.js", color: "#555" },
];

export default function AboutSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// about</div>

      <div className="about-grid">
        <div className="about-pic-wrap">
          <div className="card about-pic">
            <Image src="/images/profile/1.jpg" alt="Mahabub Mollah" width={400} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <div className="about-text-col">
          <p className="about-role-label">Full Stack Developer | 8+ Years</p>
          <h2>Architecting <span className="accent-text">Scalable Systems</span>.</h2>
          <p className="about-body">
            As a Full-stack developer, I always allow myself to attain technical skills as well as to cope up with new technologies.
            I am highly skilled with PHP, Laravel, CakePHP, JavaScript, React.js, Node.js, Next.js and MongoDB.
            I have 8+ years of experience developing different web applications and I am eager to learn new technologies.
          </p>
          <div className="chip-row wrap">
            {aboutChips.map((t) => (
              <span key={t.name} className="tech-chip">
                <span className="chip-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section-sub-heading">Engineering <span className="accent-text">Philosophy</span></h2>
      <div className="philosophy-grid">
        {philosophy.map((p) => (
          <div key={p.title} className="card philosophy-card">
            <span className={`card-icon ${p.cls}`}>{p.icon}</span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="section-sub-heading"><span className="accent-text">Professional</span> Trust</h2>
      <div className="testimonial-grid">
        {[
          { initial: "A", name: "Colleague Name", title: "Title @ Company" },
          { initial: "B", name: "Colleague Name", title: "Title @ Company" },
        ].map((t, i) => (
          <div key={i} className="card testimonial-card">
            <div className="quote-mark">❝</div>
            <p className="testimonial-text placeholder-text">
              Add a testimonial from a colleague or manager here. Great testimonials speak to your specific impact and working style.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <div className="author-name placeholder-text">{t.name}</div>
                <div className="author-title placeholder-text">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
