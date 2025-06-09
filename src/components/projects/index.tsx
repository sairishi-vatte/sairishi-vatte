"use client";

import Image from "next/image";
import { projects } from "./config";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-16">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={240}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
