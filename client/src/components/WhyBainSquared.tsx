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
    body: "Bain Squared brings technology, finance and valuation together to help growing businesses make and implement important decisions. Our work combines analysis with practical delivery alongside the client team.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Connecting specialist knowledge with practical delivery.",
  },
  {
    label: "Our application process",
    body: "Tell us about the work you have done and the problems you want to solve. We use the application conversation to understand your experience, how you approach a problem and where you could contribute.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "A conversation about your experience and approach.",
  },
  {
    label: "Consultant life",
    body: "Work can span discovery, analysis, design, implementation and handover. You will need to explain your thinking, collaborate across disciplines and understand how clients will use the result.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Working with clients from discovery through handover.",
  },
  {
    label: "Mid-career switch",
    body: "Experience in finance, product, technology or operations can bring a valuable perspective to advisory work. We welcome people who can connect specialist knowledge with the realities of running a business.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Bringing operating experience into advisory work.",
  },
  {
    label: "How we care for our people",
    body: "Clear expectations and open communication matter to how we work together. Use the application process to discuss responsibilities, working arrangements and what you need to do your best work.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Clear expectations and open communication.",
  },
  {
    label: "How we support your growth",
    body: "Build expertise by working through complex problems with colleagues and clients. We value feedback, shared learning and the ability to explain your work clearly to people from other disciplines.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Learning through work across disciplines.",
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
            fontSize: "var(--bs-type-section)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
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
