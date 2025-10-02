// /app/projects/[slug]/page.tsx (your current file)
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProject, projects } from '@/data/projects';
import CopyLinkButton from '@/components/buttons/CopyLinkButton';
import BackButton from '@/components/buttons/BackButton';
import ProjectContent from '@/components/project/ProjectContent';
import LinkButton from '@/components/buttons/LinkButton';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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
      <article className="rounded-xl bg-porcelain text-ink shadow-[var(--shadow-card)]">
        {/* Header */}
        <header className="px-4 sm:px-6 pt-6">
          <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>

          {/* Toolbar: back | badges | copy */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] sm:items-center gap-3">
            {/* left: back */}
            <div className="flex justify-center sm:justify-start">
              <BackButton />
            </div>

            {/* center: badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-transparent bg-[var(--chip-bg)] text-[var(--chip-fg)]">
                Tailwind CSS
              </span>
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-transparent bg-[var(--chip-bg)] text-[var(--chip-fg)]">
                Accessibility (a11y)
              </span>
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-transparent bg-[var(--chip-bg)] text-[var(--chip-fg)]">
                Performance
              </span>
            </div>

            {/* right: copy */}
            <div className="flex justify-center sm:justify-end">
              <CopyLinkButton />
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="px-4 sm:px-6 pb-6">
          <figure className="mt-4 mb-6 overflow-hidden rounded-xl bg-porcelain shadow-[var(--shadow-card)]">
            <Image
              src={project.hero}
              alt=""
              width={1280}
              height={800}
              className="h-auto w-full"
              priority
            />
            <figcaption className="p-3 text-sm text-ink/70">
              {project.caption}
            </figcaption>
          </figure>

          {/* CTAs */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <LinkButton href={project.liveUrl} variant="default">
              View live site
            </LinkButton>
            <LinkButton href={project.repoUrl} variant="slate">
              View Repository
            </LinkButton>
            <LinkButton href={project.repoReadmeUrl} variant="outline">
              View GitHub README
            </LinkButton>
          </div>
          {/* Content */}
          <ProjectContent paragraphs={project.content} initiallyVisible={2} />
        </div>
      </article>
    </main>
  );
}
