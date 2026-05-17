/**
 * FormIntro — centered intro paragraph + big bold headline.
 * Matches Thoughtworks reference image 12 (Careers form intro).
 */

type Props = {
  paragraph: string;
  headline: string;
  /** Optional accent (Forest Deep) phrase appended to headline */
  accent?: string;
};

export function FormIntro({ paragraph, headline, accent }: Props) {
  return (
    <section
      className="bs-bg-canvas pt-32 md:pt-40 pb-12 md:pb-16"
      data-testid="form-intro"
    >
      <div className="bs-container">
        <div className="mx-auto text-center" style={{ maxWidth: "880px" }}>
          <p
            className="text-[17px] md:text-[19px] leading-[1.55] mb-10 md:mb-14"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {paragraph}
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(34px, 4.6vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            {headline}
            {accent && (
              <>
                {" "}
                <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                  {accent}
                </span>
              </>
            )}
          </h1>
        </div>
      </div>
    </section>
  );
}
