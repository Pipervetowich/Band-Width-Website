import { useState } from "react";
import { posts, categories } from "../data/posts";
import type { PostCategory } from "../types";
import PostCard from "../components/PostCard";
import styles from "./Home.module.css";

export default function Home() {
  const [active, setActive] = useState<PostCategory | "All">("All");

  const featured = posts.find((p) => p.featured);
  const rest = posts
    .filter((p) => !p.featured)
    .filter((p) => active === "All" || p.category === active);

  return (
    <div className={styles.page}>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroOrb3} />

        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Behind the Build
          </span>

          <h1 className={styles.heroTitle}>
            MAKING LOCAL
            <br />
            <span className={styles.heroAccent}>MUSIC</span> HAPPEN.
          </h1>

          <p className={styles.heroDesc}>
            Stories, design decisions, and hard lessons from building BandWidth
            — the app that connects fans, bands, and venues in one place.
          </p>

          <div className={styles.heroTagline}>
            <span>Fan</span>
            <span className={styles.dot}>·</span>
            <span>Band</span>
            <span className={styles.dot}>·</span>
            <span>Host</span>
          </div>
        </div>

        {/* Decorative waveform bars */}
        <div className={styles.waveform} aria-hidden>
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className={styles.bar}
              style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
            />
          ))}
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────── */}
      <div className={styles.content}>
        {/* Featured post */}
        {featured && (
          <section className={styles.featuredSection}>
            <div className="section-divider">
              <span className="line" />
              <span>Featured</span>
              <span className="line" />
            </div>
            <PostCard post={featured} featured index={0} />
          </section>
        )}

        {/* All posts */}
        <section className={styles.allPosts}>
          <div className="section-divider">
            <span className="line" />
            <span>All Posts</span>
            <span className="line" />
          </div>

          {/* Filters */}
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`${styles.filterBtn} ${active === cat.value ? styles.filterActive : ""}`}
                onClick={() => setActive(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {rest.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
            {rest.length === 0 && (
              <p className={styles.empty}>
                No posts in this category yet — check back soon.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
