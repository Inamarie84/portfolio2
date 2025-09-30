import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Bio from '@/components/Bio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Portfolio home with project teasers.',
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Hi, I’m Ina — Frontend Developer
        </h1>
        <p className="mt-4 max-w-2xl text-ink/80">
          I design and build fast, accessible web apps. Below are three featured
          projects: CSS Frameworks, JavaScript Frameworks, and Semester Project
          2.
        </p>
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Featured projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              teaser={p.teaser}
              thumb={p.thumb}
            />
          ))}
        </div>
      </section>

      <Bio />
    </main>
  );
}
