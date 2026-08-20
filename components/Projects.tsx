import projects from "@/data/projects";

/* Pure CSS keyframes for the seamless marquee (self-contained) */
const marqueeStyles = `
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
`;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex w-[260px] shrink-0 flex-col items-center rounded-3xl border border-white/[0.08] bg-[#0a0a0a] px-5 py-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:w-[300px] sm:px-7">
      {/* CIRCULAR IMAGE */}
      <div className="relative">
        {/* Glow ring behind the circle */}
        <div className="absolute -inset-2 rounded-full bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] sm:h-40 sm:w-40">
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Number badge */}
        <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0a0a0a] font-mono text-[9px] text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] sm:h-9 sm:w-9 sm:text-[10px]">
          {project.number}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
        {project.title}
      </h3>

      {/* CATEGORY */}
      <span className="mt-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.15em] text-cyan-400 sm:text-[9px]">
        {project.category}
      </span>

      {/* DESCRIPTION */}
      <p className="mt-4 text-xs leading-6 text-zinc-500 sm:text-[13px] sm:leading-7">
        {project.description}
      </p>

      {/* TECHNOLOGIES */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] text-zinc-500 transition duration-300 hover:border-cyan-400/20 hover:text-cyan-300 sm:text-[10px]"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* PROJECT LINK */}
      <a
        href="https://www.linkedin.com/in/ahtisham-rafique-b79ba0323"
        target="_blank"
        rel="noopener noreferrer"
        className="group/link mt-6 flex items-center gap-2 text-sm font-medium text-white transition duration-300 hover:text-cyan-300"
      >
        <span className="border-b border-white/20 pb-0.5 transition group-hover/link:border-cyan-400/40">
          View Project
        </span>
        <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
          →
        </span>
      </a>
    </article>
  );
}

function MoreProjectsCard() {
  return (
    <article className="group flex w-[260px] shrink-0 flex-col items-center justify-center rounded-3xl border border-dashed border-cyan-400/20 bg-cyan-400/[0.015] px-5 py-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:w-[300px] sm:px-7">
      {/* Circular "+" icon */}
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-cyan-400/30 bg-cyan-400/[0.04] text-4xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.1)] transition-all duration-500 group-hover:rotate-90 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] sm:h-40 sm:w-40">
          +
        </div>
      </div>

      <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 sm:text-[10px]">
        More Projects
      </p>

      <h3 className="mt-3 text-lg font-semibold sm:text-xl">
        More work is coming.
      </h3>

      <p className="mt-3 text-xs leading-6 text-zinc-600 sm:text-[13px] sm:leading-7">
        {"I'm continuously building new applications and improving my technical skills."}
      </p>

      <a
        href="https://www.linkedin.com/in/ahtisham-rafique-b79ba0323"
        target="_blank"
        rel="noopener noreferrer"
        className="group/button mt-6 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-xs text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.1] sm:text-sm"
      >
        See More on LinkedIn
        <span className="transition-transform group-hover/button:translate-x-1">
          →
        </span>
      </a>
    </article>
  );
}

function Projects() {
  /* Duplicate the set (3 projects + more card) twice for a seamless -50% loop */
  const marqueeSet = (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.number} project={project} />
      ))}
      <MoreProjectsCard />
    </>
  );

  return (
    <section
      id="projects"
      className="border-y border-white/[0.06] bg-[#080808]"
    >
      <style>{marqueeStyles}</style>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              04 / Selected Work
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {"Things I've built."}
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/ahtisham-rafique-b79ba0323"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-3 text-sm text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.09]"
          >
            See More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-7 text-zinc-500 sm:text-sm">
          A selection of projects that represent my technical growth,
          problem-solving ability and interest in building useful
          digital products.
        </p>

        {/* MARQUEE */}
        <div className="relative mt-10 sm:mt-14">
          {/* Edge fade masks (left & right) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080808] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent sm:w-32" />

          {/* Marquee viewport */}
          <div className="group overflow-hidden py-4">
            {/* Track — pauses on hover, seamless -50% loop */}
            <div
              className="flex w-max gap-5 pr-5 transition-transform duration-500 group-hover:[animation-play-state:paused] sm:gap-7 sm:pr-7"
              style={{ animation: "marquee-scroll 30s linear infinite" }}
            >
              {marqueeSet}
              {marqueeSet}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;