// src/components/BackButton.tsx
'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BackButton({ fallback = '/' }: { fallback?: string }) {
  const router = useRouter();
  function handle(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  }

  return (
    <Button asChild variant="outline" size="sm">
      <Link href={fallback} onClick={handle} aria-label="Go back">
        ← Back
      </Link>
    </Button>
  );
}
