import { Cloud } from "lucide-react";
import { aws, azure } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function CloudTraining() {
  return (
    <section id="cloud" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Cloud Training</div>
            <h2 className="section-title">Cloud Training & Administration</h2>
            <p className="section-sub">
              Practical cloud training covering fundamentals, architecture, administration,
              networking, security, and monitoring across both major platforms.
            </p>
          </Reveal>
        </div>

        <div className="cloud__grid">
          <Reveal className="card cloud__col">
            <div className="cloud__col-head">
              <div className="cloud__badge cloud__badge--aws">AWS</div>
              <div className="cloud__col-title">Amazon Web Services</div>
            </div>
            <div className="topic-list">
              {aws.map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card cloud__col">
            <div className="cloud__col-head">
              <div className="cloud__badge cloud__badge--azure"><Cloud size={18} /></div>
              <div className="cloud__col-title">Microsoft Azure</div>
            </div>
            <div className="topic-list">
              {azure.map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
