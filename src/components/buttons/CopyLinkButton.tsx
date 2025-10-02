// src/components/CopyLinkButton.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="ghost"
      size="sm"
      className="min-w-[9.5rem] grid grid-cols-[1rem_auto_1rem] place-items-center"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      }}
      aria-live="polite"
      aria-label={copied ? 'Link copied' : 'Copy link to this page'}
    >
      {/* left icon slot */}
      <span className="col-start-1 row-start-1 inline-flex h-4 w-4 items-center justify-center relative">
        {/* copy icon */}
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
        {/* check icon */}
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

      {/* centered label */}
      <span className="col-start-2 row-start-1 text-center">
        {copied ? 'Link copied!' : 'Copy link'}
      </span>

      {/* right spacer */}
      <span aria-hidden="true" className="col-start-3 row-start-1 h-4 w-4" />

      <span role="status" className="sr-only">
        {copied ? 'Link copied' : ''}
      </span>
    </Button>
  );
}
