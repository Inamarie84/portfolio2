import Link from 'next/link';

export default function Nav() {
  return (
    <header className="border-b border-[--color-border] bg-porcelain">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Your Name
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <a
            href="https://github.com/youruser"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/youruser"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
