import { impactStats } from "../data/content";
import Counter from "./Counter";
import Reveal from "./Reveal";
import "./sections.css";

export default function Impact() {
  return (
    <section className="impact">
      <div className="container" style={{ padding: "64px 28px" }}>
        <div className="impact__grid">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="impact__cell">
              <div className="impact__value">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="impact__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
