import { site } from '@/config/site';
import SocialLinks from '@/components/SocialLinks';

export default function Bio() {
  return (
    <section className="mt-16 rounded-xl bg-porcelain shadow-[var(--shadow-card)] p-6">
      <h2 className="text-xl font-semibold">About me</h2>
      <p className="mt-2 max-w-3xl text-ink/80">
        I’m a frontend developer focusing on React/Next.js and Tailwind. Let’s
        work together —{' '}
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
