type Item = {
  period: string;
  title: string;
  place: string;
  text: string;
  points?: string[];
  tech?: string[];
};

const items: Item[] = [
  {
    period: "2025",
    title: "Intern",
    place: "Clove IT",
    text: "Worked on real-world web applications as part of a development team, using the MERN stack.",
    points: [
      "Built the Travel Management System, a full-stack web application",
      "Worked on multiple projects across the frontend, backend, and database",
      "Collaborated with the team using Git and GitHub",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
  },
  {
    period: "2022 – 2026",
    title: "Bachelor's Degree",
    place: "AIMS college, Biratnagar, Nepal",
    text: "Studied Computer Science and Information Technology (BSC.CSIT).",
  },
  {
    period: "2023",
    title: "Web Development Course",
    place: "Online / Bootcamp",
    text: "Completed a course covering HTML, CSS, JavaScript, and React.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Experience
      </p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">My journey</h2>

      <div className="mt-10 border-l border-white/10 pl-8">
        {items.map((item) => (
          <div key={item.title} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 ring-4 ring-[#05070f]" />
            <p className="text-sm text-cyan-400">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.place}</p>
            <p className="mt-2 max-w-xl text-gray-400">{item.text}</p>

            {item.points && (
              <ul className="mt-3 max-w-xl list-disc space-y-1 pl-5 text-gray-400">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}

            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
