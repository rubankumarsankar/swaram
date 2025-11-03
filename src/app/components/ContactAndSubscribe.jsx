"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { LuMail, LuMapPin } from "react-icons/lu";
import emailjs from "emailjs-com";

/* ========= EmailJS IDs (replace with yours or move to env) ========= */
const EMAILJS_SERVICE_ID = "service_658qu6f";
const EMAILJS_PUBLIC_KEY = "3HrWnx7n23xp9zGfl";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_02l7cm4";
/* =================================================================== */

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
    <div aria-live="assertive" className="fixed top-4 right-4 z-[9999] flex flex-col gap-3">
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
                  <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2m-1 15l-5-5l1.414-1.414L11 14.172l6.586-6.586L19 9z"/>
                </svg>
              )}
              {t.type === "error" && (
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-red-600">
                  <path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z"/><path fill="currentColor" d="M1 21h22L12 2z"/>
                </svg>
              )}
              {t.type === "info" && (
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-sky-600">
                  <path fill="currentColor" d="M11 17h2v-6h-2zm0-8h2V7h-2z"/><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/>
                </svg>
              )}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-black/90">{t.title}</p>
              {t.description ? <p className="text-xs text-black/70 mt-0.5">{t.description}</p> : null}
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
/* ---------------------------------------------------------- */

export default function ContactAndSubscribe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const { toasts, push, remove } = useToast();

  // Contact form submit
  const onSubmitContact = async (data) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      push("success", "Message sent", "Thanks. We will get back to you shortly.");
      reset();
    } catch (error) {
      console.error("EmailJS Error (contact):", error);
      push("error", "Failed to send", "Please try again in a moment.");
    }
  };

  return (
    <section className="bg-white">
      {/* Toasts */}
      <ToastViewport toasts={toasts} onClose={remove} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        {/* Top: Contact info + form */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: contact info */}
          <aside className="md:col-span-6">
            <p className="text-xs uppercase tracking-wide text-black/60 mb-1">Contact Info</p>
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
            <form onSubmit={handleSubmit(onSubmitContact)} noValidate className="space-y-5">
              {/* name + email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </div>

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
              </div>

              {/* phone */}
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

              {/* message */}
              <div>
                <label className="block text-sm font-medium text-black/80 mb-1">Message</label>
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
                  className="btn btn-primary px-6 py-3 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Leave us a Message"}
                </button>
                {isSubmitSuccessful && (
                  <span className="ml-3 text-sm text-emerald-600">Thanks. We will get back to you.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter strip */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-wide text-black/60">Subscribe</p>
              <h3 className="mt-1 text-[22px] md:text-[24px] font-extrabold text-[var(--color-primary)]">
                Subscribe to our Newsletter
              </h3>
              <p className="mt-2 text-sm text-black/70 max-w-xl">
                Stay informed about the latest investor updates, financial
                results, and announcements by subscribing to our newsletter.
              </p>
            </div>

            <NewsletterForm pushToast={push} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter mini-form using RHF + Web3Forms + Toast ---------- */
function NewsletterForm({ pushToast }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { nemail: "", botcheck: false } });

  const WEB3FORMS_ACCESS_KEY = "9527ea59-002e-43a5-8166-763352c37002";

  const onSubmitNewsletter = async (data) => {
    try {
      if (data.botcheck) return;

      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("email", data.nemail);
      formData.append("subject", "New Newsletter Subscriber");
      formData.append("from_name", "Swaram Website");
      formData.append("reply_to", data.nemail);
      // formData.append("submission_source", "Newsletter mini form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        pushToast("success", "Subscribed successfully", "Welcome aboard.");
        reset();
      } else {
        console.error("Web3Forms Error:", json);
        pushToast("error", "Subscription failed", "Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms Exception:", err);
      pushToast("error", "Subscription failed", "Network or service issue.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitNewsletter)} noValidate className="md:col-span-5 flex flex-col gap-2">
      {/* Honeypot (hidden) */}
      <input type="checkbox" tabIndex={-1} className="hidden" {...register("botcheck")} />

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
          className="btn btn-primary px-6 py-3 disabled:opacity-60"
        >
          {isSubmitting ? "…" : "Subscribe"}
        </button>
      </div>

      {errors.nemail && <p className="text-xs text-red-600">{errors.nemail.message}</p>}
      {isSubmitSuccessful && <p className="text-xs text-emerald-600">Subscribed successfully.</p>}
    </form>
  );
}
