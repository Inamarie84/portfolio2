export type Project = {
  slug: string;
  title: string;
  course?: string;
  teaser: string;
  thumb: string;
  hero: string;
  caption: string;
  repoUrl: string;
  liveUrl: string;
  repoReadmeUrl: string;
  content: string[];
};

export const projects: Project[] = [
  {
    slug: "css-frameworks",
    title: "RunSocial - CSS Frameworks",
    course: "CSS Frameworks",
    teaser:
      "Tailwind UI for a social running app—accessible, mobile-first, and fast.",
    thumb: "/projects/css-frameworks-thumb.webp",
    hero: "/projects/css-frameworks-hero.webp",
    caption: "Component library overview",
    repoUrl: "https://github.com/Inamarie84/css-frameworks-ca",
    liveUrl: "https://run-social.netlify.app/",
    repoReadmeUrl:
      "https://github.com/Inamarie84/css-frameworks-ca/blob/css-frameworks/README.md",
    content: [
      "Overview: RunSocial is a lightweight, responsive UI built with Tailwind CSS. It includes Auth, Feed, and Profile screens. Role: solo developer.",
      "Scope: Accessible navigation, stable image loading, consistent spacing, and minimal JS for menu toggling—no component frameworks.",
      "Objectives: (1) Improve keyboard and screen-reader UX, (2) reduce layout shift in the feed grid, (3) tidy semantics/paths for predictability.",
      "Process: Added a visible-on-focus Skip to content link, unified focus rings, and synced the mobile menu’s aria-expanded with its open state.",
      "Challenge → CLS on feed cards: Images lacked intrinsic sizes. Fix: width/height + loading='lazy' + aspect ratio. Result: smooth, no jumps.",
      "Challenge → Keyboard flow: Hard to bypass the header. Fix: skip link + consistent focus states. Result: faster, clearer navigation.",
      "Outcomes: More stable layout, better mobile nav semantics, and cleaner spacing (e.g., skeleton loader mt-10).",
      "Improvements: Skip link + focus rings, intrinsic image sizing + lazy loading, aria-expanded syncing, and normalized asset paths.",
      "Learnings: Intrinsic sizing removes most CLS; aria-* must reflect real state; a simple skip link meaningfully improves keyboard UX.",
    ],
  },
  {
    slug: "javascript-frameworks",
    title: "Markéta TheOnlineShop - JavaScript Frameworks",
    course: "JavaScript Frameworks",
    teaser:
      "Next.js + TypeScript storefront with typed API, Zustand cart, and accessible UI.",
    thumb: "/projects/javascript-frameworks-thumb.webp",
    hero: "/projects/javascript-frameworks-hero.webp",
    caption: "App screens and flows",
    repoUrl: "https://github.com/Inamarie84/jsf-online-shop",
    liveUrl: "https://jsf-online-shop.vercel.app/",
    repoReadmeUrl:
      "https://github.com/Inamarie84/jsf-online-shop/blob/main/README.md",
    content: [
      "Overview: Markéta is a Next.js + TypeScript storefront with product listing, product details, cart, checkout success, and contact form.",
      "Scope: Strict typing, Zustand for cart state, Tailwind styling, and Noroff API integration for products.",
      "Objectives: (1) Clean state management, (2) accessible and responsive UI, (3) type-safe components and API calls.",
      "Process: Built typed product models, lifted cart state into a small store, and kept components focused and testable.",
      "Challenge → Loading UI: Prevent layout jumps while data streams. Fix: intrinsic image sizes + predictable aspect ratios.",
      "Improvements: Added JSDoc to core components, replaced index keys in lists, removed unused Jest types, and fixed minor type/typo issues.",
      "Outcomes: Clearer DX via docs/types, more robust rendering, and fewer reconciliation edge cases.",
      "Learnings: Stable keys matter for perceived quality; small, well-scoped types + JSDoc improve both safety and maintainability.",
    ],
  },
  {
    slug: "semester-project-2",
    title: "Auction Vintage Items - Semester Project 2",
    course: "Semester Project 2",
    teaser:
      "Auction platform with listings, bidding, profiles, and skeleton-loading UI.",
    thumb: "/projects/semester-project-thumb.webp",
    hero: "/projects/semester-project-hero.webp",
    caption: "Storefront and product details",
    repoUrl: "https://github.com/Inamarie84/semester-project-2",
    liveUrl: "https://auction-vintageitems.netlify.app/",
    repoReadmeUrl:
      "https://github.com/Inamarie84/semester-project-2/blob/main/README.md",
    content: [
      "Overview: An auction platform where users create listings, place bids, and manage profiles. Non-registered users can browse and search.",
      "Scope: Auth, profile, create listing, bid flow, listing details with bids, and search—Tailwind UI with skeleton loaders.",
      "Objectives: (1) Reliable API flows, (2) safe/clear error handling, (3) responsive, accessible UI components.",
      "Process: Implemented listing/bid endpoints, consistent headers, and reusable DOM utilities for messages and errors.",
      "Challenge → Error consistency: Some code paths returned values, others didn’t. Fix: enforce consistent returns in async handlers.",
      "Improvements: Switched to template literals, removed console logs, URL-encoded search queries, safer JSON parsing, clearer error messages.",
      "Outcomes: Fewer edge-case failures, clearer UX feedback, and more maintainable code.",
      "Learnings: Small reliability tweaks (returns, encoding, logging hygiene) quickly improve real user flows and debuggability.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
