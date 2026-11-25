import Countdown from "./Countdown";
import Reveal from "./Reveal";
import { WEBINAR, formatWebinarDate } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="bg-navy-section relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="hero-dots absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* left — copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/85">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cta" />
              {WEBINAR.durationMinutes}-MINUTE LIVE MASTERCLASS
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              <span className="text-cta">2X</span> Your Team Efficiency in{" "}
              <span className="relative whitespace-nowrap">
                22 Days
                <svg
                  className="absolute -bottom-2 left-0 w-full text-cta"
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
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              In just <span className="font-bold text-white">22 minutes</span>, discover how
              you can significantly improve your team&apos;s efficiency in the next{" "}
              <span className="font-bold text-white">22 days</span> — and the system that
              makes it possible. Built for{" "}
              <span className="font-semibold text-white">business owners &amp; leaders.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center">
              <a
                href="#register"
                className="btn-primary animate-pulse-ring px-8 py-4 text-base"
              >
                Reserve My Seat
              </a>
              <a href="#cost" className="btn-outline-light px-6 py-4 text-sm">
                See what it&apos;s costing you ↓
              </a>
            </div>
          </Reveal>

          {/* urgency panel — countdown + seats */}
          <Reveal delay={400}>
            <div className="mt-9 rounded-2xl border border-cta/35 bg-gradient-to-b from-cta/12 to-transparent p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
                <span className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-cta sm:text-base">
                  <span className="text-lg" aria-hidden>
                    ⏳
                  </span>
                  Next session starts in
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white">
                  {formatWebinarDate()}
                </span>
              </div>
              <div className="mt-4 flex justify-center lg:justify-start">
                <Countdown size="lg" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — photo composition */}
        <Reveal delay={250} className="max-lg:mx-auto max-lg:max-w-md">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
                alt="Business leaders analyzing team performance numbers"
                className="aspect-[4/3.6] w-full object-cover"
              />
              {/* hook overlay on the image */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent px-5 pb-5 pt-16">
                <p className="font-display text-lg font-extrabold leading-snug text-white sm:text-xl">
                  Your team is busy.{" "}
                  <span className="text-cta">But is it efficient?</span>
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Most owners discover the answer in the first 10 minutes.
                </p>
              </div>
            </div>

            {/* floating stat — hours lost */}
            <div className="animate-float-slow absolute -left-4 top-8 rounded-xl bg-white p-4 shadow-xl shadow-black/25 sm:-left-8">
              <div className="text-[10px] font-bold uppercase tracking-wider text-body">
                Typical 20-person team
              </div>
              <div className="font-display mt-1 text-2xl font-extrabold text-red">
                440 hrs
              </div>
              <div className="text-[11px] text-body">lost every month</div>
            </div>

            {/* floating stat — output */}
            <div
              className="animate-float-slow absolute -right-3 top-6 rounded-xl bg-white p-4 shadow-xl shadow-black/25 sm:-right-6"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 font-display text-sm font-extrabold text-green">
                  2X
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink">
                    Output, same team
                  </div>
                  <div className="text-[11px] text-body">no extra hiring</div>
                </div>
              </div>
            </div>

            {/* live badge */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-red px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-white" />
              Live
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
