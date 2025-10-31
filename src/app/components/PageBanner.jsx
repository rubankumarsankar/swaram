"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaAngleRight } from "react-icons/fa";

export default function PageBanner({
  bgDesktop = "/banner-desktop.jpg",
  bgMobile = "/banner-mobile.jpg",
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <section className="relative h-[600px] md:h-[600px] max-w-8xl mx-auto w-full flex items-end">

      {/* Desktop Banner */}
      <Image
        src={bgDesktop}
        alt="Banner"
        fill
        className="object-cover hidden md:block "
        priority
      />

      {/* Mobile Banner */}
      <Image
        src={bgMobile}
        alt="Banner"
        fill
        className="object-cover md:hidden "
        priority
      />

      {/* Breadcrumb bottom-left */}
      <div className="relative z-10 px-5 pb-6 md:px-10 md:pb-8 w-full max-w-7xl mx-auto">
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
        className="hover:text-[var(--color-secondary)] text-base transition font-medium flex items-center gap-1"
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
          <span key={link} className="flex items-center text-base gap-1">
            {!isLast ? (
              <Link
                href={link}
                className="hover:text-[var(--color-secondary)] text-base transition capitalize flex items-center gap-1"
              >
                {segment}
                <FaAngleRight className="text-[var(--color-secondary)]" />
              </Link>
            ) : (
              <span className="text-[var(--color-secondary)] text-base font-semibold capitalize">
                {segment}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
