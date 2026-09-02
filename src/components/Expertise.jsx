import Reveal from "./Reveal";
import { skills } from "../data/content";
import "./sections.css";

const groups = [
  {
    title: "Cloud Platforms",
    key: "cloud",
  },
  {
    title: "AWS",
    key: "aws",
  },
  {
    title: "Microsoft Azure",
    key: "azure",
  },
  {
    title: "DevOps",
    key: "devops",
  },
  {
    title: "Networking",
    key: "networking",
  },
  {
    title: "Programming",
    key: "programming",
  },
  {
    title: "Automation & Infrastructure as Code",
    key: "automation",
  },
];

export default function Expertise() {
  return (
    <section id="skills" className="section section-alt">

      <div className="container">

        <div className="section-head center">

          <Reveal>

            <div
              className="eyebrow"
              style={{ justifyContent: "center" }}
            >
              Technical Skills
            </div>

            <h2 className="section-title">
              Cloud, Infrastructure & DevOps
            </h2>

            <p className="section-sub">
              Technologies I have practiced through hands-on
              projects, labs and continuous learning.
            </p>

          </Reveal>

        </div>

        <div className="grid-3">

          {groups.map((group, index) => (

            <Reveal
              key={group.key}
              delay={index * 0.05}
              className="card info-card"
            >

              <div className="info-card__title">
                {group.title}
              </div>

              <div className="topic-list">

                {skills[group.key]?.map((skill) => (

                  <span
                    className="pill"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}