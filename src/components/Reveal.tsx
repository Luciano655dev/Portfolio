"use client";

import { useEffect, useRef, type ReactNode } from "react";

const EFFECTS = {
  up: "reveal--up",
  left: "reveal--left",
  right: "reveal--right",
  scale: "reveal--scale",
  blur: "reveal--blur",
} as const;

export type RevealEffect = keyof typeof EFFECTS;

export default function Reveal({
  children,
  delay = 0,
  effect = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  effect?: RevealEffect;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${EFFECTS[effect]} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
