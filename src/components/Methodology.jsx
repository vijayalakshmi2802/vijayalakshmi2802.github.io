import { methodology } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function Methodology() {
  return (
    <section id="methodology" className="section section-alt">
      <div className="container grid-2" style={{ alignItems: "start" }}>
        <Reveal>
          <div className="eyebrow">Training Methodology</div>
          <h2 className="section-title">A Consistent Five-Step Delivery Process</h2>
          <p className="section-sub">
            Every program — placement, cloud, FDP, or corporate — follows the same disciplined
            structure, from concept to industry application.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="method__row">
          {methodology.map((m) => (
            <div className="method__item" key={m.step}>
              <div className="method__step">{m.step}</div>
              <div>
                <div className="method__title">{m.title}</div>
                <p className="method__text">{m.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
