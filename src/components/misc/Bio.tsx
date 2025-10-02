// components/misc/Bio.tsx (only the text changed)
import { site } from '@/config/site';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Bio() {
  return (
    <section className="mt-16 rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-6">
      <h2 className="text-xl font-semibold">About me</h2>
      <p className="mt-2 max-w-3xl text-ink/80">
        My name is Ina and I live in Trondheim, Norway. I’m a frontend developer
        student, finishing my second year at Noroff (Frontend-Development). I
        build accessible, performant UIs with React/Next.js and Tailwind, and I
        enjoy clean state management and component-driven design. Let’s chat —{' '}
        <a
          className="underline decoration-gilt underline-offset-4"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        .
      </p>
      <SocialLinks showLabels={true} className="mt-4" />
    </section>
  );
}
