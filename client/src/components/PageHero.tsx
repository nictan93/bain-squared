/**
 * PageHero — two-column page hero.
 * Left:  Bold title (H1 display) + optional CTA buttons
 * Right: bold lead paragraph + supporting paragraph
 *
 * Mirrors Thoughtworks reference image 1 (Who we work with) and image 7 (Careers).
 */

type CTA = {
  label: string;
  href: string;
  /** primary = filled Forest Deep, outline = bordered */
  variant?: "primary" | "outline";
};

type Props = {
  title: string;
  /** Optional accent word (rendered in Forest Deep) appended after title. */
  accentSuffix?: string;
  lead: string;
  body?: string;
  ctas?: CTA[];
  /** Reduce top padding for pages where the hero sits directly under the header */
  compactTop?: boolean;
};

export function PageHero({
  title,
  accentSuffix,
  lead,
  body,
  ctas,
  compactTop,
}: Props) {
  return (
    <section
      className={`bs-bg-canvas ${
        compactTop ? "pt-32 md:pt-40" : "pt-40 md:pt-48"
      } pb-20 md:pb-28`}
      data-testid="page-hero"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: title + CTAs */}
          <div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(28px, 3.6vw, 46px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              {title}
              {accentSuffix && (
                <>
                  {" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                    {accentSuffix}
                  </span>
                </>
              )}
            </h1>

            {ctas && ctas.length > 0 && (
              <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
                {ctas.map((cta) => {
                  const isPrimary = (cta.variant ?? "primary") === "primary";
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-bold transition-colors whitespace-nowrap border"
                      style={
                        isPrimary
                          ? {
                              backgroundColor: "hsl(var(--bs-forest-deep))",
                              color: "white",
                              borderColor: "hsl(var(--bs-forest-deep))",
                            }
                          : {
                              backgroundColor: "transparent",
                              color: "hsl(var(--bs-ink))",
                              borderColor: "hsl(var(--bs-ink))",
                            }
                      }
                      onMouseEnter={(e) => {
                        if (isPrimary) {
                          e.currentTarget.style.backgroundColor =
                            "hsl(var(--bs-forest-deep-hover))";
                        } else {
                          e.currentTarget.style.backgroundColor =
                            "hsl(var(--bs-ink))";
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isPrimary) {
                          e.currentTarget.style.backgroundColor =
                            "hsl(var(--bs-forest-deep))";
                        } else {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "hsl(var(--bs-ink))";
                        }
                      }}
                      data-testid={`hero-cta-${cta.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {cta.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT: body copy */}
          <div className="lg:pt-4">
            <p
              className="text-[18px] md:text-[20px] leading-[1.45] font-bold"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {lead}
            </p>
            {body && (
              <p
                className="mt-6 text-[16px] md:text-[17px] leading-[1.6]"
                style={{ color: "hsl(var(--bs-ink))" }}
              >
                {body}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
