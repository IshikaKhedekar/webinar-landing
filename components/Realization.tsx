import Reveal from "./Reveal";

// chain steps — the funnel narrows and heats up as it goes down
const chain = [
  { label: "Unclear roles", width: "100%", cls: "border-line bg-white text-ink" },
  { label: "Unclear accountability", width: "93%", cls: "border-line bg-white text-ink" },
  { label: "Repeated work", width: "86%", cls: "border-amber/30 bg-amber/5 text-ink" },
  { label: "Lost time", width: "79%", cls: "border-amber/40 bg-amber/10 text-ink" },
  { label: "Poor follow-up", width: "72%", cls: "border-cta/40 bg-cta/10 text-ink" },
  { label: "Poor visibility", width: "65%", cls: "border-cta/50 bg-cta/15 text-ink" },
  { label: "Lower productivity", width: "58%", cls: "border-red/40 bg-red/15 text-ink" },
  { label: "Slower growth", width: "51%", cls: "border-red bg-red text-white shadow-lg shadow-red/30" },
];

const sideChips = [
  { text: "440+ hrs lost / month", side: "left", top: "12%", delay: "0s", icon: "⏱" },
  { text: "Salary paid, output missing", side: "left", top: "44%", delay: "1.4s", icon: "₹" },
  { text: "Decisions getting delayed", side: "left", top: "74%", delay: "0.7s", icon: "⏳" },
  { text: "Leads slipping away", side: "right", top: "22%", delay: "0.9s", icon: "📉" },
  { text: "Managers stuck in follow-ups", side: "right", top: "52%", delay: "0.2s", icon: "🔁" },
  { text: "Growth slowing down", side: "right", top: "82%", delay: "1.8s", icon: "🐢" },
];

export default function Realization() {
  return (
    <section className="overflow-hidden bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* header */}
        <Reveal>
          <p className="eyebrow text-center text-blue">The Real Culprit</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            The Problem Isn&apos;t Always Your People.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed text-body">
            It could be the way work is <span className="font-bold text-ink">structured</span>.
            One structural gap sets off a chain reaction that quietly eats your growth:
          </p>
        </Reveal>

        {/* funnel */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* funnel walls */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <path d="M12 0 L34 100" stroke="#d92d20" strokeOpacity="0.12" strokeWidth="0.5" />
            <path d="M88 0 L66 100" stroke="#d92d20" strokeOpacity="0.12" strokeWidth="0.5" />
          </svg>

          {/* floating side chips */}
          {sideChips.map((c) => (
            <div
              key={c.text}
              className={`animate-float-slow absolute hidden lg:block ${
                c.side === "left" ? "left-0" : "right-0"
              }`}
              style={{ top: c.top, animationDelay: c.delay }}
              aria-hidden
            >
              <span className="flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-2 text-xs font-semibold text-body shadow-md backdrop-blur">
                <span>{c.icon}</span>
                {c.text}
              </span>
            </div>
          ))}

          {/* chain boxes */}
          <div className="mx-auto flex max-w-md flex-col items-center">
            {chain.map((step, i) => {
              const isLast = i === chain.length - 1;
              return (
                <Reveal key={step.label} delay={i * 90} className="w-full">
                  <div className="flex w-full flex-col items-center">
                    <div
                      className={`rounded-xl border px-6 py-3 text-center font-display text-sm font-bold transition-transform duration-300 hover:scale-[1.03] sm:text-[15px] ${step.cls}`}
                      style={{ width: step.width }}
                    >
                      {step.label}
                    </div>
                    {!isLast && (
                      <svg
                        viewBox="0 0 24 24"
                        className={`my-1 h-5 w-5 ${
                          i < 3 ? "text-body/30" : i < 6 ? "text-cta/60" : "text-red/70"
                        }`}
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M12 4v14m0 0 5-5m-5 5-5-5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* payoff */}
        <Reveal delay={200}>
          <p className="font-display mx-auto mt-8 max-w-2xl text-center text-xl font-extrabold leading-relaxed text-ink sm:text-2xl">
            What if you could identify{" "}
            <span className="text-cta">exactly where</span> that efficiency is
            being lost?
          </p>
          <div className="mt-4 text-center">
            <p className="mb-3 text-[15px] text-body">
              Enter your team size &amp; salary below — see your loss in{" "}
              <span className="font-bold text-ink">30 seconds</span>:
            </p>
            <span className="relative inline-block">
              <a href="#calculator" className="btn-primary animate-pulse-ring px-9 py-4 text-base sm:text-lg">
                Calculate My Team&apos;s ₹ Loss ↓
              </a>
              {/* yellow FREE patch */}
              <span className="font-serif absolute -right-5 -top-4 rotate-6 rounded-lg bg-[#ffc21f] px-2.5 py-1 text-sm font-black italic text-navy shadow-lg shadow-black/20">
                FREE
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
