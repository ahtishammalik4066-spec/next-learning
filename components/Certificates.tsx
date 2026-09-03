import certificates from "@/data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#080808]"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-14 max-w-3xl sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            05 / Certifications
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Learning. Building.{" "}
            <span className="text-zinc-600">Growing.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            My certifications represent a continuous journey of learning,
            experimentation and practical development. Alongside academic
            knowledge, I continuously improve my skills by building real-world
            applications and working with modern technologies across the
            frontend, backend, databases and APIs.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
            My goal is not just to collect certificates, but to turn every
            concept I learn into something practical — from responsive
            interfaces and reusable components to REST APIs, authentication,
            database systems and complete full-stack applications.
          </p>

          {/* SKILL TAGS */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-400/90">
              Full Stack Development
            </span>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
              Frontend Development
            </span>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
              Backend Development
            </span>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
              Database Development
            </span>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
              REST APIs
            </span>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
              Software Development
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="border-l border-cyan-400/20 pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Developer Profile
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Full Stack Developer
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                I work across the complete development lifecycle — from
                designing user interfaces and building frontend applications
                to developing backend services, connecting databases and
                integrating APIs.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                My current stack includes JavaScript, TypeScript, React,
                Next.js, Tailwind CSS, Node.js, Fastify, PHP, MySQL,
                PostgreSQL and Supabase.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Core Technologies
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
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
                ].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 font-mono text-[9px] text-zinc-500 transition duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/[0.03] hover:text-cyan-400"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* LEARNING PHILOSOPHY */}
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400">
                My Approach
              </p>

              <p className="mt-3 text-xs leading-6 text-zinc-600">
                Learn the concept → build with it → solve real problems →
                improve the implementation.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — CERTIFICATES */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Credentials & Milestones
                </p>

                <h3 className="mt-2 text-xl font-medium text-white">
                  Certifications & Learning
                </h3>
              </div>

              <span className="hidden rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-zinc-600 sm:block">
                {certificates.length.toString().padStart(2, "0")} RECORDS
              </span>
            </div>

            <div className="space-y-4">
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-6"
                >
                  {/* CARD GLOW */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.035] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.09]" />

                  <div className="relative">
                    {/* TOP ROW */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* NUMBER */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04]">
                          <span className="font-mono text-[10px] text-cyan-400">
                            {certificate.number}
                          </span>
                        </div>

                        {/* TITLE */}
                        <div className="min-w-0">
                          <p className="mb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                            Certification {String(index + 1).padStart(2, "0")}
                          </p>

                          <h4 className="break-words text-sm font-medium leading-6 text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-base">
                            {certificate.title}
                          </h4>

                          <p className="mt-1 text-xs text-zinc-600">
                            {certificate.issuer}
                          </p>
                        </div>
                      </div>

                      {/* YEAR */}
                      <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-[9px] text-zinc-600">
                        {certificate.year}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-5 border-t border-white/[0.05] pt-4">
                      <p className="text-xs leading-6 text-zinc-600">
                        This certification contributes to my continuous
                        development as a software engineer and strengthens my
                        practical understanding of modern development
                        workflows, technologies and problem-solving.
                      </p>
                    </div>

                    {/* BOTTOM TAGS */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
                        Verified Learning
                      </span>

                      <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-cyan-400/60">
                        Development
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM MESSAGE */}
            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/70">
                Always Learning
              </p>

              <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-zinc-600">
                Technology keeps evolving, and so do I. I continuously explore
                new tools, frameworks and development practices to become a
                better Full Stack Developer and build more scalable,
                maintainable and user-focused applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;