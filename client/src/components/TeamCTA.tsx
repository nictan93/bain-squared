type Props = {
  /** Big display headline (3 lines max, left aligned in card). */
  headline: string;
  /** Lead paragraph under the headline. */
  body: string;
  /** CTA button label. */
  ctaLabel: string;
  /** CTA target (mailto or hash route). */
  ctaHref: string;
};

/**
 * TeamCTA — closing band for capability pages.
 *
 * Forest-deep band with a centred multi-line headline, lead, and a single
 * white-outline CTA. Used as the FINAL CTA on AI, Finance, and Valuation
 * capability pages so each one ends with a hand-off to the right operator
 * partner: "Talk to our AI team", "Speak with a Bain Squared CFO", etc.
 */
export function TeamCTA({ headline, body, ctaLabel, ctaHref }: Props) {
  return (
    <section
      className="bs-section bs-bg-forest-deep"
      data-testid="team-cta"
    >
      <div className="bs-container">
        <div className="max-w-[880px] mx-auto text-center">
          <h2
            className="bs-h1-display mb-6"
            style={{ color: "hsl(var(--bs-canvas))" }}
          >
            {headline}
          </h2>
          <p
            className="bs-lead mb-10"
            style={{ color: "hsl(var(--bs-forest-accent))" }}
          >
            {body}
          </p>
          <a
            href={ctaHref}
            className="bs-btn bs-btn-inverse"
            data-testid="team-cta-button"
          >
            {ctaLabel}
            <span className="bs-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
