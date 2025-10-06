import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Bio, skills, tools, and contact.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <section className="rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-6">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <div className="shrink-0 overflow-hidden rounded-full">
            <Image
              src="/projects/selfie.webp"
              alt="Portrait of Ina Forseth"
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">About</h1>
            <p className="mt-3 text-ink/85 leading-relaxed">
              I’m a frontend developer student finishing my second (final) year
              at Noroff. I build fast, accessible web apps with{' '}
              <strong>React/Next.js</strong>, <strong>TypeScript</strong>, and{' '}
              <strong>Tailwind CSS</strong>. My strengths are clean component
              architecture, thoughtful UX, and small but meaningful performance
              wins (stable image loading, predictable layouts, and a11y-first
              patterns).
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:inaforseth@gmail.com"
                className="inline-flex items-center rounded-xl bg-midnight px-4 py-2 text-sm text-porcelain transition hover:bg-midnight/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/ina-marie-forseth-66a7b232/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm transition hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] border border-[--color-border]"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Inamarie84"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm transition hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] border border-[--color-border]"
                aria-label="View my GitHub profile (opens in a new tab)"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.55v-2.01c-3.22.7-3.9-1.55-3.9-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.26 3.39.96.11-.76.41-1.26.75-1.55-2.57-.29-5.28-1.28-5.28-5.71 0-1.26.45-2.3 1.2-3.12-.12-.29-.52-1.44.11-3 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.56.23 2.71.11 3 .75.82 1.2 1.86 1.2 3.12 0 4.44-2.72 5.41-5.31 5.7.42.36.8 1.07.8 2.17v3.22c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl bg-porcelain p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-semibold">What I’m good at</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              'React / Next.js',
              'TypeScript',
              'Tailwind CSS',
              'State mgmt (Zustand)',
              'Accessibility (WCAG)',
              'Testing (RTL)',
            ].map((label) => (
              <li
                key={label}
                className="inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-[var(--chip-bg)] text-[var(--chip-fg)]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-porcelain p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-semibold">Tools I use</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              'VS Code',
              'Git / GitHub',
              'Vercel / Netlify',
              'Figma',
              'Chrome DevTools',
              'Lighthouse',
            ].map((label) => (
              <li
                key={label}
                className="inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-[var(--chip-bg)] text-[var(--chip-fg)]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-xl bg-porcelain p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-xl font-semibold">What I’m looking for</h2>
        <p className="mt-3 text-ink/85 leading-relaxed">
          Junior frontend opportunities where I can ship UI features, polish UX,
          and learn from a supportive team. I value clean code, constructive
          reviews, and iterative delivery.
        </p>
      </section>

      <section className="mt-8 rounded-xl bg-porcelain p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-3 text-ink/85">
          <span className="font-medium">Email:</span>{' '}
          <a
            className="underline decoration-gilt underline-offset-4"
            href="mailto:inaforseth@gmail.com"
          >
            inaforseth@gmail.com
          </a>{' '}
          · <span className="font-medium">LinkedIn:</span>{' '}
          <a
            className="underline decoration-gilt underline-offset-4"
            href="https://www.linkedin.com/in/ina-marie-forseth-66a7b232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ina Marie Forseth
          </a>{' '}
          · <span className="font-medium">GitHub:</span>{' '}
          <a
            className="underline decoration-gilt underline-offset-4"
            href="https://github.com/Inamarie84"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inamarie84
          </a>
        </p>
      </section>
    </main>
  );
}
