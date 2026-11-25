"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const points = [
  "Trusted mentor to printing & packaging business owners",
  "Known for practical, numbers-first sessions — zero fluff",
  "The mind behind the 5-part efficiency framework",
];

// tries the main portrait first, then any cutout, then the monogram
const SOURCES = ["/speaker.jpg", "/speaker.png"];

export default function Speaker() {
  const [srcIdx, setSrcIdx] = useState(0);
  const src = SOURCES[srcIdx];

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
      {/* second photo as a soft full-section backdrop */}
      <div className="absolute inset-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/speaker2.jpg"
          alt=""
          className="h-full w-full object-cover object-[35%_12%] opacity-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/25 via-surface/35 to-surface/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-transparent to-surface/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* left — intro */}
          <Reveal className="reveal-left">
            <div className="text-center lg:text-left">
              <p className="eyebrow text-cta">Meet Your Mentor</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                Mr. Parmeshawar{" "}
                <span className="relative whitespace-nowrap text-cta">
                  Patidar
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-cta/60"
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
              <p className="font-display mt-4 text-lg font-bold text-ink sm:text-xl">
                The Profitable Print &amp; Business Coach
              </p>

              <div className="mt-7 space-y-3.5">
                {points.map((p) => (
                  <div
                    key={p}
                    className="flex items-start gap-3 text-left max-lg:mx-auto max-lg:max-w-md"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta/10 text-xs font-bold text-cta">
                      ✓
                    </span>
                    <p className="text-[15px] leading-relaxed text-body">{p}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 border-l-4 border-cta pl-5 text-left max-lg:mx-auto max-lg:max-w-md">
                <p className="font-serif text-lg font-bold italic leading-relaxed text-ink">
                  “Your team already works hard. My job is to show you where
                  that hard work is leaking — and how to get it back.”
                </p>
              </blockquote>
            </div>
          </Reveal>

          {/* right — editorial portrait */}
          <Reveal delay={150} className="reveal-right">
            <div className="relative mx-auto max-w-[22rem] pb-8 pr-6 sm:max-w-sm">
              {/* offset navy slab behind */}
              <div
                className="absolute right-0 top-8 h-full w-full rounded-[2rem] bg-navy"
                aria-hidden
              />
              {/* orange corner accent */}
              <div
                className="absolute -left-5 -top-5 h-28 w-28 rounded-[1.5rem] border-4 border-cta/40"
                aria-hidden
              />

              {srcIdx < SOURCES.length ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={src}
                  src={src}
                  alt="Mr. Parmeshawar Patidar — masterclass mentor"
                  className="relative aspect-[3/4] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-navy/30"
                  onError={() => setSrcIdx((i) => i + 1)}
                />
              ) : (
                <div className="bg-navy-section relative flex aspect-[3/4] w-full flex-col items-center justify-center rounded-[2rem] shadow-2xl">
                  <span className="font-display flex h-24 w-24 items-center justify-center rounded-full bg-cta text-4xl font-extrabold text-white">
                    PP
                  </span>
                  <p className="mt-3 text-xs uppercase tracking-widest text-white/50">
                    Photo coming soon
                  </p>
                </div>
              )}

              {/* name card overlapping the bottom */}
              <div className="absolute -bottom-2 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center shadow-xl shadow-navy/25">
                <p className="font-display text-lg font-extrabold leading-tight text-ink">
                  Mr. Parmeshawar Patidar
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cta">
                  Your Mentor for 22 Minutes
                </p>
              </div>

              {/* floating chip */}
              <div className="animate-float-slow absolute -right-2 top-6 z-10 rounded-xl bg-white px-4 py-2.5 shadow-xl shadow-navy/20 sm:-right-6">
                <div className="flex items-center gap-2">
                  <span aria-hidden>🎙</span>
                  <div>
                    <div className="font-display text-xs font-extrabold text-ink">
                      Live Masterclass
                    </div>
                    <div className="text-[10px] text-body">15 Sep · 11:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
