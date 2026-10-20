export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20">
        <span className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to work
        </span>

        <h1
          className="fade-up mt-6 text-5xl font-extrabold tracking-tight md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="text-gradient">Rupesh Rajbanshi</span>
        </h1>

        <h2
          className="fade-up mt-4 text-2xl font-medium text-gray-400 md:text-3xl"
          style={{ animationDelay: "0.2s" }}
        >
          Full-Stack Software Developer
        </h2>

        <p
          className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
          style={{ animationDelay: "0.3s" }}
        >
          I build fast, modern web apps with the MERN stack and TypeScript, from clean
          interfaces to the APIs behind them.
        </p>

        <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-7 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-7 py-3 font-medium transition hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}