import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { REVIEW_GROUPS, WHY_CLIENTS_POINTS, type Review, type ReviewGroup } from "@/data/reviews";
import { getReviewGroups } from "@/lib/queries";

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className="bs-bg-surface"
      style={{ background: "#FFFFFF", padding: "40px 44px", border: "1px solid hsl(var(--bs-hairline))", borderLeft: "4px solid hsl(var(--bs-forest-deep))" }}
      data-testid={`review-card-${index}`}
    >
      <blockquote className="font-display" style={{ fontSize: "clamp(20px, 1.8vw, 24px)", lineHeight: 1.45, fontWeight: 400, color: "hsl(var(--bs-ink))", letterSpacing: "-0.005em", margin: 0 }}>
        "{review.quote}"
      </blockquote>

      <div className="mt-6 pt-6" style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}>
        <div className="text-[14px] font-semibold" style={{ color: "hsl(var(--bs-ink))" }}>{review.reviewer}</div>
        <div className="text-[13px] mt-1" style={{ color: "hsl(var(--bs-ink-muted))" }}>{review.companyType}</div>
      </div>

      <dl className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        {[
          { label: "Service used", value: review.service },
          { label: "Problem solved", value: review.problem },
          { label: "Outcome", value: review.outcome },
        ].map(({ label, value }) => (
          <div key={label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "hsl(var(--bs-forest-deep))" }}>{label}</dt>
            <dd className="mt-2 text-[14px] leading-[1.5]" style={{ color: "hsl(var(--bs-ink))" }}>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function Reviews() {
  const [groups, setGroups] = useState<ReviewGroup[]>(REVIEW_GROUPS);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Bain Squared Reviews | Client Feedback on Valuation, CFO Advisory & AI Automation";
    getReviewGroups().then((result) => { if (result?.length) setGroups(result); });
  }, []);

  return (
    <div className="bs-bg-canvas" data-testid="page-reviews">
      <Header />
      <main>
        {/* Hero */}
        <section className="bs-bg-canvas pt-32 md:pt-40 pb-12 md:pb-16" data-testid="reviews-hero">
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "hsl(var(--bs-forest-deep))" }}>
                  Client Feedback
                </p>
                <h1 className="font-display" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "hsl(var(--bs-ink))" }}>
                  Bain Squared{" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>reviews.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-[16px] md:text-[17px] leading-[1.6]" style={{ color: "hsl(var(--bs-ink-muted))" }}>
                  Client feedback, testimonials, and project reflections from companies that have worked with Bain Squared across valuation, CFO advisory, financial transformation, and agentic AI automation engagements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped reviews */}
        {groups.map((group, gi) => (
          <section
            key={group.id}
            className="pb-16 md:pb-24"
            data-testid={`reviews-group-${group.id}`}
            style={{ borderTop: gi === 0 ? "1px solid hsl(var(--bs-hairline))" : undefined, paddingTop: "64px" }}
          >
            <div className="bs-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "hsl(var(--bs-forest-deep))" }}>
                      0{gi + 1} / Reviews
                    </p>
                    <h2 className="font-display" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.015em", color: "hsl(var(--bs-ink))" }}>
                      {group.title}
                    </h2>
                    <p className="mt-5 text-[15px] leading-[1.65]" style={{ color: "hsl(var(--bs-ink-muted))" }}>
                      {group.intro}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6 md:space-y-8">
                  {group.reviews.map((r, ri) => (
                    <ReviewCard key={`${group.id}-${ri}`} review={r} index={ri} />
                  ))}
                </div>
              </div>
            </div>

            {gi < groups.length - 1 && (
              <div className="bs-container mt-16 md:mt-24">
                <div style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }} />
              </div>
            )}
          </section>
        ))}

        {/* Why clients work with us */}
        <section className="py-20 md:py-28" style={{ background: "hsl(var(--bs-forest-deep))" }} data-testid="reviews-why">
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-5" style={{ color: "hsl(var(--bs-forest-accent))" }}>
                  Why clients work with Bain Squared
                </p>
                <h2 className="font-display" style={{ fontSize: "clamp(32px, 3.4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.018em", color: "#FFFFFF" }}>
                  Senior-level thinking, without traditional consulting overhead.
                </h2>
                <p className="mt-6 text-[16px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.78)" }}>
                  Most engagements start because the in-house team is strong but short of senior bandwidth in one specific area. We come in, do that work, hand it back, and step out.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  {WHY_CLIENTS_POINTS.map((p, i) => (
                    <li key={p.title}>
                      <div className="text-[12px] font-semibold mb-3" style={{ color: "hsl(var(--bs-forest-accent))" }}>0{i + 1}</div>
                      <h3 className="font-display text-[20px] md:text-[22px]" style={{ fontWeight: 700, lineHeight: 1.25, color: "#FFFFFF" }}>{p.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.78)" }}>{p.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bs-bg-canvas py-20 md:py-28" data-testid="reviews-cta">
          <div className="bs-container">
            <div className="max-w-[820px]">
              <h2 className="font-display" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.018em", color: "hsl(var(--bs-ink))" }}>
                Have a project you'd want us in the seat for?
              </h2>
              <p className="mt-5 text-[17px] leading-[1.6] max-w-[640px]" style={{ color: "hsl(var(--bs-ink-muted))" }}>
                Tell us where the operating core needs the rebuild. A partner will get back to you within two business days.
              </p>
              <a href="/contact" className="bs-btn bs-btn-inverse mt-8 inline-flex items-center gap-2" data-testid="cta-contact">
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
