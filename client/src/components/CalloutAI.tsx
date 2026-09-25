import { ChevronRight } from "lucide-react";

/**
 * AI implementation callout.
 * Mirrors Thoughtworks image 3 — black headline with accent-color span,
 * description below, single inline link.
 */
export function CalloutAI() {
  return (
    <section
      className="bs-bg-canvas py-24 md:py-32"
      data-testid="callout-ai"
    >
      <div className="bs-container">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2
            className="font-display"
            style={{
              fontSize: "var(--bs-type-section)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
          >
            Put{" "}
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
              AI to work
            </span>{" "}
            in your business.
          </h2>

          <p
            className="mt-8 mx-auto text-[17px] md:text-[18px] leading-[1.55]"
            style={{ color: "hsl(var(--bs-ink-muted))", maxWidth: "720px" }}
          >
            Working AI needs reliable data, clear ownership and a process worth
            automating. We combine implementation with finance and valuation
            expertise to help leadership teams put change into operation.
          </p>

          <a
            href="#/what-we-do"
            className="mt-10 inline-flex items-center gap-2 text-[16px] font-bold text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors group"
            data-testid="link-explore-capabilities"
          >
            <span className="border-b border-[hsl(var(--bs-ink))] group-hover:border-[hsl(var(--bs-forest-deep))] pb-0.5">
              Explore our capabilities
            </span>
            <ChevronRight
              size={18}
              strokeWidth={2.25}
              className="text-[hsl(var(--bs-forest-deep))] transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
