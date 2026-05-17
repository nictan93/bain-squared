export function Hero() {
  return (
    <section
      className="bs-bg-canvas relative pt-[180px] pb-[120px] md:pt-[220px] md:pb-[140px] lg:pt-[240px] lg:pb-[160px]"
      data-testid="section-hero"
    >
      <div className="bs-container">
        <div className="max-w-[880px] bs-fade-in">
          <span className="bs-eyebrow" data-testid="text-hero-eyebrow">
            Operator-led advisory
          </span>

          <h1 className="bs-h1-hero mb-8" data-testid="text-hero-headline">
            Growth,
            <br />
            <span style={{ color: "hsl(var(--bs-forest-deep))" }}>squared.</span>
          </h1>

          {/* Deep Forest accent rule per build guide */}
          <hr
            className="my-8"
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "hsl(var(--bs-forest-deep))",
              border: 0,
            }}
            aria-hidden="true"
          />

          <p className="bs-lead mb-10 max-w-[720px]" data-testid="text-hero-lead">
            Bain Squared is a Singapore-based advisory operator. We bring real operator
            judgment to valuation, financial transformation, and AI deployment. We work
            with founders, CFOs, and investors who need execution, not slides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" })}
              className="bs-btn"
              data-testid="button-see-what-we-do"
            >
              See what we do
              <span className="bs-arrow" aria-hidden="true" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bs-btn-ghost"
              data-testid="button-speak-with-us-hero"
            >
              Speak with us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[hsl(var(--bs-ink-muted))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
        aria-label="Scroll to next section"
        data-testid="button-scroll-cue"
      >
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase">
          Scroll
        </span>
        <span
          className="bs-arrow bs-bounce-arrow"
          style={{
            color: "hsl(var(--bs-forest-deep))",
            transform: "rotate(135deg)",
            borderWidth: "2px",
          }}
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
