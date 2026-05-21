/**
 * InsightsHero — title + CTA button left, headline + body right.
 * Matches reference image 1 (Insights page hero).
 *
 * "Sign up here" CTA scrolls to the #subscribe section at page bottom.
 */

type Props = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  headline: string;
  body: string;
};

export function InsightsHero({
  title,
  ctaLabel,
  ctaHref,
  headline,
  body,
}: Props) {
  return (
    <section
      className="bs-bg-canvas pt-32 md:pt-40 pb-20 md:pb-28"
      data-testid="insights-hero"
    >
      <div className="bs-container">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: title + CTA (CTA hidden on mobile, rendered below body) */}
          <div className="order-1 w-full lg:col-span-7">
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.6vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              {title}
            </h1>
            <a
              href={ctaHref}
              className="hidden lg:inline-flex items-center justify-center mt-10 px-8 py-4 text-[15px] font-bold transition-colors border whitespace-nowrap"
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
              data-testid="link-insights-cta"
            >
              {ctaLabel}
            </a>
          </div>

          {/* RIGHT: headline + body */}
          <div className="order-2 w-full lg:col-span-5">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(20px, 1.8vw, 26px)",
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-0.005em",
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
          </div>

          {/* MOBILE ONLY: CTA after body */}
          <a
            href={ctaHref}
            className="order-3 inline-flex lg:hidden items-center justify-center px-8 py-4 text-[15px] font-bold transition-colors border whitespace-nowrap"
            style={{
              backgroundColor: "hsl(var(--bs-forest-deep))",
              color: "white",
              borderColor: "hsl(var(--bs-forest-deep))",
            }}
            data-testid="link-insights-cta-mobile"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
