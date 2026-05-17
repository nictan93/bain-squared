import { useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * "Companies that are relevant to our focus" — Image 3-style switcher.
 * Centered description + bold headline above the tabbed switcher.
 * Tabs on the left, descriptive text + (non-clickable) image post on the right.
 */

type Segment = {
  tab: string;
  description: string;
  image: string;
  imageCaption?: string;
};

const segments: Segment[] = [
  {
    tab: "Funded Startups",
    description:
      "Series A through C teams under pressure to convert capital into durable revenue. We tighten the operating core, design the agentic stack, and rebuild the financial story before the next raise.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "Inside the operator's stack: AI workflows, FP&A discipline, intangible value made visible.",
  },
  {
    tab: "Growing SMEs",
    description:
      "Founder-led businesses scaling past their first inflection. We install the systems, controls, and operator playbooks that let leadership step out of the weeds without losing the edge.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "Built for the next stage: tighter operations, cleaner numbers, sharper decisions.",
  },
  {
    tab: "Expanding Companies",
    description:
      "Mid-market and pre-IPO businesses entering new markets, acquiring assets, or restructuring for scale. We bring fractional CFO depth, intangibles valuation rigor, and the operator instincts boardrooms actually need.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "From scale-up to enterprise: defendable numbers, real intangibles, board-grade clarity.",
  },
];

export function RelevantCompanies() {
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="relevant-companies"
    >
      <div className="bs-container">
        {/* Centered intro + headline */}
        <p
          className="mx-auto text-center text-[17px] md:text-[19px] leading-[1.55]"
          style={{ color: "hsl(var(--bs-ink))", maxWidth: "880px" }}
        >
          Operator-led advisory only works if the operator on the other side
          is ready. We work with leadership teams who treat AI, finance, and
          intangibles as one connected build, not three separate projects.
        </p>

        <h2
          className="mt-12 md:mt-16 mx-auto text-center font-display"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            color: "hsl(var(--bs-ink))",
            maxWidth: "900px",
          }}
        >
          Companies that are relevant to{" "}
          <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
            our focus
          </span>
        </h2>

        {/* Tabs + content */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: tabs */}
          <div className="lg:col-span-5">
            <ul>
              {segments.map((s, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={s.tab}
                    className="border-t"
                    style={{ borderColor: "hsl(var(--bs-hairline))" }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full flex items-center justify-between text-left py-6 group"
                      data-testid={`relevant-tab-${i}`}
                    >
                      <span
                        className="text-[19px] md:text-[22px] leading-[1.25] transition-colors pr-4"
                        style={{
                          color: "hsl(var(--bs-ink))",
                          fontWeight: isActive ? 700 : 400,
                        }}
                      >
                        {s.tab}
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

          {/* Right: description + image post */}
          <div className="lg:col-span-7">
            <p
              key={`desc-${active}`}
              className="text-[17px] md:text-[19px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {seg.description}
            </p>

            {/* Image post — NOT clickable */}
            <div className="mt-10">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${seg.image}')` }}
                />
              </div>
              {seg.imageCaption && (
                <p
                  className="mt-5 text-[14px] md:text-[15px] italic"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  {seg.imageCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
