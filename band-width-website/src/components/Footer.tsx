import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="8" fill="#3A2D32" />
              <path
                d="M10 27V10H15.5C19.5 10 19.5 14 19.5 15.5C19.5 17.5 18 18.5 16.5 19C19 20 19.5 23 19.5 24C19.5 28 16 27 15.5 27H10ZM13 18H15.5C16.5 18 16.5 16.5 16.5 15.5C16.5 14 16 12.5 15.5 12.5H13V18ZM13 24.5H15.5C16.5 24.5 16.5 23 16.5 22C16.5 20.5 16 19.5 15.5 19.5H13V24.5Z"
                fill="#85C584"
              />
            </svg>
            <span className={styles.logoName}>BandWidth</span>
          </div>
          <p className={styles.tagline}>LOCAL MUSIC ALL IN ONE PLACE.</p>
          <p className={styles.sub}>Fan. Band. Host.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.colTitle}>Blog</span>
            <Link to="/">All Posts</Link>
            <Link to="/about">About</Link>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>App</span>
            <a href="#">iOS Download</a>
            <a href="#">Android Download</a>
            <a href="#">For Venues</a>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>Connect</span>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} BandWidth. All rights reserved.
        </span>
        <span className={styles.sep}>·</span>
        <span>Support Local Music.</span>
      </div>
    </footer>
  );
}
