// /app/projects/[slug]/page.tsx (your current file)
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProject, projects } from '@/data/projects';
import CopyLinkButton from '@/components/CopyLinkButton';
import BackButton from '@/components/BackButton';
import ProjectContent from '@/components/ProjectContent';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

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
      <Card className="shadow-[var(--shadow-card)]">
        {/* Title */}
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="text-center text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </CardTitle>

          {/* Toolbar: back | badges | copy */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] sm:items-center gap-3">
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

            {/* right: copy link */}
            <div className="flex justify-center sm:justify-end">
              <CopyLinkButton />
            </div>
          </div>
        </CardHeader>

        {/* Hero + links + content */}
        <CardContent className="px-0">
          <figure className="mx-4 sm:mx-6 mb-6 overflow-hidden rounded-xl bg-porcelain shadow-[var(--shadow-card)]">
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

          {/* CTAs */}
          <div className="mb-8 flex flex-wrap items-center gap-3 px-4 sm:px-6">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View live site
            </Link>
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-[--color-border] text-sm transition-colors hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
            >
              View Repository
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

          {/* Content */}
          <ProjectContent paragraphs={project.content} initiallyVisible={2} />
        </CardContent>

        {/* Optional footer (you can move Copy/Back here if you want a bottom toolbar) */}
        {/* <CardFooter className="justify-between">
          <BackButton />
          <CopyLinkButton />
        </CardFooter> */}
      </Card>
    </main>
  );
}
