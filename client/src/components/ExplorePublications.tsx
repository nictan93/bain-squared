import { useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * ExplorePublications — left tabs / right body + image.
 * Matches reference image 4.
 *
 * Used on the Insights overview page to surface the three publication
 * series: Perspectives, Squared Reports, Looking Glass.
 */

export type PublicationTab = {
  label: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

type Props = {
  heading?: string;
  tabs: PublicationTab[];
};

export function ExplorePublications({
  heading = "Explore our publications",
  tabs,
}: Props) {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FFFFFF" }}
      data-testid="explore-publications"
    >
      <div className="bs-container">
        <h2
          className="font-display mb-12 md:mb-16"
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "hsl(var(--bs-ink))",
          }}
        >
          {heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: tabs */}
          <div className="lg:col-span-5">
            <ul>
              {tabs.map((tab, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={tab.label}
                    className="border-t"
                    style={{ borderColor: "hsl(var(--bs-hairline))" }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full flex items-center justify-between text-left py-6"
                      data-testid={`pub-tab-${i}`}
                    >
                      <span
                        className="text-[19px] md:text-[22px] leading-[1.25] pr-4"
                        style={{
                          color: "hsl(var(--bs-ink))",
                          fontWeight: isActive ? 700 : 400,
                        }}
                      >
                        {tab.label}
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

          {/* Right: body + image */}
          <div className="lg:col-span-7">
            <p
              key={`pub-body-${active}`}
              className="text-[17px] md:text-[19px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {t.body}
            </p>
            <a
              href={t.ctaHref}
              className="inline-flex items-center gap-2 mt-6 text-[15px] font-bold transition-colors"
              style={{ color: "hsl(var(--bs-ink))" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "hsl(var(--bs-forest-deep-hover))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "hsl(var(--bs-ink))";
              }}
              data-testid={`pub-cta-${active}`}
            >
              {t.ctaLabel}
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                style={{ color: "hsl(var(--bs-forest-deep))" }}
              />
            </a>

            <div className="mt-10">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  key={`pub-img-${active}`}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
