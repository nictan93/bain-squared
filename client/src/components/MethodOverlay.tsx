type Props = {
  /** Full-bleed background image. */
  image: string;
  /** Alt text for the background image. */
  imageAlt: string;
  /** Multi-line headline. Each string is rendered as its own line. */
  headlineLines: string[];
  /** Body copy printed under the headline inside the white card. */
  body: string;
  /** Link label inside the white card (e.g. "Learn more"). */
  linkLabel: string;
  /** Link target. Should be a #/route hash href. */
  linkHref: string;
};

/**
 * MethodOverlay — Image 4 in the v5 spec.
 *
 * Full-bleed dark photo behind a white content card pinned to the LEFT side.
 * Card holds a stacked headline, lead paragraph, and a Learn more chevron
 * link. Zero radius across the brand, so the card is sharp-edged.
 */
export function MethodOverlay({
  image,
  imageAlt,
  headlineLines,
  body,
  linkLabel,
  linkHref,
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "620px" }}
      data-testid="method-overlay"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Subtle dim for readability — image stays dominant */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.10)" }}
        />
      </div>

      {/* White card pinned left */}
      <div
        className="relative z-10 bs-container"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        <div
          className="bg-white p-10 md:p-14"
          style={{
            maxWidth: "560px",
            borderRadius: 0,
            boxShadow: "0 18px 40px -24px rgba(0,0,0,0.18)",
          }}
        >
          <h2
            className="font-display mb-5"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "hsl(var(--bs-ink))",
              letterSpacing: "-0.01em",
            }}
            data-testid="method-overlay-headline"
          >
            {headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p
            className="text-[16px] md:text-[17px] mb-8"
            style={{
              color: "hsl(var(--bs-ink))",
              lineHeight: 1.6,
            }}
          >
            {body}
          </p>
          <a
            href={linkHref}
            className="inline-flex items-center gap-2 font-medium pb-1 transition-opacity hover:opacity-70"
            style={{
              color: "hsl(var(--bs-ink))",
              borderBottom: "1.5px solid hsl(var(--bs-ink))",
              fontSize: "15px",
            }}
            data-testid="method-overlay-link"
          >
            {linkLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
