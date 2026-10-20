export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 p-10 text-center md:p-16">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
          03 · Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-400">
          I'm open to internships, freelance work, and full-time roles. Say
          hello!
        </p>

        <a
          href="mailto:rajbanshi.rupesh.555@gmail.com"
          className="mt-8 inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 font-medium text-white transition hover:scale-105"
        >
          Email me
        </a>

        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/RUPESH-RAJBANSHI"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
