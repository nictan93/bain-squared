/**
 * RecommendedSidebar — featured article on the left, numbered
 * "Recommended" list on the right (5 items, each with category
 * eyebrow, title, type meta). Matches reference image 16.
 */

export type FeaturedHero = {
  category: string;
  title: string;
  dek: string;
  type: string;
  date: string;
  image: string;
  href?: string;
};

export type RecommendedItem = {
  category: string;
  title: string;
  type: string;
  href?: string;
};

type Props = {
  featured: FeaturedHero;
  recommended: RecommendedItem[];
};

export function RecommendedSidebar({ featured, recommended }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="recommended-sidebar"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: featured hero */}
          <article className="lg:col-span-8" data-testid="rec-featured">
            <a href={featured.href || "#"} className="block group">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${featured.image}')` }}
                />
              </div>
            </a>
            <div
              className="mt-6 text-[14px] font-bold"
              style={{ color: "hsl(var(--bs-forest-deep))" }}
            >
              {featured.category}
            </div>
            <h2
              className="mt-3 font-display"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              <a
                href={featured.href || "#"}
                className="transition-colors"
                style={{ color: "hsl(var(--bs-ink))" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "hsl(var(--bs-forest-deep))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "hsl(var(--bs-ink))";
                }}
              >
                {featured.title}
              </a>
            </h2>
            <p
              className="mt-5 text-[16px] md:text-[17px] leading-[1.6]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {featured.dek}
            </p>
            <div
              className="mt-8 flex items-center"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              <div className="text-[13px] flex items-center gap-3">
                <span>{featured.type}</span>
                <span aria-hidden>•</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </article>

          {/* RIGHT: recommended list */}
          <aside
            className="lg:col-span-4 lg:pl-8 lg:border-l"
            style={{ borderColor: "hsl(var(--bs-hairline))" }}
            data-testid="rec-aside"
          >
            <div
              className="pb-4 border-b-2 mb-2"
              style={{ borderColor: "hsl(var(--bs-forest-deep))" }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.005em",
                  color: "hsl(var(--bs-ink))",
                }}
              >
                Recommended
              </h3>
            </div>
            <ol>
              {recommended.map((r, i) => (
                <li
                  key={i}
                  className="py-5 border-b"
                  style={{ borderColor: "hsl(var(--bs-hairline))" }}
                  data-testid={`rec-item-${i}`}
                >
                  <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
                    <div
                      className="font-display text-right pr-1"
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        color: "hsl(var(--bs-ink))",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div
                        className="text-[13px] font-bold mb-1"
                        style={{ color: "hsl(var(--bs-forest-deep))" }}
                      >
                        {r.category}
                      </div>
                      <a
                        href={r.href || "#"}
                        className="block font-display transition-colors"
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          color: "hsl(var(--bs-ink))",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color =
                            "hsl(var(--bs-forest-deep))";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "hsl(var(--bs-ink))";
                        }}
                      >
                        {r.title}
                      </a>
                      <div
                        className="mt-2 text-[13px]"
                        style={{ color: "hsl(var(--bs-ink-muted))" }}
                      >
                        {r.type}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
