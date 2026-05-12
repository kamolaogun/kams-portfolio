"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Signature wordmark */}
        {/* ↓ To use a real signature image instead, replace this Link's children with:
            <img src="/signature.png" alt="Kam Olaogun" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
        */}
        <Link
          href="/"
          className="font-signature text-[1.6rem] leading-none text-zinc-100 hover:text-white transition-colors pt-1"
        >
          Kam Olaogun
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm px-3.5 py-1.5 rounded-md transition-colors",
                pathname === link.href
                  ? "text-zinc-100 font-medium bg-zinc-800"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about#contact"
            className="ml-2 text-sm px-4 py-1.5 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-white transition-colors font-medium"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm px-3 py-2 rounded-md transition-colors",
                  pathname === link.href
                    ? "text-zinc-100 font-medium bg-zinc-800"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-sm px-3 py-2 bg-zinc-100 text-zinc-900 rounded-lg text-center font-medium"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
