"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Counter({ end = 0, suffix = "" }) {
  // Track in-view state and bump a key so CountUp restarts each time
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, margin: "-20% 0px -20% 0px" }); // triggers when ~40% visible
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    if (inView) setRunKey((k) => k + 1);
  }, [inView]);

  return (
    <span ref={ref} className="inline-block">
      <CountUp
        key={runKey}
        end={end}
        duration={1.2}
        useEasing
        separator=","
        suffix={suffix}
      />
    </span>
  );
}

export default function AboutSection() {
  const stats = [
    { end: 70, suffix: " +", text: "Years of Combined Experience" },
    { end: 25,  suffix: " +", text: "Award-winning shipping projects" },
    {
      end: 500,
      suffix: "M +",
      prefix: "$",
      text: "Global Trade Volume - Facilitating billions in cross-border commerce annually",
    },
    { end: 50,  suffix: " +", text: "Countries Served - Connecting continents through seamless logistics networks " },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <div className="relative w-full h-[440px]  overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/assets/about-profile.png"
                alt="Founder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-9 space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="title text-primary "
            >
              About Us
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="title  font-medium leading-tight"
            >
              Global Trading, Infrastructure, and Healthcare Solutions
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="phara max-w-3xl text-black/70 leading-relaxed"
            >
              Swaram is a global trading and service solutions company founded
              by industry veterans with 70 years of combined experience.
              Specializing in infrastructure, construction, logistics, energy,
              and healthcare, Swaram offers import-export, sourcing, project
              management, and renewable energy solutions across the Middle East,
              Asia, and Africa. Committed to integrity, innovation,
              sustainability, and excellence, the company thrives on its
              founders' expertise in finance and technical solutions.
            </motion.p>

            {/* Stats (counts every time they come back into view) */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6"
            >
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-[36px] font-extrabold text-primary flex items-center gap-1">
                    {s.prefix}
                    <Counter end={s.end} />
                    {s.suffix}
                  </p>

                  <p className="phara mt-6 text-black/70 dark:text-white/70 text-sm leading-snug">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
