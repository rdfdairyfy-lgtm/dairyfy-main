import { useState } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function Farms() {
  const [sent, setSent] = useState(false);
  return (
    <section id="farms" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, oklch(0.88 0.1 140 / 0.45), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, oklch(0.95 0.06 100 / 0.6), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--moss)] uppercase">
              — Farm Partners
            </span>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Grow with <span className="text-gradient-green">Dairyfy.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              We partner with small ethical dairy farms across the country.
              Predictable income, full training, premium prices for premium milk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4">
              {[
                "Guaranteed monthly off‑take contracts",
                "Free vet & nutrition support",
                "Premium per‑litre rates, paid weekly",
                "Cold chain pickup at your gate",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-[var(--moss)] text-primary-foreground text-xs">
                    ✓
                  </span>
                  <span className="text-foreground font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass rounded-[2rem] p-8 md:p-10 shadow-card"
          >
            <h3 className="font-display text-2xl font-bold">Apply as a farm partner</h3>
            <p className="text-sm text-muted-foreground mt-1">We review applications weekly.</p>

            <div className="mt-8 space-y-5">
              <Field label="Farm name" placeholder="Greenpastures Dairy" />
              <Field label="Your name" placeholder="Anika Sharma" />
              <Field label="Phone or email" placeholder="hello@yourfarm.com" />
              <Field label="Herd size" placeholder="e.g. 24 cows" />
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  About your farm
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your animals and practices"
                  className="mt-2 w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--moss)] focus:ring-2 focus:ring-[var(--sage)] transition"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground max-w-[60%]">
                By submitting you agree to our partnership terms. We'll never share your info.
              </p>
              <MagneticButton type="submit">
                {sent ? "Received ✓" : "Apply now"}
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--moss)] focus:ring-2 focus:ring-[var(--sage)] transition"
      />
    </div>
  );
}
