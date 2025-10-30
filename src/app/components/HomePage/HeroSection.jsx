"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="title mx-auto max-w-3xl tracking-tight text-balance"
            style={{ fontSize: "40px", lineHeight: 1.25, fontWeight: 800 }}
          >
            Shaping the Future of Global
            <br className="hidden sm:block" />
            Trade & Services
          </h1>

          <p className="paragraph mx-auto mt-3 max-w-2xl text-black/60 dark:text-white/70">
            Explore our solutions in Infrastructure, Logistics, Energy, and Trading.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/discover"
              className="paragraph inline-flex items-center justify-center rounded-lg bg-[#153C7A] px-5 py-2.5 text-white shadow-[0_6px_16px_rgba(21,60,122,.25)] ring-1 ring-black/5 transition hover:opacity-90"
            >
              Discover Me
            </Link>

            <Link
              href="/contact"
              className="paragraph inline-flex items-center justify-center rounded-lg border border-[#153C7A]/30 bg-white px-5 py-2.5 text-[#153C7A] shadow-sm transition hover:bg-[#153C7A]/5 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image Card */}
        <div className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-900 dark:border-white/10 dark:ring-white/10">
            {/* Maintain aspect ratio for responsive look */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/banner/home-hero.png" // <- replace with your image path
                alt="Global trade and services illustration"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
