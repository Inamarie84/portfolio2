export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[--color-border] bg-porcelain">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-ink/70">
        <p>
          © {new Date().getFullYear()} Your Name. Built with Next.js &
          Tailwind.
        </p>
      </div>
    </footer>
  );
}
