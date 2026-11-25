import Reveal from "./Reveal";

const notThis = [
  "Another software demo",
  "A generic motivational session",
  "A “work harder” lecture",
];

const discoveries = [
  { n: "01", text: "How to identify hidden efficiency leaks inside your team." },
  { n: "02", text: "How to measure where time and productivity are being lost." },
  { n: "03", text: "How to identify the root cause behind performance gaps." },
  { n: "04", text: "How to determine what needs to be changed first." },
  { n: "05", text: "How to build a system that can track and improve performance." },
  { n: "06", text: "How to calculate the business impact of improving team efficiency." },
];

export default function Masterclass() {
  return (
    <section id="masterclass" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-center text-cta">Why 22 Minutes Is Worth It</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            In 22 Minutes, Discover Where Your Team&apos;s Efficiency Is{" "}
            <span className="text-cta">Being Lost</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-body">
            Give us 22 minutes — and walk away knowing how to{" "}
            <span className="font-bold text-ink">
              significantly improve your team&apos;s efficiency in just 22 days.
            </span>
          </p>

          {/* 22 min → 22 days connector */}
          <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-3 sm:gap-4">
            <div className="card flex-1 px-4 py-4 text-center">
              <div className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                22 <span className="text-base font-bold text-body">min</span>
              </div>
              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-body">
                of masterclass
              </div>
            </div>
            <div className="font-display text-2xl font-extrabold text-cta" aria-hidden>
              →
            </div>
            <div className="card flex-1 border-cta/40 bg-gradient-to-b from-cta/8 to-white px-4 py-4 text-center">
              <div className="font-display text-2xl font-extrabold text-cta sm:text-3xl">
                22 <span className="text-base font-bold text-body">days</span>
              </div>
              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-body">
                to 2X efficiency
              </div>
            </div>
          </div>
        </Reveal>

        {/* what it's NOT */}
        <Reveal delay={100}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {notThis.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-red/20 bg-red/5 px-4 py-2 text-sm font-medium text-body"
              >
                <span className="font-bold text-red">✕</span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {/* photo + discoveries */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative max-lg:mx-auto max-lg:max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-ink/15">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                  alt="A leader presenting insights to a business audience"
                  className="aspect-[4/4.6] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl bg-navy px-5 py-3 text-center shadow-xl">
                <div className="font-display text-lg font-extrabold text-white">
                  22 Minutes
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/55">
                  Zero fluff · Fully practical
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {discoveries.map((d, i) => (
              <Reveal key={d.n} delay={(i % 2) * 80}>
                <div className="card card-hover h-full p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cta/10 font-display text-[13px] font-extrabold text-cta">
                    {d.n}
                  </div>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-ink">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* framework tease — deliberately locked */}
        <Reveal delay={150}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl shadow-2xl shadow-navy/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/framework-5part.jpg"
              alt="A 5-part framework drives the entire 2X outcome — 5 locked parts that unlock live inside the masterclass. We won't spoil it here; you'll discover the framework behind 2X team efficiency step by step, inside the masterclass."
              className="w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
