import { placementFlow } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function PlacementTraining() {
  return (
    <section id="placement" className="section">
      <div className="container grid-2" style={{ alignItems: "start" }}>
        <Reveal>
          <div className="eyebrow">Placement-Oriented Training</div>
          <h2 className="section-title">From Fundamentals to Interview Readiness</h2>
          <p className="section-sub">
            Placement programs are designed to build the technical foundation students need to
            confidently approach recruitment processes — including coding assessments, technical
            assessments, mock interviews, and interview-oriented problem solving.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="card" style={{ padding: "10px 30px" }}>
          <div className="flow">
            {placementFlow.map((step, i) => (
              <div className="flow__step" key={step}>
                <div className="flow__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="flow__label">{step}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
