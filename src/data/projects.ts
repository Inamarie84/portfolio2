export type Project = {
  slug: string;
  title: string; // Display title for users
  course?: string; // Optional: "CSS Frameworks"
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
    slug: 'css-frameworks',
    title: 'RunSocial - CSS Frameworks',
    course: 'CSS Frameworks',
    teaser:
      'Responsive UI with a reusable component library and utility-first workflow.',
    thumb: '/projects/css-frameworks-thumb.webp',
    hero: '/projects/css-frameworks-hero.webp',
    caption: 'Component library overview',
    repoUrl: 'https://github.com/Inamarie84/css-frameworks-ca',
    liveUrl: 'https://run-social.netlify.app/',
    repoReadmeUrl:
      'https://github.com/Inamarie84/css-frameworks-ca/blob/css-frameworks/README.md',
    content: [
      // Overview
      'RunSocial is a lightweight, responsive UI built with Tailwind CSS. I focused on accessibility and performance: keyboard navigation (skip link + focus styles), proper image sizing to avoid layout shifts, and clearer mobile nav semantics. Role: solo developer.',

      // Objectives
      'Objectives: (1) Improve accessibility for keyboard and assistive tech users, (2) reduce cumulative layout shift on the feed grid, (3) tidy the asset paths and semantics so the UI is stable and predictable.',

      // Constraints
      'Constraints: static HTML/CSS + minimal JavaScript for menu toggling. I used Tailwind utility classes only—no component frameworks—to keep the footprint small and predictable.',

      // Process (high level)
      "Process: I added a visible-on-focus Skip to content link targeting <main id='main'>, ensured consistent focus rings, and refactored the mobile menu button to use aria-controls and aria-expanded. On the feed page, I assigned intrinsic width/height to images and used a consistent aspect ratio to eliminate layout jumps. Finally, I normalized asset paths in <head>.",

      // Challenge 1
      "Challenge → Keyboard flow and semantics: Screen-reader users couldn't quickly bypass header nav; focus outlines were inconsistent. Solution: Add an accessible skip link and unify focus styles using focus-visible ring utilities. Result: Tab reaches skip link immediately; focus is clear and consistent.",
      // Challenge 2
      "Challenge → CLS on feed cards: Images were missing intrinsic dimensions and had fixed heights, causing reflows. Solution: Add width/height + loading='lazy' + aspect-[16/10]; remove fixed h-32. Result: Smooth load with no content jump as images render.",
      // Challenge 3
      "Challenge → Mobile menu semantics: Button didn't communicate open/closed state. Solution: JS toggles aria-expanded in sync with the hidden class. Result: Assistive tech accurately reflects menu state.",

      // Outcomes
      'Outcomes: improved keyboard navigation, stabilized layout on image load, and a clearer nav experience on mobile. The skeleton loader spacing was also adjusted (mt-10) for visual balance.',

      // Improvements / commits (mention without linking if you prefer)
      'Key improvements included: skip link + focus rings (auth page); image width/height + lazy + aspect on feed; aria-expanded toggling; and relative assets in <head>. See repository commit history for details.',

      // Learnings
      'Learnings: (1) Intrinsic image sizes and a consistent aspect ratio are the fastest wins against CLS, (2) aria-expanded must be kept in sync in JS to be meaningful, and (3) a simple skip link dramatically improves keyboard UX with almost no visual cost.',
    ],
  },
  {
    slug: 'javascript-frameworks',
    title: 'Markéta TheOnlineShop - JavaScript Frameworks',
    course: 'JavaScript Frameworks',
    teaser:
      'SPA features with clean state management and accessible components.',
    thumb: '/projects/javascript-frameworks-thumb.webp',
    hero: '/projects/javascript-frameworks-hero.webp',
    caption: 'App screens and flows',
    repoUrl: 'https://github.com/Inamarie84/jsf-online-shop',
    liveUrl: 'https://jsf-online-shop.vercel.app/',
    repoReadmeUrl:
      'https://github.com/Inamarie84/jsf-online-shop/blob/main/README.md',
    content: ['Overview content paragraph…', 'Improvements with commit links…'],
  },
  {
    slug: 'semester-project-2',
    title: 'Auction Vintage Items - Semester Project 2',
    course: 'Semester Project 2',
    teaser:
      'End-to-end project: fetching data, product pages, and checkout UX.',
    thumb: '/projects/semester-project-thumb.webp',
    hero: '/projects/semester-project-hero.webp',
    caption: 'Storefront and product details',
    repoUrl: 'https://github.com/Inamarie84/semester-project-2',
    liveUrl: 'https://auction-vintageitems.netlify.app/',
    repoReadmeUrl:
      'https://github.com/Inamarie84/semester-project-2/blob/main/README.md',
    content: ['Overview…', 'Results…', 'Improvements with commit links…'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
