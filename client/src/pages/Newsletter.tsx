import { useEffect, useState, FormEvent } from "react";
import { Plus, Minus } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BENEFITS = [
  {
    title: "A decision worth exploring",
    body: "Each issue examines a question facing business leaders, with a clear point of view and the reasoning behind it.",
  },
  {
    title: "Ideas you can put to work",
    body: "Practical frameworks and questions to take into your next planning session, board discussion or project review.",
  },
  {
    title: "A wider perspective",
    body: "Connections across AI, finance and enterprise value, with selected reading for those who want to go deeper.",
  },
];

// Topic previews until the newsletter archive is connected to Sanity.
const TOPICS = [
  {
    title: "Choosing the right starting point for AI",
    body: "How to identify a useful workflow, define the outcome and decide where human review belongs.",
  },
  {
    title: "Giving the board a clearer view",
    body: "What a board pack needs to show about performance, cash and the decisions ahead.",
  },
  {
    title: "Understanding what drives enterprise value",
    body: "How data, intellectual property and other intangible assets contribute to a business, and how to examine the assumptions.",
  },
];

const QUESTIONS = [
  {
    q: "Who is the Brief for?",
    a: "Founders, finance leaders and people responsible for improving how a business operates. We connect the business question with the practical work needed to address it.",
  },
  {
    q: "How often is it published?",
    a: "The Brief is planned as a monthly publication, bringing together one main perspective and selected reading from Bain Squared.",
  },
  {
    q: "How do I subscribe?",
    a: "For now, the form prepares an email request. Send that email to hello@bainsquared.com to request a subscription. You can use the same address to ask to be removed.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "The Bain Squared Brief | Bain Squared";
    return () => { document.title = previousTitle; };
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Please add this address to the Bain Squared newsletter:\n\n${email}`;
    window.location.href = `mailto:hello@bainsquared.com?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="bs-bg-canvas" data-testid="page-newsletter">
      <Header />
      <main className="text-[hsl(var(--bs-ink))]">
        <section className="pt-32 md:pt-40 pb-16 md:pb-24" data-testid="newsletter-hero">
          <div className="bs-container">
            <div className="max-w-[840px]">
              <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-bold leading-[1.08] tracking-[-0.02em]">
                The Bain Squared<br />
                <span className="text-[hsl(var(--bs-forest-deep))]">Brief</span>
              </h1>
              <p className="mt-7 max-w-[680px] text-[18px] md:text-[20px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">
                A monthly perspective on AI, finance and enterprise value.
                Ideas to help you make informed decisions and put them into practice.
              </p>
              <div className="mt-9 max-w-[680px]">
                {submitted ? (
                  <div className="border-l-2 border-[hsl(var(--bs-forest-deep))] pl-5" role="status" data-testid="newsletter-success">
                    <p className="font-medium">Send the email to complete your request.</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--bs-ink-muted))]">
                      If your email app did not open, write to <a className="underline" href="mailto:hello@bainsquared.com">hello@bainsquared.com</a> with the address you would like to subscribe.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} data-testid="newsletter-form">
                    <label htmlFor="newsletter-email" className="block mb-2 text-[14px] font-medium">Email address</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input id="newsletter-email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                        className="min-w-0 flex-1 bg-white border border-[hsl(var(--bs-hairline))] px-4 py-4 text-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--bs-forest-deep))]"
                        aria-describedby="newsletter-request-note" data-testid="input-newsletter-email" />
                      <button type="submit" className="px-7 py-4 bg-[hsl(var(--bs-forest-deep))] text-white text-[15px] font-medium hover:bg-[hsl(var(--bs-ink))] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--bs-forest-deep))]" data-testid="button-newsletter-subscribe">Subscribe by email</button>
                    </div>
                    <p id="newsletter-request-note" className="mt-3 text-[13px] leading-relaxed text-[hsl(var(--bs-ink-muted))]">Opens an email request. Read our <a href="#/privacy" className="underline underline-offset-2">privacy policy</a>.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24" data-testid="newsletter-what">
          <div className="bs-container">
            <div className="border-t border-[hsl(var(--bs-hairline))] pt-12 md:pt-16">
              <h2 className="font-display text-[30px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.015em]">What to expect</h2>
              <ul className="mt-9 md:mt-12 grid md:grid-cols-3 gap-8 md:gap-12">
                {BENEFITS.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-display text-[22px] md:text-[24px] font-bold leading-[1.25]">{item.title}</h3>
                    <p className="mt-4 text-[16px] leading-[1.65] text-[hsl(var(--bs-ink-muted))]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" data-testid="newsletter-recent">
          <div className="bs-container">
            <h2 className="font-display text-[30px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.015em]">Inside the Brief</h2>
            <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-[hsl(var(--bs-ink-muted))]">The questions we explore connect new possibilities with the everyday decisions of running a business.</p>
            <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-9 md:gap-12">
              {TOPICS.map((topic, i) => (
                <article key={topic.title} className="border-t-2 border-[hsl(var(--bs-forest-deep))] pt-6" data-testid={`recent-issue-${i}`}>
                  <h3 className="font-display text-[24px] font-bold leading-[1.25] md:min-h-[60px]">{topic.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.65] text-[hsl(var(--bs-ink-muted))]">{topic.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="newsletter-faq">
          <div className="bs-container grid lg:grid-cols-[4fr_7fr] gap-8 lg:gap-20">
            <h2 className="font-display text-[30px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.015em]">About the Brief</h2>
            <div className="border-t border-[hsl(var(--bs-hairline))]">
              {QUESTIONS.map((item) => (
                <details key={item.q} className="bs-method-note group border-b border-[hsl(var(--bs-hairline))]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--bs-forest-deep))]">
                    <h3 className="text-[18px] md:text-[20px] font-medium leading-[1.4]">{item.q}</h3>
                    <Plus size={20} strokeWidth={1.5} className="shrink-0 group-open:hidden" aria-hidden="true" />
                    <Minus size={20} strokeWidth={1.5} className="hidden shrink-0 group-open:block" aria-hidden="true" />
                  </summary>
                  <p className="pb-6 pr-8 text-[16px] leading-[1.65] text-[hsl(var(--bs-ink-muted))]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
