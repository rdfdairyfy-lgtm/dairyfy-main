import { useEffect, useRef } from "react";

/**
 * Mouse-reactive glowing blobs that follow cursor with parallax.
 * Pure CSS transforms; very cheap.
 */
export function GlowBlobs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 80;
      ty = (e.clientY / window.innerHeight - 0.5) * 80;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (ref.current) {
        ref.current.style.setProperty("--mx", `${cx}px`);
        ref.current.style.setProperty("--my", `${cy}px`);
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ ["--mx" as never]: "0px", ["--my" as never]: "0px" }}
    >
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-60 animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.13 140 / 0.55), transparent 70%)",
          transform: "translate3d(calc(var(--mx) * 1), calc(var(--my) * 1), 0)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, oklch(0.86 0.08 100 / 0.6), transparent 70%)",
          transform: "translate3d(calc(var(--mx) * -1.2), calc(var(--my) * -0.8), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.15 142 / 0.4), transparent 70%)",
          transform: "translate3d(calc(var(--mx) * 0.6), calc(var(--my) * -1.4), 0)",
        }}
      />
    </div>
  );
}
