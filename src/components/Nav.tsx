'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

function NavLink({
  href,
  children,
  match = 'exact',
}: {
  href: string;
  children: React.ReactNode;
  match?: 'exact' | 'startsWith';
}) {
  const pathname = usePathname();
  const isActive =
    match === 'startsWith' ? pathname.startsWith(href) : pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={[
        'relative px-1 py-0.5 transition',
        'hover:underline underline-offset-4',
        isActive
          ? 'text-gilt after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gilt'
          : '',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? 'true' : 'false'}
      className={[
        'sticky top-0 z-40 border-b border-[--color-border]',
        'transition-colors duration-300',
        // base (at top)
        'bg-midnight text-porcelain',
        // when scrolled, add transparency + blur + shadow
        scrolled
          ? 'bg-midnight/90 supports-[backdrop-filter]:backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
          : '',
      ].join(' ')}
    >
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-porcelain text-midnight px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Your Name
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink href="/" match="exact">
            Home
          </NavLink>
          <NavLink href="/about" match="startsWith">
            About
          </NavLink>

          <div className="ml-2 flex items-center gap-3">
            <a
              href="mailto:you@example.com"
              aria-label="Email me"
              className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://github.com/youruser"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/youruser"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
