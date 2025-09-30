'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Footer({ sticky = false }: { sticky?: boolean }) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // When the footer enters the viewport, turn on the glassy style
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
        sticky ? 'sticky bottom-0 z-40' : '',
        // base color
        'bg-midnight',
        // glassy when in view
        active
          ? 'bg-midnight/90 supports-[backdrop-filter]:backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.15)]'
          : '',
        'transition-colors duration-300',
      ].join(' ')}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} Your Name. Built with Next.js &amp;
          Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/youruser"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/youruser"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
