import CountUp from "./CountUp";
import Reveal from "./Reveal";

const cascade = [
  { left: "1 hour lost / day", op: "×", right: "20 employees", result: "20 hours lost / day" },
  { left: "20 hours / day", op: "×", right: "22 working days", result: "440 hours lost / month" },
  { left: "440 hours", op: "×", right: "₹___ avg. hourly employee cost", result: "₹___ monthly productivity leakage" },
  { left: "₹___ / month", op: "×", right: "12 months", result: "₹___ annual productivity leakage" },
];

export default function CostSection() {
  return (
    <section id="cost" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-center text-amber">The Price Tag</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            What Is Your Team&apos;s Inefficiency{" "}
            <span className="text-red">Actually Costing You?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-body">
            Suppose you have <span className="font-bold text-ink">20 employees</span>, and
            each one loses only <span className="font-bold text-ink">1 hour a day</span> to
            manual work, unclear processes, follow-ups and searching for information.
          </p>
        </Reveal>

        {/* headline stats */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="card card-hover border-red/15 bg-red/[0.03] p-8 text-center">
              <div className="font-display text-5xl font-extrabold text-red">
                <CountUp end={20} suffix=" hrs" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-body">
                Lost every single day
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card card-hover border-red/15 bg-red/[0.03] p-8 text-center">
              <div className="font-display text-5xl font-extrabold text-red">
                <CountUp end={440} suffix=" hrs" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-body">
                Lost every month
              </div>
            </div>
          </Reveal>
        </div>

        {/* multiplication cascade — navy panel for contrast */}
        <Reveal delay={150}>
          <div className="bg-navy-section mx-auto mt-12 max-w-2xl rounded-3xl p-7 sm:p-10">
            <p className="text-center font-display text-lg font-bold text-white">
              Even small inefficiencies multiply:
            </p>
            <div className="mt-6 space-y-3">
              {cascade.map((row, i) => (
                <div key={i} className="card-dark px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/65 sm:text-[15px]">
                    <span>{row.left}</span>
                    <span className="font-display font-extrabold text-cta">{row.op}</span>
                    <span>{row.right}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-display font-extrabold text-cta">=</span>
                    <span className="font-display font-bold text-white sm:text-lg">
                      {row.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-center text-sm leading-relaxed text-white/60">
              That blank <span className="font-bold text-cta">₹___</span> is the number a
              business owner actually understands — and it&apos;s different for every business.
            </p>
            <div className="mt-6 text-center">
              <a href="#calculator" className="btn-primary px-6 py-3 text-sm">
                Calculate your real number ↓
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
