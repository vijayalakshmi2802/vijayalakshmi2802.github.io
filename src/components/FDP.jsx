import { ArrowRight } from "lucide-react";
import { fdpTopics } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function FDP() {
  return (
    <section id="fdp" className="section">
      <div className="container split-panel">
        <Reveal>
          <div className="eyebrow">Faculty Development Programs</div>
          <h2 className="section-title">Customized Upskilling for Faculty & Institutions</h2>
          <p className="section-sub">
            FDP programs can be customized based on the institution's academic objectives, faculty
            skill levels, duration, and technology requirements.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 26 }}>
            Request an FDP Proposal <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="card info-card">
          <div className="info-card__title">FDP Topics</div>
          <div className="topic-list">
            {fdpTopics.map((item) => <span className="pill" key={item}>{item}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
