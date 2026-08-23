import { ArrowRight } from "lucide-react";
import { programs } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function Programs() {
  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Programs for Colleges</div>
            <h2 className="section-title">Structured Programs, Ready to Deploy</h2>
            <p className="section-sub">
              Each program can be scaled and customized to your institution's timeline, batch size,
              and student level.
            </p>
          </Reveal>
        </div>

        <div className="grid-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className="card program-card">
              <div className="program-card__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="program-card__title">{p.name}</div>
              <p className="program-card__desc">{p.desc}</p>
              <a href="#contact" className="program-card__cta">
                {p.cta} <ArrowRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
