const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
  {
    title: "Database & Tools",
    items: ["MongoDB", "Mongoose", "Git & GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Skills
      </p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">What I work with</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40"
          >
            <h3 className="font-semibold text-white">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
