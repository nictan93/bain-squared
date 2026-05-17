type Card = {
  /** Card heading, e.g. "Static boxes" */
  title: string;
  /** Body copy on the card. */
  body: string;
};

type Props = {
  /** Optional kicker eyebrow above the headline. */
  eyebrow?: string;
  /** Subheading printed under the headline ("Recommended for you" by default). */
  subheading?: string;
  /** 3 pain-point cards. */
  cards: Card[];
};

/**
 * GrowthPartnerRecommender — Image 5 in the v5 spec.
 *
 * Locked to a single state per spec ("You have selected Bain Squared as your
 * growth partner.") with three static cards that name the operator pains we
 * remove. Reset and Read more are deliberately stripped.
 */
export function GrowthPartnerRecommender({
  eyebrow = "Your match",
  subheading = "Recommended for you",
  cards,
}: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="growth-partner-recommender"
    >
      <div className="bs-container">
        {eyebrow && (
          <div
            className="text-[13px] uppercase tracking-[0.18em] font-medium mb-4"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            {eyebrow}
          </div>
        )}
        <h2
          className="font-display mb-16"
          style={{
            fontSize: "clamp(28px, 3.4vw, 44px)",
            lineHeight: 1.2,
            fontWeight: 700,
            color: "hsl(var(--bs-ink))",
            letterSpacing: "-0.01em",
            maxWidth: "1000px",
          }}
        >
          You have selected{" "}
          <span style={{ fontWeight: 800 }}>Bain Squared</span> as your{" "}
          <span style={{ fontWeight: 800 }}>growth partner</span>.
        </h2>

        <div className="mb-6">
          <div
            className="text-[15px] font-semibold mb-3"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {subheading}
          </div>
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "hsl(var(--bs-forest-deep))",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-8 md:p-9"
              style={{
                backgroundColor: "#fff",
                border: "1px solid hsl(var(--bs-hairline))",
                borderRadius: 0,
                minHeight: "260px",
              }}
              data-testid={`recommender-card-${i}`}
            >
              <h3
                className="font-display mb-4"
                style={{
                  fontSize: "22px",
                  lineHeight: 1.25,
                  fontWeight: 700,
                  color: "hsl(var(--bs-ink))",
                  letterSpacing: "-0.005em",
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[15px]"
                style={{
                  color: "hsl(var(--bs-ink))",
                  lineHeight: 1.6,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
