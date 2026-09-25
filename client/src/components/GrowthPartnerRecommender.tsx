type Card = {
  /** The business problem this card addresses. */
  title: string;
  /** Body copy on the card. */
  body: string;
};

type Props = {
  /** Supporting line below the headline. */
  subheading?: string;
  /** 3 pain-point cards. */
  cards: Card[];
};

/** Three starting points for scoping an engagement. */
export function GrowthPartnerRecommender({
  subheading = "Start with the work that is slowing your team down.",
  cards,
}: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="growth-partner-recommender"
    >
      <div className="bs-container">
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
          Where should we start?
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
