import { motion } from "framer-motion";
import { profile } from "../data/content";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.7,
    delay,
  },
});

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">

        <div className="hero__content">

          <motion.div
            className="eyebrow eyebrow--light"
            {...fadeUp(0)}
          >
            AWS • Azure • Linux • DevOps
          </motion.div>

          <motion.h1
            className="hero__title"
            {...fadeUp(0.08)}
          >
            Building Reliable
            <span> Cloud & DevOps Infrastructure</span>
          </motion.h1>

          <motion.p
            className="hero__desc"
            {...fadeUp(0.16)}
          >
            I am a Computer Science graduate focused on Cloud,
            DevOps and Infrastructure Engineering, with hands-on
            experience building and troubleshooting AWS and Azure
            environments.
          </motion.p>

          <motion.div
            className="hero__ctas"
            {...fadeUp(0.24)}
          >
            <a href="#projects" className="btn btn-gold">
              View Projects →
            </a>

            <a
              href={profile.resume}
              className="btn btn-outline-light"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume ↓
            </a>
          </motion.div>

          <motion.div
            className="hero__social"
            {...fadeUp(0.3)}
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href={`mailto:${profile.email}`}>
              Email
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero__stat">
            <div className="hero__stat-value">AWS</div>
            <div className="hero__stat-label">
              Cloud Platform
            </div>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-value">Azure</div>
            <div className="hero__stat-label">
              Cloud Platform
            </div>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-value">Linux</div>
            <div className="hero__stat-label">
              Infrastructure
            </div>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-value">DevOps</div>
            <div className="hero__stat-label">
              Currently Learning
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}