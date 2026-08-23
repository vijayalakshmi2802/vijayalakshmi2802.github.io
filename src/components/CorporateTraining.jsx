import { ArrowRight } from "lucide-react";
import { corporateAreas } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function CorporateTraining() {
  return (
    <section id="corporate" className="section section-alt">
      <div className="container split-panel">
        <Reveal>
          <div className="eyebrow">Corporate & Professional Training</div>
          <h2 className="section-title">Practical Training for Working Professionals</h2>
          <p className="section-sub">
            Delivering practical technical training for working professionals, including
            participants from Gulf countries. Delivery: Online | Offline | Customized Corporate Programs.
          </p>
          <div className="split-panel__stat">
            <b>20+</b>
            <span>Working Professionals Trained</span>
          </div>
          <div style={{ marginTop: 26 }}>
            <a href="#contact" className="btn btn-primary">
              Discuss Corporate Training <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card info-card">
          <div className="info-card__title">Professional Training Areas</div>
          <div className="topic-list">
            {corporateAreas.map((item) => <span className="pill" key={item}>{item}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
