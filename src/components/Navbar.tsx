"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = ["home", "about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("main > section[id]");
      let current = "home";
      sections.forEach((sec) => {
        if (window.scrollY + 90 >= (sec as HTMLElement).offsetTop) {
          current = sec.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="top-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner container">
        <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
          <Image src="/images/profile/1.jpg" className="brand-avatar" alt="Mahabub Mollah" width={32} height={32} />
          MAHABUB.
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <button
              key={l}
              className={`link-item${active === l ? " active" : ""}`}
              onClick={() => scrollTo(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="nav-cta-wrapper">
            <a href="/mahbub.docx" className="nav-cta">
              Resume <i className="fa fa-external-link" />
            </a>
            <button className="nav-cta-caret">&#8964;</button>
          </div>
        </div>

        <div id="menuToggle">
          <input type="checkbox" />
          <span /><span /><span />
          <ul id="menu">
            {links.map((l) => (
              <li key={l}>
                <button className="link-item" onClick={() => scrollTo(l)}>
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              </li>
            ))}
            <li><a href="/mahbub.docx" className="link-item nav-cta-mobile">Resume</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
