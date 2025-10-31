"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Tiny hook: run once when element enters viewport */
function useInViewOnce(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView, options]);

  return [ref, inView];
}

/* Counter that animates from 0 to target when visible */
function CountUp({ target = 0, duration = 1200, suffix = " +" }) {
  const [ref, inView] = useInViewOnce();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let rafId;
    const startTs = performance.now();

    const tick = (now) => {
      const elapsed = now - startTs;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const next = Math.floor(eased * target);
      if (next !== start) {
        start = next;
        setValue(next);
      }
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function AboutUsCentered() {
  const stats = [
    { value: 70, note: "Year of Combined\nExperience" },
    { value: 25, note: "Winning award best\nshipping company" },
    { value: 70, note: "Year of Combined\nExperience" },
    { value: 25, note: "Winning award best\nshipping company" },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex justify-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title text-[var(--color-primary)] text-center relative inline-block"
          >
            About Us
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
        {/* Subheading */}
        <p className="phara mt-2 text-center font-semibold text-black/80 dark:text-white/85">
          Global Trading, Infrastructure, and Healthcare Solutions
        </p>
        {/* Description */}
        <p className="phara mx-auto mt-6 max-w-4xl text-center text-black/70 dark:text-white/70">
          Swaram is a global trading and service solutions company founded by
          industry veterans with 70 years of combined experience. Specializing
          in infrastructure, construction, logistics, energy, and healthcare,
          Swaram offers import/export, sourcing, project management, and
          renewable energy solutions across the Middle East, Asia, and Africa.
          Committed to integrity, innovation, sustainability, and excellence,
          the company thrives on its founders’ expertise in finance and
          technical solutions.
        </p>
        {/* Stats */}
        <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <li key={i} className="text-center">
              <div className="text-[32px] md:text-[36px] font-extrabold text-[var(--color-primary)]">
                <CountUp target={s.value} duration={1100 + i * 150} />
              </div>
              <p className="phara mt-2 whitespace-pre-line text-black/80 dark:text-white/80">
                {s.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
