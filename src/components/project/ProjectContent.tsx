"use client";
import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProjectContent({
  paragraphs,
  initiallyVisible = 2,
}: {
  paragraphs: string[];
  initiallyVisible?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentId = useId();

  const visibleParas = expanded
    ? paragraphs
    : paragraphs.slice(0, initiallyVisible);

  function toggle() {
    if (expanded) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setExpanded((v) => !v);
  }

  return (
    <section ref={sectionRef} aria-labelledby={`project-content-${contentId}`}>
      <h2 id={`project-content-${contentId}`} className="sr-only">
        Project details
      </h2>

      <div
        className={cn(
          "relative",
          expanded ? "" : "max-h-[38rem] overflow-hidden",
        )}
      >
        <div className="space-y-5 md:space-y-6">
          {visibleParas.map((para, i) => (
            <p key={i} className="text-ink/85 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {!expanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[var(--color-porcelain)]"
          />
        )}
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={`project-content-${contentId}`}
          className="inline-flex items-center rounded-xl border border-[--color-border] px-4 py-2 text-sm hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] cursor-pointer"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}
