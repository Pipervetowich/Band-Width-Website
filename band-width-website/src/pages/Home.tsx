import styles from "./Home.module.css";

// Abstract poster tiles — pure CSS art, no images needed
const posters = [
  {
    bg: "#1a0a2e",
    accent: "#7B23CF",
    label: "FAN",
    sub: "Discover local shows",
  },
  {
    bg: "#0a1a0e",
    accent: "#85C584",
    label: "BAND",
    sub: "Build your local crowd",
  },
  { bg: "#0a1520", accent: "#3ABEFF", label: "HOST", sub: "Run your venue" },
  {
    bg: "#1e0a0a",
    accent: "#e05252",
    label: "DISCOVER",
    sub: "Tonight in your city",
  },
  {
    bg: "#1a100a",
    accent: "#e0a852",
    label: "CONNECT",
    sub: "Fan · Band · Venue",
  },
  {
    bg: "#0f0a1e",
    accent: "#a06ae0",
    label: "PROMOTE",
    sub: "One post everywhere",
  },
];

const phases = [
  {
    num: "01",
    title: "Research",
    body: "27 survey responses. A/B tests on Figma wireframes. Interviews with real bands and venues. We talked to people before writing a single line of product code.",
  },
  {
    num: "02",
    title: "Design",
    body: "Low fidelity to mid fidelity. Multiple rounds of user testing. Affinity mapping. Every layout decision earned through feedback, not instinct.",
  },
  {
    num: "03",
    title: "Build",
    body: "React Native, Expo EAS, Supabase, Prisma, Render, Cloudinary. A backend that handles Fans, Bands, and Hosts with Row Level Security at the database layer.",
  },
  {
    num: "04",
    title: "Iterate",
    body: "Show co-ownership. Auto-inherited genre tags. A LookingFor board. Six notification types. Advanced filters. Each feature traced back to a real user request.",
  },
  {
    num: "05",
    title: "Ship",
    body: "11 weeks. 3 builders. One app that connects the people who make local music happen with the people who want to find it.",
  },
];

const team = [
  { name: "Piper Vetowich", role: "UI/UX & Front-End", color: "#7B23CF" },
  { name: "Shane Wierl", role: "Backend & Infrastructure", color: "#3ABEFF" },
  { name: "Emme", role: "Branding & Identity", color: "#85C584" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── MOSAIC HERO ─────────────────────────── */}
      <section className={styles.hero}>
        {/* Poster mosaic — left side */}
        <div className={styles.mosaic} aria-hidden>
          {posters.map((p, i) => (
            <div
              key={i}
              className={styles.tile}
              style={
                {
                  background: p.bg,
                  "--accent": p.accent,
                } as React.CSSProperties
              }
            >
              <span className={styles.tileLabel}>{p.label}</span>
              <span className={styles.tileSub}>{p.sub}</span>
              <div className={styles.tileCircle} />
              <div className={styles.tileLine} />
            </div>
          ))}
        </div>

        {/* Hero copy — right side */}
        <div className={styles.heroText}>
          <p className={styles.heroEye}>
            <span className={styles.dot} />
            Capstone · Spring 2026
          </p>

          <h1 className={styles.heroTitle}>
            The app that makes local music
            <br />
            <em>visible.</em>
          </h1>

          <p className={styles.heroBody}>
            BandWidth connects fans, bands, and venues in one place. This site
            documents how three people built it — from the first wireframe to a
            working mobile app.
          </p>

          <div className={styles.heroMode}>
            {["Fan", "Band", "Host"].map((m) => (
              <span key={m} className={styles.modeChip}>
                {m}
              </span>
            ))}
          </div>

          <div className={styles.heroNumbers}>
            <div>
              <strong>11</strong>
              <span>weeks</span>
            </div>
            <div>
              <strong>3</strong>
              <span>builders</span>
            </div>
            <div>
              <strong>27</strong>
              <span>user tests</span>
            </div>
            <div>
              <strong>5</strong>
              <span>phases</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <div className={styles.ticker} aria-hidden>
        <div className={styles.tickerTrack}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              BANDWIDTH&nbsp;·&nbsp;LOCAL
              MUSIC&nbsp;·&nbsp;FAN&nbsp;·&nbsp;BAND&nbsp;·&nbsp;HOST&nbsp;·&nbsp;
              BOULDER CO&nbsp;·&nbsp;CAPSTONE 2026&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT WE BUILT ───────────────────────── */}
      <section className={styles.what}>
        <div className={styles.whatInner}>
          <p className={styles.label}>The Problem</p>
          <h2 className={styles.whatTitle}>
            Local music scenes are vibrant.
            <br />
            <span>They just need a better home.</span>
          </h2>
          <div className={styles.whatGrid}>
            <div
              className={styles.whatCard}
              style={{ "--c": "#7B23CF" } as React.CSSProperties}
            >
              <p className={styles.whatWho}>Fans</p>
              <p>
                No single place to find what's happening locally tonight.
                Discovery was broken.
              </p>
            </div>
            <div
              className={styles.whatCard}
              style={{ "--c": "#85C584" } as React.CSSProperties}
            >
              <p className={styles.whatWho}>Bands</p>
              <p>
                Juggling Instagram, Bandcamp, Eventbrite, Facebook, and group
                texts for one show.
              </p>
            </div>
            <div
              className={styles.whatCard}
              style={{ "--c": "#3ABEFF" } as React.CSSProperties}
            >
              <p className={styles.whatWho}>Venues</p>
              <p>
                Coordinating multi-band lineups across emails, DMs, and texts
                with zero shared tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <p className={styles.label}>How We Built It</p>
          {phases.map((p, i) => (
            <div key={p.num} className={styles.phase}>
              <span className={styles.phaseNum}>{p.num}</span>
              <h3 className={styles.phaseTitle}>{p.title}</h3>
              <p className={styles.phaseBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────── */}
      <section className={styles.team}>
        <div className={styles.teamInner}>
          <p className={styles.label}>The Team</p>
          <div className={styles.teamList}>
            {team.map((m, i) => (
              <div key={m.name} className={styles.member}>
                <div className={styles.memberNum} style={{ color: m.color }}>
                  0{i + 1}
                </div>
                <div>
                  <p className={styles.memberName}>{m.name}</p>
                  <p className={styles.memberRole}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK STRIP ─────────────────────────── */}
      <div className={styles.stackStrip}>
        {[
          "React Native",
          "Expo EAS",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Prisma",
          "Render",
          "Cloudinary",
          "Figma",
        ].map((t) => (
          <span key={t} className={styles.stackItem}>
            {t}
          </span>
        ))}
      </div>

      {/* ── CLOSING ─────────────────────────────── */}
      <section className={styles.closing}>
        <div className={styles.closingGlow} />
        <p className={styles.closingEye}>Not launched yet. Fully built.</p>
        <h2 className={styles.closingTitle}>
          LOCAL MUSIC,
          <br />
          ALL IN ONE PLACE.
        </h2>
        <p className={styles.closingSub}>
          This is the process site for our capstone project.
          <br />
          The app is coming.
        </p>
      </section>
    </div>
  );
}
