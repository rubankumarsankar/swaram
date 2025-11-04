"use client";


const logos = [
  { src: "/icons/hero-icon-1.png", alt: "Fortune" },
  { src: "/icons/hero-icon-2.png", alt: "Forbes" },
  { src: "/icons/hero-icon-3.png", alt: "Invest Detroit" },
  { src: "/icons/hero-icon-4.png", alt: "Robinhood" },
];

export default function PressLogos() {
  return (
    <section className="bg-white py-10 sm:py-12 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* visually hidden title for a11y */}
        <h2 className="sr-only">Featured by</h2>

        <ul className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 sm:grid-cols-4 sm:gap-x-16">
          {logos.map((logo) => (
            <li key={logo.alt} className="w-32 sm:w-40">
              <div className="relative h-6 sm:h-8">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0 dark:invert dark:opacity-70"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
