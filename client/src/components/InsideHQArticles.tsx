/**
 * InsideHQArticles — "What we have been thinking about" / "Inside Bain Squared HQ".
 * Two article cards side-by-side + See all insights CTA.
 * Matches Thoughtworks reference image 10.
 */

type Article = {
  eyebrow?: string;
  title: string;
  href: string;
  image: string;
};

type Props = {
  heading: string;
  articles: [Article, Article];
  seeAllLabel?: string;
  seeAllHref?: string;
};

export function InsideHQArticles({
  heading,
  articles,
  seeAllLabel = "See all insights",
  seeAllHref = "#/contact",
}: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="inside-hq-articles"
    >
      <div className="bs-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
              maxWidth: "720px",
            }}
          >
            {heading}
          </h2>
          <a
            href={seeAllHref}
            className="inline-flex items-center gap-2 text-[15px] font-bold border-b-2 pb-1 transition-colors self-start md:self-auto"
            style={{
              color: "hsl(var(--bs-forest-deep))",
              borderColor: "hsl(var(--bs-forest-deep))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "hsl(var(--bs-forest-deep-hover))";
              e.currentTarget.style.borderColor =
                "hsl(var(--bs-forest-deep-hover))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "hsl(var(--bs-forest-deep))";
              e.currentTarget.style.borderColor = "hsl(var(--bs-forest-deep))";
            }}
            data-testid="link-see-all-insights"
          >
            {seeAllLabel}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              className="block group"
              data-testid={`insight-card-${i}`}
            >
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 10" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
              </div>
              {a.eyebrow && (
                <div
                  className="mt-6 text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  {a.eyebrow}
                </div>
              )}
              <h3
                className="mt-3 font-display"
                style={{
                  fontSize: "clamp(20px, 1.8vw, 26px)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "hsl(var(--bs-ink))",
                }}
              >
                {a.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
