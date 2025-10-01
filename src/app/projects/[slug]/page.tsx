import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProject, projects } from '@/data/projects';
import CopyLinkButton from '@/components/CopyLinkButton';
import BackButton from '@/components/BackButton';

type Params = { slug: string };

// Pre-generate static params for each project
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Per-page SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Project`;
  const description = project.teaser;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BackButton />
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <CopyLinkButton />
        </div>
      </header>

      <figure className="mb-6 overflow-hidden rounded-xl bg-porcelain shadow-[var(--shadow-card)]">
        <Image
          src={project.hero}
          alt={project.caption}
          width={1280}
          height={800}
          className="h-auto w-full"
          priority
        />
        <figcaption className="p-3 text-sm text-ink/70">
          {project.caption}
        </figcaption>
      </figure>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View live site
        </Link>
        <Link
          href={project.repoReadmeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-[--color-border] text-sm transition-colors hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
        >
          View GitHub README
        </Link>
      </div>

      <article className="prose prose-stone max-w-none">
        {project.content.map((para, i) => (
          <p key={i} className="text-ink/85">
            {para}
          </p>
        ))}
      </article>
    </main>
  );
}
