"use client";

import { useEffect, useState } from "react";
import TypingText from "./ui/TypingText";

function Hero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* MOUSE SPOTLIGHT */}

      <div
        className="pointer-events-none fixed z-[70] hidden h-[380px] w-[380px] rounded-full bg-cyan-400/[0.045] blur-[100px] transition-transform duration-150 ease-out lg:block"
        style={{
          transform: `translate3d(${mouse.x - 190}px, ${
            mouse.y - 190
          }px, 0)`,
        }}
      />

      <div
        className="pointer-events-none fixed z-[71] hidden h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_8px_rgba(34,211,238,0.2)] lg:block"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* HERO */}

      <section
        id="home"
        className="relative min-h-screen border-b border-white/[0.06]"
      >

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-[5%] top-[25%] h-60 w-60 rounded-full bg-cyan-500/[0.07] blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="absolute bottom-[5%] right-[5%] h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[110px] sm:h-96 sm:w-96 sm:blur-[140px]" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:gap-16 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">

          {/* HERO LEFT */}

          <div className="relative z-10 min-w-0">

            <div className="mb-6 inline-flex max-w-full animate-[fadeUp_0.7s_ease-out_both] items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2 text-[10px] text-zinc-400 sm:mb-7 sm:gap-3 sm:px-4 sm:text-xs">

              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="truncate">
                Currently open to opportunities
              </span>

            </div>

            <p className="mb-4 flex min-w-0 max-w-full items-center gap-2 overflow-hidden font-mono text-[9px] tracking-[0.18em] text-cyan-400 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[0.3em]">

              <span className="h-px w-5 shrink-0 bg-cyan-400/50 sm:w-8" />

              <TypingText
                words={[
                  "HELLO, I'M AHTISHAM",
                  "FULL-STACK DEVELOPER",
                  "COMPUTER SCIENCE STUDENT",
                ]}
                speed={65}
              />

            </p>

            <h1 className="max-w-3xl text-[clamp(2.7rem,9vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.045em]">

              <span className="block animate-[slideIn_0.8s_ease-out_both]">
                I build
              </span>

              <span className="mt-1 block animate-[slideIn_0.8s_0.15s_ease-out_both] text-zinc-500">
                digital
              </span>

              <span className="mt-1 block min-w-0 animate-[slideIn_0.8s_0.3s_ease-out_both]">

                <TypingText
                  words={[
                    "experiences.",
                    "web applications.",
                    "digital products.",
                  ]}
                  speed={90}
                />

              </span>

            </h1>

            <p className="mt-6 max-w-2xl animate-[fadeUp_1s_0.5s_ease-out_both] text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">

              Computer Science student and full-stack developer focused on
              building modern web applications, intelligent systems and
              meaningful digital products.

            </p>

            <div className="mt-6 grid max-w-xl gap-3 sm:mt-7 sm:grid-cols-2">

              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Currently
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  BS Computer Science
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Building & learning
                </p>

              </div>

              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Focus
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  Full-Stack Development
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Next.js • APIs • Databases
                </p>

              </div>

            </div>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row">

              <a
                href="#projects"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] sm:w-auto"
              >
                View My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] sm:w-auto"
              >
                Let's Connect
              </a>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="relative flex justify-center px-2 lg:justify-end">

            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[70px] sm:h-[380px] sm:w-[380px] sm:blur-[90px]" />

            <div className="absolute h-[310px] w-[310px] animate-[slowRotate_20s_linear_infinite] rounded-full border border-dashed border-cyan-400/10 sm:h-[410px] sm:w-[410px]" />

            <div className="group relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-70 blur-xl transition duration-700 group-hover:opacity-100 sm:-inset-5" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-[#0a0a0a] p-1.5 shadow-2xl transition duration-700 group-hover:-translate-y-2 group-hover:border-cyan-400/20 sm:rounded-[2rem] sm:p-2">

                <div className="relative h-[390px] w-[290px] overflow-hidden rounded-[1.2rem] bg-[#101010] sm:h-[500px] sm:w-[380px] sm:rounded-[1.5rem]">

                  <img
                    src="/images/ahtisham.png"
                    alt="Ahtisham - Full Stack Developer"
                    className="h-full w-full object-cover object-top grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl sm:p-4">

                      <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-400 sm:text-[9px]">
                        Developer
                      </p>

                      <p className="mt-1.5 text-base font-medium sm:mt-2 sm:text-lg">
                        Ahtisham
                      </p>

                      <p className="mt-1 text-[10px] text-zinc-400 sm:text-xs">
                        Building digital experiences
                      </p>

                    </div>

                  </div>

                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Status
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-xs text-zinc-300">
                    Available
                  </span>

                </div>

              </div>

              <div className="absolute -right-5 top-10 hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Main Stack
                </p>

                <p className="mt-2 text-xs text-cyan-300">
                  Next.js • React
                </p>

              </div>

            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-700 transition hover:text-cyan-400 md:flex"
        >
          Scroll

          <span className="h-10 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </a>

      </section>
    </>
  );
}

export default Hero;