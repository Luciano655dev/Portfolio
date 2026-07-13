import type { ReactNode } from "react";
import Magnetic from "@/components/Magnetic";

const SIZES = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-4 text-sm",
  lg: "px-8 py-5 text-sm sm:px-10 sm:py-6 sm:text-base",
} as const;

/* Clear background, filling with accent on hover — the original hero button. */
const VARIANTS = {
  solid:
    "border border-foreground/80 text-foreground hover:border-accent hover:bg-accent hover:text-background",
  outline:
    "border border-line text-muted hover:border-accent hover:bg-accent hover:text-background",
} as const;

export default function CTA({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <Magnetic className={`inline-block ${className}`}>
      <a
        href={href}
        className={`link-reset group inline-flex items-center gap-3 font-mono font-medium uppercase tracking-widest transition-all duration-300 ${SIZES[size]} ${VARIANTS[variant]}`}
      >
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </a>
    </Magnetic>
  );
}

/**
 * Full-width invitation used to close a section. `note` is the small line
 * under the headline — keep it specific to the section it follows.
 */
export function CTABand({
  label,
  headline,
  accent,
  note,
  action,
  href,
  variant = "solid",
}: {
  label: string;
  headline: string;
  accent: string;
  note?: string;
  action: string;
  href: string;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <div className="relative overflow-hidden border border-line bg-surface/40 px-6 py-14 text-center sm:px-14 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <h3 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        {headline}{" "}
        <em className="font-serif italic font-normal text-accent">{accent}</em>
      </h3>
      {note && (
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          {note}
        </p>
      )}
      <div className="mt-10 flex justify-center">
        <CTA href={href} size="lg" variant={variant}>
          {action}
        </CTA>
      </div>
    </div>
  );
}
