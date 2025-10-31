"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion } from "framer-motion";

const SLIDES = [
  {
    title: "Healthcare Trading & Distribution",
    bullets: [
      "Supply & distribution of medical equipment, pharmaceuticals, and healthcare consumables (including Ayurvedic, naturopathy, and herbal products).",
      "Import/export of diagnostic devices, surgical tools, and wellness products.",
      "Procurement & supply chain solutions for hospitals, clinics, and wellness centers.",
      "Blockchain-enabled healthcare supply chain solutions for enhanced transparency and efficiency.",
    ],
    img: "/assets/healthcare-slide.jpg", // replace with your asset
    alt: "Healthcare global distribution",
  },
  {
    title: "Healthcare Trading & Distribution-1",
    bullets: [
      "Supply & distribution of medical equipment, pharmaceuticals, and healthcare consumables (including Ayurvedic, naturopathy, and herbal products).",
      "Import/export of diagnostic devices, surgical tools, and wellness products.",
      "Procurement & supply chain solutions for hospitals, clinics, and wellness centers.",
      "Blockchain-enabled healthcare supply chain solutions for enhanced transparency and efficiency.",
    ],
    img: "/assets/healthcare-slide.jpg", // replace with your asset
    alt: "Healthcare global distribution",
  },
  // Add more slides if needed
];

export default function AboutUsCarousel() {
  const [idx, setIdx] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const slide = SLIDES[idx];

  return (
    <section className="bg-white dark:bg-zinc-900 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section title with underline */}
        <div className="flex justify-start mb-8">
  <motion.h2
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="title text-[var(--color-primary)] text-center relative inline-block"
  >
    About Us

    {/* Animated underline */}
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "70%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="absolute left-1/2 -bottom-2 h-[3px] bg-[var(--color-secondary)] rounded-full -translate-x-1/2"
    />
  </motion.h2>
</div>

        <div className="relative">
          {/* Card */}
          <article className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full overflow-hidden rounded-xl border border-black/5 shadow-xl">
            {/* Background image */}
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-5 sm:p-7 md:p-8 max-w-3xl text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                  {slide.title}
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] sm:text-sm md:text-[15px] text-white/95">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="leading-snug">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Arrows (outside) */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/90 text-black shadow hover:bg-white dark:bg-zinc-900/90 dark:text-white dark:border-white/15 sm:flex"
          >
            <LuChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 hidden sm:grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/90 text-black shadow hover:bg-white dark:bg-zinc-900/90 dark:text-white dark:border-white/15 sm:flex"
          >
            <LuChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile arrows (inside edges) */}
          <div className="sm:hidden">
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black shadow"
            >
              <LuChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black shadow"
            >
              <LuChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
