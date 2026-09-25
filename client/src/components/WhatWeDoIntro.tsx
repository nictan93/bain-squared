/**
 * What we do — intro band.
 * Centered description, then centered headline below at H2 scale.
 * Mirrors Thoughtworks image 10 but compressed for Bain Squared.
 */
export function WhatWeDoIntro() {
  return (
    <section
      className="bs-bg-canvas pt-40 md:pt-48 pb-12 md:pb-16"
      data-testid="what-we-do-intro"
    >
      <div className="bs-container">
        <p
          className="mx-auto text-center text-[17px] md:text-[19px] leading-[1.55]"
          style={{ color: "hsl(var(--bs-ink))", maxWidth: "880px" }}
        >
          Growth puts pressure on the systems, decisions and financial information
          a business depends on. Bain Squared brings together AI operations,
          finance leadership and valuation to address the constraint holding
          the business back.
        </p>

        <h1
          className="mt-16 md:mt-20 mx-auto text-center font-display"
          style={{
            fontSize: "var(--bs-type-page)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "hsl(var(--bs-ink))",
            maxWidth: "900px", fontFamily: "Bitter, Georgia, serif"}}
        >
          The capabilities behind your next stage of{" "}
          <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
            growth
          </span>
        </h1>
      </div>
    </section>
  );
}
