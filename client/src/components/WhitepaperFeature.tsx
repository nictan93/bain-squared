/**
 * WhitepaperFeature — image-left + text-right + CTA button.
 * Matches Thoughtworks reference image 6 (whitepaper / report feature).
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

export function WhitepaperFeature({
  eyebrow = "Whitepaper",
  headline,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt = "",
}: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="whitepaper-feature"
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

          {/* RIGHT: text + button */}
          <div className="lg:col-span-6">
            <div
              className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold mb-5"
              style={{ color: "hsl(var(--bs-forest-deep))" }}
            >
              {eyebrow}
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
                backgroundColor: "transparent",
                color: "hsl(var(--bs-ink))",
                borderColor: "hsl(var(--bs-ink))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(var(--bs-ink))";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "hsl(var(--bs-ink))";
              }}
              data-testid="link-whitepaper-cta"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
