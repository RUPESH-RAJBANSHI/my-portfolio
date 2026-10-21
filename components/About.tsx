const skills = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "HTML & CSS",
  "JavaScript",
  "Figma",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        About
      </p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">About me</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <p className="leading-relaxed text-gray-400">
          I'm a software developer who enjoys turning ideas into working
          products. I'm building my skills in full-stack development with the
          MERN stack and TypeScript, and I like writing clean, readable code.
          I'm always learning something new.
        </p>

        <div>
          <h3 className="font-semibold">Tech I work with</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-indigo-400 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
