"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";

export default function WorkTogetherForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    alert(`Submitted:\n${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <section className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Left: Form */}
          <div className="md:col-span-7">
            <h2 className="title text-[var(--color-primary)] text-[28px] md:text-[32px] leading-tight">
              <span className="relative inline-block">
                Let’s Work Together
                <span className="block h-[3px] w-24 bg-[var(--color-primary)] mt-2 rounded-full" />
              </span>
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-5">

              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName")}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Email Address *</label>
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
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    {...register("phone")}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-black/80 mb-1">Industry</label>
                <input
                  type="text"
                  placeholder="Enter Your Industry"
                  {...register("industry")}
                  className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-black/80 mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell About Your Project"
                  {...register("message")}
                  className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-6 py-3"
              >
                {isSubmitting ? "Submitting…" : "Submit"}
              </button>

              {isSubmitSuccessful && (
                <span className="ml-3 text-sm text-emerald-600">
                  Thanks! We’ll get back to you.
                </span>
              )}
            </form>
          </div>

          {/* Right: Logo */}
          <div className="md:col-span-5 flex items-center justify-center">
            <Image
              src="/assets/swaram-logo.png"   /* change path to match your assets */
              alt="SwaRam Ventures"
              width={420}
              height={420}
              className="h-auto w-full max-w-sm"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
