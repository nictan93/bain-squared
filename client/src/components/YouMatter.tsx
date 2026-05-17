/**
 * YouMatter — image LEFT, text RIGHT with Learn more CTA.
 * Matches Thoughtworks reference image 9.
 */

type Props = {
  eyebrow?: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt?: string;
};

export function YouMatter({
  eyebrow,
  headline,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt = "",
}: Props) {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FFFFFF" }}
      data-testid="you-matter"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: image */}
          <div className="lg:col-span-6">
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
            >
              <div
                role="img"
                aria-label={imageAlt}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="lg:col-span-6">
            {eyebrow && (
              <div
                className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold mb-5"
                style={{ color: "hsl(var(--bs-forest-deep))" }}
              >
                {eyebrow}
              </div>
            )}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(30px, 3.8vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              {headline}
            </h2>
            <p
              className="mt-6 text-[16px] md:text-[18px] leading-[1.6]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {body}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 mt-8 text-[15px] font-bold border-b-2 pb-1 transition-colors"
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
              data-testid="link-you-matter"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
