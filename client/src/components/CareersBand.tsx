import { ChevronRight } from "lucide-react";

/**
 * "Together, let's be extraordinary" careers band — mirrors Thoughtworks image 8.
 * Full-bleed image, white text card overlay on left.
 * Copy rewritten for Bain Squared operator-led tone.
 */
export function CareersBand() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "560px" }}
      data-testid="careers-band"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/15" />

      {/* Content container */}
      <div className="relative bs-container py-20 md:py-28">
        <div
          className="bg-white p-10 md:p-14 max-w-[560px]"
          style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            Together, let&rsquo;s be extraordinary.
          </h2>
          <p
            className="mt-6 text-[16px] leading-[1.6]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            Most advisory work rewards slide-counting. Ours rewards judgment.
            If you want to build the playbook for AI, finance transformation,
            and intangibles valuation alongside operators who have actually
            run the function, this is the team. Bain Squared is hiring real
            operators, not consultants.
          </p>
          <a
            href="#/careers"
            className="mt-10 inline-flex items-center gap-2 text-[16px] font-bold text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors group"
            data-testid="link-explore-careers"
          >
            <span className="border-b border-[hsl(var(--bs-ink))] group-hover:border-[hsl(var(--bs-forest-deep))] pb-0.5">
              Explore careers with us
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
