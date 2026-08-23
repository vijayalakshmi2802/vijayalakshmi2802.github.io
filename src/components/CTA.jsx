import { ArrowRight, CalendarCheck2, Mail } from "lucide-react";
import Reveal from "./Reveal";
import NetworkMotif from "./NetworkMotif";
import "./sections.css";

export default function CTA() {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <Reveal className="final-cta">
          <NetworkMotif
            variant="hero"
            className="hero__motif"
            style={{ position: "absolute", right: -80, top: -60, width: 460, height: 460, opacity: 0.5 }}
          />
          <h2 className="final-cta__title">Looking for a Technical Trainer for Your Institution?</h2>
          <p className="final-cta__desc">
            Let&rsquo;s design a practical, industry-oriented training program for your students,
            faculty, or professional teams.
          </p>
          <div className="final-cta__ctas">
            <a href="#contact" className="btn btn-gold">Partner With Me <ArrowRight size={16} /></a>
            <a href="#contact" className="btn btn-outline-light"><CalendarCheck2 size={16} /> Book a Demo Session</a>
            <a href="#contact" className="btn btn-outline-light"><Mail size={16} /> Contact Me</a>
          </div>
          <div className="final-cta__note">Available for Offline & Online Training</div>
        </Reveal>
      </div>
    </section>
  );
}
