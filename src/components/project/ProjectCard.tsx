// src/components/project/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  slug,
  title,
  teaser,
  thumb,
}: {
  slug: string;
  title: string;
  teaser: string;
  thumb: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full focus-visible:outline-none"
      aria-label={`Read more about ${title}`}
    >
      <article className="h-full rounded-xl bg-porcelain text-ink shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-md flex flex-col">
        {/* fixed thumbnail area */}
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

        {/* body */}
        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>

          {/* reserve space for exactly 2 lines so all cards equalize */}
          <p className="text-sm/6 text-ink/70 line-clamp-2 min-h-[3rem]">
            {teaser}
          </p>

          {/* pushes CTA to the bottom for consistent layout */}
          <div className="mt-auto pt-1">
            <span className="inline-flex items-center gap-2 text-midnight text-sm font-medium">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
