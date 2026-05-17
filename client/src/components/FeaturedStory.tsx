export function FeaturedStory() {
  return (
    <section
      id="client-stories"
      className="bs-section bs-bg-canvas"
      data-testid="section-featured-story"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <span className="bs-eyebrow">Client story</span>
            <h2 className="bs-h1-display mb-6" data-testid="text-story-headline">
              A skincare brand quantified its most valuable asset: brand.
            </h2>
            <p className="bs-lead mb-6 text-[hsl(var(--bs-ink-muted))]">
              The founders knew their brand was the engine. They could see it in customer
              behavior, in pricing power, in retention. What they couldn't do was put a
              defensible number on it, in front of a strategic acquirer.
            </p>
            <p className="text-[16px] leading-[1.7] text-[hsl(var(--bs-ink-muted))] mb-8">
              We led the intangible asset valuation, isolated brand from goodwill, modeled
              royalty relief and excess earnings, and delivered a number the audit
              committee and the acquirer both signed off on.
            </p>

            <blockquote className="bs-quote" data-testid="quote-story">
              They translated something we always knew into a number we could finally
              defend.
            </blockquote>
            <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--bs-ink-muted))] mb-10">
              Founder, skincare brand
            </p>

            <a
              href="#client-stories"
              className="bs-card-link inline-flex items-center gap-2"
              data-testid="link-read-full-story"
            >
              Read the full story
              <span className="bs-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Visual column — Deep Forest tile with editorial overlay */}
          <div className="order-1 lg:order-2">
            <div
              className="relative w-full aspect-[4/5] flex items-end justify-start p-12 overflow-hidden"
              style={{ backgroundColor: "hsl(var(--bs-forest-deep))" }}
            >
              {/* Subtle texture pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(187, 211, 207, 0.3) 8px, rgba(187, 211, 207, 0.3) 9px)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[hsl(var(--bs-forest-accent))] mb-4 block">
                  Engagement
                </span>
                <p className="font-display text-[28px] md:text-[36px] leading-[1.15] text-[hsl(var(--bs-canvas))] font-bold mb-4">
                  Brand valuation for a Series B exit conversation.
                </p>
                <p className="text-[14px] text-[hsl(var(--bs-forest-accent))]">
                  Royalty relief · Excess earnings · Audit-ready
                </p>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-8 right-8 text-[hsl(var(--bs-forest-accent))] font-display text-[14px] tracking-[0.14em] uppercase"
                aria-hidden="true"
              >
                01 / Valuation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
