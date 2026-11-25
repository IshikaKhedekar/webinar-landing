import GiftBonuses from "./GiftBonuses";
import Reveal from "./Reveal";
import { WEBINAR } from "@/lib/config";

const takeaways = [
  {
    title: "Leak Detector",
    text: "A way to identify your team's biggest efficiency leaks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 16l4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 11h5M11 8.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cost Meter",
    text: "A method to measure the cost of wasted time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Gap Map",
    text: "A way to identify your biggest performance gaps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Starting Point",
    text: "A clear starting point for improvement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M6 21V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 4h11l-2.5 4L17 12H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "The Framework",
    text: "A framework to move from diagnosis → improvement → implementation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M4 12.5l8 4.5 8-4.5M4 17l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// starburst outline for the money-back seal
const BURST_POINTS = (() => {
  const pts: string[] = [];
  const n = 28;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? 58 : 50;
    const a = (Math.PI * i) / n;
    pts.push(`${(60 + r * Math.sin(a)).toFixed(2)},${(60 - r * Math.cos(a)).toFixed(2)}`);
  }
  return pts.join(" ");
})();

const scorecard = [
  { label: "Role Clarity", value: 38, color: "bg-red" },
  { label: "Follow-up Discipline", value: 45, color: "bg-amber" },
  { label: "Process Automation", value: 30, color: "bg-red" },
  { label: "Performance Visibility", value: 42, color: "bg-amber" },
  { label: "Data Centralisation", value: 35, color: "bg-red" },
];

export default function Takeaways() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-center text-green">Walk Away With</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            In Just 22 Minutes, You&apos;ll Leave With:
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left — takeaway journey */}
          <div className="relative">
            {/* connector line */}
            <div
              className="absolute bottom-6 left-[22px] top-6 w-px bg-gradient-to-b from-green/50 via-green/25 to-cta/50 max-sm:hidden"
              aria-hidden
            />
            <div className="space-y-4">
              {takeaways.map((t, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="group relative flex items-start gap-4 rounded-2xl p-2 transition-colors hover:bg-surface sm:gap-5">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-green/30 bg-white text-green shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-green group-hover:bg-green group-hover:text-white">
                      {t.icon}
                    </span>
                    <div className="pt-0.5">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display text-[15px] font-extrabold text-ink sm:text-base">
                          {t.title}
                        </span>
                        <span className="rounded-full bg-green/10 px-2 py-0.5 font-display text-[10px] font-extrabold text-green">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-body sm:text-[15px]">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* right — animated sample scorecard */}
          <Reveal delay={150}>
            <div className="relative mx-auto max-w-md">
              <div className="card relative overflow-hidden p-6 shadow-xl shadow-ink/10 sm:p-8">
                {/* scanning animation */}
                <div
                  className="scan-line pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-green/10 to-transparent"
                  aria-hidden
                />

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-extrabold text-ink">
                      Team Efficiency Scorecard
                    </div>
                    <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-body">
                      Sample · 20-person team
                    </div>
                  </div>
                  <span className="animate-sparkle inline-flex shrink-0 items-center gap-1 rounded-full border border-blue/25 bg-blue/8 px-2.5 py-1 text-[10px] font-extrabold text-blue">
                    ✨ AI-assisted insights
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {scorecard.map((m) => (
                    <div key={m.label}>
                      <div className="flex items-baseline justify-between text-[13px]">
                        <span className="font-semibold text-ink">{m.label}</span>
                        <span className="font-display font-extrabold text-body">
                          {m.value}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-surface">
                        <div
                          className={`meter-fill h-full rounded-full ${m.color}`}
                          style={{ "--w": `${m.value}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl border border-red/20 bg-red/5 px-4 py-3">
                  <span className="text-[13px] font-bold text-ink">
                    Overall Efficiency Score
                  </span>
                  <span className="font-display text-2xl font-extrabold text-red">38%</span>
                </div>

                <p className="mt-4 text-center text-xs leading-relaxed text-body">
                  In the masterclass, you&apos;ll learn to build this scorecard for{" "}
                  <span className="font-bold text-ink">your own business</span> — and read
                  exactly where the recovery potential is.
                </p>
              </div>

              {/* floating chip */}
              <div className="animate-float-slow absolute -right-3 -top-4 rounded-xl bg-navy px-4 py-2.5 shadow-xl sm:-right-6">
                <div className="font-display text-sm font-extrabold text-white">
                  62% <span className="text-cta">recoverable</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  capacity identified
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* compact bonus row — disabled for now, re-enable when ready
        <Reveal delay={150}>
          <div className="mx-auto mt-20 max-w-5xl">
            <h3 className="font-display mx-auto max-w-2xl text-center text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              ₹99 Unwraps <span className="text-cta">3 Premium Gifts</span>
            </h3>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm font-semibold text-body">
              <span className="text-cta" aria-hidden>⟶</span>
              High-value. Limited access. Yours when you register.
              <span className="text-cta" aria-hidden>⟵</span>
            </p>

            <GiftBonuses />
          </div>
        </Reveal>
        */}

        {/* your seat — ticket */}
        <Reveal delay={200}>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex flex-col overflow-hidden rounded-3xl shadow-2xl shadow-navy/25 sm:flex-row">
              {/* main side — navy */}
              <div className="bg-navy-section relative flex-1 p-8 sm:p-10">
                <div className="hero-dots absolute inset-0" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ffc21f]">
                    🎟 Limited Seats — Book Fast
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    The 22-Minute Efficiency{" "}
                    <span className="text-cta">Masterclass</span>
                  </h3>
                  <p className="mt-2.5 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-white/75">
                    Tuesday, 15 September · 11:00 AM
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-red/30">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-white" />
                      Live
                    </span>
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                    {["The 5-part framework", "Your ₹ leakage number", "Your solutions", "Live Q&A"].map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 text-sm font-semibold text-white/85"
                      >
                        <span className="font-bold text-cta">✓</span> {item}
                      </span>
                    ))}
                  </div>

                  {/* premium money-back seal */}
                  <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                    <svg
                      viewBox="-16 -4 152 132"
                      className="h-32 w-32 shrink-0 drop-shadow-[0_10px_18px_rgba(0,0,0,0.5)] sm:h-36 sm:w-36"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="sealBurst" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffd45e" />
                          <stop offset="100%" stopColor="#f5b301" />
                        </linearGradient>
                        <path id="sealTop" d="M 60 60 m -35 0 a 35 35 0 1 1 70 0" fill="none" />
                      </defs>

                      {/* starburst */}
                      <polygon points={BURST_POINTS} fill="url(#sealBurst)" />
                      {/* inner circle */}
                      <circle cx="60" cy="60" r="46" fill="#0a1c38" />
                      <circle cx="60" cy="60" r="42" fill="none" stroke="#ffc21f" strokeWidth="1.2" strokeDasharray="2 3" />

                      {/* curved text */}
                      <text fontSize="9.5" fontWeight="800" fill="#ffd45e" letterSpacing="1.5">
                        <textPath href="#sealTop" startOffset="50%" textAnchor="middle">
                          FULL MONEY BACK
                        </textPath>
                      </text>

                      {/* center */}
                      <text
                        x="60"
                        y="54"
                        textAnchor="middle"
                        fontSize="22"
                        fontWeight="900"
                        fill="#ffd45e"
                      >
                        100%
                      </text>
                      <path
                        d="M51 61 l6.5 6.5 l13 -13"
                        fill="none"
                        stroke="#2ec27e"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* ribbon */}
                      <polygon points="-16,76 -2,82 -16,92" fill="#a81207" />
                      <polygon points="136,76 122,82 136,92" fill="#a81207" />
                      <rect x="-12" y="72" width="144" height="19" rx="2.5" fill="#d92d20" />
                      <text
                        x="60"
                        y="84.8"
                        textAnchor="middle"
                        fontSize="8.4"
                        fontWeight="800"
                        fill="#ffffff"
                        letterSpacing="0.8"
                      >
                        SATISFACTION GUARANTEED
                      </text>
                    </svg>

                    <div className="max-w-[17rem] text-center sm:text-left">
                      <p className="font-serif text-lg font-black italic leading-tight text-white sm:text-xl">
                        100% Money-Back Guarantee
                      </p>
                      <p className="mt-1.5 text-[13px] font-semibold leading-relaxed text-white/70">
                        Didn&apos;t find it valuable? Every rupee back — no
                        questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* perforation + stub — warm gold */}
              <div className="relative overflow-hidden bg-gradient-to-b from-[#ffd971] via-[#ffc21f] to-[#f4ad0d] px-7 py-7 text-center sm:w-64 sm:border-l-2 sm:border-dashed sm:border-navy/20 sm:px-6 max-sm:border-t-2 max-sm:border-dashed max-sm:border-navy/20">
                {/* soft glow behind the price */}
                <div
                  className="pointer-events-none absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
                  aria-hidden
                />
                {/* ticket notches */}
                <span className="absolute -left-3 -top-3 hidden h-6 w-6 rounded-full bg-white sm:block" aria-hidden />
                <span className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-white sm:block" aria-hidden />

                <div className="relative flex h-full w-full flex-col items-center justify-between py-4">
                  {/* Early Bird label */}
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-[0.1em] text-navy [text-shadow:0_1px_1px_rgba(255,255,255,0.5)] sm:text-[13px]">
                    ✦ Early Bird Offer ✦
                  </span>

                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/60">
                      Special Price
                    </span>
                    <div className="mt-1 flex items-end justify-center gap-2">
                      <span className="font-display relative text-6xl font-extrabold leading-none text-red">
                        ₹{WEBINAR.price}
                        <svg
                          className="absolute -bottom-2.5 left-0 w-full text-red"
                          viewBox="0 0 200 12"
                          fill="none"
                          preserveAspectRatio="none"
                          aria-hidden
                        >
                          <path
                            d="M3 9C55 3 145 3 197 8"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="relative mb-1.5 font-serif text-xl italic text-ink/60">
                        ₹{WEBINAR.regularPrice}
                        <span
                          className="absolute left-1/2 top-1/2 h-[2px] w-[125%] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] rounded-full bg-red"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-navy/70">
                    ⏰ Limited Time Offer
                  </span>

                  <a
                    href="#register"
                    className="mt-2.5 inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-navy-2 to-navy px-8 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(10,28,56,0.35)] ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
                  >
                    Reserve My Seat →
                  </a>

                  <span className="flex items-center gap-1.5 text-[10.5px] font-bold text-navy/60">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden>
                      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Only for those who attend the masterclass live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="font-display mx-auto mt-16 max-w-4xl text-center text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Before you invest in another employee, process or software —{" "}
            <span className="text-cta">know what is actually costing you.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
