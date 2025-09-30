// src/components/ProjectCard.tsx
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
      className="group block rounded-xl bg-porcelain text-ink shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition"
      aria-label={`Read more about ${title}`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-t-xl">
        <Image
          src={thumb}
          alt={`${title} thumbnail`}
          width={800}
          height={500}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm/6 text-ink/70 line-clamp-2">{teaser}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-midnight text-sm font-medium">
          Read more →
        </span>
      </div>
    </Link>
  );
}
