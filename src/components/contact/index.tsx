"use client";

import { EMAIL, INSTAGRAM_URL } from "@/constants";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Let’s Connect
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          Whether you want to collaborate or just say hi — my inbox is open.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-200 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          {/* LinkedIn */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-200 hover:text-blue-700 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Optional: Contact Message Form */}
        {/* You can integrate form submission tools like Formspree / Resend / Nodemailer */}
        {/* Remove below if not needed */}
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
