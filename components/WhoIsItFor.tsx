"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const signs = [
  "Productivity isn't where you expect it to be",
  "Managers spend too much time following up",
  "Employees are busy, but output isn't proportional",
  "Important work depends on specific people",
  "You don't have clear performance visibility",
  "Manual work is consuming productive hours",
  "You're scaling — but efficiency isn't scaling with you",
];

// Ticks check off one by one (~4.5s total) once the list scrolls into view,
// then stay checked.
const TICK_INTERVAL_MS = 650;

export default function WhoIsItFor() {
  const listRef = useRef<HTMLDivElement>(null);
  const [checkedCount, setCheckedCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        let i = 0;
        const id = setInterval(() => {
          i += 1;
          setCheckedCount(i);
          if (i >= signs.length) clearInterval(id);
        }, TICK_INTERVAL_MS);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-blue">Who Should Attend</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                This Masterclass Is For You If…
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                You&apos;re a business owner or leader with a growing team — and
                somewhere between the hiring, the tools and the hustle, the
                output stopped keeping up with the effort.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl shadow-lg shadow-ink/10 max-lg:hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="A confident business owner in their workplace"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <a href="#register" className="btn-primary mt-8 inline-flex px-7 py-3.5">
                Yes, That&apos;s Me — Reserve My Seat
              </a>
            </div>
          </Reveal>

          <div ref={listRef} className="space-y-5 sm:space-y-6">
            {signs.map((s, i) => {
              const checked = i < checkedCount;
              return (
                <div key={i} className="flex items-center gap-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      checked
                        ? "border-green bg-green shadow-md shadow-green/25"
                        : "border-line bg-white"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="animate-tick-pop h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 10.5l3.5 3.5L15.5 7"
                          stroke="currentColor"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <p
                    className={`font-display text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                      checked ? "text-ink" : "text-body/50"
                    }`}
                  >
                    {s}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
