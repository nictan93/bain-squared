/**
 * PartnerEcosystems — centered headline band with an accent word.
 * Matches Thoughtworks reference image 5.
 * Includes an auto-scrolling partner logo marquee below the body.
 */

import { PartnerLogoMarquee } from "@/components/PartnerLogoMarquee";

type Props = {
  /** Optional small eyebrow above the headline */
  eyebrow?: string;
  /** Plain text before the accent word */
  before: string;
  /** The accent (Forest Deep) word/phrase */
  accent: string;
  /** Plain text after the accent word */
  after: string;
  /** Optional supporting paragraph below */
  body?: string;
  /** Optional CTA link */
  ctaLabel?: string;
  ctaHref?: string;
};

export function PartnerEcosystems({
  eyebrow,
  before,
  accent,
  after,
  body,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="partner-ecosystems"
      style={{
        borderTop: "1px solid hsl(var(--bs-hairline))",
        borderBottom: "1px solid hsl(var(--bs-hairline))",
      }}
    >
      <div className="bs-container">
        <div className="mx-auto text-center" style={{ maxWidth: "1000px" }}>
          {eyebrow && (
            <div
              className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-bold mb-6"
              style={{ color: "hsl(var(--bs-forest-deep))" }}
            >
              {eyebrow}
            </div>
          )}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4.4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            {before}{" "}
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>{accent}</span>{" "}
            {after}
          </h2>
          {body && (
            <p
              className="mx-auto mt-8 text-[17px] md:text-[19px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink))", maxWidth: "780px" }}
            >
              {body}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <div className="mt-10">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 text-[15px] font-bold border-b-2 pb-1 transition-colors"
                style={{
                  color: "hsl(var(--bs-forest-deep))",
                  borderColor: "hsl(var(--bs-forest-deep))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "hsl(var(--bs-forest-deep-hover))";
                  e.currentTarget.style.borderColor =
                    "hsl(var(--bs-forest-deep-hover))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "hsl(var(--bs-forest-deep))";
                  e.currentTarget.style.borderColor =
                    "hsl(var(--bs-forest-deep))";
                }}
                data-testid="link-partner-ecosystems"
              >
                {ctaLabel}
                <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </div>

        {/* Auto-scrolling partner logo strip */}
        <div className="mt-14 md:mt-20">
          <PartnerLogoMarquee />
        </div>
      </div>
    </section>
  );
}
