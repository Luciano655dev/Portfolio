import Image from "next/image";

/**
 * Square logo tile. Projects without a logo file fall back to a monogram
 * so every project still reads as a branded tile.
 */
export default function ProjectLogo({
  name,
  src,
  size = 56,
  className = "",
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const box = { width: size, height: size };

  if (!src) {
    return (
      <span
        style={box}
        aria-hidden
        className={`flex shrink-0 items-center justify-center rounded-xl border border-line bg-surface font-mono text-lg font-medium text-accent ${className}`}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      style={box}
      className={`shrink-0 rounded-xl border border-line object-cover ${className}`}
    />
  );
}
