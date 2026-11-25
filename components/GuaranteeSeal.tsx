// Compact money-back starburst seal (same design language as the ticket seal)
const BURST = (() => {
  const pts: string[] = [];
  const n = 28;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? 58 : 50;
    const a = (Math.PI * i) / n;
    pts.push(`${(60 + r * Math.sin(a)).toFixed(2)},${(60 - r * Math.cos(a)).toFixed(2)}`);
  }
  return pts.join(" ");
})();

export default function GuaranteeSeal({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="-16 -4 152 132" className={className} aria-hidden>
      <defs>
        <linearGradient id="gsBurst" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd45e" />
          <stop offset="100%" stopColor="#f5b301" />
        </linearGradient>
        <path id="gsTop" d="M 60 60 m -35 0 a 35 35 0 1 1 70 0" fill="none" />
      </defs>
      <polygon points={BURST} fill="url(#gsBurst)" />
      <circle cx="60" cy="60" r="46" fill="#0a1c38" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#ffc21f" strokeWidth="1.2" strokeDasharray="2 3" />
      <text fontSize="9.5" fontWeight="800" fill="#ffd45e" letterSpacing="1.5">
        <textPath href="#gsTop" startOffset="50%" textAnchor="middle">
          FULL MONEY BACK
        </textPath>
      </text>
      <text x="60" y="54" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ffd45e">
        100%
      </text>
      <path
        d="M51 61 l6.5 6.5 l13 -13"
        fill="none"
        stroke="#2ec27e"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="-16,76 -2,82 -16,92" fill="#a81207" />
      <polygon points="136,76 122,82 136,92" fill="#a81207" />
      <rect x="-12" y="72" width="144" height="19" rx="2.5" fill="#d92d20" />
      <text
        x="60"
        y="84.8"
        textAnchor="middle"
        fontSize="8.4"
        fontWeight="800"
        fill="#ffffff"
        letterSpacing="0.8"
      >
        SATISFACTION GUARANTEED
      </text>
    </svg>
  );
}
