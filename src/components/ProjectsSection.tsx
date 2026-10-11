"use client";
import { useState } from "react";
import MacWindow from "./MacWindow";
import content from "@/data/content.json";

const { projects } = content;

const ALL_FILTERS = ["All", "In Progress", "Full-Stack", "Frontend", "Backend", "Microservices"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(active));

  return (
    <section className="container section">
      <div className="eyebrow">// projects</div>
      <h2>Let&apos;s See My <span className="accent-text">Work</span></h2>

      <div className="filter-bar">
        {ALL_FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? " filter-btn--active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <MacWindow title="mahabub@portfolio — projects" cmd={`Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""}.`}>
        {filtered.length === 0 ? (
          <p className="filter-empty">No projects match this filter.</p>
        ) : (
          <div className="project-grid">
            {filtered.map((p) => (
              <div key={p.title} className="card project-card">
                <div className="project-header">
                  <h4>{p.title}</h4>
                  <span className="period-badge">{p.period}</span>
                </div>
                {p.tags && (
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                )}
                <ul className="bullet-list">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="project-footer">
                  <p className="project-stack">{p.stack}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </MacWindow>
    </section>
  );
}
