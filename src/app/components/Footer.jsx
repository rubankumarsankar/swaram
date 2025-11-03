"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState(false); // honeypot
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const WEB3FORMS_ACCESS_KEY = "9527ea59-002e-43a5-8166-763352c37002"; // paste your key

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    // quick client validation
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }
    if (botcheck) return; // silently ignore bots

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("from_name", "Swaram Website");
      fd.append("subject", "New Newsletter Subscriber");
      fd.append("reply_to", email);
      // keep the field name simple for template mapping
      fd.append("email", email);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();

      if (json?.success) {
        setMsg({ type: "success", text: "Subscribed successfully." });
        setEmail("");
      }
      else {
        setMsg({ type: "error", text: "Subscription failed. Try again." });
        console.error("Web3Forms error:", json);
      }
    } catch (err) {
      setMsg({ type: "error", text: "Network error. Please try again." });
      console.error("Web3Forms exception:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/swaram.png"
                alt="SwaRam Ventures"
                width={140}
                height={40}
              />
            </Link>
            <p className="mt-4 text-[14px] leading-5 text-gray-600 max-w-60">
              Massa blandit semper varius faucibus. Suspendisse viverra
              venenatis placerat nam ut. Pellentesque sit id tempor turpis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LINKS</h4>
            <ul className="space-y-2 text-[14px]">
              {[
                "How it works",
                "Trading",
                "Features",
                "Testimonial",
                "Blogs",
              ].map((i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition hover:text-[var(--color-secondary)]"
                  >
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LEGAL</h4>
            <ul className="space-y-2 text-[14px]">
              {[
                "Terms of use",
                "Terms & conditions",
                "Privacy policy",
                "Cookie policy",
              ].map((i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition hover:text-[var(--color-secondary)]"
                  >
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Web3Forms) */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">Newsletter</h4>
            <p className="text-[14px] mb-3 text-gray-600">
              Over 25,000 people have subscribed
            </p>

            <form onSubmit={handleSubscribe} noValidate>
              {/* honeypot (hidden) */}
              <input
                type="checkbox"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />

              <div className="relative w-full mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="border border-gray-300 rounded-md w-full py-2 px-3 text-[14px] pr-10 outline-none focus:border-[var(--color-secondary)]"
                  aria-label="Email address"
                  required
                />
                <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[14px]" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary px-6 py-3 disabled:opacity-60"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>

              {msg.text ? (
                <p
                  className={[
                    "mt-2 text-[12px]",
                    msg.type === "success"
                      ? "text-emerald-600"
                      : "text-red-600",
                  ].join(" ")}
                >
                  {msg.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[13px] text-gray-600">
          {/* Left: Copyright */}
          <p className="mt-1"> Copyright  © {new Date().getFullYear()} Swaram</p>

          {/* Center: Designed & Developed by */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <p className="text-gray-600">Designed & Developed by</p>
              <Link
                href="https://ayatiworks.com"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src="/ayati.png" // ✅ update path if different
                  alt="Ayatiworks"
                  width={70}
                  height={18}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </Link>
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-4 text-[16px]">
            <Link href="#" className="hover:text-[var(--color-secondary)]">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-[var(--color-secondary)]">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-[var(--color-secondary)]">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
