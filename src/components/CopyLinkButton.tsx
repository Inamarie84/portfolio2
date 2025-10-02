'use client';

import { useState } from 'react';

export default function CopyLinkButton({ dark = false }: { dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  const base =
    // grid with 3 columns: [icon][label][spacer]
    'grid grid-cols-[1rem_auto_1rem] items-center rounded-xl border border-[--color-border] ' +
    // reduce right padding a touch if you like: change px-3 to pl-3 pr-2
    'pl-3 pr-2 py-2 text-sm transition-colors focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-[--color-ring] cursor-pointer ' +
    'whitespace-nowrap min-w-[9rem]';
  const hover = dark
    ? 'hover:bg-porcelain/10 active:bg-porcelain/15'
    : 'hover:bg-ink/5 active:bg-ink/10';

  return (
    <button
      className={`${base} ${hover}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      }}
      aria-label="Copy link to this page"
    >
      {/* col 1: icon slot (keeps width stable) */}
      <span className="col-start-1 row-start-1 inline-flex h-4 w-4 items-center justify-center relative">
        {/* copy icon (shown when not copied) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition-opacity ${copied ? 'opacity-0' : 'opacity-100'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>

        {/* check icon (shown when copied) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute h-4 w-4 transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>

      {/* col 2: perfectly centered label */}
      <span className="col-start-2 row-start-1 text-center">Copy link</span>

      {/* col 3: empty spacer (mirrors icon width) */}
      <span aria-hidden="true" className="col-start-3 row-start-1 h-4 w-4" />

      {/* a11y live region (off-screen) */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Link copied' : ''}
      </span>
    </button>
  );
}
