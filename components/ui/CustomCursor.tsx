"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Dot follows mouse instantly
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Ring follows with spring smoothing (trailing effect)
  const ringX = useSpring(dotX, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    // Only enable on devices that support hover (desktop/laptop)
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(media.matches);

    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseDown = () => setHovering(true);
    const handleMouseUp = () => setHovering(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select, label, .group"
      );
      setHovering(!!isClickable);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot — instant follow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: hovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring — smooth trailing */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] flex items-center justify-center rounded-full border border-cyan-400/40"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 64 : 36,
          height: hovering ? 64 : 36,
          borderColor: hovering
            ? "rgba(34,211,238,0.7)"
            : "rgba(34,211,238,0.4)",
          backgroundColor: hovering
            ? "rgba(34,211,238,0.08)"
            : "rgba(34,211,238,0)",
          boxShadow: hovering
            ? "0 0 25px rgba(34,211,238,0.2)"
            : "0 0 0 rgba(34,211,238,0)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* "View" text on hover */}
        <motion.span
          className="text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-300"
          animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
}

export default CustomCursor;