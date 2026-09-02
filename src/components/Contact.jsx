import Reveal from "./Reveal";
import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-head center">
          <Reveal>
            <div
              className="eyebrow"
              style={{ justifyContent: "center" }}
            >
              Contact
            </div>

            <h2 className="section-title">
              Let's Connect
            </h2>

            <p className="section-sub">
              I am actively looking for entry-level opportunities
              in Cloud, DevOps, Cloud Support and Infrastructure
              Engineering.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="card"
            style={{
              maxWidth: 700,
              margin: "0 auto",
              padding: 35,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <a
              className="contact__row"
              href={`mailto:${profile.email}`}
            >
              Email: {profile.email}
            </a>

            <a
              className="contact__row"
              href={`tel:${profile.phone}`}
            >
              Phone: {profile.phone}
            </a>

            <a
              className="contact__row"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

            <a
              className="contact__row"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>

            <a
              href={profile.resume}
              className="btn btn-gold"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 12 }}
            >
              Download Resume
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}