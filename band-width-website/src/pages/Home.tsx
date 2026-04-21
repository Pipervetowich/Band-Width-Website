import styles from "./Home.module.css";

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
    body: "3 developers. One app that connects the people who make local music happen with the people who want to find it.",
  },
];

const team = [
  {
    name: "Piper Vetowich",
    role: "UI/UX & Front-End",
    color: "#7B23CF",
    gradient: "linear-gradient(160deg, #1a0a2e 0%, #2d1050 100%)",
    accent: "#7B23CF",
    bio: "Designed Figma prototype, user research, and all front-end screens.",
    photo: "/Piper.jpg",
  },
  {
    name: "Shane Wierl",
    role: "Backend & Infrastructure",
    color: "#3ABEFF",
    gradient: "linear-gradient(160deg, #0a1520 0%, #0d2840 100%)",
    accent: "#3ABEFF",
    bio: "Built the entire backend: database, API routes, auth, and real-time features.",
    photo: "/Shane.jpg",
  },
  {
    name: "Emme",
    role: "UX/UI, Branding & Identity",
    color: "#85C584",
    gradient: "linear-gradient(160deg, #0a1a0e 0%, #122614 100%)",
    accent: "#85C584",
    bio: "Designed Figma prototypes and defined the visual language, color system, logo, and brand aesthetic.",
    photo: "/Emme.jpg",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── HERO ────────────────────────────────── */}
      <section className={styles.hero}>
        {/* ── VIDEO PANEL ─────────────────────── */}
        <div className={styles.videoPanel}>
          <video className={styles.videoFrame} autoPlay muted loop playsInline>
            <source src="/App_Video.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
        </div>

        {/* ── HERO COPY ───────────────────────── */}
        <div className={styles.heroText}>
          <p className={styles.heroEye}>
            <span className={styles.dot} />
            Capstone
          </p>

          <h1 className={styles.heroTitle}>
            The app that makes local music
            <br />
            <em>visible.</em>
          </h1>

          <p className={styles.heroBody}>
            BandWidth connects fans, bands, and venues in one place. This site
            documents how we built it from the first wireframe to a working
            mobile app.
          </p>

          <div className={styles.heroNumbers}>
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
          {phases.map((p) => (
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
          <div className={styles.teamCards}>
            {team.map((m) => (
              <div key={m.name} className={styles.memberCard}>
                {/* Photo */}
                <div
                  className={styles.memberPhoto}
                  style={{ background: m.gradient }}
                >
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className={styles.memberImg}
                    />
                  ) : (
                    <div className={styles.memberPhotoPlaceholder}>
                      <div
                        className={styles.memberInitial}
                        style={{ color: m.accent }}
                      >
                        {m.name[0]}
                      </div>
                      <p className={styles.memberPhotoHint}>Add photo</p>
                    </div>
                  )}
                  <div
                    className={styles.memberAccentBar}
                    style={{ background: m.accent }}
                  />
                </div>

                {/* Info */}
                <div className={styles.memberInfo}>
                  <p className={styles.memberName}>{m.name}</p>
                  <p className={styles.memberRole} style={{ color: m.accent }}>
                    {m.role}
                  </p>
                  <p className={styles.memberBio}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ─────────────────────────────── */}
      <section className={styles.closing}>
        <div className={styles.closingGlow} />
        <h2 className={styles.closingTitle}>
          LOCAL MUSIC,
          <br />
          ALL IN ONE PLACE.
        </h2>
      </section>
    </div>
  );
}
