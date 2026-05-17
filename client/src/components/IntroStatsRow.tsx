type Stat = {
  /** Big percent label, e.g. "60%" */
  value: string;
  /** Stat copy printed to the right of the percent */
  body: string;
  /** Optional accent color for the percent. Defaults to forest-deep. */
  color?: "rose" | "amber" | "teal" | "forest";
};

type Props = {
  /** Two paragraphs printed on the left half. */
  paragraphs: string[];
  /** Three stats printed on the right half. */
  stats: Stat[];
};

const COLOR_MAP: Record<NonNullable<Stat["color"]>, string> = {
  // Brand-locked palette only — we re-use the existing forest-deep token plus
  // muted-warm accents that already exist in HomeHero and the report tiles.
  rose: "#C97B7B",
  amber: "#D4A24B",
  teal: "#6FA59C",
  forest: "hsl(var(--bs-forest-deep))",
};

/**
 * IntroStatsRow — Image 2 in the v5 spec.
 *
 * Two-column layout: long-form intro on the left, three stat rows on the
 * right. Each stat is "BIG %" + body copy, separated by hairlines. The first
 * section that appears after the sliding video hero.
 */
export function IntroStatsRow({ paragraphs, stats }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28 relative z-20"
      data-testid="intro-stats-row"
      style={{
        // Sit ON TOP of the sticky hero so it visually pushes the video up.
        position: "relative",
      }}
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: prose */}
          <div className="md:col-span-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[17px] md:text-[18px] mb-6 last:mb-0"
                style={{
                  color: "hsl(var(--bs-ink))",
                  lineHeight: 1.6,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right: stats */}
          <div className="md:col-span-6 md:pl-8">
            {stats.map((s, i) => {
              const color = COLOR_MAP[s.color ?? "forest"];
              return (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-6 items-center py-6"
                  style={{
                    borderTop:
                      i === 0
                        ? "none"
                        : "1px solid hsl(var(--bs-hairline))",
                  }}
                  data-testid={`intro-stat-${i}`}
                >
                  <div
                    className="col-span-4 font-display"
                    style={{
                      fontSize: "clamp(44px, 5vw, 72px)",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="col-span-8 text-[16px] md:text-[17px]"
                    style={{
                      color: "hsl(var(--bs-ink))",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.body}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
