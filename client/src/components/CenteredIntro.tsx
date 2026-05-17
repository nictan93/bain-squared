/**
 * CenteredIntro — centered paragraph above a big display headline
 * with an accent word. Matches reference image 15.
 *
 * Used as a section intro on Featured Topic / Perspective pages.
 */

type Props = {
  paragraph: string;
  before: string;
  accent: string;
  after?: string;
};

export function CenteredIntro({ paragraph, before, accent, after }: Props) {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="centered-intro"
    >
      <div className="bs-container">
        <div className="mx-auto text-center" style={{ maxWidth: "1000px" }}>
          <p
            className="mx-auto text-[16px] md:text-[18px] leading-[1.6] mb-14 md:mb-20"
            style={{ color: "hsl(var(--bs-ink))", maxWidth: "780px" }}
          >
            {paragraph}
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4.4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            {before}{" "}
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
              {accent}
            </span>
            {after ? ` ${after}` : ""}
          </h2>
        </div>
      </div>
    </section>
  );
}
