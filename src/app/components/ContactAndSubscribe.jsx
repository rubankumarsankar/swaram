"use client";

import { useForm } from "react-hook-form";
import { LuMail, LuMapPin } from "react-icons/lu";

export default function ContactAndSubscribe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data) => {
    // TODO: wire to your API (fetch/axios). Demo only:
    await new Promise((r) => setTimeout(r, 700));
    alert(
      `Thanks! We received your message:\n${JSON.stringify(data, null, 2)}`
    );
    reset();
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        {/* Top: Contact info + form */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: contact info */}
          <aside className="md:col-span-6">
            <p className="text-xs uppercase tracking-wide text-black/60 mb-1">
              Contact Info
            </p>
            <h3 className="text-[24px] font-extrabold leading-snug text-[var(--color-primary)]">
              We are always
              <br /> happy to
              <br /> assist you
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <LuMail className="h-4 w-4" />
                </span>
                <a href="mailto:info@swaram.ae" className="hover:underline">
                  info@swaram.ae
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <LuMapPin className="h-4 w-4" />
                </span>
                <address className="not-italic">
                  Medyan Grandstand, 6th floor,
                  <br />
                  Meydan Road, Nad Al Sheba,
                  <br />
                  Dubai, U.A.E
                </address>
              </li>
            </ul>
          </aside>

          {/* Right: form */}
          <div className="md:col-span-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* name + email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* phone */}
              <div>
                <label className="block text-sm font-medium text-black/80 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9+\-\s()]{7,20}$/,
                      message: "Enter a valid phone",
                    },
                  })}
                  className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* message */}
              <div>
                <label className="block text-sm font-medium text-black/80 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell About Your Project"
                  {...register("message")}
                  className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-sm bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Leave us a Message"}
                </button>
                {isSubmitSuccessful && (
                  <span className="ml-3 text-sm text-emerald-600">
                    Thanks! We’ll get back to you.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter strip */}
      <div className=" py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-wide text-black/60">
                Subscribe
              </p>
              <h3 className="mt-1 text-[22px] md:text-[24px] font-extrabold text-[var(--color-primary)]">
                Subscribe to our Newsletter
              </h3>
              <p className="mt-2 text-sm text-black/70 max-w-xl">
                Stay informed about the latest investor updates, financial
                results, and announcements by subscribing to our newsletter.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter mini-form using RHF as well ---------- */
function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { nemail: "" } });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(`Subscribed: ${data.nemail}`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="md:col-span-5 flex flex-col gap-2"
    >
      <label className="text-sm font-medium text-black/80">Email</label>
      <div className="flex flex-col w-full gap-2 max-w-md">
        <input
          type="email"
          placeholder="Enter Your Email"
          {...register("nemail", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className="w-full rounded-sm border border-black/15 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-sm bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "…" : "Subscribe"}
        </button>
      </div>

      {errors.nemail && (
        <p className="text-xs text-red-600">{errors.nemail.message}</p>
      )}
      {isSubmitSuccessful && (
        <p className="text-xs text-emerald-600">Subscribed successfully.</p>
      )}
    </form>
  );
}
