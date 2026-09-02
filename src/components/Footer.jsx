import { profile } from "../data/content";
import "./Footer.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DevOps", href: "#devops" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer__grid">

        <div>
          <div className="footer__logo">
            Vijayalakshmi B
          </div>

          <div className="footer__role">
            Entry-Level Cloud / DevOps Engineer
          </div>

          <p className="footer__tag">
            Building practical skills in cloud infrastructure,
            automation and DevOps.
          </p>
        </div>

        <div className="footer__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__social">

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

        </div>

      </div>

      <div className="footer__bottom container">
        © 2026 Vijayalakshmi B. All rights reserved.
      </div>

    </footer>
  );
}