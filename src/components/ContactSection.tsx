import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { site } = content;

export default function ContactSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// contact</div>
      <h2>Contact <span className="accent-text">Details</span></h2>
      <MacWindow title="mahabub@portfolio — contact" cmd="Contact Details Loaded.">
        <div className="card contact-card">
          <div className="address">
            {site.name}<br />
            {site.location}.<br />
            {site.email}<br />
            {site.phone}
          </div>
          <a href={site.resumeFile} className="nav-cta">
            Download CV <i className="fa fa-external-link" />
          </a>
        </div>
      </MacWindow>
    </section>
  );
}
