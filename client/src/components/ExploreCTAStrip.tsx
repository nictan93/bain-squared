type Props = {
  /** Headline on the left, white text on forest deep band. */
  headline: string;
  /** CTA button label (white button, forest text). */
  ctaLabel: string;
  /** CTA target, should be a #/route hash href or mailto. */
  ctaHref: string;
};

/**
 * ExploreCTAStrip — Image 6 bottom strip in the v5 spec.
 *
 * Forest-deep band with a display headline on the left and a white CTA button
 * on the right. Used as the final flourish of the Squared Method section so
 * the page hands off cleanly to the closing AI/CFO team CTA.
 */
export function ExploreCTAStrip({ headline, ctaLabel, ctaHref }: Props) {
  return (
    <section
      className="bs-bg-forest-deep"
      style={{ paddingTop: "44px", paddingBottom: "44px" }}
      data-testid="explore-cta-strip"
    >
      <div className="bs-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "hsl(var(--bs-canvas))",
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </h3>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 font-semibold transition-colors hover:bg-[#e8e6e2]"
            style={{
              backgroundColor: "#fff",
              color: "hsl(var(--bs-forest-deep))",
              borderRadius: 0,
              fontSize: "15px",
              minWidth: "200px",
            }}
            data-testid="explore-cta-button"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
