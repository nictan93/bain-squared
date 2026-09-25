import { useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * Three-pillar switcher.
 * - Intro descriptive paragraph above the switcher (per v2 spec).
 * - Left rail: 3 tab labels stacked, active one has Forest Deep underline + bold + chevron
 * - Right: short pillar description + dedicated post tile mapped to that pillar's
 *   capability (Agentic AI, Financial Transformation, Intangible Asset Valuation).
 */

type Pillar = {
  tab: string;
  description: string;
  card: {
    tag: string;
    title: string;
    source: string;
    href: string;
    image: string;
  };
};

const pillars: Pillar[] = [
  {
    tab: "Put AI into everyday operations",
    description:
      "We connect AI to a defined workflow, the information it needs and the people responsible for the result. The work includes integration, review and ongoing operation.",
    card: {
      tag: "Agentic AI Automation",
      title: "The operator's playbook for agentic AI",
      source: "Field Notes",
      href: "#/insights/operators-playbook-agentic-ai",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    tab: "Strengthen financial decisions",
    description:
      "We improve financial planning, reporting and controls so leadership can understand performance and act on it. Fractional CFO support adds senior finance capacity where it is needed.",
    card: {
      tag: "Financial Transformation",
      title: "Rebuilding the finance function",
      source: "Service overview",
      href: "#/what-we-do/financial-transformation",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    tab: "Understand enterprise value",
    description:
      "We assess intangible assets and employee share options for a defined purpose. Each valuation explains the method, assumptions and evidence behind the conclusion.",
    card: {
      tag: "Intangible Asset Valuation",
      title: "Independent intangible asset valuation",
      source: "Service overview",
      href: "#/what-we-do/intangibles-valuation",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
  },
];

export function PillarSwitcher() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <section
      className="bs-bg-canvas pb-24 md:pb-32"
      data-testid="pillar-switcher"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left rail */}
          <div className="lg:col-span-5">
            <ul>
              {pillars.map((p, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={p.tab}
                    className="border-t"
                    style={{ borderColor: "hsl(var(--bs-hairline))" }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full flex items-center justify-between text-left py-6 group"
                      data-testid={`pillar-tab-${i}`}
                    >
                      <span
                        className="text-[19px] md:text-[22px] leading-[1.25] transition-colors pr-4"
                        style={{
                          color: "hsl(var(--bs-ink))",
                          fontWeight: isActive ? 700 : 400,
                        }}
                      >
                        {p.tab}
                      </span>
                      {isActive && (
                        <ChevronRight
                          size={22}
                          strokeWidth={2.25}
                          className="shrink-0"
                          style={{ color: "hsl(var(--bs-forest-deep))" }}
                        />
                      )}
                    </button>
                    {isActive && (
                      <div
                        className="h-[2px] -mt-px"
                        style={{
                          backgroundColor: "hsl(var(--bs-forest-deep))",
                        }}
                      />
                    )}
                  </li>
                );
              })}
              <li
                className="border-t"
                style={{ borderColor: "hsl(var(--bs-hairline))" }}
              />
            </ul>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <p
              key={`desc-${active}`}
              className="text-[17px] md:text-[19px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {pillar.description}
            </p>

            <a
              href={pillar.card.href}
              className="mt-10 block group overflow-hidden"
              data-testid={`pillar-card-${active}`}
            >
              {/* Image on top, full width */}
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${pillar.card.image}')` }}
                />
              </div>
              {/* White caption block */}
              <div className="bg-white px-7 py-7 md:px-9 md:py-8">
                <span
                  className="inline-block px-2.5 py-1 text-[12px] font-medium border"
                  style={{
                    borderColor: "hsl(var(--bs-hairline))",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  {pillar.card.tag}
                </span>
                <h3
                  className="mt-5 text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{ color: "hsl(var(--bs-ink))" , fontSize: "var(--bs-type-card)", lineHeight: 1.2, fontFamily: "Bitter, Georgia, serif"}}
                >
                  {pillar.card.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <span
                    className="text-[13px] uppercase tracking-[0.08em]"
                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                  >
                    {pillar.card.source}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[hsl(var(--bs-ink))]">
                    Read now
                    <ChevronRight
                      size={16}
                      strokeWidth={2.5}
                      className="text-[hsl(var(--bs-forest-deep))] transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
