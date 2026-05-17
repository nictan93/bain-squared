import { ChevronRight } from "lucide-react";

/**
 * Full-bleed perspective feature — mirrors Thoughtworks image 12.
 * Background image + offset white card with title, excerpt, "Learn more".
 */
export function PerspectiveFeature() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
      data-testid="perspective-feature"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative bs-container py-20 md:py-28">
        <div className="bg-white p-10 md:p-14 max-w-[640px]">
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            The Squared Method.{" "}
            <span style={{ display: "block" }}>
              The operator&rsquo;s playbook for getting AI to work.
            </span>
          </h3>
          <p
            className="mt-6 text-[16px] leading-[1.6]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            See how we diagnose the real bottleneck, design the system you
            actually need, deploy it inside your stack, and defend the
            valuation when the auditor or board pushes back.
          </p>
          <a
            href="#/insights/the-squared-method"
            className="mt-10 inline-flex items-center gap-2 text-[16px] font-bold text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors group"
            data-testid="link-perspective-learn-more"
          >
            <span className="border-b border-[hsl(var(--bs-ink))] group-hover:border-[hsl(var(--bs-forest-deep))] pb-0.5">
              Learn more
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
