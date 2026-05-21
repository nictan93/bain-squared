/**
 * WhitepaperPanel — whitepaper feature on a soft-gray panel.
 * Image left + headline/body/CTA right. Matches reference image 3.
 *
 * Distinct from WhitepaperFeature (which sits on canvas) — this one
 * is the panel variant used on the Insights overview page.
 */

type Props = {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt?: string;
};

export function WhitepaperPanel({
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
      style={{ backgroundColor: "hsl(var(--bs-forest-soft))" }}
      data-testid="whitepaper-panel"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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

          <div className="lg:col-span-6">
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
              {headline}
            </h2>
            <p
              className="mt-6 text-[16px] md:text-[17px] leading-[1.6]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {body}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center mt-10 px-8 py-4 text-[15px] font-bold transition-colors border whitespace-nowrap"
              style={{
                backgroundColor: "hsl(var(--bs-forest-deep))",
                color: "white",
                borderColor: "hsl(var(--bs-forest-deep))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "hsl(var(--bs-forest-deep-hover))";
                e.currentTarget.style.borderColor =
                  "hsl(var(--bs-forest-deep-hover))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "hsl(var(--bs-forest-deep))";
                e.currentTarget.style.borderColor =
                  "hsl(var(--bs-forest-deep))";
              }}
              data-testid="link-whitepaper-panel-cta"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
