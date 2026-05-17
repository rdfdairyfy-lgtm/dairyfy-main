import { Reveal } from "./Reveal";

const rows = [
  { k: "Shelf life", us: "36 hours", them: "6+ months" },
  { k: "Preservatives", us: "None", them: "Stabilizers & emulsifiers" },
  { k: "Hormone injections", us: "Never", them: "Industry standard" },
  { k: "Artificial chemicals", us: "Zero", them: "Permitted additives" },
  { k: "Delivery model", us: "Farm → Home", them: "Farm → Plant → Warehouse → Store" },
  { k: "Animal welfare", us: "Open pasture · vet‑audited", them: "Confinement common" },
  { k: "Traceability", us: "Batch‑level QR", them: "Opaque supply chain" },
];

export function Compare() {
  return (
    <section id="compare" className="relative py-32 md:py-44 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--moss)] uppercase">
              — The Difference
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Other brands. <span className="text-gradient-green">Versus us.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We aren't competing on shelf life. We're competing on truth.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-[2rem] glass shadow-card">
            <div className="grid grid-cols-3 bg-gradient-to-r from-transparent via-[oklch(0.92_0.05_140/0.3)] to-transparent px-6 py-6 md:px-10 border-b border-border text-sm font-semibold uppercase tracking-wider">
              <div className="text-muted-foreground">Metric</div>
              <div className="text-[var(--moss)] flex items-center gap-2">
                 Dairyfy
              </div>
              <div className="text-muted-foreground">Other brands</div>
            </div>

            {rows.map((r, i) => (
              <div
                key={r.k}
                data-cursor="hover"
                className={`group grid grid-cols-3 items-center px-6 py-6 md:px-10 md:py-7 transition-colors duration-300 hover:bg-white/60 ${
                  i !== rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm md:text-base font-medium text-foreground">{r.k}</div>
                <div className="text-base md:text-lg font-display font-bold text-[var(--moss)] transition-transform duration-300 group-hover:translate-x-1">
                  {r.us}
                </div>
                <div className="text-sm md:text-base text-muted-foreground line-through decoration-[oklch(0.7_0.02_30)] decoration-2">
                  {r.them}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 14.5 9 22 9.5l-5.7 4.7L18 22l-6-3.8L6 22l1.7-7.8L2 9.5 9.5 9 12 2Z" />
    </svg>
  );
}
