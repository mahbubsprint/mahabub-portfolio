import Image from "next/image";
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
            <a key={p.title} href={p.href} className="card project-card">
              <Image src={p.img} alt={p.title} width={400} height={240} style={{ width: "100%", height: "auto" }} />
              <div className="project-data">
                <h4>{p.title}</h4>
                <p>{p.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
