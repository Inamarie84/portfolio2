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
        I’m a frontend developer specializing in React/Next.js and Tailwind CSS.
        I build accessible, performant UIs with a focus on clean state
        management and component design.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-ink/85">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Testing (RTL)</li>
          <li>Accessibility (WCAG)</li>
          <li>Design systems</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tools</h2>
        <p className="mt-2 text-ink/85">
          VS Code, GitHub, Vercel, Figma, Chrome DevTools, Lighthouse.
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
          </a>
        </p>
      </section>
    </main>
  );
}
