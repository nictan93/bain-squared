import { useState } from "react";

export type SwitcherItem = {
  /** Tab label, e.g. "Sales" */
  label: string;
  /** Headline shown to the right when this tab is active. */
  title: string;
  /** Body copy printed under the title. */
  body: string;
  /** Image URL printed under the body. */
  image: string;
  /** Alt text for the image. */
  imageAlt: string;
  /** Optional small caption under the image. */
  caption?: string;
};

type Props = {
  /** Section heading, left-justified above the switcher. */
  heading?: string;
  /** Optional kicker eyebrow above the heading. */
  eyebrow?: string;
  items: SwitcherItem[];
  /**
   * "vertical" (default) = stacked tabs on the left, content on the right.
   *   Used on the AI capability pages (Image 3).
   * "horizontal" = tab row across the top, image on the left and copy on the
   *   right beneath (Image 7). Used on the Finance capability pages.
   */
  layout?: "vertical" | "horizontal";
};

/**
 * BusinessAreaSwitcher — Image 3 in the v5 spec.
 *
 * Left-justified heading above a two-column body:
 *   - Left:  vertically stacked tab list with active-state underline + chevron.
 *   - Right: matching tab content (title, body, image, caption).
 *
 * Used on every AI capability page with different tab sets per spec.
 */
export function BusinessAreaSwitcher({
  heading,
  eyebrow,
  items,
  layout = "vertical",
}: Props) {
  const [active, setActive] = useState(0);
  const current = items[active];

  if (layout === "horizontal") {
    return (
      <section
        className="bg-white py-20 md:py-28"
        data-testid="business-area-switcher"
      >
        <div className="bs-container">
          {eyebrow && (
            <div
              className="text-[13px] uppercase tracking-[0.08em] font-medium mb-4"
              style={{ color: "hsl(var(--bs-forest-deep))" }}
            >
              {eyebrow}
            </div>
          )}
          {heading && (
            <h2
              className="font-display mb-10"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                lineHeight: 1.15,
                fontWeight: 700,
                color: "hsl(var(--bs-ink))",
                letterSpacing: "-0.01em",
                maxWidth: "880px",
              }}
            >
              {heading}
            </h2>
          )}

          {/* Horizontal tab row */}
          <div
            className="flex flex-wrap items-end gap-8 md:gap-12 mb-12 md:mb-16"
            style={{ borderBottom: "1px solid hsl(var(--bs-hairline))" }}
          >
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className="pb-4 transition-colors text-left"
                  style={{
                    color: isActive
                      ? "hsl(var(--bs-ink))"
                      : "hsl(var(--bs-ink-muted))",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "17px",
                    borderBottom: isActive
                      ? "2px solid hsl(var(--bs-forest-deep))"
                      : "2px solid transparent",
                    marginBottom: "-1px",
                  }}
                  data-testid={`switcher-tab-${i}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Active item: image left, copy right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 overflow-hidden">
              <img
                src={current.image}
                alt={current.imageAlt}
                className="w-full h-auto block"
                style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
              />
            </div>
            <div className="md:col-span-6">
              <h3
                className="font-display mb-5"
                style={{
                  fontSize: "clamp(26px, 2.4vw, 34px)",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "hsl(var(--bs-ink))",
                  letterSpacing: "-0.005em",
                }}
              >
                {current.title}
              </h3>
              <p
                className="text-[16px] md:text-[17px]"
                style={{
                  color: "hsl(var(--bs-ink))",
                  lineHeight: 1.6,
                  maxWidth: "520px",
                }}
              >
                {current.body}
              </p>
              {current.caption && (
                <p
                  className="mt-6 text-[14px] italic"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  {current.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-white py-20 md:py-28"
      data-testid="business-area-switcher"
    >
      <div className="bs-container">
        {eyebrow && (
          <div
            className="text-[13px] uppercase tracking-[0.08em] font-medium mb-4"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            {eyebrow}
          </div>
        )}
        {heading && (
          <h2
            className="font-display mb-12 md:mb-16"
            style={{
              fontSize: "clamp(30px, 3.6vw, 48px)",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "hsl(var(--bs-ink))",
              letterSpacing: "-0.01em",
              maxWidth: "880px",
            }}
          >
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: tab list */}
          <div className="md:col-span-5">
            <ul className="space-y-0">
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={item.label}
                    style={{
                      borderBottom: "1px solid hsl(var(--bs-hairline))",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full text-left flex items-center justify-between py-5 transition-colors"
                      style={{
                        color: isActive
                          ? "hsl(var(--bs-ink))"
                          : "hsl(var(--bs-ink-muted))",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "18px",
                        borderBottom: isActive
                          ? "2px solid hsl(var(--bs-forest-deep))"
                          : "2px solid transparent",
                        marginBottom: "-1px",
                      }}
                      data-testid={`switcher-tab-${i}`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: active item content */}
          <div className="md:col-span-7">
            <h3
              className="font-display mb-4"
              style={{
                fontSize: "clamp(22px, 2vw, 28px)",
                lineHeight: 1.25,
                fontWeight: 700,
                color: "hsl(var(--bs-ink))",
                letterSpacing: "-0.005em",
              }}
            >
              {current.title}
            </h3>
            <p
              className="text-[16px] md:text-[17px] mb-8"
              style={{
                color: "hsl(var(--bs-ink))",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              {current.body}
            </p>
            <div className="overflow-hidden">
              <img
                src={current.image}
                alt={current.imageAlt}
                className="w-full h-auto block"
                style={{
                  aspectRatio: "16 / 10",
                  objectFit: "cover",
                }}
              />
            </div>
            {current.caption && (
              <p
                className="mt-3 text-[14px] italic"
                style={{ color: "hsl(var(--bs-ink-muted))" }}
              >
                {current.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
