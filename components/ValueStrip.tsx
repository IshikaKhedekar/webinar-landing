import Reveal from "./Reveal";

const outcomes = [
  {
    label: "2X Output",
    detail: "from the same team — no extra hiring",
    featured: true,
    chip: "bg-cta text-white",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=75",
    alt: "A team working together productively",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
        <path d="M4 20V14M9.5 20V9M15 20v-7.5M20.5 20V4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    meter: true,
  },
  {
    label: "Less Time Wasted",
    detail: "on repetitive, manual work",
    featured: false,
    chip: "bg-red text-white",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=640&q=75",
    alt: "Manual paperwork consuming hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    meter: false,
  },
  {
    label: "Higher Productivity",
    detail: "per employee, every single day",
    featured: false,
    chip: "bg-green text-white",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=75",
    alt: "A focused team getting work done",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
        <circle cx="9" cy="7.5" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 20c.6-3.6 2.8-5.5 5.5-5.5S13.9 16.4 14.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.5 9.5 19 7m0 0v3m0-3h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    meter: false,
  },
  {
    label: "Zero Missed Follow-ups",
    detail: "fewer lost leads & opportunities",
    featured: false,
    chip: "bg-green text-white",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=640&q=75",
    alt: "A professional following up with customers on call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
        <path d="M4 6h16v10.5H9L4 20V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8.5 11.5 11 14l4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    meter: false,
  },
  {
    label: "Full Visibility",
    detail: "into how your team actually performs",
    featured: false,
    chip: "bg-blue text-white",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=75",
    alt: "Performance dashboard with clear metrics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    meter: false,
  },
];

export default function ValueStrip() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-[#fff6ee] via-white to-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-cta/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="eyebrow text-center text-cta">✦ Imagine This ✦</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Imagine What{" "}
            <span className="relative whitespace-nowrap text-cta">
              2X Efficiency
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-cta/60"
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
            </span>{" "}
            Could Mean for Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-body">
            Same team. Same salaries. Same working hours.{" "}
            <span className="font-bold text-ink">
              This is the outcome the 22-minute masterclass is built around:
            </span>
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {outcomes.map((o, i) => (
            <Reveal
              key={o.label}
              delay={i * 80}
              className={i === outcomes.length - 1 ? "max-sm:col-span-2" : ""}
            >
              <div
                className={`card card-hover group relative h-full overflow-hidden text-center ${
                  o.featured ? "border-cta/40 shadow-lg shadow-cta/10" : ""
                }`}
              >
                {/* photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={o.img}
                    alt={o.alt}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                    aria-hidden
                  />
                  {/* icon badge on photo */}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-xl shadow-lg ${o.chip}`}
                  >
                    {o.icon}
                  </span>
                  {o.featured && (
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-cta px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white shadow">
                      The Goal
                    </span>
                  )}
                </div>

                {/* copy */}
                <div className="px-4 pb-5 pt-8">
                  <div className="font-display text-sm font-extrabold text-ink sm:text-[15px]">
                    {o.label}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-body sm:text-[13px]">
                    {o.detail}
                  </div>

                  {/* before/after mini meter on the featured card */}
                  {o.meter && (
                    <div className="mt-4 space-y-1.5 text-left">
                      <div className="flex items-center gap-2">
                        <span className="w-10 text-[9px] font-bold uppercase text-body">Now</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                          <div className="h-full w-[45%] rounded-full bg-body/40" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-10 text-[9px] font-bold uppercase text-cta">After</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                          <div className="h-full w-[90%] rounded-full bg-cta" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-[15px] text-body">
            Sounds far away? It starts with knowing{" "}
            <span className="font-bold text-ink">where efficiency is leaking today</span> —
            that&apos;s exactly what you&apos;ll uncover below. ↓
          </p>
        </Reveal>
      </div>
    </section>
  );
}
