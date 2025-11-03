"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Global Ambition",
    desc:
      "Swaram is positioned as a globally oriented company with aspirations to lead in its chosen sectors.",
    img: "/icons/icon-4.png",
  },
  {
    title: "Emphasis on Expertise",
    desc:
      "Founders’ decades of experience are a core asset driving the company’s capabilities.",
    img: "/icons/icon-5.png",
  },
  {
    title: "Integrated Solutions",
    desc:
      "End-to-end services across disciplines deliver streamlined solutions for clients.",
    img: "/icons/icon-6.png",
  },
  {
    title: "Innovation & Sustainability",
    desc:
      "Committed to technological advancement and environmentally responsible practices.",
    img: "/icons/icon-7.png",
  },
];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PartnershipSection() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="title text-center"
        >
          Key Themes and Takeaways
        </motion.h2>

        {/* Center visual with desktop features around it */}
        <div className="relative mx-auto mt-8 sm:mt-10 flex max-w-4xl items-center justify-center">
          <div className="relative aspect-square w-full max-w-[560px]">
            {/* Center image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/assets/partners-img.png"
                alt="Partners shaking hands"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Around-the-image cards (desktop) */}
            <div className="absolute inset-0 hidden lg:block">
              {/* Top-left */}
              <FeatureCard
                i={0}
                className="absolute left-[-220px] top-[15%] w-[240px]"
                {...features[0]}
              />
              {/* Top-right */}
              <FeatureCard
                i={1}
                className="absolute right-[-220px] top-[15%] w-[260px]"
                {...features[1]}
              />
              {/* Bottom-left */}
              <FeatureCard
                i={2}
                className="absolute left-[-260px] bottom-[12%] w-[260px]"
                {...features[2]}
              />
              {/* Bottom-right */}
              <FeatureCard
                i={3}
                className="absolute right-[-260px] bottom-[12%] w-[260px]"
                {...features[3]}
              />
            </div>
          </div>
        </div>

        {/* Mobile / tablet grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" p-4 "
            >
              <div className="flex items-start gap-3">
                <div className="h-20 w-20 flex-shrink-0">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="subtitle font-semibold text-black dark:text-white">
                    {f.title}
                  </h3>
                  <p className="phara mt-1 text-black/70 dark:text-white/70">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function FeatureCard({ i = 0, className = "", title, desc, img }) {
  return (
    <motion.div
      custom={i}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`rounded-xl bg-white/90 p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 flex-shrink-0">
          <Image
            src={img}
            alt={title}
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
          />
        </div>
        <div>
          <h3 className="subtitle font-semibold text-black dark:text-white">
            {title}
          </h3>
          <p className="phara mt-1 text-black/70 dark:text-white/70">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
