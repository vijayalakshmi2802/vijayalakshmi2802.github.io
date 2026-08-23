import { Building2, Laptop, Layers, SlidersHorizontal } from "lucide-react";
import { deliveryModes } from "../data/content";
import Reveal from "./Reveal";
import "./sections.css";

const icons = [Building2, Laptop, Layers, SlidersHorizontal];

export default function Delivery() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Training Delivery</div>
            <h2 className="section-title">Offline, Online, or Hybrid — Your Call</h2>
          </Reveal>
        </div>

        <div className="delivery__grid">
          {deliveryModes.map((d, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={d.title} delay={i * 0.05} className="card info-card">
                <div className="info-card__icon"><Icon size={20} /></div>
                <div className="info-card__title" style={{ fontSize: 16 }}>{d.title}</div>
                <p className="info-card__text">{d.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
