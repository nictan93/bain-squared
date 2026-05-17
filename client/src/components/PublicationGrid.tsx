import { ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * PublicationGrid — 3-col tile grid. Each tile has a category eyebrow,
 * a display headline, and an arrow CTA. All tiles start in the default
 * (light) state; on hover the tile flips to forest-deep with white text
 * and reveals the optional dek.
 */

export type PublicationTile = {
  category: string;
  title: string;
  href?: string;
  /** Deprecated — no longer used. Kept for backwards compatibility. */
  variant?: "default" | "dark";
  /** Optional supporting dek shown only on hover */
  dek?: string;
};

type Props = {
  tiles: PublicationTile[];
};

export function PublicationGrid({ tiles }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="bs-bg-canvas py-16 md:py-20"
      data-testid="publication-grid"
    >
      <div className="bs-container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "1px",
            backgroundColor: "hsl(var(--bs-hairline))",
          }}
        >
          {tiles.map((t, i) => {
            const isHover = hovered === i;
            const bg = isHover ? "hsl(var(--bs-forest-deep))" : "#F1EEE8";
            const ink = isHover ? "white" : "hsl(var(--bs-ink))";
            const muted = isHover
              ? "rgba(255,255,255,0.78)"
              : "hsl(var(--bs-ink-muted))";

            return (
              <a
                key={i}
                href={t.href || "#"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered((h) => (h === i ? null : h))}
                className="group flex flex-col justify-between p-8 md:p-10 transition-colors duration-300"
                style={{
                  backgroundColor: bg,
                  minHeight: "320px",
                  color: ink,
                }}
                data-testid={`pub-tile-${i}`}
              >
                <div>
                  <div
                    className="text-[13px] md:text-[14px] mb-5 transition-colors duration-300"
                    style={{ color: muted }}
                  >
                    {t.category}
                  </div>
                  <h3
                    className="font-display transition-colors duration-300"
                    style={{
                      fontSize: "clamp(22px, 2.2vw, 28px)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      color: ink,
                    }}
                  >
                    {t.title}
                  </h3>
                </div>
                <div
                  className="mt-8 flex items-end justify-between gap-6"
                  style={{ color: ink }}
                >
                  {t.dek ? (
                    <p
                      className="text-[14px] leading-[1.55] pr-2 max-w-[16rem] transition-opacity duration-300"
                      style={{
                        color: muted,
                        opacity: isHover ? 1 : 0,
                      }}
                      aria-hidden={!isHover}
                    >
                      {t.dek}
                    </p>
                  ) : (
                    <span />
                  )}
                  <ArrowRight
                    size={22}
                    strokeWidth={2}
                    className="shrink-0 transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      color: isHover
                        ? "white"
                        : "hsl(var(--bs-forest-deep))",
                    }}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
