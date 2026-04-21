import type { Post, PostCategory } from '../types'

export const posts: Post[] = [
  {
    id: 1,
    slug: 'why-we-built-bandwidth',
    title: 'Why We Built BandWidth',
    subtitle: 'Local music deserves a real home.',
    category: 'Origin Story',
    categoryColor: 'purple',
    date: 'January 18, 2026',
    readTime: '4 min read',
    author: 'The BandWidth Team',
    featured: true,
    excerpt:
      'We kept showing up to great local shows barely hearing about them in time — or worse, missing them entirely. So we built the thing that should already exist.',
    body: `
      <p>BandWidth began with a simple frustration: local music scenes are vibrant and alive, yet completely invisible to the people who would love them most. Fans miss shows because they never hear about them. Bands juggle half a dozen platforms just to announce a single gig. Venues have no shared tooling to coordinate lineups, communicate changes, or build lasting relationships with the people walking through their doors.</p>

      <p>From the start, we designed BandWidth around three distinct user types — <strong>Fans, Bands, and Hosts</strong> — each with their own needs, but all connected through a single platform. A fan follows their favorite local acts and gets notified the moment a new show is announced. A band creates one post and it reaches everyone who cares. A host manages their entire booking workflow without switching tabs.</p>

      <h3>Starting from scratch, together</h3>
      <p>We kicked off the project with a clear division of responsibilities. Piper led UI/UX design, building out our Figma prototypes and later translating those designs into front-end code. Shane owned the backend infrastructure — database architecture, API routes, authentication, and server deployment. Emme drove branding, visual identity, and the design systems that tie the whole experience together.</p>

      <p>Our first team meeting established the foundations: we set up Expo so every team member could run a live preview of the app on their own phone, launched a Trello board to manage tasks, and committed to user testing from day one. Within the first week, we had a working development environment, a rough home screen, and a shared sense of what we were trying to build.</p>

      <h3>The goal</h3>
      <p>We are not building a global streaming platform — Spotify already exists. We are building the definitive home for local music: the place where you find out about a show before it sells out, where a band builds their first real local following, and where a venue runs their entire show workflow in one place.</p>
    `,
  },
  {
    id: 2,
    slug: 'designing-for-real-users',
    title: 'Designing for Real Users',
    subtitle: 'What 27 survey responses and three rounds of testing taught us.',
    category: 'Design',
    categoryColor: 'green',
    date: 'February 11, 2026',
    readTime: '6 min read',
    author: 'Piper Vetowich',
    excerpt:
      'We ran A/B tests on low-fidelity prototypes, posted to music subreddits, and interviewed band members. Here is what we learned.',
    body: `
      <p>Good design is not about what looks right to the designer — it is about what makes sense to the person holding the phone. That lesson shaped every design decision we made on BandWidth.</p>

      <h3>Low fidelity first</h3>
      <p>We started with Figma wireframes and deliberately kept them rough. Before writing a single line of front-end code, we ran A/B tests on two versions of every major screen: the home page, the show page, the Discover feed, and the profile pages. We presented these to classmates, band members, and a mentor, asking them to pick which layout felt more intuitive.</p>

      <p>The results were clear. Users preferred the horizontal carousel for upcoming shows, wanted more information visible on event cards (time, location, and price without tapping into the detail view), and overwhelmingly chose the bolder, uppercase logo treatment over the more playful lowercase alternative.</p>

      <h3>Scaling up: 27 responses from the internet</h3>
      <p>We posted our Google Form to music-focused subreddits — including r/indieheads — and asked co-workers and friends to participate. Within 24 hours we had 27 responses. We mapped every piece of feedback to a specific screen using an affinity diagram, which revealed the most critical pain points:</p>

      <ul>
        <li>Notifications felt out of place on the home screen and should live in a dedicated update center</li>
        <li>The Discover page needed richer filtering — genre, show type, age range, location radius, and date availability</li>
        <li>Show cards needed more context: time, venue, price, and event type visible at a glance</li>
        <li>The distinction between Fan, Band, and Host profiles was not immediately obvious</li>
        <li>Privacy settings needed to be clearer — users wanted to understand exactly what information was visible to others</li>
      </ul>

      <h3>Moving to mid fidelity</h3>
      <p>After integrating the survey feedback, we built a full set of mid-fidelity prototypes using real placeholder data — actual band names, real poster images, and genuine show details. This made it possible to evaluate layout decisions in a realistic context. We combined the best elements from both designers' work into a unified visual language and began the next round of usability tests.</p>

      <p>One insight repeated across every round of testing: what feels obvious to the person who built something is rarely obvious to someone encountering it for the first time. Designing BandWidth has been a continuous exercise in letting go of assumptions.</p>
    `,
  },
  {
    id: 3,
    slug: 'building-the-backend',
    title: 'Building the Backend: Databases, Routes, and Real Auth',
    subtitle: 'From a blank Supabase project to a fully connected mobile app.',
    category: 'Engineering',
    categoryColor: 'purple',
    date: 'February 3, 2026',
    readTime: '7 min read',
    author: 'Shane Wierl',
    excerpt:
      'We needed a backend that could handle three distinct user types, image uploads, real-time notifications, and a relational data model. Here is how we built it.',
    body: `
      <p>Before any of the design work could become a real app, we needed a solid foundation underneath it. That meant making deliberate, pragmatic decisions about our tech stack — choosing tools we could move fast with, without painting ourselves into a corner later.</p>

      <h3>The stack</h3>
      <p>We settled on <strong>PostgreSQL hosted on Supabase</strong> as our database, with <strong>Prisma</strong> as our ORM to make queries more readable and type-safe. The backend API runs on <strong>Render</strong>, giving us a persistent HTTPS server we can call from anywhere during development and production. For image storage, we integrated <strong>Cloudinary</strong>, which handles show poster uploads and profile media without us managing our own file server.</p>

      <p>Early on, we removed Docker containerization to reduce complexity at this stage of the project. The goal was to ship a working app, not to over-engineer the infrastructure. We can layer in containerization later.</p>

      <h3>The data model</h3>
      <p>Our schema evolved significantly over the first several weeks. The final model includes tables for <strong>Users, Bands, Hosts, Shows, Favorites, and LookingForPosts</strong>, with carefully designed relationships between them. Shows support tagged users (so both bands and hosts share ownership of an event), inherited genre tags from participating artists, lineup configurations with per-performer set durations, and show status tracking (scheduled, live, postponed, canceled).</p>

      <p>We implemented <strong>Row Level Security (RLS)</strong> in Supabase to enforce permission boundaries at the database layer — ensuring that fans, bands, and hosts each only see and modify the data they are authorized to touch.</p>

      <h3>The Expo challenge</h3>
      <p>One of the earliest and most time-consuming technical problems was getting Expo to communicate reliably with our backend over HTTPS. Expo's production servers have security configurations that blocked standard API calls during development. The solution was to switch to <strong>Expo EAS (Expo Application Services)</strong>, which creates a custom development build installed directly on the device, bypassing Expo's production server constraints entirely. This is a well-known challenge in mobile development — and finding the fix unblocked the entire team.</p>

      <h3>What we'd do differently</h3>
      <p>We would set up a CI pipeline from day one. Early in the project, a single bad import change took hours to track down across the codebase. Automated testing and type-checking on every commit would have caught it in minutes. We have since adopted stricter code review and component isolation practices, which have made merging parallel work significantly less painful.</p>
    `,
  },
  {
    id: 4,
    slug: 'three-profiles-one-app',
    title: 'Three Profiles, One App',
    subtitle: 'Building a platform that works for fans, bands, and venues simultaneously.',
    category: 'Product',
    categoryColor: 'blue',
    date: 'February 17, 2026',
    readTime: '5 min read',
    author: 'Shane Wierl',
    excerpt:
      'One account. Three modes. The challenge of designing a single product that serves completely different users without feeling fragmented.',
    body: `
      <p>Most platforms pick one user type and optimize for them. BandWidth has to serve three simultaneously — and the three are very different people with very different needs. A fan wants to discover shows. A band wants to manage their presence, announce events, and reach local followers. A host wants to run their booking workflow and coordinate multi-band lineups. The product design challenge was building one coherent app that serves all three without feeling like three apps stitched together.</p>

      <h3>The profile system</h3>
      <p>Every BandWidth account can hold multiple roles. A user can be a Fan, a Band member, and a Host — all under one login. Switching between views is seamless: the same profile page surfaces different information depending on which role is active. Band profiles show upcoming shows, genre tags, Spotify and Instagram links, and a bio. Host profiles display venue capacity, address, event type tags, and upcoming bookings. Fan profiles track the artists they follow and the shows they have attended.</p>

      <p>Shows support an <strong>inheritance system</strong> — when a band or host is tagged in a show post, the show automatically inherits their genre tags and is discoverable through those filters without any additional input from the poster. This keeps the tagging experience lightweight while keeping the search experience rich.</p>

      <h3>The LookingFor board</h3>
      <p>One feature that emerged directly from user research is the <strong>LookingFor</strong> board — a community space where bands post if they are seeking a venue, and hosts post if they have an open slot to fill. It is the digital version of a flyer stapled to a telephone pole at a rehearsal space, except it actually reaches the right people. Posts are filterable by connection type: Band → Host, Host → Band, or Band → Band for co-headlining opportunities.</p>

      <h3>Show management for bands and hosts</h3>
      <p>Bands and hosts share ownership of a show once it is created. Either party can edit details, update the status, and add lineup information. A dedicated Shows manager page lets bands and hosts see all their current and past events in one view, with inline Edit and Delete actions. When show details change, the notification system automatically alerts every fan who has RSVPed or favorited a participating artist — without the band having to do anything extra.</p>
    `,
  },
  {
    id: 5,
    slug: 'notification-system',
    title: 'Building the Notification System',
    subtitle: 'Keeping fans connected to the shows they care about.',
    category: 'Engineering',
    categoryColor: 'purple',
    date: 'February 26, 2026',
    readTime: '5 min read',
    author: 'Piper Vetowich',
    excerpt:
      'Show postponements, last-minute lineup changes, and day-of reminders. Here is how we designed a notification center that fans actually want to use.',
    body: `
      <p>Notifications in most apps are an afterthought — a spray of alerts that train users to turn them off. We wanted BandWidth's update center to be the opposite: a space users check because it reliably surfaces information that matters to them.</p>

      <h3>What we notify fans about</h3>
      <p>The notification system covers six core trigger types: a favorited artist announces a new show, a show the user RSVPed to has its details updated, a show is postponed or canceled, a day-before reminder for an upcoming event, a same-day reminder when doors open, and a live alert when a show is actively underway. Each notification type has a distinct icon, making it immediately scannable — a calendar icon for reminders, a star for artist announcements, a location pin for nearby shows, and a megaphone for app updates.</p>

      <h3>The update center</h3>
      <p>Rather than surfacing notifications directly on the home screen (a design we moved away from after user feedback), we built a dedicated <strong>Notifications Center</strong> accessible via a bell icon in the top-right corner of the home screen. The icon displays a red dot when there are unread notifications — a pattern users recognize immediately. Inside the center, notifications are grouped by date with a "TODAY" section and an "EARLIER" section. Unread items carry a subtle visual indicator; users can dismiss them individually by tapping or clear everything at once with a "Mark all as read" button.</p>

      <h3>What we learned</h3>
      <p>Designing the notification system reinforced a theme that ran through the entire project: consistency is more important than cleverness. Our first implementation had notifications scattered across the home screen in a feed-style widget, which clashed with the rest of the layout and confused users during testing. Moving everything into one dedicated space made the home screen cleaner and made the notification center more useful — because users always knew exactly where to look.</p>
    `,
  },
  {
    id: 6,
    slug: 'branding-bandwidth',
    title: 'Branding BandWidth: Identity, Logo, and Visual Language',
    subtitle: 'From mood boards to a cohesive design system.',
    category: 'Design',
    categoryColor: 'green',
    date: 'March 8, 2026',
    readTime: '6 min read',
    author: 'Emme & Piper',
    excerpt:
      'We went through dozens of logo directions, consulted a branding professor, and iterated on our visual identity for weeks. Here is where we landed and why.',
    body: `
      <p>Building a brand for a music app is deceptively hard. Music is visceral and personal — a brand that feels too corporate loses the audience immediately, but one that feels too informal loses credibility with venues and bands who need a professional tool. We spent considerable time trying to thread that needle.</p>

      <h3>The logo journey</h3>
      <p>Our initial logo used a house with headphones icon to represent the dual nature of the platform — music and community, indoor shows and house venues. User testing split the audience evenly on the icon, but feedback from a visual branding professor shifted our direction. The house, he noted, read more like real estate than music. His advice: lean into the letterform. Play with the width of the letters in "BandWidth" itself — let the name do the work.</p>

      <p>We explored neon guitar signs, angled bar signs, and location pins shaped like microphones before arriving at a cleaner direction: a bold "BW" mark for the app icon, paired with a typographic wordmark for the full logo. The squiggle motif — which users across multiple rounds of testing consistently described as feeling like sound or music — became a recurring decorative element in the brand system.</p>

      <h3>Color system</h3>
      <p>The palette was built around a single reference image: a dark venue with stage lights cutting through. <strong>Background Black</strong> carries warmth — it has the feeling of wood and concrete, not pure digital darkness. <strong>Electric Purple</strong> is our primary action color and the classic venue wash. <strong>Neon Green</strong> is the unexpected accent, the light that catches a guitar neck. Each color has a defined role in the interface and they do not compete — purple leads, green accents, everything grounds in black.</p>

      <h3>Applying branding to the interface</h3>
      <p>We maintained a deliberate sequencing: functionality first, then style. For the majority of development, the app ran with minimal visual polish — gray boxes, default type, no logo. This was intentional. Getting the interactions right before layering on the brand meant we were not designing ourselves into corners. By week 10, with the core features stable, we began applying the brand system: accent colors to interactive elements, consistent typography treatment, and logo integration across the app's entry points.</p>

      <p>The blog website you are reading right now is an extension of that same brand language — a dark, editorial aesthetic that carries the energy of a show poster into a digital format.</p>
    `,
  },
]

export const categories: Array<{ label: string; value: PostCategory | 'All' }> = [
  { label: 'All', value: 'All' },
  { label: 'Origin Story', value: 'Origin Story' },
  { label: 'Design', value: 'Design' },
  { label: 'Product', value: 'Product' },
  { label: 'Engineering', value: 'Engineering' },
]