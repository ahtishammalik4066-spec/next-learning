function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/[0.06] bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            02 / Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            My journey so far.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-zinc-600 sm:text-sm">
            My experience has grown through building real-world applications,
            solving development problems and continuously improving my skills
            across frontend and backend technologies.
          </p>

        </div>

        {/* EXPERIENCE IMAGE */}

        <div className="mx-auto mt-10 max-w-5xl sm:mt-14">

          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0a] p-1.5 shadow-2xl sm:rounded-[2rem] sm:p-2">

            <div className="relative h-[260px] overflow-hidden rounded-[1.2rem] sm:h-[420px] sm:rounded-[1.5rem] lg:h-[480px]">

              <img
                src="/images/ahtisham.png"
                alt="Ahtisham journey"
                className="h-full w-full scale-[1.1] object-cover grayscale-[20%] transition duration-1000 group-hover:scale-[1.15] group-hover:grayscale-0"
                style={{ objectPosition: "50% 15%" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">

                <div className="max-w-xl rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl sm:p-5">

                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-400 sm:text-[9px]">
                    Software Developer
                  </p>

                  <p className="mt-2 text-base font-medium sm:text-xl">
                    Building. Learning. Delivering.
                  </p>

                  <p className="mt-2 text-xs leading-5 text-zinc-400 sm:text-sm">
                    Focused on building modern, responsive and scalable web
                    applications.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* EXPERIENCE HIGHLIGHTS */}

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-center">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              01+
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Year Experience
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-center">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              10+
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Projects Built
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-center">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              08+
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-center">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Full
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Stack Focus
            </p>
          </div>

        </div>

        {/* JOURNEY TIMELINE */}

        <div className="mx-auto mt-14 max-w-4xl sm:mt-20">

          <div className="relative">

            <div className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

            <div className="space-y-8 sm:space-y-12">

              {/* JOURNEY 01 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Foundation
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        Programming Fundamentals
                      </h3>

                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      01
                    </span>

                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Developed a strong foundation in programming, logical
                    thinking, problem solving, algorithms and core software
                    development concepts.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Programming
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Problem Solving
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Algorithms
                    </span>

                  </div>

                </div>

              </div>

              {/* JOURNEY 02 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Web Development
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        HTML • CSS • JavaScript
                      </h3>

                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      02
                    </span>

                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Built responsive and interactive websites using modern
                    frontend practices with a focus on clean UI, responsive
                    layouts, usability and browser-based functionality.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      HTML5
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      CSS3
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      JavaScript
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Responsive Design
                    </span>

                  </div>

                </div>

              </div>

              {/* JOURNEY 03 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Backend Development
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        PHP • MySQL • APIs
                      </h3>

                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      03
                    </span>

                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Developed complete web applications with authentication,
                    dashboards, CRUD operations, database integration,
                    API communication and server-side business logic.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      PHP
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      MySQL
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      PDO
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      REST APIs
                    </span>

                  </div>

                </div>

              </div>

              {/* JOURNEY 04 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Modern Stack
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        React • Next.js • TypeScript
                      </h3>

                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      04
                    </span>

                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Expanded into modern frontend and full-stack development
                    using React, Next.js, TypeScript and Tailwind CSS,
                    while working with reusable components, APIs and
                    modern application architecture.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      React
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Next.js
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      TypeScript
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500">
                      Tailwind CSS
                    </span>

                  </div>

                </div>

              </div>

              {/* JOURNEY 05 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 sm:text-[10px]">
                        Currently
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        Building Real Projects
                      </h3>

                    </div>

                    <span className="font-mono text-[9px] text-emerald-400/50 sm:text-[10px]">
                      NOW
                    </span>

                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Currently focused on building portfolio-quality
                    applications, improving technical depth, writing
                    maintainable code and preparing for professional
                    software development opportunities.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70">
                      Next.js
                    </span>

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70">
                      TypeScript
                    </span>

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70">
                      PHP
                    </span>

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70">
                      MySQL
                    </span>

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70">
                      Git
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;