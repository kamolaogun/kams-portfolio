import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Kam Olaogun · Boston, MA
        </p>
        <nav className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/kam-olaogun-a4a17465/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="/about#contact"
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
