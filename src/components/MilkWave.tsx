export function MilkWave({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={`block w-full h-[140px] md:h-[200px] ${className}`}
    >
      <defs>
        <linearGradient id="milk1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.99 0.015 92)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.94 0.04 100)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="milk2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.06 140)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 140)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        fill="url(#milk2)"
        className="animate-milk-wave"
        style={{ transformOrigin: "center bottom" }}
        d="M0,160 C240,260 480,60 720,140 C960,220 1200,80 1440,160 L1440,320 L0,320 Z"
      />
      <path
        fill="url(#milk1)"
        d="M0,200 C240,290 480,140 720,200 C960,260 1200,160 1440,220 L1440,320 L0,320 Z"
      />
    </svg>
  );
}
