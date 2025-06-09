// src/components/about/index.tsx
"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-zinc-950 py-20 px-6 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
        {/* Image Left */}
        <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/satya2.jpeg" // Replace with your actual BTS or portrait image
            alt="Satya Sai Vatte Behind The Scenes"
            fill
            className="object-cover"
          />
        </div>

        {/* Bio Right */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I’m <strong>Satya Sai Vatte</strong>, a professional live editor
            with hands-on experience in the Indian film industry. I specialize
            in real-time editing workflows that enhance on-set decision-making.
            Recent projects include <strong>Lucky Bhaskar</strong>,{" "}
            <strong>Rajakar</strong>, and more.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <li>Adobe Premiere Pro</li>
              <li>DaVinci Resolve</li>
              <li>Avid Media Composer</li>
              <li>Multicam Syncing</li>
              <li>On-location Editing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
