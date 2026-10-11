"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner container">
        <Link href="/" className="brand">
          <Image src="/images/profile/1.jpg" className="brand-avatar" alt="Mahabub Mollah" width={32} height={32} />
          MAHABUB.
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-item${pathname === l.href ? " active" : ""}`}
            >
              {l.label}
            </Link>
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
              <li key={l.href}>
                <Link href={l.href} className="link-item">{l.label}</Link>
              </li>
            ))}
            <li><a href="/mahbub.docx" className="link-item nav-cta-mobile">Resume</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
