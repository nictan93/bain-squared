import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

/**
 * FeaturedClientStoryCarousel — image right, text left with eyebrow,
 * headline, impact stats (2 stats), and Read story link. Dot pagination
 * underneath. Matches reference image 5.
 */

export type ClientStory = {
  headline: string;
  stats: { value: string; label: string }[]; // expect 2
  ctaHref: string;
  image: string;
  imageAlt?: string;
};

type Props = {
  eyebrow?: string;
  sectionHeadline?: string;
  stories: ClientStory[];
  /** Auto-rotate interval ms; 0 disables */
  intervalMs?: number;
};

export function FeaturedClientStoryCarousel({
  eyebrow = "Featured client success story",
  sectionHeadline = "Bold steps forward.",
  stories,
  intervalMs = 7000,
}: Props) {
  const [active, setActive] = useState(0);
  const count = stories.length;

  useEffect(() => {
    if (!intervalMs || count <= 1) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % count),
      intervalMs
    );
    return () => window.clearInterval(id);
  }, [intervalMs, count]);

  const s = stories[active];

  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="featured-client-story-carousel"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: text */}
          <div className="lg:col-span-6">
            <div
              className="text-[12px] md:text-[13px] tracking-[0.12em] uppercase mb-5"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {eyebrow}
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "hsl(var(--bs-ink))",
                marginBottom: "2rem",
              }}
            >
              {sectionHeadline}
            </h2>
            <div
              className="border-t pt-8"
              style={{ borderColor: "hsl(var(--bs-hairline))" }}
            >
              <h3
                key={`story-h-${active}`}
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  color: "hsl(var(--bs-ink))",
                }}
              >
                {s.headline}
              </h3>

              <div className="mt-10">
                <div
                  className="text-[14px] font-bold mb-5"
                  style={{ color: "hsl(var(--bs-ink))" }}
                >
                  The impact
                </div>
                <div
                  className="grid grid-cols-2 gap-4"
                  key={`stats-${active}`}
                >
                  {s.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="px-6 md:px-7 py-7 md:py-8"
                      style={{
                        backgroundColor: "#E6EFEC",
                        borderLeft: "3px solid hsl(var(--bs-forest-deep))",
                      }}
                    >
                      <div
                        className="font-display"
                        style={{
                          fontSize: "clamp(32px, 3.4vw, 44px)",
                          fontWeight: 700,
                          lineHeight: 1.05,
                          letterSpacing: "-0.02em",
                          color: "hsl(var(--bs-forest-deep))",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="mt-2 text-[14px] leading-[1.45]"
                        style={{ color: "hsl(var(--bs-ink-muted))" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={s.ctaHref}
                className="inline-flex items-center gap-2 mt-10 text-[15px] font-bold transition-colors"
                style={{ color: "hsl(var(--bs-forest-deep))" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "hsl(var(--bs-forest-deep-hover))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "hsl(var(--bs-forest-deep))";
                }}
                data-testid={`story-cta-${active}`}
              >
                Read story
                <ChevronRight size={18} strokeWidth={2.5} />
              </a>

              {/* Dots */}
              {count > 1 && (
                <div className="mt-10 flex items-center gap-3">
                  {stories.map((_, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={`Show story ${i + 1}`}
                        className="block transition-all"
                        style={{
                          width: isActive ? "40px" : "32px",
                          height: "3px",
                          backgroundColor: isActive
                            ? "hsl(var(--bs-forest-deep))"
                            : "hsl(var(--bs-hairline))",
                        }}
                        data-testid={`story-dot-${i}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="lg:col-span-6">
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
            >
              <div
                key={`story-img-${active}`}
                role="img"
                aria-label={s.imageAlt || ""}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${s.image}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
