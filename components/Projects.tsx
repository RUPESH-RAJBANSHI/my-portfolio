"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Full-Stack", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Projects
      </p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">Things I've built</h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              filter === f
                ? "border-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                : "border-white/10 text-gray-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
