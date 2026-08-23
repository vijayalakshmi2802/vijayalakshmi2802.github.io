import { ArrowRight } from "lucide-react";
import { fullStackPath } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function FullStack() {
  return (
    <section id="fullstack" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Python Full Stack Development</div>
            <h2 className="section-title">One Learning Path, End to End</h2>
            <p className="section-sub">
              End-to-end development training covering frontend, backend, databases, APIs, and
              application deployment — built around project-based learning.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="pathway">
          {fullStackPath.map((step, i) => (
            <span key={step} style={{ display: "flex", alignItems: "center" }}>
              <span className="pathway__node">{step}</span>
              {i < fullStackPath.length - 1 && <ArrowRight className="pathway__arrow" size={18} />}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
