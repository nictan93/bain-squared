import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  REVIEW_GROUPS,
  WHY_CLIENTS_POINTS,
  type Review,
} from "@/data/reviews";

/**
 * Reviews — client feedback page.
 * Structure: hero, intro, grouped review sections, "Why clients work with us"
 * band, closing CTA. Editorial, consistent with the rest of the site.
 */

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className="bs-bg-surface"
      style={{
        background: "#FFFFFF",
        padding: "40px 44px",
        border: "1px solid hsl(var(--bs-hairline))",
        borderLeft: "4px solid hsl(var(--bs-forest-deep))",
      }}
      data-testid={`review-card-${index}`}
    >
      <blockquote
        className="font-display"
        style={{
          fontSize: "clamp(20px, 1.8vw, 24px)",
          lineHeight: 1.45,
          fontWeight: 400,
          color: "hsl(var(--bs-ink))",
          letterSpacing: "-0.005em",
          margin: 0,
        }}
      >
        “{review.quote}”
      </blockquote>

      <div
        className="mt-6 pt-6"
        style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}
      >
        <div className="text-[14px] font-semibold" style={{ color: "hsl(var(--bs-ink))" }}>
          {review.reviewer}
        </div>
        <div
          className="text-[13px] mt-1"
          style={{ color: "hsl(var(--bs-ink-muted))" }}
        >
          {review.companyType}
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <div>
          <dt
            className="text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            Service used
          </dt>
          <dd
            className="mt-2 text-[14px] leading-[1.5]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {review.service}
          </dd>
        </div>
        <div>
          <dt
            className="text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            Problem solved
          </dt>
          <dd
            className="mt-2 text-[14px] leading-[1.5]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {review.problem}
          </dd>
        </div>
        <div>
          <dt
            className="text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            Outcome
          </dt>
          <dd
            className="mt-2 text-[14px] leading-[1.5]"
            style={{ color: "hsl(var(--bs-ink))" }}
          >
            {review.outcome}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function Reviews() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title =
      "Bain Squared Reviews | Client Feedback on Valuation, CFO Advisory & AI Automation";
  }, []);

  return (
    <div className="bs-bg-canvas" data-testid="page-reviews">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="bs-bg-canvas pt-32 md:pt-40 pb-12 md:pb-16"
          data-testid="reviews-hero"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1
                  className="font-display"
                  style={{
                    fontSize: "var(--bs-type-page)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
                >
                  Bain Squared{" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                    reviews.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p
                  className="text-[16px] md:text-[17px] leading-[1.6]"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  Client feedback, testimonials, and project reflections from
                  companies that have worked with Bain Squared across
                  valuation, CFO advisory, financial transformation, and
                  agentic AI automation engagements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped reviews */}
        {REVIEW_GROUPS.map((group, gi) => (
          <section
            key={group.id}
            className="py-16 md:py-24"
            data-testid={`reviews-group-${group.id}`}
            style={{
              background: gi % 2 === 0 ? "hsl(var(--bs-surface))" : "hsl(var(--bs-forest-soft))",
            }}
          >
            <div className="bs-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left rail — sticky title + intro */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "var(--bs-type-section)",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: "-0.015em",
                        color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
                    >
                      {group.title}
                    </h2>
                    <p
                      className="mt-5 text-[15px] leading-[1.65]"
                      style={{ color: "hsl(var(--bs-ink-muted))" }}
                    >
                      {group.intro}
                    </p>
                  </div>
                </div>

                {/* Right column — review cards */}
                <div className="lg:col-span-8 space-y-6 md:space-y-8">
                  {group.reviews.map((r, ri) => (
                    <ReviewCard
                      key={`${group.id}-${ri}`}
                      review={r}
                      index={ri}
                    />
                  ))}
                </div>
              </div>
            </div>

          </section>
        ))}

        {/* Why clients work with us — forest-deep band */}
        <section
          className="py-20 md:py-28"
          style={{ background: "hsl(var(--bs-forest-deep))" }}
          data-testid="reviews-why"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <h2
                  className="font-display"
                  style={{
                    fontSize: "var(--bs-type-section)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.018em",
                    color: "#FFFFFF", fontFamily: "Bitter, Georgia, serif"}}
                >
                  Experience connected to delivery.
                </h2>
                <p
                  className="mt-6 text-[16px] leading-[1.65]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  An engagement can add specialist capacity to an existing team or address a defined operating problem. We agree the responsibilities, delivery scope and handover around that need.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  {WHY_CLIENTS_POINTS.map((p, i) => (
                    <li key={p.title}>
                      <h3
                        className="font-display text-[20px] md:text-[22px]"
                        style={{
                          fontWeight: 700,
                          lineHeight: 1.2,
                          color: "#FFFFFF", fontSize: "var(--bs-type-card)", fontFamily: "Bitter, Georgia, serif"}}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="mt-3 text-[15px] leading-[1.6]"
                        style={{ color: "rgba(255,255,255,0.78)" }}
                      >
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          className="bs-bg-canvas py-20 md:py-28"
          data-testid="reviews-cta"
        >
          <div className="bs-container">
            <div className="max-w-[820px]">
              <h2
                className="font-display"
                style={{
                  fontSize: "var(--bs-type-section)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.018em",
                  color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
              >
                Discuss a project with our team.
              </h2>
              <p
                className="mt-5 text-[17px] leading-[1.6] max-w-[640px]"
                style={{ color: "hsl(var(--bs-ink-muted))" }}
              >
                Tell us what needs to change and the decision you need to make. We will discuss the context and whether our team can help.
              </p>
              <a
                href="#/contact"
                className="bs-btn bs-btn-inverse mt-8 inline-flex items-center gap-2"
                data-testid="cta-contact"
              >
                Bring us your problem
                <span className="bs-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
