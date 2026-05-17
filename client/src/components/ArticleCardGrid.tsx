/**
 * ArticleCardGrid — 3-column article cards with image, category,
 * headline, dek, and footer meta (type + date).
 * Matches reference image 7.
 */

export type ArticleCard = {
  category: string;
  title: string;
  dek: string;
  type: string;
  date: string;
  image: string;
  href?: string;
};

type Props = {
  heading?: string;
  articles: ArticleCard[];
};

export function ArticleCardGrid({ heading, articles }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="article-card-grid"
    >
      <div className="bs-container">
        {heading && (
          <h2
            className="font-display mb-12 md:mb-16"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {articles.map((a, i) => (
            <article
              key={i}
              className="flex flex-col"
              data-testid={`article-card-${i}`}
            >
              <a
                href={a.href || "#"}
                className="block group"
                tabIndex={a.href ? 0 : -1}
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
              </a>
              <div
                className="mt-5 text-[14px] font-bold"
                style={{ color: "hsl(var(--bs-ink-muted))" }}
              >
                {a.category}
              </div>
              <h3
                className="mt-3 font-display"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.005em",
                  color: "hsl(var(--bs-ink))",
                }}
              >
                <a
                  href={a.href || "#"}
                  className="transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "hsl(var(--bs-forest-deep))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "hsl(var(--bs-ink))";
                  }}
                  style={{ color: "hsl(var(--bs-ink))" }}
                >
                  {a.title}
                </a>
              </h3>
              <p
                className="mt-4 text-[15px] leading-[1.55] flex-1"
                style={{ color: "hsl(var(--bs-ink))" }}
              >
                {a.dek}
              </p>
              <div
                className="mt-6 pt-5 border-t flex items-center"
                style={{ borderColor: "hsl(var(--bs-hairline))" }}
              >
                <div
                  className="text-[13px] flex items-center gap-3"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  <span>{a.type}</span>
                  <span aria-hidden>•</span>
                  <span>{a.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
