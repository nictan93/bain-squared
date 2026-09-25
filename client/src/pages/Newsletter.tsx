import { useEffect, useRef, useState, type FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BENEFITS = [
  { title: "A focused monthly brief", body: "A considered selection of ideas across AI, finance and enterprise value, with enough context to understand why they matter to your business." },
  { title: "A decision worth exploring", body: "Each issue examines a question facing founders, finance leaders or boards, with a clear point of view and the reasoning behind it." },
  { title: "Evidence you can examine", body: "Sources, assumptions and limitations make the argument easier to assess and discuss with your team." },
  { title: "Ideas you can put to work", body: "Practical methods and selected reading to take into your next planning session, board discussion or project review." },
];
const QUESTIONS = [
  { q: "Who is the Brief for?", a: "Founders, finance leaders and people responsible for improving how a business operates. We connect the business question with the practical work needed to address it." },
  { q: "How often will I hear from you?", a: "The Brief is planned as a monthly publication, bringing together one main perspective and selected reading from Bain Squared." },
  { q: "How do I subscribe?", a: "The form prepares an email request. Send that email to hello@bainsquared.com with the address you would like to subscribe." },
  { q: "Can I unsubscribe?", a: "You can ask to be removed at any time by emailing hello@bainsquared.com. Our privacy policy explains how we handle your information." },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const signupRef = useRef<HTMLDivElement>(null);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Please add this address to the Bain Squared newsletter:\n\n${email}`;
    window.location.href = `mailto:hello@bainsquared.com?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };
  const returnToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    emailRef.current?.focus({ preventScroll: true });
  };
  return (
    <div className="bs-bg-canvas" data-testid="page-newsletter">
      <Header />
      <main>
        <section className="bs-bg-canvas pt-32 md:pt-40 pb-16 md:pb-20" data-testid="newsletter-hero">
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <h1 className="bs-page-heading">The Bain Squared<br /><span className="text-[hsl(var(--bs-forest-deep))]">Brief</span></h1>
              </div>
              <p className="lg:col-span-5 text-[17px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">A monthly perspective on AI, finance and enterprise value. Ideas to help you make informed decisions and put them into practice.</p>
            </div>
            <div ref={signupRef} id="newsletter-signup" className="mt-12 md:mt-16 pt-10 border-t border-[hsl(var(--bs-hairline))] scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <h2 className="font-display font-bold text-[26px] leading-[1.2]">Receive the Brief</h2>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">Add your email address to prepare a subscription request.</p>
                </div>
                <div className="lg:col-span-8">
                  {submitted ? (
                    <div className="p-6 bg-white border border-[hsl(var(--bs-hairline))]" role="status" data-testid="newsletter-success">
                      <p className="font-medium">Send the email to complete your request.</p>
                      <p className="mt-2 text-[15px] leading-relaxed">If your email app did not open, write to <a className="underline" href="mailto:hello@bainsquared.com">hello@bainsquared.com</a> with the address you would like to subscribe.</p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} data-testid="newsletter-form">
                      <label htmlFor="newsletter-email" className="block text-[14px] font-medium mb-2">Email address</label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input ref={emailRef} id="newsletter-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" aria-describedby="newsletter-request-note" className="min-w-0 flex-1 px-5 py-4 bg-white border border-[hsl(var(--bs-hairline))] text-[16px]" data-testid="input-newsletter-email" />
                        <button type="submit" className="px-7 py-4 bg-[hsl(var(--bs-forest-deep))] text-white text-[15px] font-medium hover:bg-[hsl(var(--bs-ink))]" data-testid="button-newsletter-subscribe">Subscribe by email</button>
                      </div>
                    </form>
                  )}
                  <p id="newsletter-request-note" className="mt-4 text-[13px] text-[hsl(var(--bs-ink-muted))]">Opens an email request. Read our <a href="/privacy" className="underline underline-offset-2">privacy policy</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 md:py-28" data-testid="newsletter-what">
          <div className="bs-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4"><div className="lg:sticky lg:top-32">
              <h2 className="bs-section-heading">What to expect</h2>
              <p className="mt-5 text-[16px] leading-[1.65] text-[hsl(var(--bs-ink-muted))]">One business question, considered in depth, with useful reading to take the discussion further.</p>
            </div></div>
            <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {BENEFITS.map(item => <li key={item.title}><h3 className="bs-card-heading">{item.title}</h3><p className="mt-4 text-[16px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">{item.body}</p></li>)}
            </ul>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-[hsl(var(--bs-forest-soft))]" data-testid="newsletter-faq">
          <div className="bs-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <h2 className="lg:col-span-4 bs-section-heading">Before you subscribe</h2>
            <div className="lg:col-span-8 border-t border-[hsl(var(--bs-forest-accent))]">
              {QUESTIONS.map(item => <div key={item.q} className="py-7 border-b border-[hsl(var(--bs-forest-accent))]"><h3 className="font-display font-semibold text-[20px] leading-[1.3]">{item.q}</h3><p className="mt-3 text-[16px] leading-[1.65] text-[hsl(var(--bs-ink-muted))]">{item.a}</p></div>)}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-[hsl(var(--bs-forest-deep))]" data-testid="newsletter-cta">
          <div className="bs-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7"><h2 className="bs-section-heading text-white">Receive the next perspective.</h2><p className="mt-5 text-[17px] leading-[1.6] text-[hsl(var(--bs-forest-accent))]">A monthly selection of ideas and practical reading from Bain Squared.</p></div>
            <div className="lg:col-span-5 lg:text-right"><button type="button" onClick={returnToSignup} className="inline-flex items-center gap-3 px-7 py-4 bg-white text-[hsl(var(--bs-forest-deep))] font-medium" data-testid="cta-back-to-form">Back to subscribe<span className="bs-arrow" aria-hidden="true" /></button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
