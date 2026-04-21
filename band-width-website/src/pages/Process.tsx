import { useState } from "react";
import styles from "./Process.module.css";

const iterations = [
  {
    id: "week0",
    phase: "Week 0",
    tag: "Kickoff",
    color: "purple",
    title: "STARTING\nFROM ZERO.",
    summary:
      "Before a single line was written, we split the work. Piper owned Figma and front-end, Shane owned the backend, Emme owned branding. Our first meeting on Jan 18 got everyone running Expo on their own phone, which is further ahead than we expected.",
    who: [
      "Piper: Figma prototypes, home, profile, discover, settings",
      "Shane: Backend setup, Expo, login/register",
      "Emme: Logo directions, branding aesthetics",
    ],
    wins: [
      "Expo live preview working on all phones by end of week",
      "Trello board launched to manage tasks",
      "Two home screen directions in Figma (carousel vs. scroll view)",
      "Decided on static code first, APIs later",
    ],
    learnings: [
      "Keep it small, think functionality before design",
      "Easy to get ahead of yourself with features not needed yet",
    ],
    images: [
      { label: "Home Screen v1 — Carousel", placeholder: true },
      { label: "Home Screen v2 — Scroll View", placeholder: true },
      { label: "Show Page Wireframe", placeholder: true },
      { label: "Profile & Settings Wireframe", placeholder: true },
    ],
  },
  {
    id: "week1-2",
    phase: "Weeks 1–2",
    tag: "Research",
    color: "green",
    title: "TEST BEFORE\nYOU BUILD.",
    summary:
      "We ran A/B tests on every major screen before writing product code. Classmates, band members, and our mentor Peter all weighed in. We launched a Google Form to different demographics and started Stakeholder interviews.",
    who: [
      "Piper: A/B test facilitation, Figma iteration, user interviews",
      "Shane: Backend stabilization, CORS fix, Expo EAS setup",
      "Emme: Moodboard, logo directions, branding research",
    ],
    wins: [
      "A/B tested home page, show page, discover page, profile page",
      "Identified carousel layout as preferred by users",
      "Mentor interview with Peter Rosenthal scheduled",
      "Google Form sent to classmates, co-workers, band members",
    ],
    learnings: [
      "What feels intuitive to the builder isn't intuitive to the user",
      "Google Forms make low-commitment user research fast",
      "Shane found and fixed the Expo HTTPS/CORS problem that unblocked everyone",
    ],
    images: [
      { label: "A/B Test — Home Screen Options", placeholder: true },
      { label: "A/B Test — Show Page Options", placeholder: true },
      { label: "Discover Page Wireframes", placeholder: true },
      { label: "Logo Survey Results", placeholder: true },
    ],
  },
  {
    id: "week3-4",
    phase: "Weeks 3–4",
    tag: "Foundation",
    color: "blue",
    title: "BACKEND\nAND BONES.",
    summary:
      "Shane designed and migrated the full database schema. Piper moved from grey-box to mid-fidelity Figma with real placeholder data. We got 27 survey responses in 24 hours after posting to r/indieheads and music subreddits.",
    who: [
      "Piper: Mid-fidelity Figma, home, show, discover, fan/band/host profiles",
      "Shane: Full DB schema, User/Band/Host/Show/Favorite/LookingForPost tables, editable profile",
      "Emme: Figma contributions, branding refinement",
    ],
    wins: [
      "27 Google Form responses, users want more show info on cards",
      "Full database schema designed and migrated",
      "Mid-fidelity prototypes with real poster art and fake accounts",
      "Mentor Peter Rosenthal praised file structure and tech stack",
      "Editable profile that saves data to backend",
    ],
    learnings: [
      "Shane's computer broke mid-week, time management pressure",
      "Broke the codebase with a bad import refactor, took hours to fix",
      "Mentor suggested React Query for better data handling",
    ],
    images: [
      { label: "Database Schema Diagram", placeholder: true },
      { label: "Mid-Fidelity Home Screen", placeholder: true },
      { label: "Mid-Fidelity Show Page", placeholder: true },
      { label: "Mid-Fidelity Fan Profile", placeholder: true },
    ],
  },
  {
    id: "week5-6",
    phase: "Weeks 5–6",
    tag: "Front-End Build",
    color: "purple",
    title: "CODING\nTHE DESIGN.",
    summary:
      "We started static-coding the Figma designs. Piper built the home screen components, upcoming events carousel, discover filters, and posting form. Shane built all backend API routes for bands, hosts, shows, and LookingForPosts.",
    who: [
      "Piper: Home screen (title, My Artists, Upcoming Events carousels), Discover filters, posting form",
      "Shane: Band/Host/Show/LookingForPost API routes, Cloudinary image upload, RLS security",
      "Emme: Affinity mapping from survey responses, Figma updates",
    ],
    wins: [
      "27 survey responses affinity-mapped into screen-by-screen improvements",
      "Carousel scroll for My Artists and Upcoming Events",
      "Show posting form with show type, title, date, venue, description",
      "Discover filter with genre, show type, age, location, date",
      "Cloudinary image upload integrated",
    ],
    learnings: [
      "URI vs image function caused photo display bug, trial and error is real",
      "Components make code far more manageable at scale",
      "Feedback: notifications felt out of place on home screen",
    ],
    images: [
      { label: "Affinity Map from Survey Responses", placeholder: true },
      { label: "Home Screen — My Artists Carousel", placeholder: true },
      { label: "Home Screen — Upcoming Events", placeholder: true },
      { label: "Show Posting Form", placeholder: true },
    ],
  },
  {
    id: "week7-8",
    phase: "Weeks 7–8",
    tag: "Core Features",
    color: "green",
    title: "SHOWS,\nDISCOVER,\nNOTIFY.",
    summary:
      "Shane shipped the Shows manager, show co-ownership, and auto-inherited genre tags. Piper built the notification center — moving notifications off the home screen into a dedicated bell-icon update center with 6 trigger types.",
    who: [
      "Piper: Notification center, home screen polish, Discover tag fixes",
      "Shane: Shows manager page, edit/delete flows, Discover search, image picker, show inheritance",
      "Emme: Logo iterations, Figma high-fidelity updates",
    ],
    wins: [
      "Shows manager page for bands and hosts",
      "Show co-ownership, band + host both tagged, both edit",
      "Auto-inherited genre tags from band/host profiles",
      "Notification center with today/earlier grouping, mark-all-read",
      "6 notification types: new show, update, postpone, cancel, reminder, live alert",
      "Real user test with Flush band, very positive feedback",
    ],
    learnings: [
      "User tested with Flush band, proposed door/set times and backlining info",
      "Notifications on home screen felt cluttered, moved to dedicated center",
      "Mock data had to match real backend schema exactly",
    ],
    images: [
      { label: "Shows Manager Page", placeholder: true },
      { label: "New Show Creation Form", placeholder: true },
      { label: "Notification Center — Today View", placeholder: true },
      { label: "Notification Center — Read/Unread States", placeholder: true },
    ],
  },
  {
    id: "week9",
    phase: "Week 9",
    tag: "Testing & Iteration",
    color: "blue",
    title: "LISTEN TO\nYOUR USERS.",
    summary:
      "Three rounds of usability testing with Kate, Madi, and Cecile. Each surfaced the same theme: users need clarity, personalization, and transparency. We iterated filters, fixed the LookingFor board, and refined the Discover screen.",
    who: [
      "Piper: Discover filter refactor, 16+ age filter, single-select filter bar, user testing",
      "Shane: LookingFor functionality, bug fixes, mentor Zoom, user test with Flush",
      "Emme: Figma interactive updates, more user testing",
    ],
    wins: [
      "Discover search bar moved to top based on user feedback",
      "Filter bar made single-select (was confusingly multi-select)",
      "16+ age filter added",
      "LookingFor page functionality fixed and matched to data schema",
      "Mentor Zoom feedback incorporated",
    ],
    learnings: [
      "Kate: Show tags too vague, wants genres on account",
      "Madi: Privacy unclear, wants headliner/support artist hierarchy, 16+ filter",
      "Cecile: Band/host roles not obvious, needs confirmation feedback after actions",
      "Core lesson: consistency across screens matters more than clever one-off design",
    ],
    images: [
      { label: "Discover Screen — Updated Filters", placeholder: true },
      { label: "Looking For Board", placeholder: true },
      { label: "Band Profile Page", placeholder: true },
      { label: "Host/Venue Profile Page", placeholder: true },
    ],
  },
  {
    id: "week10-11",
    phase: "Weeks 10–11",
    tag: "Polish",
    color: "purple",
    title: "MAKE IT\nCOHERENT.",
    summary:
      "Final push: show lineups with set durations, favorites, show statuses, organizational tags, branding feedback from Joel Swanson (visual identity professor), and this process website. Functionality first, style second.",
    who: [
      "Piper: Styling consistency, Looking For page polish, this website blog, logo feedback",
      "Shane: Favorites, show statuses, lineups, set times, notification functionality, new tags",
      "Emme: Final branding direction, marketing media, logo icon explorations",
    ],
    wins: [
      "Show lineups with customizable set durations and auto-calculated times",
      "Favorites system fully functional",
      "Show status tracking (scheduled, postponed, canceled, live)",
      "Organizational tags (e.g. for Punk Standard, Program Council shows)",
      "Joel Swanson feedback: move away from house icon, lean into letterform BW mark",
      "Process website built and styled",
    ],
    learnings: [
      "Drag-and-drop in Expo/React Native is broken at the dependency level, defaulted to arrows",
      "People love the app but want design, always a later-phase concern",
      "Pitching the app at real shows to grow awareness",
    ],
    images: [
      { label: "Show Detail — Final Layout", placeholder: true },
      { label: "Discover Screen — Final", placeholder: true },
      { label: "Looking For — Final", placeholder: true },
      { label: "Logo Exploration Directions", placeholder: true },
    ],
  },
];

export default function Process() {
  const [activeImg, setActiveImg] = useState<{
    iter: string;
    idx: number;
  } | null>(null);

  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            HOW WE
            <br />
            <span className={styles.accent}>BUILT IT.</span>
          </h1>
          <p className={styles.heroDesc}>
            7 iterations. Every design decision, every backend challenge, and
            every user test, documented here.
          </p>
          <div className={styles.heroStats}>
            <div>
              <strong>7</strong>
              <span>Iterations</span>
            </div>
            <div>
              <strong>27</strong>
              <span>Survey responses</span>
            </div>
            <div>
              <strong>6</strong>
              <span>User tests</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Mentor meetings</span>
            </div>
          </div>
        </div>

        {/* Phase nav */}
        <div className={styles.phaseNav}>
          {iterations.map((it) => (
            <a key={it.id} href={`#${it.id}`} className={styles.phaseNavItem}>
              <span
                className={`${styles.phaseNavDot} ${styles[it.color + "Dot"]}`}
              />
              {it.phase}
            </a>
          ))}
        </div>
      </section>

      {/* ── ITERATIONS ───────────────────────────── */}
      {iterations.map((it, idx) => (
        <section key={it.id} id={it.id} className={styles.iter}>
          <div className={styles.iterInner}>
            {/* Header row */}
            <div className={styles.iterHeader}>
              <div className={styles.iterMeta}>
                <span className={styles.iterPhase}>{it.phase}</span>
                <span
                  className={`${styles.iterTag} ${styles[it.color + "Tag"]}`}
                >
                  {it.tag}
                </span>
              </div>
              <h2 className={styles.iterTitle}>{it.title}</h2>
              <p className={styles.iterSummary}>{it.summary}</p>
            </div>

            {/* ── IMAGE GRID ────────────────────── */}
            <div className={styles.imgGrid}>
              {it.images.map((img, i) => (
                <div
                  key={i}
                  className={styles.imgSlot}
                  onClick={() => setActiveImg({ iter: it.id, idx: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setActiveImg({ iter: it.id, idx: i })
                  }
                >
                  <div
                    className={styles.imgPlaceholder}
                    style={{ borderColor: `var(--${it.color})` }}
                  >
                    <div
                      className={styles.imgIcon}
                      style={{ color: `var(--${it.color})` }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <p className={styles.imgLabel}>{img.label}</p>
                    <p className={styles.imgHint}>Click to add image</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── DETAIL COLUMNS ─────────────────── */}
            <div className={styles.detailGrid}>
              {/* Who did what */}
              <div className={styles.detailCol}>
                <p className={styles.detailLabel}>Who did what</p>
                <ul className={styles.detailList}>
                  {it.who.map((w, i) => (
                    <li key={i} className={styles.detailItem}>
                      <span
                        className={styles.detailBullet}
                        style={{ background: `var(--${it.color})` }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wins */}
              <div className={styles.detailCol}>
                <p className={styles.detailLabel}>What shipped</p>
                <ul className={styles.detailList}>
                  {it.wins.map((w, i) => (
                    <li key={i} className={styles.detailItem}>
                      <span
                        className={styles.detailBullet}
                        style={{ background: "var(--green)" }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className={styles.detailCol}>
                <p className={styles.detailLabel}>What we learned</p>
                <ul className={styles.detailList}>
                  {it.learnings.map((l, i) => (
                    <li key={i} className={styles.detailItem}>
                      <span
                        className={styles.detailBullet}
                        style={{ background: "rgba(255,255,255,0.3)" }}
                      />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step divider */}
          {idx < iterations.length - 1 && (
            <div className={styles.stepDiv}>
              <span
                className={`${styles.stepNum} ${styles[it.color + "Text"]}`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className={styles.stepLine} />
            </div>
          )}
        </section>
      ))}

      {/* ── CLOSING ──────────────────────────────── */}
      <section className={styles.closing}>
        <div className={styles.closingGlow} />

        <h2 className={styles.closingTitle}>
          BUILT WITH
          <br />
          <span>PURPOSE.</span>
        </h2>
        <p className={styles.closingBody}>
          Every iteration made BandWidth more useful, more consistent, and more
          honest about what local music actually needs.
        </p>
      </section>
    </div>
  );
}
