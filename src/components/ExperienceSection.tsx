const jobs = [
  { title: "Software Engineer", org: "BJIT Limited | Dhaka, Bangladesh (2020 - Till Now)", desc: "Requirement gathering • Requirement Analysis • System Impact Analysis • System Design • Change Request Management • Bug Analysis • Bug Reproduction • Verification • Coding • Testing • Estimations." },
  { title: "Associate Software Engineer", org: "Antopolish | Dhaka, Bangladesh (2018-2020)", desc: "Developed Web Application • Requirement gathering • Requirement analysis • Database design • Bug Analysis • Bug Reproduction • Verification • Coding • Testing • Estimations." },
  { title: "Web Developer", org: "Future Track It | Dhaka, Bangladesh (2016-2017)", desc: "Developed Web Application • Requirement gathering • Requirement analysis • Database design • Bug Analysis • Bug Reproduction • Verification • Coding • Testing • Estimations." },
];

const education = [
  { title: "Dhaka International University", org: "B.Sc in Computer Science and Engineering", desc: "CGPA: 3.60 • Dhaka, Bangladesh" },
  { title: "Saheed Police Smrity College", org: "Highersecondary Studies in Science", desc: "H.S.C • Science • Dhaka, Bangladesh" },
  { title: "Malkhanagar Highschool & College", org: "Secondary School Certificate", desc: "S.S.C • Science • Munshigonj, Dhaka, Bangladesh" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="container section">
      <div className="eyebrow">// experience</div>
      <h2>Professional <span className="accent-text">Experience</span></h2>
      <div className="timeline">
        {jobs.map((j) => (
          <div key={j.title} className="card timeline-item">
            <h5>{j.title}</h5>
            <h6>{j.org}</h6>
            <p>{j.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="sub-heading">Education</h2>
      <div className="timeline">
        {education.map((e) => (
          <div key={e.title} className="card timeline-item">
            <h5>{e.title}</h5>
            <h6>{e.org}</h6>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
