import { Logo } from "./Logo";

const footerLinks = {
  Firm: [
    { label: "What we do", href: "#/what-we-do" },
    { label: "Who we work with", href: "#/who-we-work-with" },
    { label: "Careers", href: "#/careers" },
    { label: "Reviews", href: "#/reviews" },
    { label: "FAQ", href: "#/faq" },
    { label: "Contact", href: "#/contact" },
  ],
  Insights: [
    { label: "Newsletter", href: "#/newsletter" },
    { label: "Squared Reports", href: "#/insights/squared-reports" },
    { label: "Looking Glass", href: "#/insights/looking-glass" },
    { label: "Inside Bain Squared HQ", href: "#/insights/inside-hq" },
    { label: "Field Notes", href: "#/insights/field-notes" },
  ],
  Services: [
    { label: "Agentic AI Automation", href: "#/what-we-do/agentic-ai-automation" },
    { label: "Fractional CFO", href: "#/what-we-do/fractional-cfo" },
    { label: "Intangible Asset Valuation", href: "#/what-we-do/intangibles-valuation" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bs-bg-surface border-t border-[hsl(var(--bs-hairline))]"
      data-testid="footer-main"
    >
      <div className="bs-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 text-[15px] leading-[1.6] text-[hsl(var(--bs-ink-muted))] max-w-[380px]">
              Bain Squared is an advisory and operating firm based in Singapore.
              We help growing businesses put AI into operation, strengthen their
              finance functions and value intangible assets. Our teams work
              alongside clients to implement the systems, models and processes
              behind those decisions.
            </p>
            <div className="mt-6 text-[13px] text-[hsl(var(--bs-ink-muted))] space-y-1">
              <p>7 Temasek Boulevard</p>
              <p>Suntec Tower One</p>
              <p>Singapore 038987</p>
            </div>
            <a
              href="mailto:hello@bainsquared.com"
              className="mt-4 inline-block text-[14px] font-semibold text-[hsl(var(--bs-forest-deep))] hover:underline"
              data-testid="link-email"
            >
              hello@bainsquared.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[hsl(var(--bs-ink))] mb-5" style={{ fontSize: "var(--bs-type-label)", lineHeight: 1.4 , fontFamily: "Inter, sans-serif"}}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-[hsl(var(--bs-ink-muted))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
                      data-testid={`link-footer-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe column */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[hsl(var(--bs-ink))] mb-5" style={{ fontSize: "var(--bs-type-label)", lineHeight: 1.4 , fontFamily: "Inter, sans-serif"}}>
              The Bain Squared Brief
            </h4>
            <p className="text-[14px] text-[hsl(var(--bs-ink-muted))] mb-4 leading-[1.5]">
              A monthly selection of ideas and practical reading across AI, finance and enterprise value.
            </p>
            <a
              href="#/newsletter"
              className="text-[14px] font-semibold text-[hsl(var(--bs-forest-deep))] inline-flex items-center gap-2 hover:underline"
              data-testid="link-subscribe"
            >
              Subscribe
              <span className="bs-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Legal strip */}
        <div className="pt-8 border-t border-[hsl(var(--bs-hairline))] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-[12px] text-[hsl(var(--bs-ink-muted))]">
            © 2026 Bain Squared Pte. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-[hsl(var(--bs-ink-muted))]">
            <a
              href="#/privacy"
              className="hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#/terms"
              className="hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
              data-testid="link-terms"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
