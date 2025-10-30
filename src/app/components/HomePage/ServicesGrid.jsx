"use client";

import Link from "next/link";

const services = [
  { title: "Health Care", tag: "Health", href: "/services/health" },
  {
    title: "Preventive & Supportive Solutions",
    tag: "Prevent",
    href: "/services/prevent",
    featured: true,
  },
  { title: "Infrastructure & Construction", tag: "Infrastructure", href: "/services/infrastructure" },
  { title: "Global Trading", tag: "Trading", href: "/services/trading" },
  { title: "Energy Solutions", tag: "Energy", href: "/services/energy" },
  { title: "Logistics & Supply Chain Management", tag: "Logistics", href: "/services/logistics" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F6F7F9] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-4">
            <h2 className="title text-[color:var(--color-primary)]">Services</h2>
            <p className="paragraph mt-3 text-black/70">
              Explore our expertise in Infrastructure, Healthcare, Logistics, Energy,
              Cosmetics, Ayurveda and Trading
            </p>
            <Link
              href="/services"
              className="paragraph mt-6 inline-flex rounded-md bg-[color:var(--color-primary)] px-4 py-2 text-white shadow-sm outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/30"
            >
              Explore Services
            </Link>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const isFeatured = Boolean(s.featured);
                return (
                  <li key={s.title} className="h-full">
                    <Link
                      href={s.href}
                      className={`group block h-full rounded-md border p-4 shadow-sm outline-none transition
                        ${isFeatured
                          ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary-light)] text-white shadow-md"
                          : "border-black/10 bg-white hover:shadow focus-visible:ring-2 focus-visible:ring-black/10"}`}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <h3
                          className={`paragraph font-semibold ${
                            isFeatured ? "text-white" : "text-black"
                          }`}
                        >
                          {s.title}
                        </h3>

                        <div className="mt-10 flex items-center justify-between">
                          <span
                            className={`paragraph text-sm ${
                              isFeatured ? "text-white/85" : "text-black/60"
                            }`}
                          >
                            {s.tag}
                          </span>

                          {/* tiny badge only on featured */}
                          {isFeatured && (
                            <span className="paragraph rounded-sm bg-white/15 px-2 py-1 text-[11px] tracking-wide">
                              {s.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
