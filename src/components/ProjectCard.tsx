import Link from 'next/link';

export default function ProjectCard(props: {
  slug: string;
  title: string;
  teaser: string;
  thumb?: string; // optional if you want a separate smaller thumbnail
}) {
  const { slug, title, teaser } = props;
  return (
    <Link
      href={`/projects/${slug}`}
      className="block group rounded-xl bg-porcelain text-ink shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition will-change-transform"
      aria-label={`Read more about ${title}`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-t-xl bg-[color-mix(in_oklab,var(--color-stone)_80%,white)]" />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm/6 text-ink/70 line-clamp-2">{teaser}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-evergreen text-sm font-medium">
          Read more →
        </span>
      </div>
    </Link>
  );
}
