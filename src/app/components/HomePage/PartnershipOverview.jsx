"use client";

import Image from "next/image";
import { LuGlobe, LuSearch, LuLightbulb, LuCog } from "react-icons/lu";

export default function PartnershipOverview() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="title text-center text-[22px] sm:text-[24px] font-extrabold text-black dark:text-white">
          The company was founded as a partnership to
          <br className="hidden sm:block" />
          combine our expertise.
        </h2>

        {/* Visual */}
        <div className="relative mx-auto mt-8 sm:mt-10 flex max-w-4xl items-center justify-center">
          {/* Central stage */}
          <div className="relative aspect-square w-full max-w-[560px]">
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10" />

            {/* Center image */}
            <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/img.png"   /* replace with your asset */
                alt="Partners shaking hands"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Corner items (desktop / lg+) */}
            <div className="absolute inset-0 hidden lg:block">
              <Feature
                className="absolute left-[-110px] top-[22%]"
                icon={<LuGlobe className="h-5 w-5 text-[#153C7A]" />}
                title="Global Ambition"
              />
              <Feature
                className="absolute right-[-120px] top-[22%]"
                icon={<LuSearch className="h-5 w-5 text-[#E2572B]" />}
                title="Emphasis on Expertise"
              />
              <Feature
                className="absolute left-[-120px] bottom-[22%]"
                icon={<LuLightbulb className="h-5 w-5 text-[#25C165]" />}
                title="Integrated Solutions"
              />
              <Feature
                className="absolute right-[-120px] bottom-[22%]"
                icon={<LuCog className="h-5 w-5 text-[#153C7A]" />}
                title="Innovation & Sustainability"
              />
            </div>
          </div>
        </div>

        {/* Mobile / tablet features grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          <FeatureRow
            icon={<LuGlobe className="h-5 w-5 text-[#153C7A]" />}
            title="Global Ambition"
          />
          <FeatureRow
            icon={<LuSearch className="h-5 w-5 text-[#E2572B]" />}
            title="Emphasis on Expertise"
          />
          <FeatureRow
            icon={<LuLightbulb className="h-5 w-5 text-[#25C165]" />}
            title="Integrated Solutions"
          />
          <FeatureRow
            icon={<LuCog className="h-5 w-5 text-[#153C7A]" />}
            title="Innovation & Sustainability"
          />
        </div>
      </div>
    </section>
  );
}

/* Small pill with icon + label used around the circle (desktop) */
function Feature({ className = "", icon, title }) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm dark:bg-zinc-900 dark:border-white/15">
        {icon}
      </span>
      <span className="paragraph font-medium text-black dark:text-white">
        {title}
      </span>
    </div>
  );
}

/* Row version for mobile/tablet */
function FeatureRow({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm dark:bg-zinc-900 dark:border-white/15">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white dark:bg-zinc-900 dark:border-white/15">
        {icon}
      </span>
      <span className="paragraph font-medium">{title}</span>
    </div>
  );
}
