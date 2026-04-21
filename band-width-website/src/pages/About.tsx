import { Link } from "react-router-dom";
import styles from "./About.module.css";

const team = [
  {
    name: "Piper Vetowich",
    role: "UI/UX Design & Front-End",
    color: "#7B23CF",
    gradient: "linear-gradient(135deg,#7B23CF,#b06ae0)",
    bio: "Led all Figma prototyping, ran A/B testing and user research, and coded the front-end screens, home, discover, notifications, posting, and the looking-for board.",
  },
  {
    name: "Shane Wierl",
    role: "Backend & Infrastructure",
    color: "#3ABEFF",
    gradient: "linear-gradient(135deg,#3ABEFF,#7B23CF)",
    bio: "Architected and built the full backend: PostgreSQL on Supabase, Prisma ORM, REST API on Render, Cloudinary image storage, authentication, and all show/profile/notification logic.",
  },
  {
    name: "Emme",
    role: "Branding & Visual Identity",
    color: "#85C584",
    gradient: "linear-gradient(135deg,#85C584,#3ABEFF)",
    bio: "Defined the BandWidth visual language, color system, logo iterations, typography, and the design aesthetic that carries across the app and this process site.",
  },
];

const timeline = [
  {
    week: "Week 0–1",
    event:
      "Set up Expo dev environment, started Figma wireframes, defined team roles.",
  },
  {
    week: "Week 2–3",
    event:
      "A/B tested low-fidelity prototypes. Launched Google Form, 27 responses from music communities.",
  },
  {
    week: "Week 4",
    event:
      "Designed full database schema. Built User, Band, Host, Show, and LookingForPost tables.",
  },
  {
    week: "Week 5–6",
    event:
      "Coded mid-fidelity screens. Added show posting form, discover filters, and component architecture.",
  },
  {
    week: "Week 7–8",
    event:
      "Show co-ownership, auto-inherited tags, image picker, discover search, and the Shows manager page.",
  },
  {
    week: "Week 9",
    event:
      "LookingFor board, bug fixes, mentor zoom, and full-band user testing with Flush.",
  },
  {
    week: "Week 10–11",
    event:
      "Favorites, notifications, show statuses, lineup builder, set times, and branding polish.",
  },
];

const stack = [
  { label: "React Native", desc: "Single codebase for iOS and Android." },
  {
    label: "Expo EAS",
    desc: "Custom dev builds that talk to our HTTPS backend.",
  },
  { label: "TypeScript", desc: "Type-safe across the entire project." },
  {
    label: "Supabase",
    desc: "PostgreSQL with Row Level Security and real-time.",
  },
  { label: "Prisma", desc: "ORM for readable, type-safe database queries." },
  {
    label: "Render",
    desc: "Always-on HTTPS API server for development and production.",
  },
  { label: "Cloudinary", desc: "Show poster and profile image storage." },
  {
    label: "Figma",
    desc: "All design work, from grey-boxes to high fidelity.",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>About this project</p>
          <h1 className={styles.title}>
            WE BUILT
            <br />
            <span className={styles.accent}>IN PUBLIC.</span>
          </h1>
          <p className={styles.lead}>
            BandWidth is a capstone project by three students at CU Boulder.
            This site documents the full process, every design decision, every
            backend choice, and every lesson learned across 11 weeks.
          </p>
        </div>
      </section>

      <div className={styles.body}>
        {/* ── CONTEXT ────────────────────────────── */}
        <section className={styles.section}>
          <p className={styles.label}>Context</p>
          <div className={styles.contextGrid}>
            <div className={styles.contextMain}>
              <h2 className={styles.sectionTitle}>
                A mobile app for local music.
                <br />
                <span>Three roles. One platform.</span>
              </h2>
              <p className={styles.prose}>
                BandWidth was born from a frustration shared by everyone in a
                local music scene: fans miss shows they would have loved, bands
                juggle five platforms to promote one gig, and venues coordinate
                multi-band lineups over a chaos of DMs and emails.
              </p>
              <p className={styles.prose}>
                We designed a single mobile app around three user types, Fan,
                Band, and Host, each with distinct tools, but all connected
                through shared show data, a discovery feed, and a community
                board where bands find venues and venues find bands.
              </p>
            </div>
          </div>
        </section>

        {/* ── TEAM ───────────────────────────────── */}
        <section className={styles.section}>
          <p className={styles.label}>The Team</p>
          <div className={styles.teamList}>
            {team.map((m) => (
              <div key={m.name} className={styles.member}>
                <div className={styles.memberLeft}>
                  <div
                    className={styles.avatar}
                    style={{ background: m.gradient }}
                  >
                    {m.name[0]}
                  </div>
                  <div>
                    <p className={styles.memberName}>{m.name}</p>
                    <p className={styles.memberRole} style={{ color: m.color }}>
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className={styles.memberBio}>{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIMELINE ───────────────────────────── */}
        <section className={styles.section}>
          <p className={styles.label}>Week by Week</p>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.tlRow}>
                <span className={styles.tlWeek}>{t.week}</span>
                <span className={styles.tlDot} />
                <p className={styles.tlEvent}>{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── STACK ──────────────────────────────── */}
        <section className={styles.section}>
          <p className={styles.label}>Tech Stack</p>
          <div className={styles.stackGrid}>
            {stack.map((s) => (
              <div key={s.label} className={styles.stackCard}>
                <p className={styles.stackLabel}>{s.label}</p>
                <p className={styles.stackDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CLOSING ────────────────────────────── */}
        <section className={styles.closing}>
          <div className={styles.closingGlow} />
          <h2 className={styles.closingTitle}>
            LOCAL MUSIC,
            <br />
            <span>ALL IN ONE PLACE.</span>
          </h2>
          <Link to="/" className={styles.backLink}>
            ← Back to process overview
          </Link>
        </section>
      </div>
    </div>
  );
}
