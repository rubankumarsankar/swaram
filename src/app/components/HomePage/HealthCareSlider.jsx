"use client";

import { useState } from "react";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const slides = [
  {
    title: "Health Care",
    subtitle: "Delivering health, preserving life! ",
    desc: "Providing premium, performance-led healthcare solutions that bridge the gap between innovation and accessibility, ensuring world-class medical supplies and pharmaceutical products reach every corner of the globe. ",
    image: "/assets/home-img-1.png",
  },
  {
    title: "Global Trading ",
    subtitle: "Where opportunity meets expertise!  ",
    desc: "Facilitating seamless international commerce through strategic partnerships and market intelligence, we transform complex cross-border transactions into streamlined pathways for growth and profitability. ",
    image: "/assets/home-img-2.png",
  },
  {
    title: "Infrastructure & Construction ",
    subtitle: "Building foundations for generations! ",
    desc: "From concept to completion, we deliver robust infrastructure projects that shape skylines and strengthen communities, combining cutting-edge engineering with sustainable construction practices. ",
    image: "/assets/home-img-3.png",
  },
  {
    title: "Logistics & Supply Chain Management ",
    subtitle: "Moving the world forward, together! ",
    desc: "Orchestrating the intricate dance of global logistics with precision and reliability, we ensure your goods flow efficiently across continents, turning supply chain challenges into competitive advantages. ",
    image: "/assets/home-img-4.png",
  },
  {
    title: "Energy Solutions  ",
    subtitle: "Sustainable power for a changing world! ",
    desc: "Harnessing diverse energy resources to fuel progress responsibly, we provide comprehensive energy solutions that balance economic growth with environmental stewardship for a sustainable tomorrow. ",
    image: "/assets/home-img-5.png",
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
          <h2 className="title text-primary">{title}</h2>
          <p className="subtitle text-black dark:text-white italic font-semibold">{subtitle}</p>
          <p className="phara text-base/6 max-w-xs text-black/70 dark:text-white/70">{desc}</p>

          {/* Controls */}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowLeft className="h-8 w-8 text-primary dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-black/10 rounded-full hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition"
            >
              <LuArrowRight className="h-8 w-8 text-primary dark:text-white" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[90%] lg:w-full h-[360px] sm:h-[420px]">
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
