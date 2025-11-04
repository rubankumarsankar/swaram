"use client";


export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="title text-[#153C7A] font-extrabold">Why Choose Us</h2>
          <p className="phara mt-2 text-black/60">
            Decades of experience, global reach, and a commitment to excellence
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6">
          <hr className="mx-auto max-w-4xl border-black/10" />
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Feature
            img="/icons/icon-1.png"
            title="Global Expertise"
            desc="Decades of experience across multiple sectors, providing tailored services."
          />
          <Feature
            img="/icons/icon-2.png"
            title="End-to-End Solutions"
            desc="Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency."
          />
          <Feature
            img="/icons/icon-3.png"
            title="Cutting-Edge Innovation"
            desc="Adoption of the latest technologies to offer cutting-edge solutions."
          />
        </div>

      </div>
    </section>
  );
}

function Feature({ img, title, desc }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-14 w-14 items-center justify-center  p-2">
          <img
            src={img}
            alt={title}
            width={30}
            height={30}
            className="object-contain"
          />
        </span>
        <h3 className="title text-2xl font-semibold text-black">{title}</h3>
      </div>

      <p className="phara text-lg/6 text-black/60 mt-1">
        {desc}
      </p>
    </div>
  );
}
