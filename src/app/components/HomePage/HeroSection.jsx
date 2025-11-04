"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="title mx-auto max-w-3xl tracking-tight">
            Shaping the Future of Global
            <br className="hidden sm:block" />
            Trade & Services
          </h1>

          <p className="phara mx-auto mt-3 max-w-2xl text-black/60 dark:text-white/70">
            Explore our solutions in Infrastructure, Logistics, Energy, and Trading.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/services" className="btn btn-primary px-6 py-3">
              Discover Me
            </Link>

            <Link href="/contact-us" className="btn btn-outline px-6 py-3">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
            
            <div className="relative aspect-[16/10] sm:aspect-video w-full h-full">

              {/* Desktop Image */}
              <img
                src="/banner/home-banner.jpg"
                alt="Global trade and services illustration"
                className="hidden sm:block object-cover w-full h-full"
              />

              {/* Mobile Image */}
              <img
                src="/banner/home-banner-mob.jpg"
                alt="Global trade and services mobile illustration"
                className="sm:hidden object-cover w-full h-full"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
