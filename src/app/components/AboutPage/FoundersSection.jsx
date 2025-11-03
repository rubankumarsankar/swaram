"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandPointRight } from "react-icons/fa6";

const founders = [
  {
    title: "The Finance Leader",
    name: "K Swaminathan",
    role: "Founder & Chairman",
    img: "/assets/about-img-5.png",
    points: [
      "Nearly 40 years of experience across India, Nigeria, Gabon, and Dubai.",
      "Expertise in financial leadership, strategic planning, and risk management.",
      "Successful management of multi-billion-dollar investments and large-scale infrastructure projects.",
      "Implemented advanced financial systems, optimized supply chains, and ensured effective governance.",
    ],
  },
  {
    title: "The Power and Energy Leader",
    name: "K Ramasubramanian",
    role: "Founder & CEO",
    img: "/assets/about-img-6.png",
    points: [
      "Over 34 years of experience in power, energy, and infrastructure sectors.",
      "Worked with Voltas (TATA), Kirloskar, FKI PLC, AADI International, PRANSA International FZC & more.",
      "Deep expertise in power solutions, EPC, energy systems, and industrial engineering.",
      "Global experience across India, Middle East, and Africa in market expansion and major projects.",
    ],
  },
  {
    title: "The Visionary Healthcare Leader",
    name: "Dr. Gopinath Sabnivise",
    role: "Managing Director",
    img: "/assets/about-img-5.png",
    points: [
      "30+ years of experience in healthcare strategy, operations & digital transformation.",
      "Leadership roles at Apollo Hospitals, Fortis, Aster DM, VPS, NMC & Canadian Specialist Hospital.",
      "Recipient of UAE Golden Visa, CEO of the Year (2020-2024), Honorary Doctorate.",
      "Expert in hospital transformation, digital health innovation, and patient-centric excellence.",
    ],
  },
];

export default function FoundersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title text-[var(--color-primary)] inline-block relative"
          >
            Founders
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-1/2 -bottom-2 h-[3px] bg-[var(--color-secondary)] rounded-full -translate-x-1/2"
            />
          </motion.h2>
        </div>

        <div className="space-y-20">
          {founders.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-4 relative h-[420px] md:h-[520px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-8 p-6">
                <p className="phara text-lg font-medium text-gray-600 mb-1">
                  {f.title}
                </p>
                <h3 className="title text-[var(--color-primary)] leading-tight">{f.name}</h3>
                <p className="phara text-gray-600 mb-4 text-lg">{f.role}</p>
                <ul className="space-y-3 text-base md:text-lg text-black/80 leading-relaxed">
                  {f.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
  <FaHandPointRight className="mt-1 text-secondary" />
  <span>{p}</span>
</li>

                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
