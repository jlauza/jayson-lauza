"use client";

import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative min-h-screen bg-black overflow-hidden">
      {/* Meteors */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <Meteors number={30} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold text-white sm:text-7xl">
            Your Business Needs a{" "}
            <span className="text-yellow-600">Website That</span> Actually{" "}
            <span className="text-yellow-600">Works</span>
          </h1>
          <p className="mt-8 text-lg text-gray-300">
            Your business deserves more than just a website. I build websites
            that attract customers and generate leads.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-yellow-400"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-yellow-500"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
