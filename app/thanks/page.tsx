import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import PaidReporter from "@/components/PaidReporter";
import { formatWebinarDate } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seat Locked! | 22-Minute Efficiency Masterclass",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <main className="bg-navy-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <PaidReporter />
      <div className="hero-dots absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-cta/15 blur-3xl" />

      {/* big tick */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green text-5xl text-white shadow-2xl shadow-green/40">
        ✓
      </div>

      <h1 className="font-display relative mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
        Payment <span className="text-cta">Successful!</span>
      </h1>

      <p className="font-serif relative mt-4 text-2xl font-bold italic text-[#ffc21f] sm:text-3xl">
        Your seat is locked. 🎉
      </p>

      <p className="relative mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
        Now the wait begins —{" "}
        <span className="font-bold text-white">
          22 minutes that could change how you run your business.
        </span>
      </p>

      <div className="relative mt-10 flex flex-col items-center gap-3">
        <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-cta">
          ⏳ See you in
        </span>
        <Countdown size="lg" />
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-white">
          {formatWebinarDate()}
        </span>
      </div>

      <p className="font-serif relative mt-9 text-lg font-bold italic text-white/85 sm:text-xl">
        The wait will be worth it — <span className="text-cta">trust us.</span> 😉
      </p>

      <p className="relative mt-5 text-sm text-white/60">
        📲 Your joining link will reach you on{" "}
        <span className="font-bold text-white">WhatsApp &amp; email</span> —
        stay ready.
      </p>

      <p className="relative mt-6 text-xs text-white/40">
        🛡️ 100% money-back guarantee · Questions? WhatsApp us anytime
      </p>
    </main>
  );
}
