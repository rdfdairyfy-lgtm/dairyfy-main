import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface Props extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();

      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);

      setPos({
        x: x * 0.25,
        y: y * 0.35,
      });
    };

    const leave = () =>
      setPos({
        x: 0,
        y: 0,
      });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold tracking-tight magnetic-btn select-none";

  const styles =
    variant === "primary"
      ? "bg-[var(--moss)] text-primary-foreground shadow-glow"
      : "glass text-foreground hover:bg-white/70";

  return (
    <motion.button
      ref={ref}
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}