"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services & Solutions", href: "/services" },
  { label: "Partnership", href: "/partnership" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:bg-zinc-900/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/swaram.png" width={120} height={32} alt="SwaRam Ventures" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
  {nav.map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`phara group relative text-[16px] transition-all pt-1 pb-1 
        ${isActive ? "text-[var(--color-secondary)] font-semibold" : "text-black dark:text-white"}
        `}
      >
        {item.label}

        {/* Hover borders only */}
        <span
          className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--color-secondary)] transition-all duration-200 group-hover:w-full"
        ></span>
        <span
          className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-secondary)] transition-all duration-200 group-hover:w-full"
        ></span>
      </Link>
    );
  })}
</nav>


        {/* Mobile Toggle */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/3 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className={`h-5 w-5 transition ${open ? "opacity-0" : "opacity-100"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg className={`absolute h-5 w-5 transition ${open ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden border-t border-black/5 transition-[max-height] duration-300 ease-in-out dark:border-white/10 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ul className="space-y-1">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`phara block rounded-lg px-3 py-2 transition
                    ${isActive ? "text-[var(--color-secondary)] font-semibold" : "text-black dark:text-white"}
                    hover:border-t-2 hover:border-b-2 hover:border-[var(--color-secondary)]`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
