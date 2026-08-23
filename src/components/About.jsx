import { timeline } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <Reveal>
          <div className="eyebrow">About</div>
          <h2 className="section-title">About Vijayalakshmi</h2>
          <div className="about__text" style={{ marginTop: 26 }}>
            <p>
              I am a professional <strong>Technical Trainer</strong> with 1.5+ years of experience
              delivering technical and placement-oriented training for engineering students, faculty
              members, and working professionals.
            </p>
            <p>
              My training expertise spans <strong>Programming, Data Structures & Algorithms, Cloud
              Computing, AWS, Microsoft Azure, SQL, Data Analytics</strong>, and{" "}
              <strong>Python Full Stack Development</strong>.
            </p>
            <p>
              I have conducted 25+ training sessions through both offline and online formats and have
              trained <strong>800+ students</strong> and <strong>20+ working professionals</strong>.
            </p>
            <p>
              My experience includes engineering college placement programs, technical workshops,
              Faculty Development Programs, and corporate training — including programs for
              professionals from Gulf countries.
            </p>
            <p>
              My approach combines concept clarity with live demonstrations, hands-on practice,
              assessments, problem solving, and industry-oriented application.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="timeline">
            {timeline.map((t) => (
              <div className="timeline__item" key={t.year}>
                <div className="timeline__year">{t.year}</div>
                <div className="timeline__text">{t.text}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
