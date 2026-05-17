export function ClosingCTA() {
  return (
    <section
      id="contact"
      className="bs-section bs-bg-forest-deep"
      data-testid="section-closing-cta"
    >
      <div className="bs-container">
        <div className="max-w-[880px] mx-auto text-center">
          <h2
            className="bs-h1-display mb-6"
            style={{ color: "hsl(var(--bs-canvas))" }}
            data-testid="text-cta-headline"
          >
            Bring us your hardest
            <br />
            growth question.
          </h2>
          <p
            className="bs-lead mb-10"
            style={{ color: "hsl(var(--bs-forest-accent))" }}
          >
            We'll tell you on the first call whether we're the right fit, and what we'd
            do if we were.
          </p>
          <a
            href="mailto:hello@bainsquared.com"
            className="bs-btn bs-btn-inverse"
            data-testid="button-speak-with-us-cta"
          >
            Speak with us
            <span className="bs-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
