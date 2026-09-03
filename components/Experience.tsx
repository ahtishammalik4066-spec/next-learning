function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/[0.06] bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            02 / Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            My journey so far.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-zinc-600 sm:text-sm">
            My journey has evolved from programming fundamentals to building
            complete full-stack applications using modern frontend, backend,
            database and API technologies.
          </p>
        </div>

        {/* EXPERIENCE IMAGE */}
        <div className="mx-auto mt-10 max-w-5xl sm:mt-14">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0a] p-1.5 shadow-2xl sm:rounded-[2rem] sm:p-2">

            <div className="relative h-[260px] overflow-hidden rounded-[1.2rem] sm:h-[420px] sm:rounded-[1.5rem] lg:h-[480px]">

              <img
                src="/images/ahtisham.png"
                alt="Ahtisham - Full Stack Developer"
                className="h-full w-full scale-[1.1] object-cover grayscale-[20%] transition duration-1000 group-hover:scale-[1.15] group-hover:grayscale-0"
                style={{ objectPosition: "50% 15%" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="max-w-xl rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl sm:p-5">

                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-400 sm:text-[9px]">
                    Full Stack Developer
                  </p>

                  <p className="mt-2 text-base font-medium sm:text-xl">
                    Building. Scaling. Delivering.
                  </p>

                  <p className="mt-2 text-xs leading-5 text-zinc-400 sm:text-sm">
                    Building modern full-stack applications with powerful
                    frontend experiences, scalable backend systems,
                    databases and APIs.
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
              15+
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
              Stack Developer
            </p>
          </div>

        </div>

        {/* JOURNEY TIMELINE */}
        <div className="mx-auto mt-14 max-w-4xl sm:mt-20">

          <div className="relative">

            <div className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

            <div className="space-y-8 sm:space-y-12">

              {/* 01 */}
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
                        Programming & Software Development
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      01
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Built a strong foundation in programming, object-oriented
                    programming, algorithms, data structures, logical thinking
                    and software development concepts.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Programming",
                      "OOP",
                      "Algorithms",
                      "Data Structures",
                      "Problem Solving",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 02 */}
              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Frontend Development
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        React • Next.js • TypeScript
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      02
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Building modern and responsive web applications using
                    React, Next.js and TypeScript with reusable components,
                    dynamic interfaces, API integration and scalable frontend
                    architecture.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "App Router",
                      "API Integration",
                      "Reusable Components",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 03 */}
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
                        PHP • Node.js • Fastify
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      03
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Developing backend systems with authentication, CRUD
                    operations, business logic, server-side processing,
                    API development and frontend-backend communication.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "PHP",
                      "Node.js",
                      "Fastify",
                      "REST APIs",
                      "Authentication",
                      "CRUD",
                      "Backend Development",
                      "API Development",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 04 */}
              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Database Development
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        MySQL • PostgreSQL • Supabase
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      04
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Working with relational databases, database design,
                    relationships, queries and backend data integration
                    to build reliable database-driven applications.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "MySQL",
                      "PostgreSQL",
                      "Supabase",
                      "SQL",
                      "Database Design",
                      "PDO",
                      "Queries",
                      "Data Management",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 05 */}
              <div className="relative flex gap-4 sm:gap-7">

                <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080808]">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </div>

                <div className="group min-w-0 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                        Full Stack Development
                      </p>

                      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                        End-to-End Application Development
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                      05
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Combining frontend, backend, databases and APIs to build
                    complete full-stack applications from user interface to
                    server-side logic, data storage and deployment.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Full Stack",
                      "Frontend",
                      "Backend",
                      "Database",
                      "REST APIs",
                      "Authentication",
                      "API Integration",
                      "Deployment",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[8px] text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 06 - CURRENT */}
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
                        Full Stack Developer
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-emerald-400/50 sm:text-[10px]">
                      NOW
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
                    Currently focused on building production-ready full-stack
                    applications using modern technologies, scalable
                    architecture, APIs, databases and clean maintainable code.
                    Continuously improving technical depth and developing
                    real-world digital products.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "Node.js",
                      "Fastify",
                      "PHP",
                      "MySQL",
                      "PostgreSQL",
                      "Supabase",
                      "REST APIs",
                      "Git",
                      "GitHub",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 font-mono text-[8px] text-emerald-400/70"
                      >
                        {skill}
                      </span>
                    ))}
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