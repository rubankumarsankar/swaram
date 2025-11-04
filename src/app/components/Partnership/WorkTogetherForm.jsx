"use client";

import { useForm } from "react-hook-form";
import React from "react";

/* -------------------- Mini toast system -------------------- */
function useToast() {
  const [toasts, setToasts] = React.useState([]);
  const remove = React.useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);
  const push = React.useCallback((type, title, description) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, type, title, description }]);
    setTimeout(() => remove(id), 3500);
  }, [remove]);

  // ESC clears all
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setToasts([]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { toasts, push, remove };
}

function ToastViewport({ toasts, onClose }) {
  return (
    <div
      aria-live="assertive"
      className="fixed top-4 right-4 z-[9999] flex flex-col gap-3"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="alert"
          className={[
            "w-[320px] rounded-md border shadow-lg p-3 transition-all",
            t.type === "success" ? "border-emerald-200 bg-emerald-50" : "",
            t.type === "error" ? "border-red-200 bg-red-50" : "",
            t.type === "info" ? "border-sky-200 bg-sky-50" : "",
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5">
              {t.type === "success" && (
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-emerald-600">
                  <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2m-1 15l-5-5l1.414-1.414L11 14.172l6.586-6.586L19 9z" />
                </svg>
              )}
              {t.type === "error" && (
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-red-600">
                  <path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z" /><path fill="currentColor" d="M1 21h22L12 2z" />
                </svg>
              )}
              {t.type === "info" && (
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-sky-600">
                  <path fill="currentColor" d="M11 17h2v-6h-2zm0-8h2V7h-2z" /><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                </svg>
              )}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-black/90">{t.title}</p>
              {t.description ? (
                <p className="text-xs text-black/70 mt-0.5">{t.description}</p>
              ) : null}
            </div>
            <button
              aria-label="Close"
              onClick={() => onClose(t.id)}
              className="ml-auto inline-flex rounded p-1 text-black/50 hover:text-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
/* ----------------------------------------------------------- */

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
      botcheck: false, // honeypot
    },
  });

  const { toasts, push, remove } = useToast();

  // Replace with your real Web3Forms key
  const WEB3FORMS_ACCESS_KEY = "dc0d2320-57b5-4c56-88e3-fcdee4d8c197";

  const onSubmit = async (data) => {
    try {
      if (data.botcheck) return;

      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "Swaram Website");
      formData.append("subject", "New Work Together enquiry");
      formData.append("reply_to", data.email);

      // Consider switching to simple keys for easier template mapping
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("industry", data.industry);
      formData.append("message", data.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const json = await res.json();

      if (json?.success) {
        push("success", "Submitted successfully", "We will reach out shortly.");
        reset();
      } else {
        console.error("Web3Forms error:", json);
        push("error", "Submission failed", "Please try again in a moment.");
      }
    } catch (err) {
      console.error("Web3Forms exception:", err);
      push("error", "Submission failed", "Network or service issue.");
    }
  };

  return (
    <section className="bg-white dark:bg-zinc-900">
      {/* Toasts */}
      <ToastViewport toasts={toasts} onClose={remove} />

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
              {/* Honeypot */}
              <input type="checkbox" className="hidden" tabIndex={-1} {...register("botcheck")} />

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
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9+\-\s()]{7,20}$/,
                        message: "Enter a valid phone",
                      },
                    })}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
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
                className="btn btn-primary px-6 py-3 disabled:opacity-60"
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
            <img
              src="/assets/swaram-logo.png"
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
