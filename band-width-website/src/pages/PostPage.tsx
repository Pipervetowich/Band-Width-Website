import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { posts } from "../data/posts";
import type { CategoryColor } from "../types";
import PostCard from "../components/PostCard";
import styles from "./Postpage.module.css";

const CAT_STYLE: Record<CategoryColor, React.CSSProperties> = {
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

const BackArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 3L5 7.5L9.5 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const catStyle = CAT_STYLE[post.categoryColor];

  return (
    <article className={styles.page}>
      {/* ── Header ─────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerOrb} />

        <div className={styles.headerInner}>
          <Link to="/" className={styles.back}>
            <BackArrow /> Back to all posts
          </Link>

          <div className={styles.meta}>
            <span className={`tag-pill ${styles.category}`} style={catStyle}>
              {post.category}
            </span>
            <span className={styles.metaSep}>·</span>
            <span className={styles.metaText}>{post.date}</span>
            <span className={styles.metaSep}>·</span>
            <span className={styles.metaText}>{post.readTime}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>{post.subtitle}</p>

          <div className={styles.author}>
            <span className={styles.avatar}>{post.author.charAt(0)}</span>
            <span className={styles.authorName}>{post.author}</span>
          </div>
        </div>
      </header>

      {/* Separator */}
      <div className={styles.sep} aria-hidden>
        <span />
        <span className={styles.sepMid} />
        <span />
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className={styles.bodyWrap}>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>

      {/* ── Related ────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="section-divider">
            <span className="line" />
            <span>More posts</span>
            <span className="line" />
          </div>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <PostCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
