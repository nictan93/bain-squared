import { ChevronRight } from "lucide-react";

/**
 * "What we have been thinking about" — 2 featured insights side-by-side.
 * Mirrors Thoughtworks image 7: large card with image, category eyebrow,
 * title, excerpt. Vertical divider between the two. "See all insights" CTA.
 * NO save/bookmark button per spec.
 */

type Insight = {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  type: string;
  image: string;
};

import { launchCards } from "@/data/launch";
const insights: Insight[] = ["R01","F03"].map(id=> {const a=launchCards.find(a=>a.id===id) || launchCards[0];return {...a,excerpt:a.dek};});

export function FeaturedInsights() {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="featured-insights"
    >
      <div className="bs-container">
        <div className="max-w-[1000px] text-center mx-auto">
          <h2
            className="font-display"
            style={{
              fontSize: "var(--bs-type-section)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
          >
            What we have been thinking about
          </h2>
          <p
            className="mt-6 mx-auto text-[17px] md:text-[18px] leading-[1.55]"
            style={{ color: "hsl(var(--bs-ink-muted))", maxWidth: "780px" }}
          >
            Perspectives and practical methods to help you assess a business
            decision, understand the tradeoffs and plan the work ahead.
          </p>
        </div>

        {/* Two-up grid with vertical divider */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative"
        >
          {/* Vertical divider only on md+ */}
          <div
            className="hidden md:block absolute top-0 bottom-12 left-1/2 -translate-x-1/2 w-px"
            style={{ backgroundColor: "hsl(var(--bs-hairline))" }}
            aria-hidden="true"
          />

          {insights.map((ins, i) => (
            <a
              key={ins.title}
              href={ins.href}
              className={`block group ${i === 0 ? "md:pr-10" : "md:pl-10"}`}
              data-testid={`featured-insight-${i}`}
            >
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${ins.image}')` }}
                />
              </div>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <span
                  className="text-[13px] font-semibold tracking-[0.08em] uppercase"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  {ins.category}
                </span>
                <span
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase"
                  style={{
                    backgroundColor: "#E6EFEC",
                    color: "hsl(var(--bs-forest-deep))",
                  }}
                >
                  {ins.type}
                </span>
              </div>
              <h3
                className="mt-3 text-[24px] md:text-[28px] font-bold leading-[1.2] group-hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
                style={{ color: "hsl(var(--bs-ink))" , fontSize: "var(--bs-type-card)", lineHeight: 1.2, fontFamily: "Bitter, Georgia, serif"}}
              >
                {ins.title}
              </h3>
              <p
                className="mt-4 text-[16px] leading-[1.55]"
                style={{ color: "hsl(var(--bs-ink)) " }}
              >
                {ins.excerpt}
              </p>
            </a>
          ))}
        </div>

        {/* See all insights */}
        <div className="mt-16 flex justify-center">
          <a
            href="/insights"
            className="inline-flex items-center gap-2 px-10 py-4 text-[13px] font-bold tracking-[0.08em] uppercase border transition-colors"
            style={{
              borderColor: "hsl(var(--bs-forest-deep))",
              color: "hsl(var(--bs-forest-deep))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "hsl(var(--bs-forest-deep))";
              e.currentTarget.style.color = "hsl(var(--bs-canvas))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "hsl(var(--bs-forest-deep))";
            }}
            data-testid="link-see-all-insights"
          >
            See all insights
            <ChevronRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
