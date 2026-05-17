import { Reveal } from "./Reveal";

const items = [
  { t: "Food‑grade packaging", d: "Glass first, food‑grade PET only when essential." },
  { t: "Reduced plastic usage", d: "Returnable bottle program cuts single‑use plastic by 84%." },
  { t: "Sustainable farming", d: "Rotational grazing, native grasses, regenerative soil." },
  { t: "Ethical animal treatment", d: "Open pastures, vet‑audited welfare, no growth hormones." },
];

export function Sustainability() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--moss)] uppercase">
              — Sustainability
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-6xl font-bold tracking-tight text-balance">
              A planet‑first <span className="text-gradient-green">dairy company.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Doing the right thing isn't a marketing line. It's the operating model.
            </p>
          </Reveal>

          <div className="md:col-span-7 space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 0.08}>
                <div
                  data-cursor="hover"
                  className="group flex items-center gap-6 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:shadow-glow hover:border-[var(--sage)]"
                >
                  <div className="font-display text-5xl font-bold text-[var(--sage)] tabular-nums">
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold">{it.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
                  </div>
                  <span className="text-[var(--moss)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
