import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    format: "Perspective",
    date: "15 May 2026",
    title: "Startup Exits in Southeast Asia Aren't Really Exits.",
    excerpt:
      "Most so-called exits in this region are share swaps with a new cap table. Here's what real liquidity actually looks like, and why founders should care.",
    href: "#insights",
  },
  {
    format: "Perspective",
    date: "08 May 2026",
    title: "Runway Is Not a Strategy: Finance Transformation Post-Series B.",
    excerpt:
      "Cash buys time. It does not buy decisions. What a real Series B finance function looks like, and why most founders rebuild theirs late.",
    href: "#insights",
  },
  {
    format: "Perspective",
    date: "22 Apr 2026",
    title: "You Don't Need an AI Strategy. You Need an AI Execution Plan.",
    excerpt:
      "Strategy decks are not the bottleneck. Pilots that never reach production are. Here is what an executable AI plan actually looks like.",
    href: "#insights",
  },
];

export function InsightsGrid() {
  return (
    <section
      id="insights"
      className="bs-section bs-bg-surface"
      data-testid="section-insights"
    >
      <div className="bs-container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <span className="bs-eyebrow">Insights</span>
            <h2 className="bs-h1-display" data-testid="text-insights-headline">
              What we've been
              <br />
              thinking about.
            </h2>
          </div>
          <a
            href="#insights"
            className="bs-card-link inline-flex items-center gap-2 self-start md:self-end shrink-0"
            data-testid="link-see-all-insights"
          >
            See all insights
            <span className="bs-arrow" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="bs-insight-card flex flex-col"
              data-testid={`card-insight-${i + 1}`}
            >
              {/* Colored top accent bar — cycles per index */}
              <div
                className="h-1 w-full"
                style={{
                  backgroundColor: [
                    "hsl(var(--bs-forest-deep))",
                    "hsl(var(--bs-forest-accent))",
                    "hsl(var(--bs-ink))",
                  ][i % 3],
                }}
              />
              <div className="bs-insight-card__content flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bs-format-label">{item.format}</span>
                  <span className="text-[13px] text-[hsl(var(--bs-ink-muted))]">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.2] mb-4 text-[hsl(var(--bs-ink))]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">
                  {item.excerpt}
                </p>
              </div>
              <div className="bs-insight-card__cta">
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[hsl(var(--bs-forest-deep))]">
                  Read perspective
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
