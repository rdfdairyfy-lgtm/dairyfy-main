import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { GlowBlobs } from "./GlowBlobs";
import { MilkWave } from "./MilkWave";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden gradient-hero grain">
      <GlowBlobs />

      {/* Floating particles */}
      <Particles />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40 md:pt-44 md:pb-56 text-center">
        <motion.div style={{ opacity, scale }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wide text-[var(--moss)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--leaf)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--leaf)]" />
            </span>
            Coming Soon · Farm‑to‑home dairy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.04em] text-balance font-extrabold"
          >
            Pure Milk.
            <br />
            <span className="text-gradient-green">No Middlemen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-balance text-lg md:text-xl text-muted-foreground font-medium"
          >
            Fresh ethical dairy delivered directly from our farms to your home.
            No preservatives. No middlemen. Just milk, the way it was meant to be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              Reserve your bottle
              <ArrowIcon />
            </MagneticButton>
            <MagneticButton variant="ghost">Watch the story</MagneticButton>
          </motion.div>
        </motion.div>

        {/* Floating glass cards */}
        <motion.div
          style={{ y: y1 }}
          className="pointer-events-none absolute left-[4%] top-[28%] hidden md:block"
        >
          <FloatCard
            title="2°C"
            label="Cold chain delivery"
            sub="Bottled at dawn, at your door by 7AM"
          />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="pointer-events-none absolute right-[4%] top-[36%] hidden md:block"
        >
          <FloatCard
            title="100%"
            label="A2 Indigenous Cows"
            sub="Ethically raised. Hormone‑free."
          />
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="pointer-events-none absolute left-[12%] bottom-[18%] hidden lg:block"
        >
          <FloatCard title="0" label="Preservatives" sub="36‑hour shelf life. That's the point." />
        </motion.div>
      </div>

      <div className="relative -mb-1">
        <MilkWave />
      </div>
    </section>
  );
}

function FloatCard({ title, label, sub }: { title: string; label: string; sub: string }) {
  return (
    <div className="glass rounded-3xl p-5 w-[230px] text-left animate-float">
      <div className="font-display text-4xl font-bold text-[var(--moss)] leading-none">{title}</div>
      <div className="mt-2 text-sm font-semibold">{label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Particles() {
  const [dots, setDots] = useState<Array<{ x: number; y: number; d: number; s: number }>>([]);
  useEffect(() => {
    setDots(
      Array.from({ length: 22 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: Math.random() * 6,
        s: 3 + Math.random() * 6,
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[oklch(0.78_0.13_140/0.5)] animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${p.d}s`,
            animationDuration: `${8 + p.s}s`,
          }}
        />
      ))}
    </div>
  );
}
