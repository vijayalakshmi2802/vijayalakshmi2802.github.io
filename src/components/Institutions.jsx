import { GraduationCap } from "lucide-react";
import { institutions } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function Institutions() {
  return (
    <section id="institutions" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Institutions & Training Experience</div>
            <h2 className="section-title">Delivering Placement-Oriented Training Across Engineering Institutions</h2>
          </Reveal>
        </div>

        <div className="inst__grid">
          {institutions.map((name, i) => (
            <Reveal key={name} delay={i * 0.05} className="card inst__card">
              <div className="inst__mark"><GraduationCap size={20} /></div>
              <div className="inst__name">{name}</div>
            </Reveal>
          ))}
        </div>

        <p className="inst__note">
          Training delivered through classroom-based offline programs and online technical sessions.
        </p>
      </div>
    </section>
  );
}
