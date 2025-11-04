"use client";

import { useState, useCallback, useEffect } from "react";
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
    img: "/assets/about-img-1.png",
    alt: "Healthcare global distribution",
  },
  {
    title: "Healthcare Solutions & Services",
    bullets: [
      "Hospital & clinic setup consultation (design, planning, and procurement, including holistic wellness centers)",
      "Medical Tourism & Patient Facilitation, including advanced treatments, alternative therapies",
      "Preventive healthcare & wellness programs",
      "Telemedicine & remote healthcare solutions",
      "Training & skill development programs",
    ],
    img: "/assets/about-img-2.png",
    alt: "Healthcare Solutions & Services",
  },
  {
    title: "Healthcare Representation & Business Development",
    bullets: [
      "Regional representation & distribution for global healthcare brands",
      "Regulatory & licensing support",
      "Strategic partnerships & collaborations",
      "Healthcare financing & insurance facilitation",
      "Strategic investments in healthcare startups",
    ],
    img: "/assets/about-img-3.png",
    alt: "Healthcare Representation & Business Development",
  },
  {
    title: "AI & Digital Health Technologies",
    bullets: [
      "AI-powered diagnostics & predictive analytics",
      "Remote patient monitoring & health tech solutions",
      "Blockchain trading system for healthcare",
      "Smart medical data interoperability",
      "Clinical research & biotech innovation support",
    ],
    img: "/assets/about-img-4.png",
    alt: "AI & Digital Health Technologies",
  },
];

export default function AboutUsCarousel() {
  const [idx, setIdx] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  // Keyboard arrows
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
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Title */}
        <div className="flex justify-start mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title text-[var(--color-primary)] relative inline-block"
          >
            About Us
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "70%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute left-1/2 -bottom-2 h-[3px] bg-[var(--color-secondary)] rounded-full -translate-x-1/2"
            />
          </motion.h2>
        </div>

        {/* Slide Card */}
        <div className="relative">
          <article className="relative h-[270px] sm:h-[350px] md:h-[360px] w-full overflow-hidden rounded-xl shadow-lg">

            {/* ✅ Background Image (normal img) */}
            <img
              src={slide.img}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-5 sm:p-7 md:p-8 max-w-3xl text-white">
                <h3 className="title text-xl sm:text-2xl text-white md:text-3xl leading-tight">
                  {slide.title}
                </h3>
                <ul className="mt-3 phara list-disc space-y-1 pl-5 text-[13px] sm:text-sm md:text-[15px] text-white/95">
                  {slide.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Desktop Arrows */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border bg-white text-primary shadow-lg dark:bg-zinc-900 dark:text-white"
          >
            <LuChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border bg-white text-primary shadow-lg dark:bg-zinc-900 dark:text-white"
          >
            <LuChevronRight className="h-8 w-8" />
          </button>

          {/* Mobile Arrows */}
          <div className="sm:hidden">
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 grid place-items-center rounded-full bg-white text-black shadow"
            >
              <LuChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 grid place-items-center rounded-full bg-white text-black shadow"
            >
              <LuChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
