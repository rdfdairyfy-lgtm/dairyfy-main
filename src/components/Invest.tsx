import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Invest() {
  return (
    <section id="invest" className="relative py-32 md:py-44 bg-[var(--moss)] text-primary-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, oklch(0.78 0.13 140 / 0.8), transparent 50%), radial-gradient(ellipse at 80% 80%, oklch(0.62 0.15 142 / 0.6), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <Reveal className="md:col-span-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.86_0.08_140)]">
              — Investors
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Build the future of pure dairy.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4">
            <p className="text-lg opacity-80">
              We're scaling a vertically‑integrated dairy brand across India. Transparent legal
              practices. Real partnership opportunities. Real earnings.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { n: 48, s: "+", l: "Partner farms onboarded" },
            { n: 12, s: "M+", l: "Bottles delivered" },
            { n: 24, s: "x", l: "Avg LTV : CAC" },
            { n: 96, s: "%", l: "Customer repeat rate" },
          ].map((m, i) => (
            <Reveal key={m.l} delay={i * 0.08}>
              <div className="glass-dark rounded-3xl p-7 border border-white/10">
                <div className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
                  <Counter to={m.n} suffix={m.s} />
                </div>
                <div className="mt-3 text-sm opacity-70">{m.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Equity partnerships",
              d: "Co‑invest in regional farm clusters with structured returns and quarterly reporting.",
            },
            {
              t: "Transparent legal",
              d: "Independently audited filings, clear cap table, and standard SAFE / SHA documents.",
            },
            {
              t: "Earning opportunities",
              d: "From route franchises to micro‑distribution, we partner with operators who care.",
            },
          ].map((c) => (
            <Reveal key={c.t}>
              <div
                data-cursor="hover"
                className="group rounded-3xl border border-white/15 bg-white/5 p-7 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-bold">{c.t}</h3>
                <p className="mt-3 text-sm opacity-75">{c.d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.86_0.1_140)] group-hover:gap-3 transition-all">
                  Request deck →
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>Request investor deck</MagneticButton>
            <MagneticButton variant="ghost">
              <span className="text-foreground">Email the founders</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
