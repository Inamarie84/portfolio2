'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLinks from './SocialLinks';
import { useEffect, useState } from 'react';
import { site } from '@/config/site';

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
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-40 border-b border-[--color-border] text-porcelain',
        // base color
        'bg-midnight',
        // glass/blur when scrolled (matches footer’s active style)
        scrolled
          ? 'bg-midnight/90 supports-[backdrop-filter]:backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.15)]'
          : '',
        'transition-colors duration-300',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink href="/" match="exact">
            Home
          </NavLink>
          <NavLink href="/about" match="startsWith">
            About
          </NavLink>
          <SocialLinks showLabels={false} className="ml-2" />
        </nav>
      </div>
    </header>
  );
}
