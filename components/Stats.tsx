"use client";

import Counter from "./ui/Counter";

function Stats() {
  return (
    <section className="border-b border-white/[0.06]">

      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/[0.06] lg:grid-cols-4 lg:divide-y-0">

        <div className="group px-4 py-8 text-center transition duration-500 hover:bg-cyan-400/[0.025] sm:px-6 sm:py-10">

          <p className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent transition duration-500 group-hover:scale-110 sm:text-4xl">
            <Counter end={10} suffix="+" />
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[9px] sm:tracking-[0.2em]">
            Projects
          </p>

        </div>

        <div className="group px-4 py-8 text-center transition duration-500 hover:bg-cyan-400/[0.025] sm:px-6 sm:py-10">

          <p className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            <Counter end={1} suffix="+" />
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[9px] sm:tracking-[0.2em]">
            Years Experience
          </p>

        </div>

        <div className="group px-4 py-8 text-center transition duration-500 hover:bg-cyan-400/[0.025] sm:px-6 sm:py-10">

          <p className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            <Counter end={12} suffix="+" />
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[9px] sm:tracking-[0.2em]">
            Technologies
          </p>

        </div>

        <div className="group px-4 py-8 text-center transition duration-500 hover:bg-cyan-400/[0.025] sm:px-6 sm:py-10">

          <p className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            100%
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[9px] sm:tracking-[0.2em]">
            Commitment
          </p>

        </div>

      </div>
    </section>
  );
}

export default Stats;