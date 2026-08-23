import { Code2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { profile } from "../data/content";
import "./Footer.css";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__logo">Vijayalakshmi B</div>
          <div className="footer__role">Technical Trainer</div>
          <p className="footer__tag">
            Empowering students and professionals with industry-ready technical skills.
          </p>
        </div>

        <div className="footer__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="footer__social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={17} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={17} /></a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={17} /></a>
        </div>
      </div>
      <div className="footer__bottom container">
        © 2026 Vijayalakshmi B. All rights reserved.
      </div>
    </footer>
  );
}
