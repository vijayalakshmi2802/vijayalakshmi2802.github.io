import { CheckCircle2 } from "lucide-react";
import { whyPartner } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function WhyPartner() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Why Partner With Me</div>
            <h2 className="section-title">Why Institutions Choose My Training</h2>
          </Reveal>
        </div>

        <div className="why__grid">
          {whyPartner.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className="card info-card">
              <div className="info-card__icon"><CheckCircle2 size={20} /></div>
              <div className="info-card__title">{w.title}</div>
              <p className="info-card__text">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
