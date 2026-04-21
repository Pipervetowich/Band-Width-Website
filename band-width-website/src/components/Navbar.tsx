import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const BandWidthIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="8" fill="#0a0a0a" />
    <path
      d="M10 27V10H15.5C19.5 10 19.5 14 19.5 15.5C19.5 17.5 18 18.5 16.5 19C19 20 19.5 23 19.5 24C19.5 28 16 27 15.5 27H10ZM13 18H15.5C16.5 18 16.5 16.5 16.5 15.5C16.5 14 16 12.5 15.5 12.5H13V18ZM13 24.5H15.5C16.5 24.5 16.5 23 16.5 22C16.5 20.5 16 19.5 15.5 19.5H13V24.5Z"
      fill="#85C584"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <BandWidthIcon />
          <span className={styles.logoName}>BandWidth</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link
            to="/"
            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          >
            Overview
          </Link>
          <Link
            to="/about"
            className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
          >
            About
          </Link>
          <span className={styles.comingSoon}>App Coming Soon</span>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
