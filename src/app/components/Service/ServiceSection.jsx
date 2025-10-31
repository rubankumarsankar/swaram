"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function ServiceSection() {
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
            Services
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
          Comprehensive Global Solutions Across Key Industries{" "}
        </p>
        {/* Description */}
        <p className="phara mx-auto mt-6 max-w-4xl text-center text-black/70 dark:text-white/70">
          We deliver integrated solutions spanning Global Trading, Healthcare,
          Infrastructure, Logistics, and Energy. From import–export, sourcing,
          and large-scale construction to preventive healthcare, telemedicine,
          renewable energy, and advanced logistics — our diversified expertise
          empowers businesses and communities worldwide. With a focus on
          innovation, sustainability, and efficiency, we provide end-to-end
          services tailored to meet the evolving needs of international clients.
        </p>
      </div>
    </section>
  );
}
