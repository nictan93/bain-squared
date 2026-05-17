interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Visual height of the lockup in px. Drives mark + type proportions. */
  size?: number;
}

/**
 * Bain Squared logo lockup.
 * Two overlapping squares: front mark in Forest Deep, back mark in Forest Accent
 * (offset up-and-right). Wordmark in Inter, weight 800, tight tracking.
 * Vector reproduction of the supplied brand file.
 */
export function Logo({ className = "", showWordmark = true, size = 36 }: LogoProps) {
  // Mark proportions taken from the supplied logo file:
  // front square is dominant, back square offset by ~50% of its width up-and-right.
  const markSize = size;
  const offset = markSize * 0.32;
  const totalW = markSize + offset;
  const totalH = markSize + offset;

  return (
    <a
      href="/"
      className={`inline-flex items-center gap-3 group ${className}`}
      aria-label="Bain Squared — home"
      data-testid="link-logo"
    >
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Back square — Forest Accent, offset up and right */}
        <rect
          x={offset}
          y={0}
          width={markSize}
          height={markSize}
          fill="#BBD3CF"
        />
        {/* Front square — Forest Deep */}
        <rect
          x={0}
          y={offset}
          width={markSize}
          height={markSize}
          fill="#174C3C"
        />
      </svg>

      {showWordmark && (
        <span
          className="font-sans whitespace-nowrap"
          style={{
            fontWeight: 800,
            fontSize: `${Math.round(size * 0.78)}px`,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#1A1A1A",
            fontFamily: "var(--font-sans)",
          }}
        >
          Bain Squared
        </span>
      )}
    </a>
  );
}
