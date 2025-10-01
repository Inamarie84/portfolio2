'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BackButton({
  fallback = '/',
  dark = false, // pass true when used on Midnight
}: {
  fallback?: string;
  dark?: boolean;
}) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  }

  const base =
    'inline-flex items-center gap-2 rounded-xl border border-[--color-border] px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] cursor-pointer';
  const hover = dark
    ? 'hover:bg-porcelain/10 active:bg-porcelain/15'
    : 'hover:bg-ink/5 active:bg-ink/10';

  return (
    <Link href={fallback} onClick={handleClick} className={`${base} ${hover}`}>
      ← Back
    </Link>
  );
}
