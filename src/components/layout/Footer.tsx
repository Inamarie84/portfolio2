'use client';

import { useEffect, useRef, useState } from 'react';
import SocialLinks from '@/components/layout/SocialLinks';
import { site } from '@/config/site';

export default function Footer({ sticky = false }: { sticky?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { root: null, threshold: 0.01, rootMargin: '0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={[
        'mt-16 border-t border-[--color-border] text-porcelain',
        'bg-midnight',
        sticky ? 'sticky bottom-0 z-40' : '',
        active
          ? 'bg-midnight/90 supports-[backdrop-filter]:backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.15)]'
          : '',
        'transition-colors duration-300',
      ].join(' ')}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col items-center justify-center gap-3 text-sm text-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp;
          Tailwind.
        </p>

        {/* Social icons centered beneath the text */}
        <SocialLinks className="justify-center" />
      </div>
    </footer>
  );
}
