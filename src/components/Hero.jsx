import { motion } from "framer-motion";
import { ArrowRight, Code2, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { stats, profile } from "../data/content";
import Counter from "./Counter";
import NetworkMotif from "./NetworkMotif";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NetworkMotif className="hero__motif" variant="hero" />

      <div className="container hero__grid">

        {/* LEFT SIDE */}
        <div className="hero__content">

          <motion.div
            className="eyebrow eyebrow--light"
            {...fadeUp(0)}
          >
            Technical Trainer • Placement • Cloud • Programming
          </motion.div>

          <motion.h1
            className="hero__title"
            {...fadeUp(0.08)}
          >
            Building{" "}
            <span>Industry-Ready Talent</span>{" "}
            Through Practical Technical Training
          </motion.h1>

          <motion.p
            className="hero__desc"
            {...fadeUp(0.16)}
          >
            I help engineering students, faculty members, and working
            professionals build practical technical skills through
            structured, hands-on, and industry-oriented training.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero__ctas"
            {...fadeUp(0.24)}
          >
            <a
              href="#contact"
              className="btn btn-gold"
            >
              Partner With Me
              <ArrowRight size={16} />
            </a>

            <a
              href="#programs"
              className="btn btn-outline-light"
            >
              Explore Training Programs
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="hero__social"
            {...fadeUp(0.3)}
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
              GitHub
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <Code2 size={17} />
              LeetCode
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={17} />
              Email
            </a>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* PROFILE IMAGE */}
          <div className="hero__profile">
            <img
              src="/viji.jpeg"
              alt="Vijayalakshmi B - Technical Trainer"
              className="hero__profile-image"
            />
          </div>

          {/* STATISTICS */}
          <div className="hero__stats">

            {stats.map((s, i) => (
              <div
                className="hero__stat"
                key={s.label}
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >

                <div className="hero__stat-value">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals || 0}
                  />
                </div>

                <div className="hero__stat-label">
                  {s.label}
                </div>

              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}