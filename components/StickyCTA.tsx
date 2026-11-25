"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const nearRegister =
        document.getElementById("register")?.getBoundingClientRect().top ?? Infinity;
      setVisible(past && nearRegister > window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(16,24,40,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="font-display text-sm font-bold text-ink">
            22-Minute Masterclass
          </div>
          <div className="text-xs text-body">Limited seats</div>
        </div>
        <a href="#register" className="btn-primary px-5 py-2.5 text-sm">
          Reserve Seat
        </a>
      </div>
    </div>
  );
}
