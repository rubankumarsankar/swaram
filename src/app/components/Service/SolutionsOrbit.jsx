"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pills = [
  { label: "Healthcare", pos: "left-[10%] top-[28%]" },
  { label: "Infrastructure &\nConstruction", pos: "right-[10%] top-[28%]" },
  { label: "Global\nTrading", pos: "left-[6%] top-1/2 -translate-y-1/2" },
  { label: "Logistics & Supply\nChain Management", pos: "right-[6%] top-1/2 -translate-y-1/2" },
  { label: "Preventive & Supportive\nSolutions", pos: "left-[10%] bottom-[22%]" },
  { label: "Energy\nSolutions", pos: "right-[10%] bottom-[22%]" },
];

const pillVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.15 + i * 0.08 },
  }),
};

export default function SolutionsOrbit() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14 md:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="title text-[22px] md:text-[26px] leading-tight text-black dark:text-white">
            Comprehensive Global Solutions for a
            <br className="hidden sm:block" /> Better Tomorrow
          </h2>
        </div>

        {/* Orbit stage */}
        <div className="relative mx-auto aspect-[3/2] w-full max-w-[880px]">
          

          {/* Center logo */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Replace with your logo asset */}
            <Image
              src="/assets/centered-icon.png" // e.g. a square mark
              alt="SwaRam mark"
              width={110}
              height={110}
              className="drop-shadow-sm"
              priority
            />
          </motion.div>

          {/* Pills around the orbit (lg+) */}
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              custom={i}
              variants={pillVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className={`absolute ${p.pos}`}
            >
              <div className="whitespace-pre leading-tight rounded-md bg-white px-4 py-3 text-xl phara font-medium text-gray-800 shadow-[0_8px_18px_rgba(0,0,0,.08)]">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet fallback: grid list */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {pills.map((p, i) => (
            <motion.div
              key={`m-${p.label}`}
              custom={i}
              variants={pillVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-md bg-white px-4 py-3 text-[13px] font-medium text-gray-800 shadow-[0_8px_18px_rgba(0,0,0,.08)] dark:bg-zinc-800 dark:text-white"
            >
              <span className="whitespace-pre leading-tight">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
