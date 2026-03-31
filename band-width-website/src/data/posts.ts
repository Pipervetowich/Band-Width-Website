import type { Post, PostCategory } from '../types'

export const posts: Post[] = [
  {
    id: 1,
    slug: 'why-we-built-bandwidth',
    title: 'Why We Built BandWidth',
    subtitle: 'Local music deserves a real home.',
    category: 'Origin Story',
    categoryColor: 'purple',
    date: 'March 10, 2025',
    readTime: '5 min read',
    author: 'The BandWidth Team',
    featured: true,
    excerpt:
      'We kept showing up to great local shows, barely hearing about them in time — or worse, missing them entirely. So we built the thing that should already exist.',
    body: `
      <p>It started at a basement show in Boulder. Forty people packed into a space meant for twenty, watching a band that would blow up six months later. The problem? We almost didn't go. We found out about it through a flyer stapled to a telephone pole — the afternoon of the show.</p>
      <p>That moment stuck. Here was an incredible local music scene, and the discovery mechanism was <em>telephone poles</em>. Instagram stories that evaporated in 24 hours. Word of mouth that only reached people already plugged in. The whole ecosystem was working against fans finding new music and bands building real local followings.</p>
      <h3>Three problems, one product</h3>
      <p><strong>Fans</strong> had no single place to find what was happening locally. Discovery was broken — finding a new artist meant already knowing they existed.</p>
      <p><strong>Bands</strong> were juggling five different platforms to reach their audience: Instagram for promo, Bandcamp for music, Eventbrite for tickets, Facebook events, and group texts to their crew. None of it was connected.</p>
      <p><strong>Venues and hosts</strong> had the same fragmentation problem — plus the added chaos of coordinating multiple bands per show with zero shared tooling.</p>
      <p>BandWidth is our answer. One place, three modes: Fan, Band, Host. Local music, all in one place.</p>
      <h3>What we're building toward</h3>
      <p>We're starting with Boulder and expanding city by city. The goal is never to become a global streaming platform — Spotify exists. The goal is to be the definitive home for local music in every city we enter. The place where you find out about a show before it sells out. Where a band builds their first 1,000 real local fans. Where a venue runs their entire booking and promo workflow without switching tabs.</p>
    `,
  },
  {
    id: 2,
    slug: 'designing-the-bandwidth-brand',
    title: 'Designing the BandWidth Brand',
    subtitle: 'Bold colors, local energy, zero compromise.',
    category: 'Design',
    categoryColor: 'green',
    date: 'March 18, 2025',
    readTime: '7 min read',
    author: 'Design Team',
    excerpt:
      "We wanted a brand that felt like being at a show — dark room, colored stage lights, that electric moment before the first note drops.",
    body: `
      <p>Most music apps feel like tech companies trying to look cool. Lots of black and neon — but focus-grouped, safe, soulless. We wanted BandWidth to feel like music actually feels: loud, alive, a little unpredictable.</p>
      <h3>Starting with color</h3>
      <p>We built the palette around one image: standing in a dark venue, stage lights cutting through. <strong>Background Black (#3A2D32)</strong> isn't pure black — it has warmth, like wood and concrete and the bodies of an actual room. <strong>Electric Purple (#7B23CF)</strong> is the classic venue wash. <strong>Neon Green (#85C584)</strong> is the unexpected accent, the light that catches a guitar neck. <strong>Bright Blue (#3ABEFF)</strong> is the cold follow-spot.</p>
      <p>Each color has a role and they never compete. Purple leads. Green accents. Blue highlights. Black grounds everything.</p>
      <h3>The logo evolution</h3>
      <p>We went through dozens of logo directions before landing on the house-with-headphones icon. The brief: immediately readable, works small (app icon), feels handmade without being precious. The retro script wordmark came from poring over old band logos — that chunky, slightly unserious energy that great local acts always carry.</p>
      <h3>Typography</h3>
      <p>SF Pro is Apple's system font, and using it was a deliberate mobile-first choice. The platform's native type keeps the interface fast and familiar; the all-caps headline treatment gives us enough personality to feel branded. We lean on weight and scale for hierarchy — one font family, infinite range.</p>
      <h3>UI components</h3>
      <p>The button system tells the whole story: <strong>filled purple</strong> for primary actions (Log In, Buy Tickets), <strong>outlined on dark</strong> for secondary (Create Account). Every interactive element has a visible glow state — that moment when you tap should feel like a light turning on.</p>
    `,
  },
  {
    id: 3,
    slug: 'building-the-discovery-feed',
    title: 'Building the Discovery Feed',
    subtitle: "The hardest UX problem we've tackled.",
    category: 'Product',
    categoryColor: 'blue',
    date: 'March 24, 2025',
    readTime: '6 min read',
    author: 'Product Team',
    excerpt:
      "How do you show someone music they don't know they want yet? We tried a lot of approaches before finding one that actually worked.",
    body: `
      <p>The discovery feed is the heart of BandWidth for fans. It answers "what's happening in my city tonight?" and "who should I check out this weekend?" Getting it right is everything.</p>
      <h3>The cold start problem</h3>
      <p>Every recommendation system hits this: when a new user signs up, you know nothing about them. Most apps punt with a genre-picker screen. We find those patronizing — nobody is just a "rock fan." Our solution: <strong>location first, taste second</strong>. Show them what's happening nearby in the next 7 days. Let them interact. Learn from what they save, skip, or tap. Within three sessions we have enough signal to personalize meaningfully.</p>
      <h3>Card design</h3>
      <p>We spent weeks on the event card. It needs to convey who's playing, where, when, and why you should care — in under two seconds. The hierarchy we landed on: Band name (largest, headline weight) → Tonight/Tomorrow/Date (blue, prominent) → Venue + neighborhood → Genre tags (green pills). When an event is Live Tonight, the card gets a pulsing green border you cannot miss.</p>
      <h3>What we got wrong first</h3>
      <p>Our first version was too algorithmic. It penalized artists with low follower counts — hiding exactly the local artists we exist to support. Version two flipped the weight: <strong>proximity and recency beat popularity</strong>. A band with 200 local followers playing tomorrow ranks above a touring act with 50K playing next month. That's the whole point.</p>
    `,
  },
  {
    id: 4,
    slug: 'band-mode-tools',
    title: 'Band Mode: Tools Artists Actually Need',
    subtitle: 'We talked to 40 local bands before writing a line of code.',
    category: 'Product',
    categoryColor: 'blue',
    date: 'April 2, 2025',
    readTime: '8 min read',
    author: 'Product Team',
    excerpt:
      'Band mode is built entirely for artists. Every feature came from a real conversation with a real band.',
    body: `
      <p>Before we built anything for Band Mode, we ran 40 interviews with local musicians — DIY artists, venue regulars, bands on the verge. The same frustrations kept surfacing, and they became our feature list.</p>
      <h3>Show promotion is fragmented</h3>
      <p>Every band was posting the same show info to 4–6 platforms, manually, with different formatting on each. The fix: write it once in BandWidth and we help push it everywhere. One set of show details + poster, formatted and scheduled for Instagram, Facebook, and your BandWidth profile simultaneously.</p>
      <h3>No local fan list</h3>
      <p>Bands knew their Spotify listener count. They had no idea how many people in their own city followed them. BandWidth gives every band a <strong>Local Fan Count</strong> — fans who've marked themselves as local, attended past shows, or saved upcoming events. This is the number that actually matters for booking negotiations.</p>
      <h3>Post-show communication</h3>
      <p>The moment right after a great show is the highest-intent moment in a fan's relationship with a band. Most bands have zero way to reach those people. BandWidth lets bands message everyone who checked in or marked themselves attending: merch links, new music, next show announcements — sent directly to people who were just at your show.</p>
    `,
  },
  {
    id: 5,
    slug: 'host-mode-venues',
    title: 'Host Mode: The Venue Command Center',
    subtitle: 'The venue workflow was completely broken. We fixed it.',
    category: 'Product',
    categoryColor: 'blue',
    date: 'April 8, 2025',
    readTime: '5 min read',
    author: 'Product Team',
    excerpt:
      'From booking inquiries to night-of logistics, Host Mode gives venue operators one place to run everything.',
    body: `
      <p>Running a music venue is operationally chaotic. Booking conversations happen across email, DMs, and texts — sometimes all three for the same show. Lineups change. Bands cancel. Promotion is always someone else's problem until suddenly it's nobody's problem and the show is tomorrow.</p>
      <h3>The booking pipeline</h3>
      <p>Host Mode gives venues a simple kanban pipeline: Inquiry → Confirmed → Announced → Complete. Every band they're talking to lives here. When a show moves to Confirmed, BandWidth automatically creates the event and notifies fans of the venue and every band on the bill.</p>
      <h3>Multi-band coordination</h3>
      <p>Instead of three separate email threads with three bands on the same bill, there's one shared thread in BandWidth. Load-in times, set lengths, soundcheck order — all in one place, visible to everyone involved. This feature alone has saved venue operators hours per show week.</p>
      <h3>Night-of check-in</h3>
      <p>A lightweight door check-in tool that works on any phone. Scan a QR, tap a name, done. Attendance syncs back to BandWidth so fans get credit for showing up — which feeds recommendations — and bands see their real attendance numbers, not just "it felt like a good crowd."</p>
    `,
  },
  {
    id: 6,
    slug: 'our-tech-stack',
    title: 'Our Tech Stack and Why We Chose It',
    subtitle: 'React Native, Supabase, and a few opinions.',
    category: 'Engineering',
    categoryColor: 'purple',
    date: 'April 14, 2025',
    readTime: '9 min read',
    author: 'Engineering Team',
    excerpt:
      "We needed to ship fast, support iOS and Android simultaneously, and not make choices we'd regret in 18 months. Here's what we landed on.",
    body: `
      <p>We're a small team. Every tech decision gets stress-tested against one question: will this slow us down in a year? Here's what we chose and why.</p>
      <h3>React Native + Expo</h3>
      <p>Single codebase for iOS and Android was non-negotiable at our current team size. We evaluated Flutter seriously — the performance story is compelling — but our team's TypeScript fluency and the React ecosystem depth tipped us toward RN. Expo handles the build pipeline, over-the-air updates, and a lot of native module complexity we don't want to own right now.</p>
      <h3>Supabase</h3>
      <p>Postgres with a real-time layer, auth, storage, and edge functions — all with a generous free tier. We considered Firebase but the query flexibility of SQL matters for our event/location/time data. Supabase's RLS (Row Level Security) lets us enforce fan/band/host permission boundaries at the database layer, which feels right for our data model.</p>
      <h3>TypeScript everywhere</h3>
      <p>The app, this blog, our internal tooling — all TypeScript. The upfront cost of typing is real, but catching shape mismatches between our API and UI before they hit production has already saved us multiple late-night debugging sessions. Shared types between the app and backend are a force multiplier.</p>
      <h3>What we'd change</h3>
      <p>We went too long without a proper CI pipeline. Tests were an afterthought early on and we're paying that debt now. If you're starting a new project: set up CI on day one, even if it just runs the TypeScript compiler. Future you will be grateful.</p>
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