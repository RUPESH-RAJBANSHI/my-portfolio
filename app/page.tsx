import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rupesh Rajbanshi. Built with Next.js,
        TypeScript and Tailwind.
      </footer>
      <BackToTop />
    </>
  );
}
