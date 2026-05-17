type Block = {
  /** Eyebrow above the headline (e.g. "Intangible assets"). */
  eyebrow: string;
  /** Block headline. */
  title: string;
  /** Body copy. */
  body: string;
  /** Optional list of tags rendered as small chips below the body. */
  tags?: string[];
};

type Props = {
  /** Two blocks: typically (Intangible assets, ESOP valuations). */
  blocks: [Block, Block];
};

/**
 * IntangiblesSplit — Valuation-page specific section.
 *
 * Two-column split where each side gets an eyebrow, headline, body, and an
 * optional row of "what we value" chips. The reference is the same layout
 * grammar as AltFeatureRows but tuned for value-driver text instead of
 * articles + images.
 */
export function IntangiblesSplit({ blocks }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="intangibles-split"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="md:pr-6"
              style={{
                borderLeft:
                  i === 1
                    ? "1px solid hsl(var(--bs-hairline))"
                    : "none",
                paddingLeft: i === 1 ? "2.5rem" : 0,
              }}
              data-testid={`intangibles-block-${i}`}
            >
              <div
                className="text-[13px] uppercase tracking-[0.18em] font-medium mb-5"
                style={{ color: "hsl(var(--bs-forest-deep))" }}
              >
                {b.eyebrow}
              </div>
              <h3
                className="font-display mb-5"
                style={{
                  fontSize: "clamp(24px, 2.4vw, 32px)",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "hsl(var(--bs-ink))",
                  letterSpacing: "-0.005em",
                }}
              >
                {b.title}
              </h3>
              <p
                className="text-[16px] md:text-[17px] mb-6"
                style={{
                  color: "hsl(var(--bs-ink))",
                  lineHeight: 1.6,
                }}
              >
                {b.body}
              </p>
              {b.tags && b.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {b.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-3 py-1 text-[13px] font-medium"
                      style={{
                        backgroundColor: "#fff",
                        color: "hsl(var(--bs-forest-deep))",
                        border: "1px solid hsl(var(--bs-forest-deep))",
                        borderRadius: 0,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
