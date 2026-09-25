interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Height of the supplied brand artwork, preserving its aspect ratio. */
  size?: number;
}

/** Supplied Marketing logo set, exported 9 September 2026. */
export function Logo({ className = "", showWordmark = true, size = 44 }: LogoProps) {
  return (
    <a
      href="#/"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="Bain Squared home"
      data-testid="link-logo"
    >
      <img
        src={showWordmark ? "/brand/bain-squared-lockup.png" : "/brand/bain-squared-mark.png"}
        alt="Bain Squared"
        width={showWordmark ? 1557 : 1228}
        height={showWordmark ? 380 : 1133}
        style={{ height: size, width: "auto" }}
        className="block max-w-full object-contain"
        decoding="async"
      />
    </a>
  );
}
