import { testimonials } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Student Feedback</div>
            <h2 className="section-title">What Students Say</h2>
          </Reveal>
        </div>

        <div className="testi__track">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05} className="card testi-card">
              <p className="testi-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-card__foot">
                <div className="testi-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
