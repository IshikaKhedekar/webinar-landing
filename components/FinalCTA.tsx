"use client";

import { useState, type FormEvent } from "react";
import Countdown from "./Countdown";
import GuaranteeSeal from "./GuaranteeSeal";
import Reveal from "./Reveal";
import { WEBINAR, formatWebinarDate } from "@/lib/config";

type Step = "form" | "redirect" | "pay" | "done";

type Errors = Partial<Record<"name" | "phone" | "email" | "company" | "team", string>>;

const inputBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-body/60";

export default function FinalCTA() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [team, setTeam] = useState("");
  const [utr, setUtr] = useState("");
  const [utrError, setUtrError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  // appends a row to your Google Sheet
  const sendToSheet = (paymentLabel: string) => {
    if (!WEBINAR.sheetUrl) return;
    fetch(WEBINAR.sheetUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        key: "pp2026-masterclass",
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        company: company.trim(),
        team,
        payment: paymentLabel,
      }),
    }).catch(() => {});
  };

  const confirmPayment = () => {
    const clean = utr.trim().replace(/\s/g, "");
    if (!/^[A-Za-z0-9]{10,18}$/.test(clean)) {
      setUtrError(
        "Please enter the 12-digit UTR / Transaction ID from your UPI app after paying"
      );
      return;
    }
    setUtrError("");
    sendToSheet(`₹${WEBINAR.price} via UPI QR · UTR: ${clean}`);
    setStep("done");
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 3) e.name = "Please enter your full name";
    if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, "")))
      e.phone = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      e.email = "Enter a valid email address";
    if (company.trim().length < 2) e.company = "Please enter your company name";
    if (!team) e.team = "Please select your team size";
    return e;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length !== 0) return;

    if (WEBINAR.razorpayPageUrl) {
      // lead saved first, then straight to Razorpay — zero payment friction
      sendToSheet(`Lead → sent to Razorpay (₹${WEBINAR.price})`);
      // remembered locally so /thanks can log the PAID row after Razorpay
      // redirects the visitor back
      try {
        localStorage.setItem(
          "mc_reg",
          JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            company: company.trim(),
            team,
          })
        );
      } catch {}
      setStep("redirect");
      setTimeout(() => {
        window.location.href = WEBINAR.razorpayPageUrl;
      }, 1200);
    } else {
      // fallback: on-page QR + UTR flow
      setStep("pay");
    }
  };

  const fieldClass = (bad?: string) =>
    `${inputBase} ${bad ? "border-red bg-red/5 focus:border-red" : "border-line focus:border-cta"}`;

  return (
    <section className="bg-navy-section relative overflow-hidden py-20 sm:py-28">
      <div className="hero-dots absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find Out Where Your Team Is{" "}
            <span className="text-cta">Losing Efficiency</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/65">
            22 minutes could show you how to significantly improve your team&apos;s
            efficiency in the next <span className="font-bold text-white">22 days</span> —
            and where your next phase of growth is being lost.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-cta">
              ⏳ Next session starts in
            </span>
            <Countdown size="lg" />
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-white">
              {formatWebinarDate()}
            </span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div id="register" className="relative mx-auto mt-12 max-w-xl scroll-mt-24">
            {/* guarantee seal — top corner */}
            <GuaranteeSeal className="absolute -right-4 -top-9 z-10 h-24 w-24 rotate-12 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] sm:-right-8 sm:h-28 sm:w-28" />

            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
              {/* watermark — black & subtle */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=60"
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="relative">
            {/* step indicator */}
            {step !== "done" && (
              <div className="mb-7 flex items-center justify-center gap-2">
                {[
                  { key: "form", label: "Your details" },
                  { key: "pay", label: "Payment" },
                ].map((s, i) => (
                  <div key={s.key} className="flex items-center gap-2">
                    {i > 0 && <span className="h-px w-8 bg-line" />}
                    <span
                      className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold ${
                        step === s.key || (s.key === "pay" && step === "redirect")
                          ? "bg-cta text-white"
                          : "bg-surface text-body"
                      }`}
                    >
                      <span>{i + 1}</span> {s.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className={fieldClass(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-semibold text-red">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone / WhatsApp"
                      className={fieldClass(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs font-semibold text-red">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    className={fieldClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-semibold text-red">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    className={fieldClass(errors.company)}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs font-semibold text-red">{errors.company}</p>
                  )}
                </div>
                <div>
                  <select
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    className={`${fieldClass(errors.team)} ${team ? "" : "text-body/60"}`}
                  >
                    <option value="" disabled>
                      Your team size
                    </option>
                    <option value="5-20">5 – 20 employees</option>
                    <option value="21-50">21 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                  {errors.team && (
                    <p className="mt-1 text-xs font-semibold text-red">{errors.team}</p>
                  )}
                </div>

                <div className="pt-1 text-center">
                  <button type="submit" className="btn-primary px-10 py-3.5 text-base">
                    Continue to Payment →
                  </button>
                </div>

                <p className="text-center text-xs text-body">
                  {WEBINAR.durationMinutes}-Minute Masterclass · {WEBINAR.audience} ·{" "}
                  <span className="font-bold text-green">100% money-back</span>
                </p>
                {/* Bonus line — disabled for now, re-enable when ready
                <p className="text-center text-xs font-bold text-ink">
                  🎁 Includes FREE: Confidential Report · Certificate — first
                  10 also get a 3-month software subscription
                </p>
                */}
              </form>
            )}

            {step === "redirect" && (
              <div className="py-10 text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-line border-t-cta" />
                <h3 className="font-display mt-6 text-xl font-extrabold text-ink">
                  Taking you to secure payment…
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-body">
                  Pay ₹{WEBINAR.price} via GPay, PhonePe, card or netbanking on
                  Razorpay&apos;s secure page.
                </p>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-green">
                  🛡️ 100% money-back guarantee applies
                </p>
              </div>
            )}

            {step === "pay" && (
              <div className="text-center">
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {name ? `Almost there, ${name.trim().split(" ")[0]}!` : "Almost there!"}
                </h3>
                <p className="mt-1 text-sm text-body">
                  Scan the QR with any UPI app to reserve your seat.
                </p>

                {/* price hook */}
                <div className="mt-6 flex flex-wrap items-end justify-center gap-3 sm:gap-4">
                  <span className="relative font-display text-xl font-bold text-body/45 sm:text-2xl">
                    ₹{WEBINAR.regularPrice}
                    <span
                      className="absolute left-1/2 top-1/2 h-[3px] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-full bg-red"
                      aria-hidden
                    />
                  </span>
                  <span className="relative font-display text-5xl font-extrabold leading-none text-ink sm:text-6xl">
                    ₹{WEBINAR.price}
                    <svg
                      className="absolute -bottom-3 left-0 w-full text-red"
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
                  <span className="mb-1 flex items-center gap-1.5 rounded-full bg-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-red/30">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-white" />
                    ⚡ Early Bird Offer
                  </span>
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                  One seat · One decision · 22 minutes
                </p>

                {/* Razorpay QR */}
                <div className="mx-auto mt-4 w-fit rounded-2xl border-2 border-line bg-white p-3 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rzp-qr.jpg"
                    alt={`UPI payment QR for ₹${WEBINAR.price}`}
                    width={200}
                    height={200}
                    className="h-48 w-48 object-contain"
                  />
                </div>
                <p className="mt-2.5 text-xs text-body">
                  Scan with any UPI app — GPay · PhonePe · Paytm
                  <span className="block">
                    Secure payment via <span className="font-bold text-ink">Razorpay</span> to
                    Indas Analytics
                  </span>
                </p>

                {WEBINAR.razorpayPageUrl && (
                  <div className="mx-auto mt-4 max-w-sm">
                    <a
                      href={WEBINAR.razorpayPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full px-6 py-3 text-sm"
                    >
                      📱 On your phone? Tap to pay ₹{WEBINAR.price} →
                    </a>
                  </div>
                )}

                {/* guarantee with seal */}
                <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-3">
                  <GuaranteeSeal className="h-20 w-20 shrink-0" />
                  <p className="text-left text-xs font-bold leading-snug text-ink">
                    100% Money-Back Guarantee
                    <span className="block font-medium text-body">
                      Didn&apos;t find it valuable? Every rupee back — no
                      questions asked.
                    </span>
                  </p>
                </div>

                {/* UTR — proof of payment */}
                <div className="mx-auto mt-6 max-w-sm text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-body">
                    UPI Transaction ID / UTR{" "}
                    <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    placeholder="e.g. 425689731204"
                    className={`${inputBase} mt-1.5 ${
                      utrError
                        ? "border-red bg-red/5 focus:border-red"
                        : "border-line focus:border-cta"
                    }`}
                  />
                  {utrError ? (
                    <p className="mt-1.5 text-xs font-semibold text-red">{utrError}</p>
                  ) : (
                    <p className="mt-1.5 text-[11px] leading-snug text-body">
                      Payment ke baad GPay/PhonePe/Paytm mein &quot;Transaction
                      ID&quot; ya &quot;UPI Ref No.&quot; milta hai — wahi yahan
                      daalein. Iske bina seat confirm nahi hogi.
                    </p>
                  )}
                </div>

                <div className="mt-5 text-center">
                  <button onClick={confirmPayment} className="btn-primary px-10 py-3.5 text-base">
                    I&apos;ve Paid — Confirm My Seat ✓
                  </button>
                </div>
                <button
                  onClick={() => setStep("form")}
                  className="mt-3 text-xs font-semibold text-body underline-offset-2 hover:underline"
                >
                  ← Back to details
                </button>
              </div>
            )}

            {step === "done" && (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-3xl text-green">
                  ✓
                </div>
                <h3 className="font-display mt-6 text-2xl font-extrabold text-ink">
                  Your Seat Is Reserved!
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-body">
                  We&apos;ll verify your payment and send the joining link on
                  WhatsApp and email. See you on{" "}
                  <span className="font-bold text-ink">15 September, 11:00 AM</span>.
                </p>
                <div className="mx-auto mt-5 flex items-center justify-center gap-2.5">
                  <GuaranteeSeal className="h-14 w-14" />
                  <p className="text-xs font-bold text-ink">
                    Covered by the 100% money-back guarantee
                  </p>
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
