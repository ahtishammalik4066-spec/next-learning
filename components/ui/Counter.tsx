"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let current = 0;

    const duration = 1800;
    const interval = 30;
    const increment = end / (duration / interval);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [end, inView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;