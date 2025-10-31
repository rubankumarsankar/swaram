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
    img: "/assets/about-img-1.png", // replace with your asset
    alt: "Healthcare global distribution",
  },
  {
    title: "Healthcare Solutions & Services",
    bullets: [
      "Hospital & clinic setup consultation (design, planning, and procurement, including holistic wellness centers)",
      "Medical Tourism & Patient Facilitation, including advanced treatments, alternative therapies (Ayurveda, naturopathy), and wellness retreats",
      "Preventive healthcare & wellness programs, integrating modern and alternative medicine",
      "Telemedicine & remote healthcare solutions, including Ayurvedic and naturopathy-based consultations",
      "Training & skill development programs for healthcare professionals and wellness practitioners",
    ],
    img: "/assets/about-img-2.png", // replace with your asset
    alt: "Healthcare Solutions & Services",
  },
  {
    title: "Healthcare Representation & Business Development",
    bullets: [
      "Regional representation & distribution for global healthcare brands (medical, herbal, and wellness)",
      "Regulatory & licensing support for pharmaceuticals, medical devices, and alternative healthcare products",
      "Strategic partnerships & institutional collaborations in healthcare infrastructure and holistic wellness",
      "Healthcare financing & insurance facilitation to support patients and institutions in accessing medical care",
      "Strategic investments in healthcare startups, fostering innovation in medical technology, AI, and digital health",
    ],
    img: "/assets/about-img-3.png", // replace with your asset
    alt: "Healthcare Representation & Business Development",
  },
  {
    title: "AI & Digital Health Technologies",
    bullets: [
      "AI-powered diagnostics & predictive analytics for both modern and alternative medicine",
      "Remote patient monitoring & health tech solutions, including Ayurveda-integrated platforms",
      "Blockchain-based healthcare products trading platform for secure, transparent, and efficient transactions",
      "Smart data management & interoperability using blockchain for secure medical and wellness records",
      "Clinical research & biotech innovation support leveraging AI and digital platforms",
    ],
    img: "/assets/about-img-4.png", // replace with your asset
    alt: "AI & Digital Health Technologies",
  },

  // Add more slides if needed
];

export default function AboutUsCarousel() {
  const [idx, setIdx] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + total) % total),
    [total]
  );
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
    <section className=" py-14">
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
          <article className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full overflow-hidden shadow-xl">
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
