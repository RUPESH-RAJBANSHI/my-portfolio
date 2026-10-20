import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/30">
        <span className="text-5xl font-extrabold text-white/80">
          {project.title[0]}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-5 text-sm font-medium">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              Live demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-gray-300 hover:underline"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
