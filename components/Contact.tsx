"use client";

import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-[#080808]"
    >

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[0.75fr_1.25fr]">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              06 / Contact
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something useful.
            </h2>

            <p className="mt-5 max-w-md text-xs leading-7 text-zinc-500 sm:mt-6 sm:text-sm sm:leading-8">
              Have a project idea, collaboration or opportunity?
              Send me a message and let's start a conversation.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

              <a
                href="mailto:ahtishammalik4066@gmail.com"
                className="group flex min-w-0 items-center gap-3 sm:gap-4"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300 sm:h-11 sm:w-11">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />

                  </svg>

                </div>

                <div className="min-w-0">

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-xs text-zinc-300 transition group-hover:text-cyan-300 sm:text-sm">
                    ahtishammalik4066@gmail.com
                  </p>

                </div>

              </a>

              <a
                href="https://www.linkedin.com/in/ahtisham-rafique-b79ba0323"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300 sm:h-11 sm:w-11">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >

                    <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.5h3V19H5V9.5Zm5 0h2.9v1.3h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V19h-3v-4.55c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42V19h-3V9.5Z" />

                  </svg>

                </div>

                <div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px]">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-xs text-zinc-300 transition group-hover:text-cyan-300 sm:text-sm">
                    Ahtisham Rafique
                  </p>

                </div>

              </a>

              <div className="flex items-center gap-3">

                <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]" />

                <span className="text-xs text-zinc-500 sm:text-sm">
                  Currently open to opportunities
                </span>

              </div>

            </div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl sm:rounded-3xl sm:p-8"
          >

            <div className="grid gap-5 sm:grid-cols-2">

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-xs text-zinc-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40 focus:bg-black/50"
                />

              </div>

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-xs text-zinc-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40 focus:bg-black/50"
                />

              </div>

            </div>

            <div className="mt-5">

              <label
                htmlFor="subject"
                className="mb-2 block text-xs text-zinc-500"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Project / Opportunity"
                className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40 focus:bg-black/50"
              />

            </div>

            <div className="mt-5">

              <label
                htmlFor="message"
                className="mb-2 block text-xs text-zinc-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40 focus:bg-black/50"
              />

            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.12)]"
            >

              {submitted
                ? "Message Ready ✓"
                : "Send Message →"}

            </button>

            {submitted && (
              <p className="mt-4 text-center text-xs text-emerald-400">
                Form submitted successfully. Backend integration can be
                connected next.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;