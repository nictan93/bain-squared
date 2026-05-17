/**
 * ArticleHero — full-bleed dark hero image with text bottom-left.
 * Mirrors McKinsey Quarterly article hero:
 *   - Dark photograph background, full-bleed
 *   - Eyebrow (small italic publication name)
 *   - Display serif headline (large)
 *   - Meta row: "Date | Type"
 * Anchored bottom-left inside the container.
 */

type Props = {
  publication: string;   // e.g. "Bain Squared Field Notes"
  headline: string;
  date: string;          // formatted: "May 14, 2026"
  type: string;          // "Article" / "Field Note" / "Perspective"
  image: string;         // URL
};

export function ArticleHero({ publication, headline, date, type, image }: Props) {
  return (
    <section
      className="relative w-full"
      style={{ height: "min(78vh, 720px)", minHeight: "520px" }}
      data-testid="article-hero"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Anchor text bottom-left */}
      <div className="relative h-full bs-container flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-[820px]">
          <div
            className="text-[14px] italic mb-5"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-display, Bitter, Georgia, serif)" }}
          >
            {publication}
          </div>
          <h1
            className="font-display"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(34px, 5.2vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.012em",
            }}
          >
            {headline}
          </h1>
          <div
            className="mt-6 text-[13px] tracking-wide"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            {date} <span className="mx-2" aria-hidden="true">|</span> {type}
          </div>
        </div>
      </div>
    </section>
  );
}
