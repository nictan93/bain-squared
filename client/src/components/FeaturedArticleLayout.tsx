/**
 * FeaturedArticleLayout — large featured article (image-left + text-right)
 * with two smaller article rows below (image-left + text-right each).
 * Matches reference image 9.
 */

export type FeaturedArticle = {
  category: string;
  title: string;
  date: string;
  dek: string;
  image: string;
  href?: string;
};

type Props = {
  lead: FeaturedArticle;
  secondary: [FeaturedArticle, FeaturedArticle];
};

export function FeaturedArticleLayout({ lead, secondary }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="featured-article-layout"
    >
      <div className="bs-container">
        {/* LEAD */}
        <article
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          data-testid="featured-lead"
        >
          <a
            href={lead.href || "#"}
            className="lg:col-span-7 block group"
          >
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "16 / 10" }}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url('${lead.image}')` }}
              />
            </div>
          </a>
          <div className="lg:col-span-5">
            <div
              className="text-[13px] md:text-[14px] mb-4"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {lead.category}
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              <a
                href={lead.href || "#"}
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
                {lead.title}
              </a>
            </h2>
            <p
              className="mt-6 text-[15px] md:text-[16px] leading-[1.6]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              <em
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >{`${lead.date} `}</em>
              <span style={{ color: "hsl(var(--bs-ink-muted))" }}>—</span>{" "}
              {lead.dek}
            </p>
          </div>
        </article>

        {/* SECONDARY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-16 md:mt-20">
          {secondary.map((a, i) => (
            <article
              key={i}
              className="grid grid-cols-12 gap-6"
              data-testid={`featured-secondary-${i}`}
            >
              <a
                href={a.href || "#"}
                className="col-span-5 block group"
              >
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
              <div className="col-span-7">
                <div
                  className="text-[13px] mb-2"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  {a.category}
                </div>
                <h3
                  className="font-display"
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
                  className="mt-3 text-[14px] leading-[1.55]"
                  style={{ color: "hsl(var(--bs-ink))" }}
                >
                  <em
                    style={{ fontStyle: "italic", fontWeight: 500 }}
                  >{`${a.date} `}</em>
                  <span style={{ color: "hsl(var(--bs-ink-muted))" }}>
                    —
                  </span>{" "}
                  {a.dek}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
