"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll progress (0 to 1)
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);

      // Active section detection
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "certificates",
      ];
      let current = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Position the sliding pill behind the active nav link
  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      if (!nav) return;

      const el = nav.querySelector<HTMLAnchorElement>(
        `a[data-nav="${activeSection}"]`
      );

      if (el) {
        const navRect = nav.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        setIndicator({
          left: elRect.left - navRect.left,
          width: elRect.width,
          visible: true,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050505]/85 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          : "border-b border-transparent bg-[#050505]/20 py-3 backdrop-blur-md sm:py-4"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`relative flex min-h-[52px] items-center justify-between overflow-hidden rounded-2xl border px-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 ${
            scrolled
              ? "border-white/[0.1] bg-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
              : "border-white/[0.06] bg-white/[0.02] shadow-none"
          }`}
        >
          {/* Inner gradient overlay for premium glass feel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/[0.06] via-transparent to-transparent" />

          {/* Scroll progress line at navbar bottom edge */}
          <div
            className="pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] sm:inset-x-4"
            style={{ transform: `scaleX(${progress})` }}
          />

          {/* LOGO */}

          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative grid h-9 w-9 shrink-0 place-items-center sm:h-10 sm:w-10">
              {/* Rotating gradient ring */}
              <span className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-xl bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.7)_60deg,rgba(59,130,246,0.5)_110deg,transparent_170deg,transparent_360deg)]" />

              {/* Solid center keeps the rotating ring thin at the edges */}
              <span className="absolute inset-[2px] rounded-[10px] bg-[#050505]" />

              {/* Soft pulsing glow on hover */}
              <span className="absolute -inset-1 rounded-2xl bg-cyan-400/20 opacity-0 blur-md transition-opacity duration-500 group-hover:animate-pulse group-hover:opacity-60" />

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.12] to-blue-500/[0.06] font-mono text-sm font-semibold text-cyan-300 transition-all duration-500 group-hover:scale-[1.06] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />

                A
              </div>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">
                Ahtisham<span className="text-cyan-400">.</span>
              </p>

              <p className="hidden text-[9px] uppercase tracking-[0.2em] text-zinc-600 transition-colors duration-300 group-hover:text-zinc-500 sm:block">
                Developer
              </p>
            </div>
          </a>

          {/* NAVIGATION */}

          <nav
            ref={navRef}
            className="relative hidden items-center gap-0.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 md:flex"
          >
            {/* Sliding active pill */}
            <span
              aria-hidden
              className={`absolute inset-y-1 rounded-lg bg-gradient-to-r from-cyan-400/15 via-cyan-400/10 to-blue-500/15 shadow-[0_0_14px_rgba(34,211,238,0.12)] ring-1 ring-cyan-400/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                indicator.visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: indicator.left, width: indicator.width }}
            />

            {navLinks.map(([label, href]) => {
              const isActive = activeSection === label.toLowerCase();

              return (
                <a
                  key={label}
                  href={href}
                  data-nav={label.toLowerCase()}
                  className={`relative z-10 rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT CLUSTER: CTA + MOBILE HAMBURGER */}

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              className="group relative flex shrink-0 items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-[10px] font-semibold text-[#050505] shadow-[0_4px_16px_rgba(34,211,238,0.22)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_6px_28px_rgba(34,211,238,0.45)] active:scale-95 sm:px-4 sm:py-2.5 sm:text-xs"
            >
              {/* Shine sweep on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#050505]/70 opacity-60 [animation-duration:2s]" />
                <span className="relative h-full w-full rounded-full bg-[#050505]/80" />
              </span>

              <span className="relative hidden xs:inline">{"Let's Talk"}</span>
              <span className="relative sm:hidden">Talk</span>

              <span className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Hamburger / close icon */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
            >
              <span className="relative block h-[14px] w-[18px]">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "top-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "scale-x-0 opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "top-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}

        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            menuOpen
              ? "max-h-96 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="relative mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505]/90 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            {/* Inner gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/[0.05] via-transparent to-transparent" />

            <div className="relative flex flex-col gap-1">
              {navLinks.map(([label, href]) => {
                const isActive = activeSection === label.toLowerCase();

                return (
                  <a
                    key={label}
                    href={href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-400/15 to-blue-500/10 text-white shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2)]"
                        : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {label}

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    )}
                  </a>
                );
              })}

              <div className="my-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-[#050505] shadow-[0_4px_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(34,211,238,0.4)] active:scale-[0.98]"
              >
                {"Let's Talk"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;