// Deliberately minimal — this is a marketing funnel page, not a website.
// Just the brand mark and one action.
export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/printpathshala.png"
            alt="Print Pathshala"
            className="h-14 w-auto drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)] sm:h-[4.2rem]"
          />
          <span className="mt-0.5 flex items-center gap-2.5">
            <span
              className="h-px w-8 bg-gradient-to-r from-transparent to-[#ffc21f]/80"
              aria-hidden
            />
            <span className="text-[10px] text-[#ffc21f]" aria-hidden>
              ✦
            </span>
            <span className="font-script text-2xl leading-none text-[#ffc21f] sm:text-[1.7rem]">
              presents
            </span>
            <span className="text-[10px] text-[#ffc21f]" aria-hidden>
              ✦
            </span>
            <span
              className="h-px w-8 bg-gradient-to-l from-transparent to-[#ffc21f]/80"
              aria-hidden
            />
          </span>
        </div>
        <a
          href="#register"
          className="btn-outline-light px-5 py-2.5 text-sm max-sm:hidden!"
        >
          Reserve My Seat
        </a>
      </nav>
    </header>
  );
}
