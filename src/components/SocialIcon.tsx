/**
 * Inline brand/contact glyphs. Kept as local SVG (no icon package, no network
 * request) and drawn in currentColor so they inherit link hover states.
 */
const PATHS = {
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  x: (
    <path d="M17.53 3h3.05l-6.67 7.62L21.75 21h-6.13l-4.8-6.28L5.32 21H2.27l7.13-8.15L2.25 3h6.29l4.34 5.74L17.53 3Zm-1.07 16.17h1.69L7.62 4.74H5.8l10.66 14.43Z" />
  ),
  discord: (
    <path d="M19.3 5.34A16.5 16.5 0 0 0 15.2 4l-.2.42a15 15 0 0 1 3.65 1.15 12.4 12.4 0 0 0-10.4-.4c-.4.17-.8.36-1.19.56A15 15 0 0 1 11 4.4L10.8 4a16.5 16.5 0 0 0-4.1 1.34C4.07 9.3 3.35 13.14 3.71 16.93a16.6 16.6 0 0 0 5.03 2.53l.9-1.45a10.8 10.8 0 0 1-1.7-.81l.42-.31a11.9 11.9 0 0 0 10.15 0l.42.31c-.54.32-1.11.6-1.7.81l.9 1.45a16.6 16.6 0 0 0 5.03-2.53c.42-4.38-.72-8.19-3.86-11.59ZM9.35 14.6c-.98 0-1.79-.9-1.79-2s.79-2 1.79-2 1.8.9 1.79 2c0 1.1-.8 2-1.79 2Zm5.3 0c-.98 0-1.79-.9-1.79-2s.79-2 1.79-2 1.8.9 1.79 2c0 1.1-.79 2-1.79 2Z" />
  ),
} as const;

export type SocialIconName = keyof typeof PATHS;

/* Discord and X read as solid shapes; mail and github are stroked outlines. */
const FILLED: SocialIconName[] = ["x", "discord"];

export default function SocialIcon({
  name,
  className = "",
}: {
  name: SocialIconName;
  className?: string;
}) {
  const filled = FILLED.includes(name);

  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`size-4 shrink-0 ${className}`}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}
