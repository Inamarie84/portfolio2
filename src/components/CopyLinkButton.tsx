'use client';

import { useState } from 'react';

export default function CopyLinkButton({ dark = false }: { dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  const base =
    'inline-flex items-center gap-2 rounded-xl border border-[--color-border] px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] cursor-pointer';
  const hover = dark
    ? 'hover:bg-porcelain/10 active:bg-porcelain/15'
    : 'hover:bg-ink/5 active:bg-ink/10';

  return (
    <button
      className={`${base} ${hover}`}
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      aria-live="polite"
      aria-label={copied ? 'Link copied' : 'Copy link to this page'}
    >
      {copied ? 'Link copied!' : 'Copy link'}
    </button>
  );
}
