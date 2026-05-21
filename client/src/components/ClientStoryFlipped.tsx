/**
 * ClientStoryFlipped — featured client story.
 * Image LEFT / Text RIGHT (flipped from the reference image 4 per spec).
 * Eyebrow → Headline → 1-line lede → CTA link.
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

export function ClientStoryFlipped({
  eyebrow = "Client story",
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
      data-testid="client-story-flipped"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: image */}
          <div className="lg:col-span-7 order-1">
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
          <div className="lg:col-span-5 order-2">
            <div
              className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-bold mb-5"
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
              data-testid="link-client-story"
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
