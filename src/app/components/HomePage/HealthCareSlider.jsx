"use client";

import { useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const slides = [
  {
    title: "Health Care",
    subtitle: "Delivering health, preserving life!",
    desc: "Providing premium, performance-led healthcare solutions that bridge the gap between innovation and accessibility, ensuring world-class medical supplies and pharmaceutical products reach every corner of the globe.",
    image: "/assets/home-img-1.png",
  },
  {
    title: "Global Trading",
    subtitle: "Where opportunity meets expertise!",
    desc: "Facilitating seamless international commerce through strategic partnerships and market intelligence, we transform complex cross-border transactions into streamlined pathways for growth and profitability.",
    image: "/assets/home-img-2.png",
  },
  {
    title: "Infrastructure & Construction",
    subtitle: "Building foundations for generations!",
    desc: "From concept to completion, we deliver robust infrastructure projects that shape skylines and strengthen communities, combining cutting-edge engineering with sustainable construction practices.",
    image: "/assets/home-img-3.png",
  },
  {
    title: "Logistics & Supply Chain Management",
    subtitle: "Moving the world forward, together!",
    desc: "Orchestrating the intricate dance of global logistics with precision and reliability, we ensure your goods flow efficiently across continents, turning supply chain challenges into competitive advantages.",
    image: "/assets/home-img-4.png",
  },
  {
    title: "Energy Solutions",
    subtitle: "Sustainable power for a changing world!",
    desc: "Harnessing diverse energy resources to fuel progress responsibly, we provide comprehensive energy solutions that balance economic growth with environmental stewardship for a sustainable tomorrow.",
    image: "/assets/home-img-5.png",
  },
];

export default function HealthCareSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((p) => (p + 1) % slides.length);
  const handlePrev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  const { title, subtitle, desc, image } = slides[index];

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 relative">

        {/* Mobile Buttons — Top Right */}
        <div className="lg:hidden absolute right-4 top-4 z-10 flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 border border-black/10 rounded-full bg-white/80 backdrop-blur hover:bg-black/5 dark:bg-zinc-800/80 dark:border-white/20 dark:hover:bg-white/10 transition"
          >
            <LuArrowLeft className="h-5 w-5 text-primary dark:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 border border-black/10 rounded-full bg-white/80 backdrop-blur hover:bg-black/5 dark:bg-zinc-800/80 dark:border-white/20 dark:hover:bg-white/10 transition"
          >
            <LuArrowRight className="h-5 w-5 text-primary dark:text-white" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:max-w-none
                          aspect-[4/3] sm:aspect-[16/10] lg:aspect-video
                          overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg shadow-black/5 dark:ring-white/10">
            <img
              key={image}
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 640px"
            />
          </div>
        </div>

        {/* Text + Desktop Buttons */}
        <div className="w-full lg:w-1/2 space-y-3 order-3 lg:order-1">
          <h2 className="title text-primary">{title}</h2>
          <p className="subtitle text-black dark:text-white italic font-semibold">{subtitle}</p>
          <p className="phara text-base/6 max-w-md text-black/70 dark:text-white/70">{desc}</p>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowLeft className="h-7 w-7 text-primary dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowRight className="h-7 w-7 text-primary dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
