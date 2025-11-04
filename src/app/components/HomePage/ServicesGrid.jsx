"use client";

import Link from "next/link";

const services = [
  { title: "Health Care", tag: "Health", href: "/services/health" },
  {
    title: "Preventive & Supportive Solutions",
    tag: "Prevent",
    href: "/services/prevent",
    // featured: true,
  },
  {
    title: "Infrastructure & Construction",
    tag: "Infrastructure",
    href: "/services/infrastructure",
  },
  { title: "Global Trading", tag: "Trading", href: "/services/trading" },
  { title: "Energy Solutions", tag: "Energy", href:"/services/energy" },
  {
    title: "Logistics & Supply Chain Management",
    tag: "Logistics",
    href: "/services/logistics",
  },
];

export default function ServicesGrid() {
  return (
    <section className=" bg-[#f9f9f9] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left column */}
          <div className="lg:col-span-4">
            <h2 className="title text-[color:var(--color-primary)]">
              Services
            </h2>
            <p className="phara mt-3 text-black/70">
              Explore our expertise in Infrastructure, Healthcare, Logistics,
              Energy, Cosmetics, Ayurveda and Trading
            </p>
            <Link
              href="/services"
              className="btn btn-primary px-6 py-3 mt-5"
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
                      className={`group block h-full p-4 outline-none transition duration-300
                        ${
                          isFeatured
                            ? "bg-[color:var(--color-primary)] text-white cursor-default"
                            : "bg-white border-black/10 hover:bg-[color:var(--color-primary)] hover:text-white "
                        }
                      `}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <h3
                          className={`phara font-semibold transition
                            ${
                              isFeatured
                                ? "text-white"
                                : "text-black group-hover:text-white"
                            }`}
                        >
                          {s.title}
                        </h3>

                        <div className="mt-10 flex items-center justify-between">
                          <span
                            className={`phara text-sm border border-black/20 rounded-sm transition
                              ${
                                isFeatured
                                  ? "text-white/85 hover:border hover:border-white"
                                  : "text-black/60  group-hover:text-white/90 group-hover:border group-hover:border-white group-hover:rounded-sm p-2"
                              }`}
                          >
                            {s.tag}
                          </span>

                          {isFeatured && (
                            <span className="phara rounded-sm bg-white/20 px-2 py-1 text-[11px] tracking-wide">
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
