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
            Experience doesn't only come from job titles. It also
            comes from building, solving problems and consistently
            improving.
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
                    Developer Journey
                  </p>

                  <p className="mt-2 text-base font-medium sm:text-xl">
                    Learning. Building. Improving.
                  </p>

                </div>

              </div>

            </div>

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

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                    Foundation
                  </p>

                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                    Programming Fundamentals
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Started learning programming concepts, problem
                    solving, logic building and the fundamentals required
                    to become a software developer.
                  </p>

                </div>

              </div>

              {/* JOURNEY 02 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                    Web Development
                  </p>

                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                    HTML • CSS • JavaScript
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Learned how modern websites are structured and
                    developed responsive interfaces while improving
                    JavaScript and frontend development skills.
                  </p>

                </div>

              </div>

              {/* JOURNEY 03 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                    Backend
                  </p>

                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                    PHP • MySQL • APIs
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Started building complete applications with
                    authentication, dashboards, databases, CRUD systems,
                    APIs and server-side functionality.
                  </p>

                </div>

              </div>

              {/* JOURNEY 04 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                    Modern Stack
                  </p>

                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                    React • Next.js • Tailwind
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Moving toward modern full-stack development with
                    React, Next.js, TypeScript, Tailwind CSS, APIs and
                    modern application architecture.
                  </p>

                </div>

              </div>

              {/* JOURNEY 05 */}

              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-[#080808]">

                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20 sm:p-6">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 sm:text-[10px]">
                    Currently
                  </p>

                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                    Building Real Projects
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Currently focused on building portfolio-quality
                    applications, improving technical depth and preparing
                    for professional opportunities.
                  </p>

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