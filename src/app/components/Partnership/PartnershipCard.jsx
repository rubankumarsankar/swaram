
"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PartnershipSolutions({ title = "Services & Solutions", items = [] }) {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="space-y-12">
          {items.map((it, i) => {
            const textFirst = i % 2 === 0; // alternate layout
            return (
              <motion.article
                key={it.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8"
              >
                {/* Text */}
                <div className={`${textFirst ? "md:col-span-6" : "md:col-span-5 md:order-2"} flex`}>
                  <div className="w-full bg-white p-6 shadow-sm ">
                    <p className="text-lg uppercase tracking-wide text-black/60 dark:text-white/60 mb-1">
                      {it.category}
                    </p>
                    <h3 className="title text-[var(--color-primary)] leading-tight">
                      {it.title}
                    </h3>
                    <ul className="mt-4 phara text-xl space-y-4 leading-relaxed text-black/75">
                      {it.bullets?.map((b, idx) => (
                        <li key={idx} className="relative">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={`${textFirst ? "md:col-span-6" : "md:col-span-7 md:order-1"}`}>
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-md">
                    <img
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    {/* soft overlay gradient for depth */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
