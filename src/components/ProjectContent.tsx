'use client';

import { useState, useId } from 'react';

type Props = {
  paragraphs: string[];
  initiallyVisible?: number; // how many to show before "Show more"
};

export default function ProjectContent({
  paragraphs,
  initiallyVisible = 2,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const regionId = useId();

  const visible = expanded ? paragraphs : paragraphs.slice(0, initiallyVisible);
  const hasMore = paragraphs.length > initiallyVisible;

  return (
    <section className="max-w-none space-y-5 md:space-y-6">
      {visible.map((para, i) => {
        // Bold the label before the first ":" (Overview:, Objectives:, etc.)
        const match = para.match(/^([^:]+):\s*(.*)$/);
        const ALLOW = [
          'Overview',
          'Objectives',
          'Constraints',
          'Process',
          'Challenge',
          'Outcomes',
          'Improvements',
          'Learnings',
          'Results',
          'Notes',
        ];

        if (match) {
          const [, label, rest] = match;
          const isAllowed =
            ALLOW.some((k) => label.startsWith(k)) ||
            label.startsWith('Challenge');

          if (isAllowed) {
            return (
              <p key={i} className="text-ink/85 leading-relaxed">
                <strong>{label}:</strong> {rest}
              </p>
            );
          }
        }

        return (
          <p key={i} className="text-ink/85 leading-relaxed">
            {para}
          </p>
        );
      })}

      {hasMore && (
        <div
          className={[
            'relative pt-1',
            expanded
              ? ''
              : 'before:pointer-events-none before:absolute before:-top-4 before:left-0 before:h-8 before:w-full before:bg-gradient-to-b before:from-transparent before:to-white/70 dark:before:to-black/30',
          ].join(' ')}
        >
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-[--color-border] px-3 py-2 text-sm transition-colors hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
            aria-expanded={expanded}
            aria-controls={regionId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>

          {/* Hidden region ID just to satisfy aria-controls */}
          <div id={regionId} hidden />
        </div>
      )}
    </section>
  );
}
