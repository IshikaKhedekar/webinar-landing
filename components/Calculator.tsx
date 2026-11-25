"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { formatINR } from "@/lib/config";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
};

function Slider({ label, value, min, max, step, display, onChange }: SliderProps) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label className="text-sm font-medium text-white/65">{label}</label>
        <span className="font-display text-lg font-bold tabular-nums text-white">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
        aria-label={label}
      />
    </div>
  );
}

export default function Calculator() {
  const [employees, setEmployees] = useState(20);
  const [salary, setSalary] = useState(30000);
  const [hoursLost, setHoursLost] = useState(1);

  // 22 working days × 8 productive hours = 176 paid hours a month
  const hourlyCost = salary / 176;
  const monthlyLeakage = employees * hoursLost * 22 * hourlyCost;
  const annualLeakage = monthlyLeakage * 12;

  return (
    <section id="calculator" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-center text-cta">Your Real Number</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            What Could <span className="text-cta">2X Efficiency</span> Mean for
            Your Business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-body">
            Move the sliders. Watch what &quot;just one lost hour&quot; is really
            doing to your bottom line.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="bg-navy-section mx-auto mt-12 max-w-5xl rounded-3xl p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-5">
              {/* inputs */}
              <div className="card-dark p-6 sm:p-8 lg:col-span-2">
                <div className="space-y-8">
                  <Slider
                    label="Your team size"
                    value={employees}
                    min={5}
                    max={500}
                    step={5}
                    display={`${employees} people`}
                    onChange={setEmployees}
                  />
                  <Slider
                    label="Average monthly salary"
                    value={salary}
                    min={10000}
                    max={200000}
                    step={5000}
                    display={formatINR(salary)}
                    onChange={setSalary}
                  />
                  <Slider
                    label="Productive hours lost / employee / day"
                    value={hoursLost}
                    min={0.5}
                    max={4}
                    step={0.5}
                    display={`${hoursLost} hr${hoursLost > 1 ? "s" : ""}`}
                    onChange={setHoursLost}
                  />
                </div>
                <p className="mt-8 text-[11px] leading-relaxed text-white/40">
                  Estimate based on 22 working days and 8 productive hours a day
                  per employee. Indicative only — your actual number depends on
                  your real employee cost.
                </p>
              </div>

              {/* results */}
              <div className="flex flex-col gap-4 lg:col-span-3">
                <div className="card-dark flex-1 p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Estimated monthly productivity leakage
                  </div>
                  <div className="font-display mt-2 text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
                    {formatINR(monthlyLeakage)}
                  </div>
                </div>
                <div className="flex-1 rounded-2xl border border-red/35 bg-red/15 p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Estimated annual productivity leakage
                  </div>
                  <div className="font-display mt-2 text-5xl font-extrabold tabular-nums text-white sm:text-6xl">
                    {formatINR(annualLeakage)}
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    ≈ {Math.round(employees * hoursLost * 22).toLocaleString("en-IN")}{" "}
                    productive hours leaking out every month.
                  </div>
                </div>
                <div className="flex-1 rounded-2xl border border-cta/40 bg-cta/15 p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-cta">
                    Potential value of recovering that capacity
                  </div>
                  <div className="font-display mt-2 text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
                    {formatINR(annualLeakage)} <span className="text-2xl font-bold text-white/60">/ year</span>
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    Without hiring a single new employee.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 text-center">
              <p className="font-display text-lg font-bold text-white sm:text-xl">
                Want to find — and fix — your real number?
              </p>
              <a href="#register" className="btn-primary mt-5 inline-flex px-8 py-4">
                Join the 22-Minute Masterclass
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
