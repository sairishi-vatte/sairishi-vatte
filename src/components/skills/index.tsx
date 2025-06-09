"use client";

const skills = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "Avid Media Composer",
  "Multicam Syncing",
  "On-location Editing",
  "Color Correction",
  "Audio Syncing",
  "Fast Turnaround Editing",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-10">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white p-4 rounded-lg shadow hover:scale-105 transition transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
