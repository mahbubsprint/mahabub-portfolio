import Image from "next/image";

const projects = [
  { img: "/images/portfolio/Biyeshamlao.png", title: "Weeding Management Application", stack: "Laravel, JQuery, Bootstrap, CSS", href: "#" },
  { img: "/images/portfolio/PeopleScape.png", title: "Peoplescape for HR", stack: "Laravel, JQuery, CSS", href: "#" },
  { img: "/images/portfolio/FxSuccessBD.png", title: "Forex Trading Site", stack: "Laravel, JQuery, Bootstrap3, CSS", href: "#" },
  { img: "/images/portfolio/Willvote.png", title: "Mobile User Based Voting App", stack: "Laravel, React.js", href: "#" },
  { img: "/images/portfolio/Bms.png", title: "Bimatric Solution", stack: "CakePHP, JQuery, Bootstrap3, CSS", href: "#" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="container section">
      <div className="eyebrow">// projects</div>
      <h2>Let&apos;s See My <span className="accent-text">Work</span></h2>
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
    </section>
  );
}
