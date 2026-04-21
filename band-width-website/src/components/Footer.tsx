import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.footerTitle}>BANDWIDTH</p>
          <p className={styles.footerSub}>A capstone project · Spring 2026</p>
          <p className={styles.footerDesc}>
            Connecting fans, bands, and venues.
            <br />
            Built by three people over eleven weeks.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.col}>
            <span className={styles.colLabel}>Process</span>
            <Link to="/">Overview</Link>
            <Link to="/about">About</Link>
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>Team</span>
            <span>Piper Vetowich</span>
            <span>Shane Wierl</span>
            <span>Emme</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} BandWidth</span>
        <span>LOCAL MUSIC ALL IN ONE PLACE.</span>
      </div>
    </footer>
  );
}
