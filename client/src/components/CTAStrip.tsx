/**
 * Forest Deep CTA strip — mirrors Thoughtworks image 9 (Build differently band).
 * Left: bold white text. Right: Forest Accent fill button.
 */

type Props = {
  text: string;
  buttonLabel: string;
  href: string;
};

export function CTAStrip({ text, buttonLabel, href }: Props) {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "hsl(var(--bs-forest-deep))" }}
      data-testid="cta-strip"
    >
      <div className="bs-container py-14 md:py-16">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-8">
          <h2
            className="font-display text-white max-w-[820px]"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {text}
          </h2>
          <a
            href={href}
            className="inline-flex items-center justify-center self-center md:self-auto px-10 py-4 text-[15px] font-bold transition-colors whitespace-nowrap"
            style={{
              backgroundColor: "white",
              color: "hsl(var(--bs-forest-deep))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "hsl(var(--bs-forest-accent))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
            data-testid="link-cta-strip"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
