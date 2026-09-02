import Reveal from "./Reveal";
import { education } from "../data/content";
import "./sections.css";

export default function About() {
  return (
    <section id="about" className="section">

      <div className="container about__grid">

        <Reveal>

          <div className="eyebrow">
            About Me
          </div>

          <h2 className="section-title">
            Cloud & DevOps Engineer in the Making
          </h2>

          <div
            className="about__text"
            style={{ marginTop: 26 }}
          >

            <p>
              I am a Computer Science and Engineering graduate
              focused on building a career in
              <strong> Cloud, DevOps and Infrastructure Engineering.</strong>
            </p>

            <p>
              I have hands-on experience working with
              <strong> AWS, Microsoft Azure, Linux, networking,
              cloud security, monitoring and infrastructure
              automation.</strong>
            </p>

            <p>
              I have built practical cloud infrastructure projects
              involving high availability, load balancing,
              networking, security, monitoring and automation.
            </p>

            <p>
              I am currently expanding my DevOps skills through
              hands-on learning in <strong>Git, CI/CD, Docker,
              Jenkins, Terraform and Kubernetes.</strong>
            </p>

            <p>
              My background in technical training has also
              strengthened my communication, presentation,
              troubleshooting and problem-solving abilities.
            </p>

          </div>

        </Reveal>

        <Reveal delay={0.12}>

          <div className="card info-card">

            <div className="eyebrow">
              Education
            </div>

            <h3 className="info-card__title">
              {education.degree}
            </h3>

            <p style={{ marginTop: 10 }}>
              {education.branch}
            </p>

            <p style={{ marginTop: 10 }}>
              {education.college}
            </p>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >

              <span className="pill">
                {education.duration}
              </span>

              <span className="pill">
                CGPA: {education.cgpa}
              </span>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}