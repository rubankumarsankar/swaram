"use client";

import { MdGridView } from "react-icons/md";
import { FaGlobe, FaLightbulb  } from "react-icons/fa";


export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="title text-[#153C7A] font-extrabold">
            Why Choose Us
          </h2>
          <p className="paragraph mt-2 text-black/60 dark:text-white/70">
            Decades of experience, global reach, and a commitment to excellence
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6">
          <hr className="mx-auto max-w-4xl border-black/10 dark:border-white/10" />
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Feature
            icon={<FaGlobe className="h-5 w-5 text-[#153C7A]" />}
            title="Global Expertise"
            desc="Decades of experience across multiple sectors, providing tailored services."
          />
          <Feature
            icon={<MdGridView className="h-5 w-5 text-[#153C7A]" />}
            title="End-to-End Solutions"
            desc="Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency."
          />
          <Feature
            icon={<FaLightbulb className="h-5 w-5 text-[#153C7A]" />}
            title="Cutting-Edge Innovation"
            desc="Adoption of the latest technologies to offer cutting-edge solutions."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#153C7A]/20 bg-[#153C7A]/5">
        {icon}
      </span>
      <div>
        <h3 className="paragraph font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="paragraph mt-1 text-sm text-black/60 dark:text-white/70">
          {desc}
        </p>
      </div>
    </div>
  );
}
