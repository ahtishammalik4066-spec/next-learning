"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingText from "./ui/TypingText";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahtisham-rafique-b79ba0323",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.5h3V19H5V9.5Zm5 0h2.9v1.3h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V19h-3v-4.55c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42V19h-3V9.5Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ahtishammalik4066-spec",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
      </svg>
    ),
  },
];

function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Animate progress 0 → 100 over ~2.2s
  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Small pause, then exit
        setTimeout(() => setExiting(true), 350);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // When exiting completes, tell parent to unmount intro
  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onComplete, 700);
    return () => clearTimeout(t);
  }, [exiting, onComplete]);

  const handleSkip = () => {
    setExiting(true);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[110px] sm:h-96 sm:w-96" />
          <div className="absolute bottom-[15%] right-[10%] h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[120px] sm:h-96 sm:w-96" />

          {/* Content */}
          <motion.div
            className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Profile image with cyan glow ring */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-cyan-400/15 blur-2xl" />
              <div className="absolute -inset-1 rounded-full border border-cyan-400/30" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.25)] sm:h-32 sm:w-32">
                <img
                  src="/images/ahtisham.png"
                  alt="Ahtisham"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ahtisham<span className="text-cyan-400">.</span>
            </h1>

            {/* Typing roles */}
            <p className="mt-3 flex min-w-0 max-w-full items-center justify-center gap-2 font-mono text-xs tracking-[0.2em] text-cyan-400 sm:text-sm">
              <span className="h-px w-6 shrink-0 bg-cyan-400/50 sm:w-8" />
              <TypingText
                words={[
                  "Web Developer",
                  "Software Developer",
                  "Full-Stack Developer",
                ]}
                speed={70}
              />
              <span className="h-px w-6 shrink-0 bg-cyan-400/50 sm:w-8" />
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Loading progress */}
            <div className="mt-9 w-full max-w-[260px]">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                <span>Loading</span>
                <span className="text-cyan-400">{progress}%</span>
              </div>
              <div className="mt-2 h-px w-full overflow-hidden bg-white/[0.08]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Skip button */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300 sm:bottom-8 sm:right-8 sm:text-xs"
          >
            Skip
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;