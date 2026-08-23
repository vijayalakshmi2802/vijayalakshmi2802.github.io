import { expertise } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function Expertise() {
  return (
    <section id="expertise" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Training Expertise</div>
            <h2 className="section-title">What I Train, Across Five Domains</h2>
            <p className="section-sub">
              A single trainer covering the full stack a technical career needs — from
              placement-ready programming to cloud administration and applied data skills.
            </p>
          </Reveal>
        </div>

        <div className="grid-3">
          {expertise.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="card info-card">
              <div className="info-card__title">{group.title}</div>
              <div className="topic-list">
                {group.items.map((item) => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
