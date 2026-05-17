import { useState, FormEvent } from "react";

/**
 * NewsletterSubscribe — full-width subscribe band.
 * Submits via mailto:hello@bainsquared.com (no backend).
 * Anchored at id="subscribe" so the Insights hero CTA can scroll here.
 */

type Props = {
  heading?: string;
  body?: string;
  id?: string;
};

export function NewsletterSubscribe({
  heading = "Subscribe to our newsletter",
  body = "One operator-led note in your inbox each month. No filler, no funnel.",
  id = "subscribe",
}: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = "Newsletter subscription";
    const bodyText = `Please add this address to the Bain Squared newsletter:\n\n${email}`;
    window.location.href = `mailto:hello@bainsquared.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;
    setSubmitted(true);
  };

  return (
    <section
      id={id}
      className="py-20 md:py-28"
      style={{
        backgroundColor: "hsl(var(--bs-forest-deep))",
      }}
      data-testid="newsletter-subscribe"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "white",
              }}
            >
              {heading}
            </h2>
            <p
              className="mt-5 text-[16px] md:text-[17px] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {body}
            </p>
          </div>

          <div className="lg:col-span-6">
            {submitted ? (
              <div
                className="p-6 border"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
                data-testid="subscribe-success"
              >
                <div
                  className="text-[16px] font-bold mb-1"
                  style={{ color: "white" }}
                >
                  Your mail client just opened.
                </div>
                <div
                  className="text-[14px] leading-[1.55]"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Hit send on the draft and we will add you to the list.
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col sm:flex-row gap-3"
                data-testid="subscribe-form"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@work-email.com"
                  className="flex-1 px-4 py-4 text-[15px] focus:outline-none border"
                  style={{
                    backgroundColor: "white",
                    color: "hsl(var(--bs-ink))",
                    borderColor: "white",
                  }}
                  data-testid="input-subscribe-email"
                />
                <button
                  type="submit"
                  className="px-8 py-4 text-[15px] font-bold whitespace-nowrap transition-colors border"
                  style={{
                    backgroundColor: "white",
                    color: "hsl(var(--bs-forest-deep))",
                    borderColor: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "hsl(var(--bs-forest-accent))";
                    e.currentTarget.style.borderColor =
                      "hsl(var(--bs-forest-accent))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "white";
                  }}
                  data-testid="button-subscribe"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
