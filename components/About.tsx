import Reveal from "./ui/Reveal";

function About() {
  return (
    <section id="about">

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              01 / About Me
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Where I am right now.
            </h2>

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              I'm currently pursuing my Bachelor's degree in
              Computer Science while actively developing my practical
              skills in software and web development.
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
              My journey started with the fundamentals of programming
              and web development. Since then, I've been working
              toward becoming a stronger full-stack developer by
              building real applications instead of only learning
              theory.
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
              At this stage of my career, I'm focused on learning
              modern technologies, improving my problem-solving ability
              and creating projects that demonstrate what I can actually
              build.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">

              {[
                "Always Learning",
                "Problem Solver",
                "Builder",
                "Full-Stack Focused",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] text-zinc-500 transition duration-300 hover:border-cyan-400/20 hover:text-cyan-300 sm:px-4 sm:text-xs"
                >
                  {item}
                </span>
              ))}

            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;