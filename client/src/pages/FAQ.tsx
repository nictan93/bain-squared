import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ_GROUPS, type FAQItem } from "@/data/faq";

/**
 * FAQ — grouped, editorial layout matching the rest of the site.
 * Native <details>/<summary> for accessibility + zero JS state.
 */

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  return (
    <details
      className="group bs-faq-row"
      data-testid={`faq-row-${index}`}
      style={{
        borderTop: "1px solid hsl(var(--bs-hairline))",
      }}
    >
      <summary
        className="cursor-pointer list-none py-6 md:py-7 flex items-start gap-6"
        style={{
          outline: "none",
        }}
      >
        <span
          className="text-[12px] font-semibold pt-1.5 flex-shrink-0"
          style={{
            color: "hsl(var(--bs-forest-deep))",
            minWidth: "32px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="font-display flex-1 text-[18px] md:text-[22px]"
          style={{
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: "-0.005em",
            color: "hsl(var(--bs-ink))",
          }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 mt-2 transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            color: "hsl(var(--bs-forest-deep))",
          }}
        >
          {/* Plus icon */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "1.5px",
              background: "currentColor",
              transform: "translateY(-50%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1.5px",
              background: "currentColor",
              transform: "translateX(-50%)",
            }}
          />
        </span>
      </summary>
      <div
        className="pb-7 md:pb-8 pl-[56px] pr-[44px] md:pr-[56px]"
        style={{ marginTop: "-8px" }}
      >
        <p
          className="text-[15px] md:text-[16px] leading-[1.7]"
          style={{ color: "hsl(var(--bs-ink-muted))" }}
        >
          {item.a}
        </p>
      </div>
    </details>
  );
}

export default function FAQ() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title =
      "Frequently Asked Questions | Bain Squared — Valuation, CFO Advisory & AI Automation";
  }, []);

  return (
    <div className="bs-bg-canvas" data-testid="page-faq">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="bs-bg-canvas pt-32 md:pt-40 pb-12 md:pb-16"
          data-testid="faq-hero"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <p
                  className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-6"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  Frequently asked
                </p>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(40px, 5.4vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  Questions, before you{" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                    pick up the phone.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p
                  className="text-[16px] md:text-[17px] leading-[1.6]"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  How the firm is set up, how engagements are scoped and
                  priced, and what the work actually looks like across
                  valuation, CFO advisory, and agentic AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jump nav */}
        <section className="bs-bg-canvas pb-10" data-testid="faq-jumpnav">
          <div className="bs-container">
            <nav
              className="flex flex-wrap gap-x-8 gap-y-3 pt-6"
              style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}
              aria-label="FAQ sections"
            >
              {FAQ_GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="text-[13px] font-semibold uppercase tracking-[0.08em] hover:underline"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                  data-testid={`faq-jump-${g.id}`}
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Grouped FAQs */}
        {FAQ_GROUPS.map((group, gi) => (
          <section
            key={group.id}
            id={group.id}
            className="pb-16 md:pb-24"
            data-testid={`faq-group-${group.id}`}
            style={{ paddingTop: gi === 0 ? "32px" : "64px" }}
          >
            <div className="bs-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left rail */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4"
                      style={{ color: "hsl(var(--bs-forest-deep))" }}
                    >
                      0{gi + 1} / FAQ
                    </p>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "clamp(28px, 2.6vw, 36px)",
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: "-0.015em",
                        color: "hsl(var(--bs-ink))",
                      }}
                    >
                      {group.title}
                    </h2>
                    <p
                      className="mt-5 text-[15px] leading-[1.65]"
                      style={{ color: "hsl(var(--bs-ink-muted))" }}
                    >
                      {group.intro}
                    </p>
                  </div>
                </div>

                {/* Right column — Q&A */}
                <div
                  className="lg:col-span-8"
                  style={{
                    borderBottom: "1px solid hsl(var(--bs-hairline))",
                  }}
                >
                  {group.items.map((item, ii) => (
                    <FAQRow
                      key={`${group.id}-${ii}`}
                      item={item}
                      index={ii}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section
          className="py-20 md:py-28"
          style={{ background: "hsl(var(--bs-forest-deep))" }}
          data-testid="faq-cta"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(32px, 3.6vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: "-0.018em",
                    color: "#FFFFFF",
                  }}
                >
                  Still have a question we haven't answered?
                </h2>
                <p
                  className="mt-5 text-[17px] leading-[1.6] max-w-[640px]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Email{" "}
                  <a
                    href="mailto:hello@bainsquared.com"
                    className="underline"
                    style={{ color: "hsl(var(--bs-forest-accent))" }}
                  >
                    hello@bainsquared.com
                  </a>{" "}
                  or use the contact form. A partner reviews every enquiry.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a
                  href="#/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    background: "#FFFFFF",
                    color: "hsl(var(--bs-forest-deep))",
                  }}
                  data-testid="cta-contact"
                >
                  Contact a partner
                  <span className="bs-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
