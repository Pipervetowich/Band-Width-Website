import { Link } from "react-router-dom";
import styles from "./About.module.css";

interface Value {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

const VALUES: Value[] = [
  {
    icon: "🎸",
    title: "Local First",
    desc: "We exist specifically for local music — not mainstream, not algorithm-optimised global charts. The band playing two miles from you tonight.",
    accent: "purple",
  },
  {
    icon: "🤝",
    title: "Three Perspectives",
    desc: "Fans, bands, and venues have always had the same broken experience. BandWidth is the first product built to work equally well for all three.",
    accent: "green",
  },
  {
    icon: "🔦",
    title: "Discovery Over Algorithm",
    desc: "Proximity and recency beat popularity. A band with 200 local followers playing tomorrow matters more than a touring act with 50K playing next month.",
    accent: "blue",
  },
  {
    icon: "🏗️",
    title: "Build in Public",
    desc: "This blog exists because the process of building something real is worth sharing. We make mistakes. We change our minds. We document all of it.",
    accent: "purple",
  },
];

const ACCENT_BORDER: Record<string, string> = {
  purple: "rgba(123,35,207,0.28)",
  green: "rgba(133,197,132,0.24)",
  blue: "rgba(58,190,255,0.2)",
};

interface TeamMember {
  initial: string;
  name: string;
  role: string;
  gradient: string;
}

const TEAM: TeamMember[] = [
  {
    initial: "A",
    name: "Alex",
    role: "Co-founder / Product",
    gradient: "linear-gradient(135deg,#7B23CF,#3ABEFF)",
  },
  {
    initial: "J",
    name: "Jordan",
    role: "Co-founder / Engineering",
    gradient: "linear-gradient(135deg,#3ABEFF,#85C584)",
  },
  {
    initial: "S",
    name: "Sam",
    role: "Design",
    gradient: "linear-gradient(135deg,#85C584,#7B23CF)",
  },
  {
    initial: "R",
    name: "Riley",
    role: "Community & Growth",
    gradient: "linear-gradient(135deg,#7B23CF,#85C584)",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>About this Blog</span>
          <h1 className={styles.title}>
            WE BUILD
            <br />
            <span className={styles.titleAccent}>IN PUBLIC.</span>
          </h1>
          <p className={styles.lead}>
            The BandWidth Blog is where we share the real story of building a
            product from scratch — design decisions, product mistakes,
            engineering trade-offs, and where we're headed next.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        {/* ── Mission ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>The mission</h2>
          <div className={styles.missionBlock}>
            <p className={styles.missionHeadline}>
              LOCAL MUSIC ALL IN ONE PLACE.
            </p>
            <p className={styles.missionSub}>Fan · Band · Host</p>
            <p className={styles.missionBody}>
              BandWidth started in Boulder because we kept missing shows by
              bands we would have loved. Discovery was broken. Promotion was
              fragmented. The tools musicians and venues had were built for
              everything except them.
            </p>
            <p className={styles.missionBody}>
              So we built something different. One app, three modes. Fans
              discover what's happening nearby. Bands build real local
              followings and manage their promotion from one place. Venues run
              booking and night-of logistics without switching between ten
              different tools.
            </p>
            <div className={styles.missionPills}>
              <span
                className={styles.pill}
                style={{
                  background: "rgba(123,35,207,0.16)",
                  color: "#b06ae0",
                  border: "1px solid rgba(123,35,207,0.28)",
                }}
              >
                Fan Mode
              </span>
              <span
                className={styles.pill}
                style={{
                  background: "rgba(133,197,132,0.12)",
                  color: "#85C584",
                  border: "1px solid rgba(133,197,132,0.25)",
                }}
              >
                Band Mode
              </span>
              <span
                className={styles.pill}
                style={{
                  background: "rgba(58,190,255,0.1)",
                  color: "#3ABEFF",
                  border: "1px solid rgba(58,190,255,0.22)",
                }}
              >
                Host Mode
              </span>
            </div>
          </div>
        </section>

        {/* ── Values ──────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>What we believe</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={styles.valueCard}
                style={{
                  borderColor: ACCENT_BORDER[v.accent],
                  animationDelay: `${i * 0.09}s`,
                }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>The team</h2>
          <div className={styles.teamGrid}>
            {TEAM.map((m) => (
              <div key={m.name} className={styles.teamCard}>
                <div
                  className={styles.teamAvatar}
                  style={{ background: m.gradient }}
                >
                  {m.initial}
                </div>
                <div>
                  <p className={styles.teamName}>{m.name}</p>
                  <p className={styles.teamRole}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className={styles.cta}>
          <div className={styles.ctaBar} />
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>Join the community</span>
            <h2 className={styles.ctaTitle}>SUPPORT LOCAL MUSIC.</h2>
            <p className={styles.ctaDesc}>
              Download BandWidth and find out what's happening in your city
              tonight.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#" className={styles.btnPrimary}>
                Get the App
              </a>
              <Link to="/" className={styles.btnSecondary}>
                Read the Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
