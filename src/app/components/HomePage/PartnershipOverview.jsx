"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuGlobe, LuSearch, LuLightbulb, LuCog } from "react-icons/lu";

const featureList = [
  { title: "Global Ambition", icon: <LuGlobe className="h-14 w-14 text-[#153C7A]" /> },
  { title: "Emphasis on Expertise", icon: <LuSearch className="h-14 w-14 text-[#E2572B]" /> },
  { title: "Integrated Solutions", icon: <LuLightbulb className="h-14 w-14 text-[#25C165]" /> },
  { title: "Innovation & Sustainability", icon: <LuCog className="h-14 w-14 text-[#153C7A]" /> },
];

const itemAnim = {
  hidden: { opacity: 0, y: 25 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
  }),
};

export default function PartnershipOverview() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="title text-center "
        >
          The company was founded as a partnership to
          <br className="hidden sm:block" />
          combine our expertise.
        </motion.h2>

        {/* Visual */}
        <div className="relative mx-auto mt-8 sm:mt-10 flex max-w-4xl items-center justify-center">
          <div className="relative aspect-square w-full max-w-[560px]">

            {/* Center image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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

            {/* Icons around (desktop) */}
            <div className="absolute inset-0 hidden lg:block">
              {featureList.map((f, i) => (
                <motion.div
                  key={f.title}
                  custom={i}
                  variants={itemAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`absolute flex items-center gap-2 ${
                    i === 0 && "left-[-110px] top-[22%]"
                  } ${i === 1 && "right-[-150px] top-[22%]"} ${
                    i === 2 && "left-[-220px] bottom-[22%]"
                  } ${i === 3 && "right-[-260px] bottom-[22%]"} `}
                >
                  <span className="inline-flex items-center justify-center">
                    {f.icon}
                  </span>
                  <span className="subtitle font-medium text-black dark:text-white">
                    {f.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {featureList.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm dark:bg-zinc-900 dark:border-white/15"
            >
              {f.icon}
              <span className="phara font-medium">{f.title}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
