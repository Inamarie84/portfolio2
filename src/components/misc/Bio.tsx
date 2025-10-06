export default function Bio({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="mt-12 rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-5">
        <h2 className="text-lg font-semibold">About me</h2>
        <p className="mt-2 text-ink/80">
          Frontend student in Trondheim, focusing on accessible, performant UIs.
        </p>
        <a
          href="/about"
          className="mt-3 inline-flex items-center rounded-xl px-3 py-1.5 text-sm border border-[--color-border] hover:bg-ink/5"
        >
          Read more →
        </a>
      </section>
    );
  }

  return (
    <section className="mt-16 rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-6">
      <h2 className="text-xl font-semibold">About me</h2>
      <p className="mt-2 max-w-3xl text-ink/80">
        I’m a frontend developer student finishing my second year at Noroff. I
        build accessible, performant UIs with React/Next.js and Tailwind, with a
        focus on clean state management and component-driven design.
      </p>
    </section>
  );
}
