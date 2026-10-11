import MacWindow from "./MacWindow";

export default function ContactSection() {
  return (
    <section className="container section">
      <div className="eyebrow">// contact</div>
      <h2>Contact <span className="accent-text">Details</span></h2>
      <MacWindow title="mahabub@portfolio — contact" cmd="Contact Details Loaded.">
        <div className="card contact-card">
          <div className="address">
            Mahabub Mollah<br />
            Kollyanpur, Dhaka, Bangladesh.<br />
            mahbubsprint310@gmail.com<br />
            01781227493
          </div>
          <a href="/mahbub.docx" className="nav-cta">
            Download CV <i className="fa fa-external-link" />
          </a>
        </div>
      </MacWindow>
    </section>
  );
}
