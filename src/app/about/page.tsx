// app/about/page.tsx (only content changed)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Bio, skills, tools, and contact.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <p className="mt-4 text-ink/85">
        I’m a frontend developer student completing my second (final) year at
        Noroff. I focus on building fast, accessible web apps with{' '}
        <strong>React/Next.js</strong>,<strong> TypeScript</strong>, and{' '}
        <strong>Tailwind CSS</strong>. My strengths are clear component
        architectures, thoughtful UX, and small but meaningful performance wins
        (stable image loading, predictable layouts, and a11y-first patterns).
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I’m good at</h2>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-ink/85">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>State mgmt (Zustand)</li>
          <li>Accessibility (WCAG)</li>
          <li>Testing (RTL)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tools I use</h2>
        <p className="mt-2 text-ink/85">
          VS Code, Git/GitHub, Vercel/Netlify, Figma, Chrome DevTools,
          Lighthouse.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I’m looking for</h2>
        <p className="mt-2 text-ink/85">
          Junior frontend opportunities where I can ship UI features, polish UX,
          and learn from a supportive team. I value clean code, constructive
          reviews, and shipping iteratively.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-ink/85">
          Email:{' '}
          <a
            className="underline decoration-gilt underline-offset-4"
            href="mailto:inaforseth@gmail.com"
          >
            inaforseth@gmail.com
          </a>{' '}
          · LinkedIn:{' '}
          <a
            className="underline decoration-gilt underline-offset-4"
            href="https://www.linkedin.com/in/ina-marie-forseth-66a7b232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ina Marie Forseth
          </a>
        </p>
      </section>
    </main>
  );
}
