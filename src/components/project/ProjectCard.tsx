import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  slug,
  title,
  teaser,
  thumb,
  course,
}: {
  slug: string;
  title: string;
  teaser: string;
  thumb: string;
  course?: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full focus-visible:outline-none"
      aria-label={`Read more about ${title}`}
    >
      <article className="h-full flex flex-col rounded-xl bg-porcelain text-ink shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl">
          <Image
            src={thumb}
            alt={`${title} thumbnail`}
            width={800}
            height={500}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex grow flex-col p-5 gap-2">
          {course && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] border border-transparent bg-[var(--chip-bg)] text-[var(--chip-fg)]">
              {course}
            </span>
          )}

          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm/6 text-ink/70 line-clamp-2">{teaser}</p>

          <span className="mt-auto inline-flex items-center gap-2 text-midnight text-sm font-medium pt-1">
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}
