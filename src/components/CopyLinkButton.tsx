'use client';

import { useState } from 'react';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="inline-flex items-center gap-2 rounded-xl border border-[--color-border] px-3 py-2 text-sm hover:bg-[color-mix(in_oklab,var(--color-stone)_20%,white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? 'Link copied!' : 'Copy link'}
    </button>
  );
}
