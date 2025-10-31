"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}

        <div className="flex justify-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title text-[var(--color-primary)] text-center relative inline-block"
          >
            Founders
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

        {/* Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-4 relative h-[420px] md:h-[520px]">
              <Image
                src="/assets/about-profile.png"
                alt="Founder"
                fill
                className="object-cover "
                priority
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-8 p-6 md:p-10 flex flex-col justify-center">
              <p className="phara text-lg font-medium text-gray-600 mb-1">
                The Finance Leader
              </p>

              <h3 className="title text-[var(--color-primary)] leading-tight">
                K Swaminathan
              </h3>

              <p className="phara text-gray-600 mb-4 text-lg ">
                Founder & Chairmen
              </p>

              <ul className="space-y-2 text-base md:text-lg text-black/80 leading-relaxed">
                <li>
                  • Nearly 40+ years of experience across various regions
                  (India, Nigeria, Sudan, and Dubai)
                </li>
                <li>
                  • Expertise in financial leadership, strategic planning, and
                  risk management
                </li>
                <li>
                  • Successful management of multi-million-dollar investments
                  and large infrastructure projects
                </li>
                <li>
                  • Known for implementing financial systems, optimizing supply
                  chains, and ensuring effective governance
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
