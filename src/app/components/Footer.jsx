"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const WEB3FORMS_ACCESS_KEY = "9527ea59-002e-43a5-8166-763352c37002";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });
    if (botcheck) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("from_name", "Swaram Website");
      fd.append("subject", "New Newsletter Subscriber");
      fd.append("reply_to", email);
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
      } else setMsg({ type: "error", text: "Subscription failed. Try again." });
    } catch {
      setMsg({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200 dark:border-white/10 text-[#0A0A0A] dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Logo/Desc */}
          <div className="text-center sm:text-center lg:col-span-4">
            <img
              src="/swaram.png"
              width="160"
              height="46"
              alt="Swaram Ventures"
              className="mx-auto sm:mx-auto lg:mx-0 mb-5"
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-zinc-400 max-w-xs mx-auto sm:mx-0">
              Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut.
            </p>
          </div>

          {/* Links + Legal (same group in mobile & desktop) */}
          <div className="grid grid-cols-2 gap-8 text-center sm:text-left lg:col-span-4">
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-3 text-base">LINKS</h4>
              <ul className="space-y-2 text-sm">
                {["How it works", "Trading", "Features", "Testimonial", "Blogs"].map((i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-[var(--color-secondary)] transition">
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-3 text-base">LEGAL</h4>
              <ul className="space-y-2 text-sm">
                {["Terms of use", "Terms & conditions", "Privacy policy", "Cookie policy"].map((i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-[var(--color-secondary)] transition">
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left lg:col-span-4">
            <h4 className="font-semibold mb-3 text-base">Newsletter</h4>
            <p className="text-sm mb-3 text-gray-600 dark:text-zinc-400">Over 25,000 subscribed</p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto sm:mx-0">
              <input type="text" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} className="hidden" />

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-md w-full py-2.5 pl-3 pr-9 text-sm bg-white"
                    required
                  />
                  <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary px-5 py-2.5 text-sm">
                  {loading ? "Subscribe..." : "Subscribe"}
                </button>
              </div>

              {msg.text && (
                <p className={`mt-2 text-xs ${msg.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {msg.text}
                </p>
              )}
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-zinc-400 text-center">

          <p>© {new Date().getFullYear()} Swaram</p>

          <div className="flex items-center gap-2">
            <p>Designed & Developed by</p>
            <Link href="https://ayatiworks.com" target="_blank">
              <img src="/ayati.png" width={84} height={22} alt="Ayatiworks" className="opacity-80 hover:opacity-100" />
            </Link>
          </div>

          <div className="flex gap-4 text-lg">
            <Link href="#"><FaFacebookF className="hover:text-[var(--color-secondary)]" /></Link>
            <Link href="#"><FaInstagram className="hover:text-[var(--color-secondary)]" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-[var(--color-secondary)]" /></Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
