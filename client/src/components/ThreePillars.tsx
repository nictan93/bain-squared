import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    num: "01.",
    title: "Agentic AI Automation",
    body: "Most AI work stalls at the pilot. We design the strategy, redesign the workflows, and put real agents into production. The point isn't novelty. It's compounding output.",
    cta: "See AI services",
    href: "#what-we-do",
  },
  {
    num: "02.",
    title: "Financial Advisory and Transformation",
    body: "When your finance function can't keep up, growth slows from the inside. We rebuild it. Sometimes we sit in the CFO seat until the rebuild is done. CFO-as-a-Service for companies that don't have one yet.",
    cta: "See finance services",
    href: "#what-we-do",
  },
  {
    num: "03.",
    title: "Intangibles Valuation",
    body: "Today, more than 90% of company value is intangible. Brand, IP, goodwill, ESOPs, data. We value what others overlook, in numbers that hold up in boardrooms and audits.",
    cta: "See valuation services",
    href: "#what-we-do",
  },
];

export function ThreePillars() {
  return (
    <section
      id="what-we-do"
      className="bs-section bs-bg-surface"
      data-testid="section-three-pillars"
    >
      <div className="bs-container">
        <div className="max-w-[880px] mx-auto text-center mb-16 md:mb-20">
          <span className="bs-eyebrow">What we do</span>
          <h2 className="bs-h1-display mb-6" data-testid="text-pillars-headline">
            Three pillars.
            <br />
            One operating partner.
          </h2>
          <p className="bs-lead text-[hsl(var(--bs-ink-muted))]">
            We work across three stages of growth. AI moves the needle today. A modern
            finance function makes the gains stick. A defensible valuation makes them
            count. We can enter at any pillar, and tell you which one you actually need
            first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <button
              key={p.num}
              onClick={() =>
                document.getElementById(p.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
              }
              className="bs-pillar-card group text-left flex flex-col h-full"
              data-testid={`card-pillar-${i + 1}`}
            >
              <span className="bs-numeral">{p.num}</span>
              <h3 className="text-[24px] md:text-[26px] font-bold leading-[1.2] mb-4 text-[hsl(var(--bs-ink))]">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[hsl(var(--bs-ink-muted))] mb-6 flex-grow">
                {p.body}
              </p>
              <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[hsl(var(--bs-forest-deep))] mt-auto group-hover:gap-3 transition-all">
                {p.cta}
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
