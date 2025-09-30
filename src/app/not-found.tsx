import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-ink/70">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="mt-6 inline-block btn-primary">
        Go home
      </Link>
    </main>
  );
}
