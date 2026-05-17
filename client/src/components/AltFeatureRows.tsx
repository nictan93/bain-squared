import { ArrowRight } from "lucide-react";

/**
 * AltFeatureRows — 2-up alternating featured cards.
 * Row 1: image left + text right; row 2: text left + image right.
 * Matches reference image 12.
 */

export type AltFeatureItem = {
  title: string;
  date: string;
  dek: string;
  ctaLabel: string;
  ctaHref?: string;
  image: string;
};

type Props = {
  items: [AltFeatureItem, AltFeatureItem];
};

export function AltFeatureRows({ items }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="alt-feature-rows"
    >
      <div className="bs-container space-y-20 md:space-y-28">
        {items.map((item, i) => {
          const flip = i === 1; // second row: text left, image right
          return (
            <article
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              data-testid={`alt-row-${i}`}
            >
              <a
                href={item.ctaHref || "#"}
                className={`lg:col-span-7 block group ${
                  flip ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                </div>
              </a>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-6 text-[15px] md:text-[16px] leading-[1.6]"
                  style={{ color: "hsl(var(--bs-ink))" }}
                >
                  <em style={{ fontStyle: "italic", fontWeight: 500 }}>
                    {`${item.date} `}
                  </em>
                  <span style={{ color: "hsl(var(--bs-ink-muted))" }}>
                    —
                  </span>{" "}
                  {item.dek}
                </p>
                <a
                  href={item.ctaHref || "#"}
                  className="inline-flex items-center gap-2 mt-8 text-[15px] font-bold transition-colors"
                  style={{ color: "hsl(var(--bs-ink))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "hsl(var(--bs-forest-deep-hover))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "hsl(var(--bs-ink))";
                  }}
                  data-testid={`alt-cta-${i}`}
                >
                  {item.ctaLabel}
                  <ArrowRight
                    size={18}
                    strokeWidth={2.25}
                    style={{ color: "hsl(var(--bs-forest-deep))" }}
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
