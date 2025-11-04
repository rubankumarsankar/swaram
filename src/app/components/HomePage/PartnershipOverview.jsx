"use client";

import { motion } from "framer-motion";

const featureList = [
  { title: "Global Ambition", img: "/icons/icons-1.png" },
  { title: "Emphasis on Expertise", img: "/icons/icons-2.png" },
  { title: "Integrated Solutions", img: "/icons/icons-3.png" },
  { title: "Innovation & Sustainability", img: "/icons/icons-4.png" },
];

const itemAnim = {
  hidden: { opacity: 0, y: 25 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PartnershipOverview() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="title text-center"
        >
          The company was founded as a partnership to
          <br className="hidden sm:block" />
          combine our expertise.
        </motion.h2>

        <div className="relative mx-auto mt-8 sm:mt-10 flex max-w-4xl items-center justify-center">
          <div className="relative aspect-square w-full max-w-[560px]">
            
            {/* Center image (normal <img>) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src="/assets/partners-img.png"
                alt="Partners shaking hands"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Desktop Icon Orbit */}
            <div className="absolute inset-0 hidden lg:block">
              {featureList.map((f, i) => (
                <motion.div
                  key={f.title}
                  custom={i}
                  variants={itemAnim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`absolute flex items-center gap-2
                    ${i === 0 && "left-[-110px] top-[22%]"}
                    ${i === 1 && "right-[-150px] top-[22%]"}
                    ${i === 2 && "left-[-240px] bottom-[22%]"}
                    ${i === 3 && "right-[-290px] bottom-[22%]"}
                  `}
                >
                  <img
                    src={f.img}
                    alt={f.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <span className="subtitle font-medium text-black dark:text-white">
                    {f.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Feature Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {featureList.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={itemAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm dark:bg-zinc-900 dark:border-white/15"
            >
              <img
                src={f.img}
                alt={f.title}
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="phara font-medium">{f.title}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
