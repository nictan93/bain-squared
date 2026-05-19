import { ChevronRight } from "lucide-react";

/**
 * "AI that works in action" centered text block — mirrors Thoughtworks image 5.
 */
export function AIInActionHeader() {
  return (
    <section className="bg-white pt-20 md:pt-24 pb-12" data-testid="ai-in-action-header">
      <div className="bs-container">
        <div className="text-center max-w-[900px] mx-auto">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
              AI that works
            </span>{" "}
            in action
          </h2>
          <p
            className="mt-6 mx-auto text-[17px] md:text-[18px] leading-[1.55]"
            style={{ color: "hsl(var(--bs-ink-muted))", maxWidth: "780px" }}
          >
            Our clients get to focus on improving commercial results, rather
            than having their stack run rings around them.
          </p>
          <a
            href="/client-work"
            className="mt-8 inline-flex items-center gap-2 text-[16px] font-bold text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors group"
            data-testid="link-view-client-work"
          >
            <span className="border-b border-[hsl(var(--bs-ink))] group-hover:border-[hsl(var(--bs-forest-deep))] pb-0.5">
              View client work
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
