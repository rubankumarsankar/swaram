"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const swing = {
  animate: {
    y: [0, -6, 0, 6, 0],
    rotate: [0, -1.2, 0, 1.2, 0],
    transition: {
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Quote = ({ className = "" }) => (
  <span
    aria-hidden
    className={`pointer-events-none select-none text-3xl md:text-4xl font-serif text-black/20 ${className}`}
  >
    &ldquo;
  </span>
);

export default function MissionVisionSwing() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Row 1: Mission (left text) + floating card (right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Mission text block */}
          <div className="lg:col-span-7">
            <h3 className="title text-[22px] md:text-[24px] text-[var(--color-primary)]">
              Mission
            </h3>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative mt-4 rounded-xl border border-black/10 bg-white p-5 md:p-6 shadow-lg dark:bg-zinc-900 dark:border-white/10"
            >
              <Quote className="absolute -top-3 -left-2" />
              <Quote className="absolute -bottom-3 -right-2 rotate-180" />
              <p className="phara text-[15px] leading-7 text-black/75 dark:text-white/80">
                Swaram aims to lead the global trading industry by providing high-quality
                solutions that meet diverse business needs worldwide. Through innovation,
                collaboration, and sustainability, we bridge markets, foster partnerships,
                and drive growth across sectors.
              </p>
            </motion.article>
          </div>

          {/* Floating card (top-right) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              variants={swing}
              animate="animate"
              className="absolute right-2 top-2 h-32 w-60 rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] dark:bg-zinc-900"
              aria-hidden
            />
          </div>
        </div>

        {/* Row 2: floating card (left) + Vision (right text) */}
        <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Floating card (bottom-left) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              variants={swing}
              animate="animate"
              className="absolute left-2 bottom-0 h-32 w-60 rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] dark:bg-zinc-900"
              aria-hidden
            />
          </div>

          {/* Vision text block */}
          <div className="lg:col-span-7">
            <h3 className="title text-[22px] md:text-[24px] text-[var(--color-primary)]">
              Vision
            </h3>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative mt-4 rounded-xl border border-black/10 bg-white p-5 md:p-6 shadow-lg dark:bg-zinc-900 dark:border-white/10"
            >
              <Quote className="absolute -top-3 -left-2" />
              <Quote className="absolute -bottom-3 -right-2 rotate-180" />
              <p className="phara text-[15px] leading-7 text-black/75 dark:text-white/80">
                To be a globally recognized leader in trading, infrastructure, energy, and
                healthcare—known for reliability, innovation, and excellence—while uplifting
                communities through sustainable, cutting-edge solutions and impactful
                operations.
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
