"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white border-t border-gray-200 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image src="/swaram.png" alt="SwaRam Ventures" width={140} height={40} />
            </Link>
            <p className="mt-4 text-[14px] leading-5 text-gray-600 max-w-60">
              Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LINKS</h4>
            <ul className="space-y-2 text-[14px]">
              {["How it works","Trading","Features","Testimonial","Blogs"].map((i)=>(
                <li key={i}>
                  <Link href="#" className="transition hover:text-[var(--color-secondary)]">{i}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LEGAL</h4>
            <ul className="space-y-2 text-[14px]">
              {["Terms of use","Terms & conditions","Privacy policy","Cookie policy"].map((i)=>(
                <li key={i}>
                  <Link href="#" className="transition hover:text-[var(--color-secondary)]">{i}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">Newsletter</h4>
            <p className="text-[14px] mb-3 text-gray-600">Over 25000 people have subscribed</p>

            <div className="relative w-full mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="border border-gray-300 rounded-md w-full py-2 px-3 text-[14px] pr-10 outline-none"
              />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[14px]" />
            </div>

            <button className="btn btn-primary px-6 py-3">Subscribe</button>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[13px] text-gray-600">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-secondary)]">Privacy & Terms</Link>
            <Link href="#" className="hover:text-[var(--color-secondary)]">Contact Us</Link>
          </div>

          <p>Copyright © {new Date().getFullYear()} Swaram</p>

          <div className="flex gap-4 text-[16px]">
            <Link href="#" className="hover:text-[var(--color-secondary)]"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-[var(--color-secondary)]"><FaInstagram /></Link>
            <Link href="#" className="hover:text-[var(--color-secondary)]"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
