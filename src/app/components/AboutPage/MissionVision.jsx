"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardClass =
  "relative h-40 shadow-xl p-5 md:p-6";

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
    <section className="bg-white  py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Mission text (stretches to same height) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full">
              <h3 className="title text-2xl md:text-[24px] text-[var(--color-primary)]">
                Mission
              </h3>

              <motion.article
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`${cardClass} mt-4`}
              >
                <Quote className="absolute -top-3 -left-2" />
                <Quote className="absolute -bottom-3 -right-2 rotate-180" />

                <p className="phara text-lg leading-7 text-black/75 dark:text-white/80">
                  Swaram aims to lead the global trading industry by providing
                  high-quality solutions that meet diverse business needs worldwide.
                  Through innovation, collaboration, and sustainability, we bridge
                  markets, foster partnerships, and drive growth across sectors.
                </p>
              </motion.article>
            </div>
          </div>

          {/* Right: Mission image card (same visual style & height) */}
          <div className="lg:col-span-5 flex">
            <div className={`${cardClass} mt-4 w-full`}>
              <div className="relative w-full h-40 aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/assets/Mission.png"
                  alt="Mission"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* VISION */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Vision image card */}
          <div className="lg:col-span-5 flex order-last lg:order-first">
            <div className={`${cardClass} mt-4 w-full`}>
              <div className="relative w-full h-40 aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/assets/Vission.png"
                  alt="Vision"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Vision text (stretches to same height) */}
          <div className="lg:col-span-7 flex order-first lg:order-last">
            <div className="w-full">
              <h3 className="title text-2xl md:text-[24px] text-[var(--color-primary)]">
                Vision
              </h3>

              <motion.article
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`${cardClass} mt-4`}
              >
                <Quote className="absolute -top-3 -left-2" />
                <Quote className="absolute -bottom-3 -right-2 rotate-180" />

                <p className="phara text-lg leading-7 text-black/75 dark:text-white/80">
                  To be a globally recognized leader in trading, infrastructure, energy,
                  and healthcare—known for reliability, innovation, and excellence—while
                  uplifting communities through sustainable, cutting-edge solutions and
                  impactful operations.
                </p>
              </motion.article>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
