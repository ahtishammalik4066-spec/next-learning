import skills from "@/data/skills";

function Skills() {
  // Duplicate the skills list for a seamless infinite marquee loop
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills">

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        <div className="text-center">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            03 / Skills
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-zinc-600 sm:text-sm">
            A growing technical toolkit focused on frontend development,
            backend systems, APIs and databases.
          </p>

        </div>

        {/* MARQUEE */}

        <div className="skills-marquee mt-10 sm:mt-14">

          <div className="skills-marquee-track">

            {marqueeSkills.map((skill, index) => (

              <div
                key={`${skill}-${index}`}
                className="group relative w-[180px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)] sm:w-[220px] sm:p-5"
              >

                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-400/[0.06] blur-2xl transition duration-500 group-hover:bg-cyan-400/[0.15]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] text-zinc-700 sm:text-[9px]">
                      {String((index % skills.length) + 1).padStart(2, "0")}
                    </span>

                    <span className="text-cyan-400 transition duration-300 group-hover:rotate-90">
                      +
                    </span>

                  </div>

                  <p className="mt-4 break-words text-xs font-medium text-zinc-400 transition duration-300 group-hover:text-cyan-300 sm:mt-5 sm:text-sm">
                    {skill}
                  </p>

                  <div className="mt-3 h-px w-full overflow-hidden bg-white/[0.06] sm:mt-4">

                    <div className="h-full w-0 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-700 group-hover:w-full" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;