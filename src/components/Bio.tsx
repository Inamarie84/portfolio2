export default function Bio() {
  return (
    <section className="mt-16 rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-6">
      <h2 className="text-xl font-semibold">About me</h2>
      <p className="mt-2 max-w-3xl text-ink/80">
        I’m a frontend developer focusing on React/Next.js and Tailwind. I care
        about design systems, performance, and smooth UX. Let’s work together —{' '}
        <a
          className="underline decoration-gilt underline-offset-4"
          href="mailto:you@example.com"
        >
          you@example.com
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <a
          className="underline decoration-gilt underline-offset-4"
          href="https://github.com/youruser"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <span aria-hidden>•</span>
        <a
          className="underline decoration-gilt underline-offset-4"
          href="https://www.linkedin.com/in/youruser"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
