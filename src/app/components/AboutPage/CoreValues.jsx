"use client";

import { motion } from "framer-motion";

export default function CoreValues() {
  const items = [
    {
      img: "/icons/icon-1.png",
      title: "Integrity",
      desc: "Conducting business with the highest ethical standards and transparency.",
    },
    {
      img: "/icons/icon-2.png",
      title: "Innovation",
      desc: "Embracing the latest technologies and creative solutions to drive progress.",
    },
    {
      img: "/icons/icon-3.png",
      title: "Sustainability",
      desc: "Committed to environmentally and socially responsible business practices.",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex justify-center mb-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title text-[var(--color-primary)] relative inline-block"
          >
            Core Values
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "70%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute left-1/2 -bottom-2 h-[3px] bg-[var(--color-secondary)] rounded-full -translate-x-1/2"
            />
          </motion.h2>
        </div>

        <p className="phara mt-3 font-semibold text-black/80 dark:text-white/85 text-center">
          Driving Global Trade with Innovation & Excellence
        </p>

        <p className="phara mx-auto mt-4 max-w-3xl text-black/60 dark:text-white/70 text-[14px] leading-relaxed text-center">
          Swaram is a dynamic and innovative global trading and service solutions company 
          operating in infrastructure, logistics, energy, healthcare, and general trading. 
          We prioritize growth, strategic expansion, and long-term partnerships.
        </p>

        {/* Values Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-white p-5 "
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center">
                  <img
                    src={v.img}
                    alt={v.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </span>

                <div>
                  <h3 className="title text-2xl font-semibold text-black dark:text-white">
                    {v.title}
                  </h3>
                  <p className="phara mt-1 text-[14px] leading-6 text-black/70 dark:text-white/70">
                    {v.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
