"use client";

import { motion } from "framer-motion";

const pills = [
  { label: "Healthcare", pos: "left-[10%] top-[20%]" },
  { label: "Infrastructure & Construction", pos: "right-[10%] top-[20%]" },
  { label: "Global Trading", pos: "left-[6%] top-1/2 -translate-y-1/2" },
  { label: "Logistics & Supply Chain Management", pos: "right-[0%] top-1/2 -translate-y-1/2" },
  { label: "Preventive & Supportive Solutions", pos: "left-[4%] bottom-[18%]" },
  { label: "Energy Solutions", pos: "right-[20%] bottom-[18%]" },
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
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="title text-[22px] md:text-[26px] leading-tight text-black dark:text-white">
            Comprehensive Global Solutions for a
            <br className="hidden sm:block" /> Better Tomorrow
          </h2>
        </div>

        {/* Orbit stage (desktop only) */}
        <div className="relative mx-auto aspect-[3/2] w-full max-w-7xl hidden lg:block">
          {/* Center logo */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/assets/centered-icon.png"
              alt="SwaRam mark"
              width={210}
              height={210}
              className="drop-shadow-sm max-w-[42vw] h-auto"
            />
          </motion.div>

          {/* Pills around orbit */}
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
              <div className="whitespace-pre leading-tight rounded-md bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-4 py-3 text-lg phara font-medium text-gray-800 dark:text-white shadow-[0_8px_18px_rgba(0,0,0,.08)] ring-1 ring-black/5 dark:ring-white/10">
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
              className="rounded-md bg-white px-4 py-3 text-[13px] md:text-sm font-bold text-black dark:text-white shadow-[0_8px_18px_rgba(0,0,0,.08)] ring-1 ring-black/5 dark:ring-white/10"
            >
              <span className="whitespace-pre leading-tight">{p.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
