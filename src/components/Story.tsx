import { Reveal } from "./Reveal";

const features = [
  { t: "No Preservatives", d: "Bottled within hours of milking. Nothing added, ever.", i: "drop" },
  { t: "No Adulteration", d: "Lab‑tested batches. Full chain of custody from cow to crate.", i: "shield" },
  { t: "Ethical Animal Care", d: "Open pasture, vet‑monitored, no growth hormones.", i: "heart" },
  { t: "Scientific Farming", d: "Soil, feed and microbiome studied like a research lab.", i: "flask" },
  { t: "Direct Farm Delivery", d: "Skip the warehouse. Skip the middleman. Skip the wait.", i: "truck" },
  { t: "Minimal Plastic", d: "Returnable glass and food‑grade compostable mailers.", i: "leaf" },
];

export function Story() {
  return (
    <section id="story" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <Reveal className="md:col-span-7">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--moss)] uppercase">
              — Our Story
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
              A dairy ecosystem,
              <br />
              <span className="text-gradient-green">built honestly.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5 md:pl-8 md:border-l border-border">
            <p className="text-lg text-muted-foreground text-pretty">
              Since 2016, Dairyfy has been building a transparent dairy ecosystem focused on
              purity, ethical farming, and scientific practices — so the milk on your table
              tastes like the milk on the farm.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.06}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ t, d, i }: { t: string; d: string; i: string }) {
  return (
    <div
      data-cursor="hover"
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[var(--sage)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
      <div className="relative">
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--secondary)] text-[var(--moss)]">
          <Icon name={i} />
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight">{t}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{d}</p>
      </div>
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const map: Record<string, React.ReactNode> = {
    drop: <path d="M12 2.5c4 5 6 8.5 6 11.5a6 6 0 1 1-12 0c0-3 2-6.5 6-11.5Z" />,
    shield: <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />,
    heart: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />,
    flask: <><path d="M9 3h6" /><path d="M10 3v5L5 18a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-10V3" /></>,
    truck: <><path d="M2 7h11v9H2z" /><path d="M13 10h5l3 4v2h-8" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    leaf: <path d="M21 3c-9 0-15 6-15 13 0 2 1 4 2 5 7 0 13-6 13-15V3Zm-13 18c2-6 6-10 12-12" />,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {map[name] ?? null}
    </svg>
  );
}
