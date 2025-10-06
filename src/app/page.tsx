import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";
import Bio from "@/components/misc/Bio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio home with project teasers.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Hi, I’m Ina — a frontend developer student.
        </h1>

        <p className="mt-6 max-w-2xl text-ink/80">
          I design and build fast, accessible web apps. Below are three featured
          projects from this last semester at Noroff School of Technology and
          Digital Media (Front-end Development).
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-midnight px-4 py-2 text-sm text-porcelain transition hover:bg-midnight/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
          >
            View projects
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm transition hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
          >
            About me
          </a>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-4 text-xl font-semibold text-ink/90"
        >
          Featured projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              teaser={p.teaser}
              thumb={p.thumb}
              course={p.course}
            />
          ))}
        </div>
      </section>

      <Bio compact />
    </div>
  );
}
