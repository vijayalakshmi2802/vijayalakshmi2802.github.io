import Reveal from "./Reveal";
import { devopsLearning } from "../data/content";
import "./sections.css";

export default function DevOps() {
  return (
    <section
      id="devops"
      className="section section-alt"
    >

      <div className="container">

        <div className="section-head center">

          <Reveal>

            <div
              className="eyebrow"
              style={{ justifyContent: "center" }}
            >
              Currently Learning
            </div>

            <h2 className="section-title">
              DevOps Journey
            </h2>

            <p className="section-sub">
              Continuously building practical DevOps skills
              through hands-on labs, projects and automation.
            </p>

          </Reveal>

        </div>

        <div className="grid-3">

          {devopsLearning.map((group, index) => (

            <Reveal
              key={group.title}
              delay={index * 0.06}
              className="card info-card"
            >

              <div className="info-card__title">
                {group.title}
              </div>

              <div
                className="topic-list"
                style={{ marginTop: 16 }}
              >

                {group.items.map((item) => (

                  <span
                    className="pill"
                    key={item}
                  >
                    {item}
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