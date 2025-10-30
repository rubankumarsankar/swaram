"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services & Solutions", href: "/services" }, // ✅ no children
  { label: "Partnership", href: "/partnership" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:bg-zinc-900/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/swaram.png"
            width={120}
            height={32}
            alt="SwaRam Ventures"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="paragraph relative text-[16px] leading-[18px] hover:text-black/80 dark:hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-200 hover:w-full dark:bg-white" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/[.03] dark:border-white/10 dark:bg-zinc-900 dark:text-white"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className={`h-5 w-5 transition ${open ? "opacity-0" : "opacity-100"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={`absolute h-5 w-5 transition ${open ? "opacity-100" : "opacity-0"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-black/5 transition-[max-height] duration-300 ease-in-out dark:border-white/10 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="paragraph block rounded-lg px-3 py-2 hover:bg-black/[.03] dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
