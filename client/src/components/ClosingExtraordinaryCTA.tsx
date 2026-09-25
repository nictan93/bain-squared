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
  headline = "Bring your experience to the work.",
  body = "Work with clients on the systems and decisions that shape their businesses. Explore how you could contribute across technology, finance and valuation.",
  ctaLabel = "Explore careers with us",
  ctaHref = "/careers",
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
              fontSize: "var(--bs-type-section)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
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
