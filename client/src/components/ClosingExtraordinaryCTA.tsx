import { ChevronRight } from "lucide-react";

/**
 * ClosingExtraordinaryCTA — full-bleed photo with an overlaid white
 * card on the left containing a display headline, body, and arrow link.
 * Matches reference image 17.
 *
 * Used at the bottom of Field Notes / Client Stories / Inside HQ pages.
 */

type Props = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
};

export function ClosingExtraordinaryCTA({
  headline = "Together, let's be extraordinary.",
  body = "Most advisory work rewards slide-counting. Ours rewards judgment. If you want to build the playbook for AI, finance transformation, and intangibles valuation alongside operators who have actually run the function, this is the team. Bain Squared is hiring real operators, not consultants.",
  ctaLabel = "Explore careers with us",
  ctaHref = "#/careers",
  image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
  imageAlt = "Operators working together at a shared table.",
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "560px" }}
      data-testid="closing-extraordinary-cta"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <div
          role="img"
          aria-label={imageAlt}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Overlay card */}
      <div className="relative z-10 bs-container py-20 md:py-28">
        <div
          className="bg-white p-10 md:p-14"
          style={{ maxWidth: "640px" }}
        >
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
            className="mt-6 text-[15px] md:text-[16px] leading-[1.6]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {body}
          </p>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 mt-10 text-[15px] font-bold border-b-2 pb-1 transition-colors"
            style={{
              color: "hsl(var(--bs-ink))",
              borderColor: "hsl(var(--bs-ink))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                "hsl(var(--bs-forest-deep))";
              e.currentTarget.style.borderColor =
                "hsl(var(--bs-forest-deep))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "hsl(var(--bs-ink))";
              e.currentTarget.style.borderColor = "hsl(var(--bs-ink))";
            }}
            data-testid="link-closing-cta"
          >
            {ctaLabel}
            <ChevronRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
