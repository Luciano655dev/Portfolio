"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Parallax({
  children,
  speed = 0.12,
  maxOffset = 48,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  maxOffset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current!;
    let applied = 0;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      // rect.top includes the current translate; subtract it for a stable base
      const center = rect.top - applied + rect.height / 2;
      const raw = (center - window.innerHeight / 2) * speed;
      applied = Math.max(-maxOffset, Math.min(maxOffset, raw));
      el.style.transform = `translateY(${applied.toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, maxOffset]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
