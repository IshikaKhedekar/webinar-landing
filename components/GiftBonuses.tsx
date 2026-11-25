import Reveal from "./Reveal";

export default function GiftBonuses() {
  return (
    <Reveal delay={100}>
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl pt-12">
          {/* stage curtain — rises once to reveal the gifts underneath */}
          <div
            className="curtain-cover curtain-velvet pointer-events-none absolute inset-0 z-30 flex flex-col justify-between shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]"
            aria-hidden
          >
            {/* gold valance at the top */}
            <div className="h-2.5 bg-gradient-to-b from-[#f5d78a] to-[#d9a406] shadow-md" />

            {/* center hint text */}
            <div className="curtain-hint flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="text-3xl" aria-hidden>🎁</span>
              <p className="font-display text-base font-extrabold uppercase tracking-[0.2em] text-[#ffe59a] sm:text-lg">
                3 Gifts Await You
              </p>
            </div>

            {/* gold fringe at the bottom */}
            <div className="curtain-fringe" />
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1fr]">
          {/* featured software card — shown second */}
          <div className="order-2 relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#e8c15a] bg-gradient-to-b from-[#fffaf0] to-[#ffedbf] p-4 text-center shadow-lg shadow-[#e8c15a]/20 sm:p-5">
            <div className="overflow-hidden rounded-xl shadow-lg shadow-black/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/printpulse-box.jpg"
                alt="PrintPulse — boost your machine productivity by 80% in just 3 steps. Limited offer, first 10 registrations only."
                className="w-full"
              />
            </div>

            <div className="flex flex-1 flex-col items-center justify-center">
              <p className="font-display text-xl font-extrabold leading-snug text-ink">
                3-Month Subscription
              </p>
              <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-body">
                Be one of the first 10 to register — and get a 3-month
                subscription of our premium print software, absolutely free.
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-navy px-4 py-3">
              <span className="relative mr-2.5 inline-block font-display text-base font-bold text-white/45">
                ₹XX,XXX
                <span
                  className="absolute left-1/2 top-1/2 h-[2.5px] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-full bg-red/90"
                  aria-hidden
                />
              </span>
              <span className="font-display text-xl font-extrabold tracking-wide text-[#ffd45e]">
                FREE
              </span>
            </div>
          </div>

          {/* for-everyone panel — shown first */}
          <div className="order-1 relative flex h-full flex-col rounded-2xl border-2 border-green/25 bg-[#eef7f0] px-5 pb-5 pt-8 sm:px-6">
            {/* top banner */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-green px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
              Included for Every Registrant
            </span>
            {/* 3D gift art */}
            <span className="absolute -top-9 right-2 rotate-12" aria-hidden>
              <svg viewBox="0 0 120 120" className="h-20 w-20 drop-shadow-[0_10px_14px_rgba(0,0,0,0.35)]">
                <defs>
                  <linearGradient id="gbFront" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffd45e" />
                    <stop offset="100%" stopColor="#e8a800" />
                  </linearGradient>
                  <linearGradient id="gbSide" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#c08a00" />
                    <stop offset="100%" stopColor="#9a6d00" />
                  </linearGradient>
                  <linearGradient id="gbLid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffe59a" />
                    <stop offset="100%" stopColor="#f5b301" />
                  </linearGradient>
                  <linearGradient id="gbRib" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2ea36b" />
                    <stop offset="100%" stopColor="#0c6b3d" />
                  </linearGradient>
                </defs>
                <path d="M92 48 L104 40 L104 92 L92 102 Z" fill="url(#gbSide)" />
                <rect x="24" y="48" width="68" height="54" rx="5" fill="url(#gbFront)" />
                <path d="M96 34 L108 27 L108 42 L96 48 Z" fill="#8a6200" />
                <rect x="18" y="34" width="78" height="16" rx="4" fill="url(#gbLid)" />
                <rect x="51" y="34" width="14" height="68" fill="url(#gbRib)" />
                <path d="M58 30c-9-12-24-10-22-2 1.6 6.6 13 6 22 2z" fill="#188a52" />
                <path d="M58 30c9-12 24-10 22-2-1.6 6.6-13 6-22 2z" fill="#0c6b3d" />
                <circle cx="58" cy="30" r="5.5" fill="#5ecf9a" />
                <rect x="28" y="54" width="8" height="42" rx="4" fill="#ffffff" opacity="0.25" />
              </svg>
            </span>
            <span className="absolute -top-3 right-24 text-lg" aria-hidden>
              ✨
            </span>

            <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-green">
              ✦ 2 Essential Gifts · 100% Free ✦
            </p>

            <div className="relative mt-4 grid flex-1 gap-4 sm:grid-cols-2">
              {/* plus joint */}
              <span
                className="absolute left-1/2 top-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#eef7f0] bg-green font-display text-lg font-extrabold text-white sm:flex"
                aria-hidden
              >
                +
              </span>

              {/* report */}
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-5 text-center">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#e4f2e7] to-[#cfe8d6] shadow-inner">
                    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
                      <path d="M12 6h18l8 8v28H12V6z" fill="#ffffff" stroke="#0c6b3d" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M30 6v8h8" fill="#bfe3ca" stroke="#0c6b3d" strokeWidth="2" strokeLinejoin="round" />
                      <rect x="18" y="26" width="4" height="10" rx="1" fill="#2ea36b" />
                      <rect x="24" y="21" width="4" height="15" rx="1" fill="#0c6b3d" />
                      <rect x="30" y="29" width="4" height="7" rx="1" fill="#f5b301" />
                      <path d="M17 14h8" stroke="#0c6b3d" strokeWidth="2" strokeLinecap="round" />
                      <path d="M14 3v8l3-2 3 2V3" fill="#f5b301" stroke="#d99a06" strokeWidth="1" />
                    </svg>
                  </span>
                  <p className="font-display mt-3 text-[15px] font-extrabold leading-snug text-ink">
                    The Confidential Report
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-body">
                    How India&apos;s printing industry will grow over the next
                    30 years — insights drawn from Times of India &amp;
                    Economic Times coverage. Private circulation only.
                  </p>
                </div>
                <div className="mt-3 rounded-lg bg-green px-3 py-2">
                  <span className="relative mr-2 inline-block text-xs font-bold text-white/60">
                    ₹1,499
                    <span
                      className="absolute left-1/2 top-1/2 h-[2px] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-6 bg-red/90"
                      aria-hidden
                    />
                  </span>
                  <span className="font-display text-sm font-extrabold tracking-wide text-white">
                    FREE
                  </span>
                </div>
              </div>

              {/* certificate */}
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-5 text-center">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#e4f2e7] to-[#cfe8d6] shadow-inner">
                    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
                      <rect x="5" y="9" width="38" height="26" rx="2.5" fill="#ffffff" stroke="#0c6b3d" strokeWidth="2" />
                      <rect x="8" y="12" width="32" height="20" rx="1.5" fill="none" stroke="#bfe3ca" strokeWidth="1.5" />
                      <path d="M12 17h16M12 21h11M12 25h8" stroke="#2ea36b" strokeWidth="2" strokeLinecap="round" />
                      <path d="m33 33-2.2 9 4.2-2.6 4.2 2.6-2.2-9" fill="#d99a06" />
                      <circle cx="35" cy="29" r="6.5" fill="#f5b301" stroke="#d99a06" strokeWidth="1.5" />
                      <circle cx="35" cy="29" r="3.5" fill="#ffe59a" />
                      <path d="m35 26.6.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" fill="#d99a06" />
                    </svg>
                  </span>
                  <p className="font-display mt-3 text-[15px] font-extrabold leading-snug text-ink">
                    Certificate of Efficiency Leadership
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-body">
                    Awarded by Print Pathshala and signed by Mr. Parmeshawar
                    Patidar — official recognition of your commitment to an
                    efficient print business.
                  </p>
                </div>
                <div className="mt-3 rounded-lg bg-green px-3 py-2">
                  <span className="relative mr-2 inline-block text-xs font-bold text-white/60">
                    ₹1,199
                    <span
                      className="absolute left-1/2 top-1/2 h-[2px] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-6 bg-red/90"
                      aria-hidden
                    />
                  </span>
                  <span className="font-display text-sm font-extrabold tracking-wide text-white">
                    FREE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* total strip */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#eadfc6] bg-[#fdf7ec] px-6 py-4 sm:flex-row">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ecd6] text-2xl" aria-hidden>
              🎁
            </span>
            <p className="text-[15px] font-bold text-ink">
              3 Premium Gifts. Total Value{" "}
              <span className="relative mx-1 inline-block font-display text-lg font-extrabold text-body/50">
                ₹XX,XXX
                <span
                  className="absolute left-1/2 top-1/2 h-[2.5px] w-[112%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-full bg-red"
                  aria-hidden
                />
              </span>{" "}
              — Yours for just{" "}
              <span className="font-display text-2xl font-extrabold text-cta">₹99</span>
            </p>
          </div>
          <span className="font-script text-3xl leading-none text-cta">
            Don&apos;t miss out!
          </span>
        </div>
      </div>
    </Reveal>
  );
}
