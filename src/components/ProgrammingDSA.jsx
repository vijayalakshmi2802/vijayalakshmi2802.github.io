import { Trophy } from "lucide-react";
import { dsaTopics } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function ProgrammingDSA() {
  return (
    <section id="programming" className="section section-alt">
      <div className="container">
        <div className="grid-2" style={{ alignItems: "start" }}>
          <Reveal>
            <div className="eyebrow">Programming & Problem Solving</div>
            <h2 className="section-title">Programming, DSA & Interview Readiness</h2>
            <p className="section-sub">
              Strong programming fundamentals are the foundation of successful technical careers.
              Training focuses on conceptual understanding, coding practice, logical thinking,
              problem solving, and interview readiness.
            </p>
            <div className="lang-row">
              <span className="lang-chip">C</span>
              <span className="lang-chip">Python</span>
              <span className="lang-chip">Java</span>
            </div>
            <div className="leetcode-banner">
              <Trophy size={18} color="var(--gold-500)" />
              <span><strong>300+</strong> LeetCode problems solved</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card info-card">
            <div className="info-card__title">Data Structures & Algorithms</div>
            <p className="info-card__text">
              Focused DSA training designed to develop logical thinking and coding ability,
              covering core structures through interview-oriented problem sets.
            </p>
            <div className="topic-list">
              {dsaTopics.map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
