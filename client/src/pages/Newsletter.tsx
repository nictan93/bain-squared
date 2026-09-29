import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BENEFITS = [
  { title: "A focused monthly newsletter", body: "A considered selection of ideas across AI, finance and enterprise value, with enough context to understand why they matter to your business." },
  { title: "A decision worth exploring", body: "Each issue examines a question facing founders, finance leaders or boards, with a clear point of view and the reasoning behind it." },
  { title: "Evidence you can examine", body: "Sources, assumptions and limitations make the argument easier to assess and discuss with your team." },
  { title: "Ideas you can put to work", body: "Practical methods and selected reading to take into your next planning session, board discussion or project review." },
];
const QUESTIONS = [
  { q: "Who is the newsletter for?", a: "Founders, finance leaders and people responsible for improving how a business operates. We connect the business question with the practical work needed to address it." },
  { q: "How often will I hear from you?", a: "The newsletter is planned as a monthly publication, bringing together one main perspective and selected reading from Bain Squared." },
  { q: "How do I subscribe?", a: "Enter your email address in the form. You will be subscribed immediately and receive a welcome email. No confirmation click is needed." },
  { q: "Can I unsubscribe?", a: "Use the unsubscribe link in any newsletter. You can also contact hello@bainsquared.com for help. Our privacy policy explains how we handle your information." },
];

export default function Newsletter() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [frameHeight, setFrameHeight] = useState(240);
  const signupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frameRef.current?.contentWindow || event.data?.type !== "bs-newsletter-height") return;
      if (typeof event.data.height === "number" && Number.isFinite(event.data.height)) setFrameHeight(Math.max(80, Math.min(1000, event.data.height + 8)));
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, []);
  const returnToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    frameRef.current?.focus({ preventScroll: true });
  };
  return (
    <div className="bs-bg-canvas" data-testid="page-newsletter">
      <Header />
      <main>
        <section className="bs-bg-canvas pt-32 md:pt-40 pb-16 md:pb-20" data-testid="newsletter-hero">
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <h1 className="bs-page-heading">The Bain Squared<br /><span className="text-[hsl(var(--bs-forest-deep))]">Newsletter</span></h1>
              </div>
              <p className="lg:col-span-5 text-[17px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">A monthly perspective on AI, finance and enterprise value. Ideas to help you make informed decisions and put them into practice.</p>
            </div>
            <div ref={signupRef} id="newsletter-signup" className="mt-12 md:mt-16 pt-10 border-t border-[hsl(var(--bs-hairline))] scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <h2 className="font-display font-bold text-[26px] leading-[1.2]">Receive the newsletter</h2>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">Subscribe here to receive a welcome email and future issues.</p>
                </div>
                <div className="lg:col-span-8">
                  <iframe ref={frameRef} src="/newsletter-signup.html" title="Subscribe to the Bain Squared Newsletter" style={{width:"100%",height:frameHeight,border:0}} data-testid="newsletter-form" />
                  <p id="newsletter-request-note" className="mt-4 text-[13px] text-[hsl(var(--bs-ink-muted))]">By subscribing, you agree to receive the Bain Squared Newsletter. Unsubscribe at any time. Read our <a href="/privacy" className="underline underline-offset-2">privacy policy</a>.</p>
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
