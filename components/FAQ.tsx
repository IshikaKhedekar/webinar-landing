"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const reasons = [
  {
    q: "Why should I give you 22 minutes of my day?",
    a: "Because your team may be silently losing 400+ hours every month — and you're paying for every one of them. 22 minutes is the cost of one chai break; knowing where those hours go could be worth lakhs a year.",
  },
  {
    q: "What will I get that I don't already know?",
    a: "You already know your team can do better. What you likely don't have is a way to measure exactly where efficiency is leaking, what it costs in rupees, and what to fix first. That's precisely what you'll walk away with — including the method behind the Efficiency Scorecard.",
  },
  {
    q: "Is this a software demo in disguise?",
    a: "No. We don't start by asking which software you need — we start by asking where efficiency is leaking. The masterclass is about diagnosing your business, not selling you a tool.",
  },
  {
    q: "Will this work for my industry and team size?",
    a: "If people do the work in your business — sales, operations, service, back office — the leaks look remarkably similar. It's built for owners and leaders with growing teams, typically 10 to 500 people, across industries.",
  },
  {
    q: "What does 2X efficiency actually mean?",
    a: "More output from the same team: less wasted time, better process execution and better performance visibility. Revenue growth is the business consequence of that — not a blind promise.",
  },
  {
    q: "What happens after the 22 minutes?",
    a: "You leave with the framework and your own leakage number. If it resonates, you can opt for a deeper 1:1 diagnosis of your business — completely optional. And your ₹99 Early Bird seat is covered by a 100% money-back guarantee: didn't find it valuable, every rupee back.",
  },
];

const quickStats = [
  { big: "22 min", small: "is all it takes" },
  { big: "15 Sep", small: "next live session" },
  { big: "₹99", small: "Early Bird price (worth ₹999) · money-back" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* left — why join pitch */}
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-red">Why Join?</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                Still Asking Yourself,{" "}
                <span className="relative whitespace-nowrap text-red">
                  &quot;Should I Join?&quot;
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-red/70"
                    viewBox="0 0 200 9"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 7C55 2.5 145 2.5 198 6"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mt-5 leading-relaxed text-body">
                Fair. You&apos;re busy — that&apos;s exactly the problem we&apos;re
                solving. Here are the honest answers to what every owner asks
                before reserving a seat.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {quickStats.map((s) => (
                  <div key={s.big} className="card px-3 py-4 text-center">
                    <div className="font-display text-xl font-extrabold text-red sm:text-2xl">
                      {s.big}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-body">
                      {s.small}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-red/25 bg-gradient-to-b from-red/8 to-transparent p-5">
                <p className="font-display text-[15px] font-bold leading-relaxed text-ink">
                  22 minutes. One decision.{" "}
                  <span className="text-red">
                    The next 22 days could run very differently.
                  </span>
                </p>
                <a href="#register" className="btn-primary mt-4 inline-flex px-6 py-3 text-sm">
                  Reserve My Seat
                </a>
              </div>
            </div>
          </Reveal>

          {/* right — objection accordion */}
          <div className="space-y-3.5">
            {reasons.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-red/40 bg-gradient-to-b from-red/6 to-white shadow-lg shadow-red/10"
                        : "card card-hover"
                    }`}
                  >
                    <button
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-[12px] font-extrabold transition-colors duration-300 ${
                          isOpen ? "bg-red text-white" : "bg-surface text-body"
                        }`}
                      >
                        Q{i + 1}
                      </span>
                      <span
                        className={`flex-1 font-display text-[15px] font-bold leading-snug sm:text-[17px] ${
                          isOpen ? "text-ink" : "text-ink/85"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-red bg-red text-white"
                            : "border-line text-body"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mx-5 mb-5 border-l-[3px] border-red/45 pl-4 sm:mx-6 sm:ml-[4.4rem] sm:pl-5">
                          <p className="text-[15px] leading-relaxed text-body">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
