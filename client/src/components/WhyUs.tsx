export function WhyUs() {
  return (
    <section
      id="about"
      className="bs-section bs-bg-forest-soft"
      data-testid="section-why-us"
    >
      <div className="bs-container">
        <div className="max-w-[880px] mx-auto text-center">
          <span className="bs-eyebrow">Why Bain Squared</span>
          <h2 className="bs-h1-display mb-8" data-testid="text-why-us-headline">
            Built by operators,
            <br />
            not consultants.
          </h2>
          <div className="space-y-6 text-left md:text-center">
            <p className="bs-lead text-[hsl(var(--bs-ink))]">
              Most consulting advice sounds correct and compounds slowly. We work the
              other way. The person writing the strategy is the person who sits through
              your Monday operating review.
            </p>
            <p className="bs-lead text-[hsl(var(--bs-ink-muted))]">
              We recommend less. We do more. We price for outcomes, not pages. If you
              need a 100-page deck, we are not your firm. If you need a real partner in
              the seat, we already are.
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#about"
              className="bs-card-link inline-flex items-center gap-2"
              data-testid="link-read-pov"
            >
              Read our point of view
              <span className="bs-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
