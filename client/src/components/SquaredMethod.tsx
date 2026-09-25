/**
 * The Squared Method — Diagnose → Design → Deploy → Defend.
 * Mirrors Thoughtworks image 13 (3-3-3 method): centered headline with
 * accent-color span + supporting description below.
 */
export function SquaredMethod() {
  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="squared-method"
    >
      <div className="bs-container">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "hsl(var(--bs-ink))",
            }}
          >
            Operator-led delivery with
            <br />
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
              the Squared Method
            </span>
          </h2>

          <p
            className="mt-10 mx-auto text-[16px] md:text-[18px] leading-[1.6]"
            style={{ color: "hsl(var(--bs-ink))", maxWidth: "820px" }}
          >
            <strong>Diagnose</strong> the constraint and agree who owns it.{" "}
            <strong>Design</strong> the workflow, model or system around that need.{" "}
            <strong>Deploy</strong> it alongside your team, with clear responsibilities
            and checks. <strong>Defend</strong> the result with documented evidence,
            ongoing review and a practical handover.
          </p>

          {/* Four-step chip row */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {["Diagnose", "Design", "Deploy", "Defend"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-6">
                <div
                  className="px-6 py-3 text-[15px] md:text-[16px] font-bold border"
                  style={{
                    borderColor: "hsl(var(--bs-forest-deep))",
                    color: "hsl(var(--bs-forest-deep))",
                  }}
                >
                  {step}
                </div>
                {i < 3 && (
                  <span
                    aria-hidden="true"
                    className="text-[22px] font-bold"
                    style={{ color: "hsl(var(--bs-forest-deep))" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
