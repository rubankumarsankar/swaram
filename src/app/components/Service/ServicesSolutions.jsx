"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ✅ Keywords you want to bold across services */
const highlightWords = [
  "Medical equipment",
  "healthcare",
  "Telemedicine",
  "Import",
  "Export",
  "Sourcing",
  "Distribution",
  "raw materials",
  "commodities",
  "metals",
  "energy resources",
  "machinery",
  "Infrastructure",
  "Construction",
  "Project management",
  "transport",
  "urbanization",
  "Freight forwarding",
  "Warehousing",
  "inventory management",
  "Cross-border logistics",
  "Last-mile delivery",
  "Renewable Energy",
  "Solar",
  "Wind",
  "Energy Efficiency",
  "Power Distribution",
  "Engineering Services",
];

/* ✅ Function to bold keywords inside bullet text */
function formatHighlight(text) {
  let html = text;
  highlightWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    html = html.replace(regex, `<strong class="font-semibold text-black">${word}</strong>`);
  });
  return html;
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ServicesSolutions({ title = "Services & Solutions", items = [] }) {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="flex justify-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title text-[var(--color-primary)] text-center relative inline-block"
          >
            {title}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "70%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute left-1/2 -bottom-2 h-[3px] bg-[var(--color-secondary)] rounded-full -translate-x-1/2"
            />
          </motion.h2>
        </div>

        <div className="space-y-12">
          {items.map((it, i) => {
            const textFirst = i % 2 === 0;
            return (
              <motion.article
                key={it.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8"
              >
                <div className={`${textFirst ? "md:col-span-6" : "md:col-span-5 md:order-2"} flex`}>
                  <div className="w-full bg-white p-6 shadow-sm">
                    <p className="text-lg uppercase tracking-wide text-black/60 border border-black/20 inline-block p-1 rounded-md mb-1">
                      {it.category}
                    </p>
                    <h3 className="title text-[var(--color-primary)] leading-tight">
                      {it.title}
                    </h3>

                    <ul className="mt-4 phara text-xl space-y-4 leading-relaxed text-black/75">
                      {it.bullets?.map((b, idx) => (
                        <li
                          key={idx}
                          className="relative"
                          dangerouslySetInnerHTML={{ __html: formatHighlight(b) }}
                        ></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${textFirst ? "md:col-span-6" : "md:col-span-7 md:order-1"}`}>
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-md">
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={i === 0}
                    />
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
