import { useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * "Companies that are relevant to their next stage" — Image 3-style switcher.
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
      "Funded teams need to turn capital into a business that can sustain its growth. We bring financial planning, operating discipline and practical automation to the work behind the next milestone.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "Connect operating priorities with financial planning.",
  },
  {
    tab: "Growing SMEs",
    description:
      "Growing businesses often outgrow the processes that got them started. We improve reporting, controls and everyday workflows so leaders can delegate with confidence.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "Give teams reliable information and clear responsibilities.",
  },
  {
    tab: "Expanding Companies",
    description:
      "Companies entering new markets, acquiring assets or preparing for an exit need reliable information and clear accountability. We support finance leadership, operational change and the valuations behind those decisions.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageCaption:
      "Prepare the information and operating capacity for expansion.",
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
          A growing business can need stronger financial visibility, more operating
          capacity or a defensible valuation. We scope the engagement around
          that need and the people responsible for acting on it.
        </p>

        <h2
          className="mt-12 md:mt-16 mx-auto text-center font-display"
          style={{
            fontSize: "var(--bs-type-section)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: "hsl(var(--bs-ink))",
            maxWidth: "900px", fontFamily: "Bitter, Georgia, serif"}}
        >
          Built for businesses preparing for{" "}
          <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
            their next stage
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
