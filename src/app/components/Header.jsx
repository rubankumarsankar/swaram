"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & Solutions", href: "/services" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Active path helper
  const isActivePath = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock scroll when open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:bg-zinc-900/70 dark:border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/swaram.png" width={120} height={32} alt="SwaRam Ventures" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActivePath(item.href) ? "page" : undefined}
                className={`relative text-[16px] pt-1 pb-1 transition group
                  ${isActivePath(item.href)
                    ? "text-[var(--color-secondary)] font-semibold"
                    : "text-black dark:text-white"}`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-secondary)] transition-all duration-200
                    ${isActivePath(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-black shadow-sm transition active:scale-[0.98] dark:border-white/10 dark:bg-zinc-900 dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {!open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        onTouchStart={() => setOpen(false)}
      />

      {/* Right drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed right-0 top-0 z-50 h-[100dvh] w-[86%] max-w-sm border-l border-black/10 bg-white/80 backdrop-blur-xl shadow-2xl
        dark:bg-zinc-900/80 dark:border-white/10 transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="pt-[max(env(safe-area-inset-top),0px)]" />
        <div className="flex h-16 items-center justify-between px-4 border-b border-black/5 dark:border-white/10">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Menu</span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/5 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
            onClick={() => setOpen(false)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActivePath(item.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-[16px] leading-none transition
                    ${isActivePath(item.href)
                      ? "text-[var(--color-secondary)] font-semibold bg-[var(--color-secondary)]/10 border-l-4 border-[var(--color-secondary)]"
                      : "text-zinc-900 dark:text-zinc-100 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pb-[max(env(safe-area-inset-bottom),16px)]" />
      </aside>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          #mobile-drawer {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
