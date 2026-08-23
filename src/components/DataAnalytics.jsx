import { dataAnalyticsTopics } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function DataAnalytics() {
  return (
    <section id="data" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Data Analytics Training</div>
            <h2 className="section-title">Turning Raw Data Into Decisions</h2>
            <p className="section-sub">
              Practical data analytics training designed to help learners understand data,
              extract insights, and communicate results effectively.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.08} className="topic-list" style={{ marginTop: 0 }}>
          {dataAnalyticsTopics.map((item) => <span className="pill" key={item}>{item}</span>)}
        </Reveal>
      </div>
    </section>
  );
}
