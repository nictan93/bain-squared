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
          Everyone agrees AI matters. Fewer leaders agree on where to start,
          or who owns the risk when it breaks. CIOs worry about fragile cores.
          Functional chiefs want AI to streamline their functions. CEOs and
          product leaders want something new in market. Most AI programs fail
          by picking only one of these.
        </p>

        <h1
          className="mt-16 md:mt-20 mx-auto text-center font-display"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            color: "hsl(var(--bs-ink))",
            maxWidth: "900px",
          }}
        >
          How Bain Squared helps every chief deliver{" "}
          <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
            growth
          </span>
        </h1>
      </div>
    </section>
  );
}
