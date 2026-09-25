type Card = { title: string; body: string };
type Props = { subheading?: string; cards: Card[] };

/** Open editorial rows keep the focus on the business problem. */
export function GrowthPartnerRecommender({ subheading = "Start with the work that is slowing your team down.", cards }: Props) {
  return (
    <section className="bs-bg-canvas py-20 md:py-28" data-testid="growth-partner-recommender">
      <div className="bs-container grid grid-cols-1 lg:grid-cols-[4fr_7fr] gap-10 lg:gap-20">
        <div>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.15] font-bold max-w-[390px]" style={{ fontSize: "var(--bs-type-section)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>Where should we start?</h2>
          <p className="mt-6 text-[17px] leading-[1.6] max-w-[340px]">{subheading}</p>
        </div>
        <div className="border-t-2 border-[hsl(var(--bs-forest-deep))]">
          {cards.map((card, i) => (
            <div key={card.title} className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 py-7 border-b border-[hsl(var(--bs-hairline))]" data-testid={`recommender-card-${i}`}>
              <h3 className="font-display text-[25px] leading-[1.2] font-bold" style={{ fontSize: "var(--bs-type-card)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>{card.title}</h3>
              <p className="text-[16px] leading-[1.6]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
