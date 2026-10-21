import ContactForm from "./ContactForm";
const FORMSPREE_URL = "https://formspree.io/f/xoejgnya";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 text-gray-400">
            I'm open to internships, freelance work, and full-time roles. Send
            me a message and I'll reply as soon as I can.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <a
              href="mailto:your-email@example.com"
              className="block hover:text-white"
            >
              ✉ rajbanshi.rupesh.555@gmail.com
            </a>
            <a
              href="https://github.com/RUPESH-RAJBANSHI"
              target="_blank"
              className="block hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="block hover:text-white"
            >
              LinkedIn ↗
            </a>
                        <a
              href="https://www.facebook.com/rupesh.razbnc.7"
              target="_blank"
              className="block hover:text-white"
            >
              Facebook ↗
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
