"use client";

import { useEffect, useState } from "react";

function TypingText({
  words,
  speed = 100,
}: {
  words: string[];
  speed?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text.length + 1 === currentWord.length) {
            setDeleting(true);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed]);

  return (
    <span className="inline-flex max-w-full items-center">
      <span className="truncate">{text}</span>

      <span className="ml-1 inline-block h-4 w-[2px] shrink-0 animate-pulse bg-cyan-400 align-middle sm:h-5" />
    </span>
  );
}

export default TypingText;