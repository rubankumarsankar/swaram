"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white border-t border-gray-200 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + Text */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/swaram.png"
                alt="SwaRam Ventures"
                width={140}
                height={40}
              />
            </Link>
            <p className="mt-4 text-[14px] leading-[20px] text-gray-600 max-w-[240px]">
              Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LINKS</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Trading</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Testimonial</Link></li>
              <li><Link href="#">Blogs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">LEGAL</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="#">Terms of use</Link></li>
              <li><Link href="#">Terms of conditions</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Cookie policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-[16px] mb-3">News letter</h4>
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

            <button className="bg-[#183E7A] text-white text-[14px] font-medium px-5 py-2 rounded-md w-fit">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[13px] text-gray-600">

          <div className="flex gap-4">
            <Link href="#">Privacy & Terms</Link>
            <Link href="#">Contact Us</Link>
          </div>

          <p>Copyright © {new Date().getFullYear()} Swaram</p>

          <div className="flex gap-4 text-[16px]">
            <Link href="#" className="hover:text-blue-600"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-pink-600"><FaInstagram /></Link>
            <Link href="#" className="hover:text-blue-800"><FaLinkedinIn /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
