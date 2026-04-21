import { Link } from "react-router-dom";
import type { Post, CategoryColor } from "../types";
import styles from "./Postcard.module.css";

interface Props {
  post: Post;
  featured?: boolean;
  index?: number;
}

const CATEGORY_STYLES: Record<CategoryColor, React.CSSProperties> = {
  purple: {
    background: "rgba(123,35,207,0.18)",
    color: "#b06ae0",
    border: "1px solid rgba(123,35,207,0.32)",
  },
  green: {
    background: "rgba(133,197,132,0.13)",
    color: "#85C584",
    border: "1px solid rgba(133,197,132,0.28)",
  },
  blue: {
    background: "rgba(58,190,255,0.1)",
    color: "#3ABEFF",
    border: "1px solid rgba(58,190,255,0.22)",
  },
};

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6.5H11M7.5 3L11 6.5L7.5 10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PostCard({ post, featured = false, index = 0 }: Props) {
  const catStyle = CATEGORY_STYLES[post.categoryColor];

  return (
    <Link
      to={`/post/${post.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {featured && <div className={styles.featuredBar} />}

      <div className={styles.body}>
        {/* Top row */}
        <div className={styles.topRow}>
          <span className={`tag-pill ${styles.category}`} style={catStyle}>
            {post.category}
          </span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>

        {/* Text */}
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.subtitle}>{post.subtitle}</p>
        <p className={styles.excerpt}>{post.excerpt}</p>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.readMore}>
            Read more <ArrowIcon />
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div className={styles.glow} />
    </Link>
  );
}
