"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaHome , FaAngleRight } from "react-icons/fa";


export default function PageBanner({ bg = "/banner.jpg" }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <section className="relative h-[220px] md:h-[280px] w-full mx-auto max-w-7xl flex items-end overflow-hidden border-b border-black/5 bg-gray-200">

      {/* Background */}
      <Image
        src={bg}
        alt="Banner"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* Breadcrumb bottom-left */}
      <div className="relative z-10 px-6 pb-6 md:px-12 md:pb-8 w-full">
        <Breadcrumb segments={segments} />
      </div>
    </section>
  );
}

/* ------------ Breadcrumb Component ------------- */
function Breadcrumb({ segments }) {
  return (
    <nav className="text-white text-sm flex flex-wrap items-center gap-1">
      <Link
        href="/"
        className="hover:text-[var(--color-secondary)] transition font-medium flex items-center gap-1"
      >
        <FaHome className="text-[var(--color-secondary)]" /> Home
      </Link>

      {segments.length > 0 && (
        <FaAngleRight className="text-[var(--color-secondary)]" />
      )}

      {segments.map((segment, index) => {
        const link = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <span key={link} className="flex items-center gap-1">
            {!isLast ? (
              <Link
                href={link}
                className="hover:text-[var(--color-secondary)] transition capitalize flex items-center gap-1"
              >
                {segment}
                <FaAngleRight className="text-[var(--color-secondary)]" />
              </Link>
            ) : (
              <span className="text-[var(--color-secondary)] font-semibold capitalize">
                {segment}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
