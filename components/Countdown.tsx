"use client";

import { useEffect, useState } from "react";
import { getWebinarDate } from "@/lib/config";

type Parts = { d: number; h: number; m: number; s: number };

function diffParts(target: Date): Parts {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor(ms / 3_600_000) % 24,
    m: Math.floor(ms / 60_000) % 60,
    s: Math.floor(ms / 1_000) % 60,
  };
}

// Styled for navy backgrounds (hero + final CTA).
export default function Countdown({ size = "md" }: { size?: "md" | "lg" }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const target = getWebinarDate();
    setParts(diffParts(target));
    const id = setInterval(() => setParts(diffParts(target)), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: Array<[string, number]> = [
    ["Days", parts?.d ?? 0],
    ["Hours", parts?.h ?? 0],
    ["Mins", parts?.m ?? 0],
    ["Secs", parts?.s ?? 0],
  ];

  const lg = size === "lg";

  return (
    <div className={`flex items-center ${lg ? "gap-1.5 sm:gap-4" : "gap-2 sm:gap-3"}`}>
      {cells.map(([label, value], i) => (
        <div key={label} className={`flex items-center ${lg ? "gap-1.5 sm:gap-4" : "gap-2 sm:gap-4"}`}>
          <div
            className={`card-dark text-center ${
              lg
                ? "min-w-[3.2rem] border-white/20 bg-white/10 px-2 py-2.5 sm:min-w-[5.6rem] sm:px-5 sm:py-4"
                : "min-w-12 px-2 py-2 sm:min-w-[4.5rem] sm:px-4 sm:py-2.5"
            }`}
          >
            <div
              className={`font-display font-extrabold tabular-nums text-white ${
                lg ? "text-2xl sm:text-5xl" : "text-lg sm:text-2xl"
              } ${lg && label === "Secs" ? "text-cta" : ""}`}
            >
              {parts ? String(value).padStart(2, "0") : "--"}
            </div>
            <div
              className={`uppercase tracking-widest ${
                lg
                  ? "mt-0.5 text-[9px] font-bold text-white/60 sm:mt-1 sm:text-xs"
                  : "text-[8px] text-white/50 sm:text-[10px]"
              }`}
            >
              {label}
            </div>
          </div>
          {i < cells.length - 1 && (
            <span
              className={`animate-blink font-display font-extrabold text-white/40 ${
                lg ? "text-lg sm:text-4xl" : "hidden"
              }`}
              aria-hidden
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
