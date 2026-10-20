"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  // Scroll effects: shrink style + progress bar + clear active at top
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) setActive("");
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0a0e1a]/80 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-5 text-lg font-bold">
          <span className="flex h-8 w-18 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-extrabold text-white">
            Portfolio
          </span>
          <span>
            Rupesh<span className="text-gradient"> Rajbanshi</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 ${
                      isActive ? "opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105 md:inline-block"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 font-medium transition ${
                  active === l.href.slice(1)
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-3 text-center font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}