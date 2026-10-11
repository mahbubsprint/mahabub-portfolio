"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import content from "@/data/content.json";

const { site, social } = content;

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
  const [dropOpen, setDropOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Read saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved !== "light";
    setDarkMode(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    const theme = next ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header id="top-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner container">
        <Link href="/" className="brand">
          <Image src={site.profileImage} className="brand-avatar" alt={site.name} width={32} height={32} />
          MAHABUB.
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`link-item${pathname === l.href ? " active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="nav-cta-wrapper" ref={dropRef}>
            <a href={site.resumeFile} className="nav-cta">
              Resume <i className="fa fa-external-link" />
            </a>
            <button className="nav-cta-caret" onClick={() => setDropOpen((p) => !p)}>
              {dropOpen ? "▲" : "▼"}
            </button>

            {dropOpen && (
              <div className="nav-dropdown">
                <a className="drop-item" href={social.github} target="_blank" rel="noreferrer">
                  <i className="fa fa-github" /> GitHub Profile
                </a>
                <a className="drop-item" href={site.resumeFile}>
                  <i className="fa fa-download" /> Download Resume
                </a>
                <a className="drop-item" href={social.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin" /> LinkedIn
                </a>
                <hr className="drop-divider" />
                <button className="drop-item drop-toggle" onClick={toggleTheme}>
                  <i className={`fa fa-${darkMode ? "sun-o" : "moon-o"}`} />
                  {darkMode ? "Light Mode" : "Dark Mode"}
                  <span className={`toggle-pill${darkMode ? "" : " on"}`} />
                </button>
              </div>
            )}
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
