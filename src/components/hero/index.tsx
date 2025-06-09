// src/components/hero/index.tsx
"use client";

import { SITE_NAME, TAGLINE } from "@/constants";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white dark:bg-zinc-900 py-24 px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[70vw] h-[70vw] top-[-30%] left-[-30%] bg-black/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-[60vw] h-[60vw] bottom-[-20%] right-[-20%] bg-zinc-800/10 rounded-full blur-2xl animate-pulse-slow animation-delay-3000" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white">
          {SITE_NAME}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300">Live Film Editor</h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl">{TAGLINE}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#showreel"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Watch Showreel
          </Link>
          <Link
            href="#contact"
            className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black"
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-10 animate-bounce">
          <span className="text-3xl text-zinc-700 dark:text-white">↓</span>
          <p className="text-sm text-gray-400">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
