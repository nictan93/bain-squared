/**
 * MiniArticleGrid — 4-column compact article cards with image,
 * category, headline, and short dek. No meta footer.
 * Matches reference image 10.
 */

export type MiniArticle = {
  category: string;
  title: string;
  dek: string;
  image: string;
  href?: string;
};

type Props = {
  heading?: string;
  articles: MiniArticle[];
};

export function MiniArticleGrid({ heading, articles }: Props) {
  return (
    <section
      className="bs-bg-canvas py-16 md:py-20"
      data-testid="mini-article-grid"
    >
      <div className="bs-container">
        {heading && (
          <h2
            className="font-display mb-10 md:mb-14"
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {articles.map((a, i) => (
            <article
              key={i}
              className="flex flex-col"
              data-testid={`mini-article-${i}`}
            >
              <a href={a.href || "#"} className="block group">
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${a.image}')` }}
                  />
                </div>
              </a>
              <div
                className="mt-5 text-[13px]"
                style={{ color: "hsl(var(--bs-ink-muted))" }}
              >
                {a.category}
              </div>
              <h3
                className="mt-2 font-display"
                style={{
                  fontSize: "18px",
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
                className="mt-3 text-[14px] leading-[1.55]"
                style={{ color: "hsl(var(--bs-ink))" }}
              >
                {a.dek}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
