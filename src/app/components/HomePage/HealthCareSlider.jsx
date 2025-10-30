"use client";

import { useState } from "react";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const slides = [
  {
    title: "Health Care",
    subtitle: "Premium & performance-led",
    desc: "High-efficacy formulas with skin-safe actives, clean INCI lists, and proven results.",
    image: "/assets/healthcare.png",
  },
  {
    title: "Preventive Solutions",
    subtitle: "Science-backed protection",
    desc: "Advanced nutraceutical and preventive health products for immune resilience.",
    image: "/assets/healthcare.png",
  },
  {
    title: "Cosmetic & Wellness",
    subtitle: "Luxury meets science",
    desc: "Dermatologist-approved cosmetic formulations for wellness & beauty.",
    image: "/assets/healthcare.png",
  },
];

export default function HealthCareSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, subtitle, desc, image } = slides[index];

  return (
    <section className="bg-white dark:bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">

        {/* Left text section */}
        <div className="flex-1 space-y-3">
          <h2 className="title text-[color:var(--color-primary)]">{title}</h2>
          <p className="subtitle text-black dark:text-white font-semibold">{subtitle}</p>
          <p className="paragraph max-w-xs text-black/70 dark:text-white/70">{desc}</p>

          {/* Controls */}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowLeft className="h-5 w-5 text-black dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowRight className="h-5 w-5 text-black dark:text-white" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[90%] lg:w-[100%] h-[360px] sm:h-[420px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
