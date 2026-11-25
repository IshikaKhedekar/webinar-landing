"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const problems = [
  {
    title: "Unclear Roles",
    detail: "People are working, but ownership isn't clear.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="10" cy="7.5" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M4.5 20c.6-3.6 2.8-5.5 5.5-5.5 1.5 0 2.8.6 3.8 1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 13.5c0-1.4 2.8-1.4 2.8 0 0 1-1.4 1-1.4 2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18.4" cy="18.6" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "No Clear KRAs",
    detail: "You can't clearly measure what each person is expected to deliver.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Repetitive Manual Work",
    detail: "Your team spends hours on activities that don't directly create growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4.5 9a8 8 0 0 1 13.8-2.5L20.5 9M19.5 15a8 8 0 0 1-13.8 2.5L3.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 4.5V9H16M3.5 19.5V15H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Poor Follow-Up",
    detail: "Leads, customers and opportunities are getting missed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M20 15.5v3a1.5 1.5 0 0 1-1.7 1.5A17 17 0 0 1 4 5.7 1.5 1.5 0 0 1 5.5 4h3L10 8l-2 1.7a13.5 13.5 0 0 0 6.3 6.3L16 14l4 1.5z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M15.5 4.5 20.5 9.5M20.5 4.5 15.5 9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Scattered Data",
    detail: "Important information is spread across people, files and systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
        <rect x="14.5" y="6" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.9" transform="rotate(8 17.5 9)" />
        <rect x="5" y="14" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.9" transform="rotate(-7 8.2 17.2)" />
        <circle cx="17.5" cy="17.5" r="2.8" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    ),
  },
  {
    title: "No Performance Visibility",
    detail: "You know people are busy — but not exactly how efficiently they're working.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 6.5 20 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 5.9A9.8 9.8 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3 3.6M6 8.2a16 16 0 0 0-3.5 3.8s3.5 6.5 9.5 6.5c1.1 0 2.1-.2 3-.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Skill & Training Gaps",
    detail: "The role exists, but the capability to perform it doesn't always match.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="m12 4 10 4.5L12 13 2 8.5 12 4z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M6.5 10.8v4.4c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8v-4.4" stroke="currentColor" strokeWidth="1.9" />
        <path d="M22 9v5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "People-Dependent Processes",
    detail: "One person's absence can slow down an entire process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="6.5" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20c.6-3.8 3-5.8 6-5.8s5.4 2 6 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 10.5h4M5 8.5v4M17.5 10.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

// must match `leak-drip` duration in globals.css
const DRIP_DURATION_MS = 12000;

export default function Problems() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const started = useRef(false);
  const [running, setRunning] = useState(false);
  const [activeNodes, setActiveNodes] = useState<boolean[]>(
    () => new Array(problems.length).fill(false)
  );
  const [cardActive, setCardActive] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        // start the glide the moment the section appears,
        // pop each node as the drop passes it, then flip the card red
        setRunning(true);
        const elRect = el.getBoundingClientRect();
        const total = elRect.height;

        // positions measured against the timeline container, matching the
        // drop's 0% → 100% journey
        nodeRefs.current.forEach((node, i) => {
          if (!node) return;
          const nodeTop = node.getBoundingClientRect().top - elRect.top;
          const arrival = ((nodeTop + 20) / total) * DRIP_DURATION_MS;
          timeouts.push(
            setTimeout(() => {
              setActiveNodes((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, arrival)
          );
        });

        const cardTop = cardRef.current
          ? cardRef.current.getBoundingClientRect().top - elRect.top
          : total;
        timeouts.push(
          setTimeout(() => setCardActive(true), (cardTop / total) * DRIP_DURATION_MS)
        );
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="problems" className="overflow-hidden bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* header */}
        <Reveal>
          <p className="eyebrow text-center text-red">The Hidden Leaks</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Your Team Is Working Hard.{" "}
            <span className="text-red">But Where Is the Efficiency Going?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-body">
            This is how it happens — one leak leads to the next. Count how many
            sound familiar; <span className="font-bold text-ink">most owners find at least 3.</span>
          </p>
        </Reveal>

        {/* leak timeline */}
        <div ref={timelineRef} className="relative mx-auto mt-16 max-w-4xl">
          {/* the leak line */}
          <div
            className="absolute bottom-0 left-[19px] top-0 w-[3px] rounded-full bg-gradient-to-b from-amber/40 via-red/50 to-red lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden
          />
          {/* travelling drop — glides from top to bottom continuously */}
          <div
            className={`absolute left-[19px] -translate-x-1/2 lg:left-1/2 ${
              running ? "leak-drip" : "opacity-0"
            }`}
            aria-hidden
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-red shadow-lg shadow-red/40">
              <span className="absolute inset-0 animate-ping rounded-full bg-red/40" />
              <svg viewBox="0 0 15 18" className="relative h-3.5 w-3.5">
                <path
                  d="M7.5 0C7.5 5 0 9 0 12.5a7.5 7.5 0 0 0 15 0C15 9 7.5 5 7.5 0z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </div>

          <div className="space-y-10 lg:space-y-4">
            {problems.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={p.title} className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0">
                  {/* node on the line — pops red when the drop passes */}
                  <div
                    ref={(n) => {
                      nodeRefs.current[i] = n;
                    }}
                    className="absolute left-0 top-0.5 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-[3px] font-display text-[13px] font-extrabold transition-colors duration-300 ${
                        activeNodes[i]
                          ? "animate-tick-pop border-red bg-red text-white shadow-md shadow-red/30"
                          : "border-line bg-white text-body/50"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <Reveal
                    className={left ? "reveal-left lg:col-start-1" : "reveal-right lg:col-start-2"}
                  >
                    <div className={`lg:pb-8 ${left ? "lg:text-right" : ""}`}>
                      <div className={`flex items-center gap-3 ${left ? "lg:flex-row-reverse" : ""}`}>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red">
                          {p.icon}
                        </span>
                        <h3 className="font-display text-lg font-extrabold leading-snug text-ink sm:text-xl">
                          {p.title}
                        </h3>
                      </div>
                      <p className={`mt-2.5 max-w-sm leading-relaxed text-body ${left ? "lg:ml-auto" : ""}`}>
                        {p.detail}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* result cap — white until the drop first reaches it, then red */}
          <div ref={cardRef} className="relative mt-12 lg:mt-8">
            <Reveal delay={150}>
              <div
                className={`mx-auto max-w-lg rounded-2xl p-6 text-center transition-all duration-700 sm:p-8 ${
                  cardActive
                    ? "bg-red shadow-xl shadow-red/25"
                    : "border border-line bg-white shadow-sm"
                }`}
              >
                <p
                  className={`eyebrow transition-colors duration-700 ${
                    cardActive ? "text-white/70" : "text-red"
                  }`}
                >
                  Where it all ends up
                </p>
                <p
                  className={`font-display mt-2 text-xl font-extrabold leading-snug transition-colors duration-700 sm:text-2xl ${
                    cardActive ? "text-white" : "text-ink"
                  }`}
                >
                  Hours, customers and growth — leaking silently, every single day.
                </p>
                <a
                  href="#cost"
                  className={`mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all duration-700 hover:-translate-y-0.5 ${
                    cardActive ? "bg-white text-red" : "bg-red text-white"
                  }`}
                >
                  See what it&apos;s costing you ↓
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
