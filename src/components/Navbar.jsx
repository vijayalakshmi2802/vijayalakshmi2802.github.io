import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DevOps", href: "#devops" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="container navbar__inner">

        <a
          href="#top"
          className="navbar__brand"
          onClick={handleClick}
        >
          <span className="navbar__name">
            Vijayalakshmi B
          </span>

          <span className="navbar__role">
            Cloud & DevOps
          </span>
        </a>

        <nav
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="navbar__cta"
          onClick={handleClick}
        >
          Let's Connect
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </header>
  );
}