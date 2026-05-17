import { useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * WhyBainSquared — Careers tabbed switcher.
 * Matches Thoughtworks reference image 8: title on left tabs,
 * right body + image per active tab.
 */

type Tab = {
  label: string;
  body: string;
  image: string;
  imageCaption?: string;
};

const tabs: Tab[] = [
  {
    label: "About us",
    body: "Bain Squared is an operator-led advisory firm built for founders, CFOs, and boards who treat AI, finance, and intangibles as one connected build. We hire operators who have run the work, not just modeled it.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Inside the firm: operators rebuilding the work, not just advising on it.",
  },
  {
    label: "Our application process",
    body: "Every application is reviewed by a partner, not a filter. You'll have a craft interview, a working session against a real client problem, and a conversation with the people you'll actually work alongside. We aim to close every loop within three weeks.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "A real problem, a real room, a real decision.",
  },
  {
    label: "Consultant life",
    body: "Consultants here own the build end to end. You'll lead client workstreams, sit in the operator's seat during the rebuild, and ship work the client's team will still be running a year after you leave. Pretty decks alone do not count as delivery.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Owning the work from diagnosis through to handover.",
  },
  {
    label: "Mid-career switch",
    body: "Many of us joined after a decade in operating roles. If you have run finance, product, or operations inside a real business, we want to talk. We invest in translating operator instincts into advisory craft.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Operator backgrounds welcome, and actively recruited.",
  },
  {
    label: "How we care for our people",
    body: "Sustainable utilisation, transparent comp bands, real parental leave, and a culture that protects deep work. We staff projects to be done well, not to be billable for the sake of being billable.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Built so the team can keep doing this work for a long time.",
  },
  {
    label: "How we support your growth",
    body: "A named partner sponsor from day one, quarterly craft reviews against published rubrics, and a training budget you actually get to spend. Career paths are documented, not implied.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Clear paths, named sponsors, real budget.",
  },
];

export function WhyBainSquared() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="why-bain-squared"
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
          Why Bain Squared?
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
                      className="w-full flex items-center justify-between text-left py-6 group"
                      data-testid={`why-tab-${i}`}
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
              key={`why-body-${active}`}
              className="text-[17px] md:text-[19px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {t.body}
            </p>

            <div className="mt-10">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />
              </div>
              {t.imageCaption && (
                <p
                  className="mt-5 text-[14px] md:text-[15px] italic"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  {t.imageCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
