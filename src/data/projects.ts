export type Project = {
  slug: string;
  title: string;
  teaser: string; // short text (≤130 chars)
  thumb: string; // teaser image path (800x500, ≤200KB)
  hero: string; // article hero path (1280x800, ≤200KB)
  caption: string;
  liveUrl: string;
  repoReadmeUrl: string;
  content: string[];
};

export const projects: Project[] = [
  {
    slug: 'css-frameworks',
    title: 'CSS Frameworks',
    teaser:
      'Responsive UI with a reusable component library and utility-first workflow.',
    thumb: '/projects/css-frameworks-thumb.webp',
    hero: '/projects/css-frameworks-hero.webp',
    caption: 'Component library overview',
    liveUrl: 'https://example.com/css-frameworks',
    repoReadmeUrl: 'https://github.com/you/css-frameworks/blob/main/README.md',
    content: [
      'Overview: brief what/why and your role.',
      'Objectives: the goals you had.',
      'Process: decisions you made and challenges.',
      'Improvements: list changes you made for Portfolio 2 with commit links.',
      'Learnings: 2–3 bullet insights.',
    ],
  },
  {
    slug: 'javascript-frameworks',
    title: 'JavaScript Frameworks',
    teaser:
      'SPA features with clean state management and accessible components.',
    thumb: '/projects/javascript-frameworks-thumb.webp',
    hero: '/projects/javascript-frameworks-hero.webp',
    caption: 'App screens and flows',
    liveUrl: 'https://example.com/javascript-frameworks',
    repoReadmeUrl:
      'https://github.com/you/javascript-frameworks/blob/main/README.md',
    content: ['Overview content paragraph…', 'Improvements with commit links…'],
  },
  {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser:
      'End-to-end project: fetching data, product pages, and checkout UX.',
    thumb: '/projects/semester-project-thumb.webp',
    hero: '/projects/semester-project-hero.webp',
    caption: 'Storefront and product details',
    liveUrl: 'https://example.com/sp2',
    repoReadmeUrl:
      'https://github.com/you/semester-project-2/blob/main/README.md',
    content: ['Overview…', 'Results…', 'Improvements with commit links…'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
