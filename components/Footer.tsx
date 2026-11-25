export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 px-5 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#ffc21f]">
            ✦ Powered By
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/indas3d.png"
            alt="Indas Analytics — Print Process Automation Partner"
            className="h-24 w-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)] sm:h-28"
          />
          <p className="mt-1 text-xs text-white/50">
            An initiative by{" "}
            <span className="font-bold text-white/85">Print Pathshala</span>
          </p>
        </div>

        <p className="text-center text-xs leading-relaxed text-white/45 sm:text-right">
          Results shown are outcome categories, not guaranteed financial claims.
          <br className="hidden sm:block" /> Your numbers depend on your business inputs.
        </p>
      </div>
    </footer>
  );
}
