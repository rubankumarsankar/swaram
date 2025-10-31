"use client";

import { LuShieldCheck, LuSparkles, LuLeaf } from "react-icons/lu";
import { motion } from "framer-motion";

export default function CoreValues() {
  const items = [
    {
      icon: <LuShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />,
      title: "Integrity",
      desc:
        "Conducting business with the highest ethical standards and transparency.",
    },
    {
      icon: <LuSparkles className="h-5 w-5 text-[var(--color-primary)]" />,
      title: "Innovation",
      desc:
        "Embracing the latest technologies and creative solutions to drive progress.",
    },
    {
      icon: <LuLeaf className="h-5 w-5 text-[var(--color-primary)]" />,
      title: "Sustainability",
      desc:
        "Committed to environmentally and socially responsible business practices.",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          
          <div className="flex justify-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title text-[var(--color-primary)] text-center relative inline-block"
          >
             Core values
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

          <p className="phara mt-3 font-semibold text-black/80 dark:text-white/85">
            Driving Global Trade with Innovation & Excellence
          </p>

          <p className="phara mx-auto mt-4 max-w-3xl text-black/60 dark:text-white/70 text-[14px] leading-relaxed">
            Swaram is a dynamic and innovative global trading and service solutions
            company operating in infrastructure, construction, logistics, energy,
            healthcare, and general trading. We prioritize growth, strategic expansion,
            and long-term partnerships.
          </p>
        </div>

        {/* Values */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                  {v.icon}
                </span>
                <div>
                  <h3 className="subtitle font-semibold text-black dark:text-white">
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
