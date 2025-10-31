"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="title mx-auto max-w-3xl tracking-tight text-balance"
          >
            Shaping the Future of Global
            <br className="hidden sm:block" />
            Trade & Services
          </h1>

          <p className="phara mx-auto mt-3 max-w-2xl text-black/60 dark:text-white/70">
            Explore our solutions in Infrastructure, Logistics, Energy, and Trading.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/discover"
              className="btn btn-primary px-6 py-3"
            >
              Discover Me
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline px-6 py-3 ml-4"
            >
              Contact Us
            </Link>

            
          </div>
        </div>

        {/* Image Card */}
        <div className="mt-10 sm:mt-12">
  <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-900 dark:border-white/10 dark:ring-white/10">

    <div className="relative aspect-[16/10] sm:aspect-video">
      
      {/* Desktop Image */}
      <Image
        src="/banner/home-banner.jpg"
        alt="Global trade and services illustration"
        fill
        priority
        className="hidden sm:block object-cover"
        sizes="(max-width:1024px) 100vw, 800px"
      />

      {/* Mobile Image */}
      <Image
        src="/banner/home-banner-mob.jpg"
        alt="Global trade and services mobile illustration"
        fill
        priority
        className="sm:hidden object-cover"
        sizes="100vw"
      />

    </div>
  </div>
</div>

      </div>
    </section>
  );
}
