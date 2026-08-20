function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505]">

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

          <div>

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] font-mono font-semibold text-cyan-300 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 sm:h-11 sm:w-11">
                A
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Ahtisham<span className="text-cyan-400">.</span>
                </p>

                <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px]">
                  Full-Stack Developer
                </p>

              </div>

            </a>

            <p className="mt-5 max-w-md text-xs leading-7 text-zinc-500 sm:mt-6 sm:text-sm">
              I build modern web applications, intelligent systems and
              meaningful digital experiences while continuously learning
              and growing as a developer.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-2 sm:mt-7 sm:px-4">

              <span className="relative flex h-2 w-2">

                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />

              </span>

              <span className="text-[10px] text-zinc-500 sm:text-xs">
                Open to opportunities
              </span>

            </div>

          </div>

          <div>

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600 sm:text-[10px]">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:flex sm:flex-col">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Certificates", "#certificates"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (

                <a
                  key={label}
                  href={href}
                  className="w-fit text-xs text-zinc-500 transition duration-300 hover:translate-x-1 hover:text-cyan-300 sm:text-sm"
                >
                  {label}
                </a>

              ))}

            </div>
          </div>

          <div>

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600 sm:text-[10px]">
              Get in touch
            </p>

            <div className="mt-5 space-y-5 sm:mt-6">

              <a
                href="mailto:ahtishammalik4066@gmail.com"
                className="group flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />

                  </svg>

                </div>

                <div className="min-w-0">

                  <p className="text-[9px] uppercase tracking-wider text-zinc-700">
                    Email
                  </p>

                  <p className="mt-1 break-all text-xs text-zinc-400 transition group-hover:text-cyan-300 sm:text-sm">
                    ahtishammalik4066@gmail.com
                  </p>

                </div>

              </a>

              <a
                href="https://www.linkedin.com/in/ahtisham-rafique-b79ba0323"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >

                    <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.5h3V19H5V9.5Zm5 0h2.9v1.3h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V19h-3v-4.55c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42V19h-3V9.5Z" />

                  </svg>

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-zinc-700">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-xs text-zinc-400 transition group-hover:text-cyan-300 sm:text-sm">
                    Ahtisham Rafique
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">

          <p className="text-[10px] text-zinc-700 sm:text-xs">
            © 2026 Ahtisham Rafique. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">

            <span className="text-[10px] text-zinc-700 sm:text-xs">
              Built with
            </span>

            <span className="text-[10px] text-zinc-500 sm:text-xs">
              Next.js
            </span>

            <span className="text-zinc-800">
              •
            </span>

            <span className="text-[10px] text-zinc-500 sm:text-xs">
              Tailwind CSS
            </span>

            <a
              href="#home"
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-500 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
              aria-label="Back to top"
            >
              ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;