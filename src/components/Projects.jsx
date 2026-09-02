import Reveal from "./Reveal";
import { projects } from "../data/content";
import "./sections.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="section-head">
          <Reveal>
            <div className="eyebrow">
              Projects
            </div>

            <h2 className="section-title">
              Hands-on Cloud Infrastructure
            </h2>

            <p className="section-sub">
              Practical AWS and Azure projects focused on
              availability, networking, security, automation
              and monitoring.
            </p>
          </Reveal>
        </div>

        <div className="grid-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              className="card info-card"
            >
              <span className="pill">
                {project.category}
              </span>

              <h3
                className="info-card__title"
                style={{ marginTop: 18 }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  marginTop: 14,
                  lineHeight: 1.6,
                  color: "var(--slate-600)",
                }}
              >
                {project.description}
              </p>

              <div
                className="topic-list"
                style={{ marginTop: 18 }}
              >
                {project.technologies.map((technology) => (
                  <span className="pill" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <ul
                style={{
                  marginTop: 20,
                  paddingLeft: 20,
                  lineHeight: 1.7,
                  color: "var(--slate-600)",
                }}
              >
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ marginTop: 22 }}
              >
                View on GitHub →
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}