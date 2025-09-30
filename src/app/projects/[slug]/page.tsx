import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import CopyLinkButton from '@/components/CopyLinkButton';
import { Metadata } from 'next';

type Props = { params: { slug: string } };

// Pre-generate static paths for each project (MPA pages)
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Per-page SEO (Next Metadata API)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
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

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 flex items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <CopyLinkButton />
      </header>

      {/* Hero image + caption */}
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

      {/* Meta links */}
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
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-[--color-border] hover:bg-[color-mix(in_oklab,var(--color-stone)_20%,white)]"
        >
          View GitHub README
        </Link>
      </div>

      {/* Main content */}
      <article className="prose prose-stone max-w-none">
        {project.content.map((para, i) => (
          <p key={i} className="text-ink/85">
            {para}
          </p>
        ))}

        {/* Suggested sections for your brief */}
        <h2 className="mt-8 text-xl font-semibold">Improvements</h2>
        <ul className="list-disc pl-6 text-ink/85">
          <li>
            Commit:{' '}
            <a
              className="underline"
              href="https://github.com/you/repo/commit/..."
              target="_blank"
              rel="noreferrer"
            >
              Fix X
            </a>{' '}
            — why it matters.
          </li>
          <li>
            Commit:{' '}
            <a
              className="underline"
              href="https://github.com/you/repo/commit/..."
              target="_blank"
              rel="noreferrer"
            >
              Improve Y
            </a>{' '}
            — impact.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Learnings</h2>
        <ul className="list-disc pl-6 text-ink/85">
          <li>Short learning 1.</li>
          <li>Short learning 2.</li>
        </ul>
      </article>
    </main>
  );
}
