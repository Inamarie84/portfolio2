// src/components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLinks from '@/components/layout/SocialLinks';
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
  return (
    <header className="bg-midnight/95 text-porcelain sticky top-0 z-40 border-b border-[--color-border] backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 max-[460px]:px-3 max-[460px]:py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg max-[460px]:text-base"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-6 max-[460px]:gap-3 text-sm">
          <NavLink href="/" match="exact">
            Home
          </NavLink>
          <NavLink href="/about" match="startsWith">
            About
          </NavLink>

          {/* compact social icons on very small screens */}
          <SocialLinks
            showLabels={false}
            className="ml-2 max-[460px]:ml-1 max-[460px]:gap-2 [&_svg]:size-5 max-[460px]:[&_svg]:size-4"
          />
        </nav>
      </div>
    </header>
  );
}
