"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Image (3/12 on desktop) */}
          <div className="lg:col-span-3 w-full">
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/about-profile.png"
                alt="Founder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content (9/12 on desktop) */}
          <div className="lg:col-span-9 space-y-4">
            <h2 className="subtitle text-[#153C7A] font-semibold">
              About Us
            </h2>

            <h3 className="title text-[22px] md:text-[24px] font-bold leading-snug">
              Global Trading, Infrastructure, and Healthcare Solutions
            </h3>

            <p className="paragraph text-black/70 dark:text-white/70 max-w-2xl">
              Swaram is a global trading and service solutions company founded by industry
              veterans with 70 years of combined experience. Specializing in infrastructure,
              construction, logistics, energy, and healthcare, Swaram offers importexport,
              sourcing, project management, and renewable energy solutions across the Middle East,
              Asia, and Africa. Committed to integrity, innovation, sustainability, and
              excellence, the company thrives on its founders experience in finance and technical
              solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {[
                { value: "70 +", text: "Year of Combined Experience" },
                { value: "25 +", text: "Winning award best shipping company" },
                { value: "70 +", text: "Year of Combined Experience" },
                { value: "25 +", text: "Winning award best shipping company" },
              ].map((item, idx) => (
                <div key={idx} className="text-left">
                  <p className="text-[32px] font-extrabold text-[#153C7A]">{item.value}</p>
                  <p className="paragraph text-black/70 dark:text-white/70 text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
