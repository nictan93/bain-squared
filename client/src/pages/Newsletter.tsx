import { useEffect, useState, FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Newsletter — dedicated subscribe landing page.
 * Editorial hero with inline form, "What you'll get" section,
 * recent issues teaser, FAQ band, closing CTA.
 */

const WHAT_YOULL_GET = [
  {
    n: "01",
    title: "One brief a month, not a flood",
    body:
      "A single operator-led note, sent on the first working day of the month. No drip campaigns. No 'thought-leadership' restated five different ways.",
  },
  {
    n: "02",
    title: "Built around one argument",
    body:
      "Each issue takes one decision a CFO, founder, or board actually has to make and walks through how we'd think about it. The kind of write-up we'd send a client over email anyway.",
  },
  {
    n: "03",
    title: "Sources you can check",
    body:
      "Filings, regulator guidance, primary data. Every claim is sourced. If we're estimating, we say so. If we're wrong, we update the next issue.",
  },
  {
    n: "04",
    title: "No selling",
    body:
      "We don't pitch services in the newsletter. If you want to talk about an engagement, the contact page is one click away. Otherwise we leave you alone.",
  },
];

const RECENT_ISSUES = [
  {
    date: "April 2026",
    topic: "Valuation",
    title: "Why your ESOP refresh probably needs to move sooner than you think",
    dek:
      "A walk through the trading-multiple shifts that change strike pricing across SaaS, fintech, and consumer this quarter, and what to do about it before the next grant window.",
  },
  {
    date: "March 2026",
    topic: "Fractional CFO",
    title: "The four numbers your board actually reads",
    dek:
      "After a hundred board packs, the ones that get read all share the same opening page. Here's the structure and why it works.",
  },
  {
    date: "February 2026",
    topic: "Agentic AI",
    title: "Pick the workflow, then pick the model. Not the other way around.",
    dek:
      "Most AI rollouts that stall in pilot stall because the workflow was picked to fit the tool. A short framework for inverting that choice.",
  },
];

const FAQ = [
  {
    q: "How often will I hear from you?",
    a: "Once a month. First working day of the month. We don't send anything else.",
  },
  {
    q: "Will my email be shared?",
    a: "No. It sits in our list, used only to send the newsletter. We don't sell it, share it, or use it for outbound sales.",
  },
  {
    q: "Can I unsubscribe?",
    a: "Yes, every issue has a one-click unsubscribe at the bottom. We don't ask why and we don't follow up.",
  },
  {
    q: "Who actually writes it?",
    a: "The partners. Each issue is written by whoever owns the topic that month, not a marketing team.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title =
      "Subscribe | Bain Squared Newsletter — One operator-led brief a month";
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = "Newsletter subscription";
    const bodyText = `Please add this address to the Bain Squared newsletter:\n\n${email}`;
    window.location.href = `mailto:hello@bainsquared.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyText)}`;
    setSubmitted(true);
  };

  return (
    <div className="bs-bg-canvas" data-testid="page-newsletter">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="bs-bg-canvas pt-32 md:pt-40 pb-16 md:pb-20"
          data-testid="newsletter-hero"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <p
                  className="text-[12px] font-semibold uppercase tracking-[0.18em] mb-6"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  The Bain Squared Brief
                </p>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(40px, 5.4vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  One brief.{" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                    One argument.
                  </span>{" "}
                  Once a month.
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p
                  className="text-[16px] md:text-[17px] leading-[1.6]"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  An operator-led note from the partners at Bain Squared on
                  what's actually changing in valuation, CFO advisory, and
                  agentic AI. Written for people who'd rather skim filings than
                  a marketing email.
                </p>
              </div>
            </div>

            {/* Inline form */}
            <div
              className="mt-12 md:mt-16 pt-10"
              style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "hsl(var(--bs-forest-deep))" }}
                  >
                    Subscribe
                  </p>
                  <p
                    className="mt-3 text-[15px] leading-[1.6]"
                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                  >
                    Drop your work email. First issue lands the next first of
                    the month. Unsubscribe in one click anytime.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  {submitted ? (
                    <div
                      className="p-6"
                      style={{
                        border: "1px solid hsl(var(--bs-hairline))",
                        background: "#FFFFFF",
                        borderLeft: "4px solid hsl(var(--bs-forest-deep))",
                      }}
                      data-testid="newsletter-success"
                    >
                      <div
                        className="text-[16px] font-bold mb-1"
                        style={{ color: "hsl(var(--bs-ink))" }}
                      >
                        Your mail client just opened.
                      </div>
                      <div
                        className="text-[14px] leading-[1.55]"
                        style={{ color: "hsl(var(--bs-ink-muted))" }}
                      >
                        Hit send on the draft and we'll add you to the list.
                        We confirm subscriptions manually so the list stays
                        clean.
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={onSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                      data-testid="newsletter-form"
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@work-email.com"
                        className="flex-1 px-5 py-4 text-[15px] focus:outline-none"
                        style={{
                          background: "#FFFFFF",
                          color: "hsl(var(--bs-ink))",
                          border: "1px solid hsl(var(--bs-hairline))",
                        }}
                        data-testid="input-newsletter-email"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors"
                        style={{
                          background: "hsl(var(--bs-forest-deep))",
                          color: "#FFFFFF",
                          border: "1px solid hsl(var(--bs-forest-deep))",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "hsl(var(--bs-ink))";
                          e.currentTarget.style.borderColor = "hsl(var(--bs-ink))";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "hsl(var(--bs-forest-deep))";
                          e.currentTarget.style.borderColor =
                            "hsl(var(--bs-forest-deep))";
                        }}
                        data-testid="button-newsletter-subscribe"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                  <p
                    className="mt-4 text-[12px]"
                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                  >
                    We never sell, share, or rent your address. See our{" "}
                    <a
                      href="#/privacy"
                      className="underline"
                      style={{ color: "hsl(var(--bs-forest-deep))" }}
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll get */}
        <section
          className="pb-20 md:pb-28"
          data-testid="newsletter-what"
          style={{
            borderTop: "1px solid hsl(var(--bs-hairline))",
            paddingTop: "80px",
          }}
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                    style={{ color: "hsl(var(--bs-forest-deep))" }}
                  >
                    01 / What you'll get
                  </p>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(28px, 2.8vw, 40px)",
                      fontWeight: 700,
                      lineHeight: 1.12,
                      letterSpacing: "-0.015em",
                      color: "hsl(var(--bs-ink))",
                    }}
                  >
                    What lands in your inbox, and what won't.
                  </h2>
                  <p
                    className="mt-5 text-[15px] leading-[1.65]"
                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                  >
                    We treat your inbox the way we'd want ours treated. If we
                    don't have something worth your time, we don't send.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  {WHAT_YOULL_GET.map((item) => (
                    <li key={item.n}>
                      <div
                        className="text-[12px] font-semibold mb-3"
                        style={{ color: "hsl(var(--bs-forest-deep))" }}
                      >
                        {item.n}
                      </div>
                      <h3
                        className="font-display text-[20px] md:text-[22px]"
                        style={{
                          fontWeight: 700,
                          lineHeight: 1.25,
                          color: "hsl(var(--bs-ink))",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-3 text-[15px] leading-[1.6]"
                        style={{ color: "hsl(var(--bs-ink-muted))" }}
                      >
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recent issues */}
        <section
          className="py-20 md:py-28"
          style={{ background: "#FFFFFF" }}
          data-testid="newsletter-recent"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-16">
              <div className="lg:col-span-5">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  02 / Recent issues
                </p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 2.8vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.12,
                    letterSpacing: "-0.015em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  A sample of what's gone out lately.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:flex lg:items-end">
                <p
                  className="text-[15px] leading-[1.65]"
                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                >
                  Three recent briefs, in case you want a feel for the voice
                  and the length before you sign up.
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}>
              {RECENT_ISSUES.map((issue, i) => (
                <article
                  key={i}
                  className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
                  style={{
                    borderBottom: "1px solid hsl(var(--bs-hairline))",
                  }}
                  data-testid={`recent-issue-${i}`}
                >
                  <div className="lg:col-span-3">
                    <div
                      className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "hsl(var(--bs-forest-deep))" }}
                    >
                      {issue.date}
                    </div>
                    <div
                      className="mt-2 text-[13px]"
                      style={{ color: "hsl(var(--bs-ink-muted))" }}
                    >
                      {issue.topic}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(22px, 2.1vw, 28px)",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        color: "hsl(var(--bs-ink))",
                      }}
                    >
                      {issue.title}
                    </h3>
                    <p
                      className="mt-3 text-[15px] leading-[1.65] max-w-[760px]"
                      style={{ color: "hsl(var(--bs-ink-muted))" }}
                    >
                      {issue.dek}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ band */}
        <section
          className="py-20 md:py-28 bs-bg-canvas"
          data-testid="newsletter-faq"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                  style={{ color: "hsl(var(--bs-forest-deep))" }}
                >
                  03 / Before you subscribe
                </p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 2.8vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.12,
                    letterSpacing: "-0.015em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  The usual questions.
                </h2>
              </div>
              <div
                className="lg:col-span-8"
                style={{ borderTop: "1px solid hsl(var(--bs-hairline))" }}
              >
                {FAQ.map((item, i) => (
                  <div
                    key={i}
                    className="py-7"
                    style={{
                      borderBottom: "1px solid hsl(var(--bs-hairline))",
                    }}
                  >
                    <div
                      className="font-display text-[18px] md:text-[20px]"
                      style={{
                        fontWeight: 600,
                        color: "hsl(var(--bs-ink))",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.q}
                    </div>
                    <p
                      className="mt-3 text-[15px] leading-[1.65]"
                      style={{ color: "hsl(var(--bs-ink-muted))" }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA — forest band */}
        <section
          className="py-20 md:py-28"
          style={{ background: "hsl(var(--bs-forest-deep))" }}
          data-testid="newsletter-cta"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(32px, 3.6vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: "-0.018em",
                    color: "#FFFFFF",
                  }}
                >
                  Ready when you are.
                </h2>
                <p
                  className="mt-5 text-[17px] leading-[1.6] max-w-[640px]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Twelve briefs a year. No drip campaigns. No upsells.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a
                  href="#newsletter-hero"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(
                      '[data-testid="newsletter-hero"]',
                    );
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.1em]"
                  style={{
                    background: "#FFFFFF",
                    color: "hsl(var(--bs-forest-deep))",
                  }}
                  data-testid="cta-back-to-form"
                >
                  Back to subscribe
                  <span className="bs-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
