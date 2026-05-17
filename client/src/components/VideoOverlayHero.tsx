type Props = {
  /** Small accent label above the headline (forest deep, set in Inter). */
  eyebrow: string;
  /** Main headline. Rendered as h1 in display font on dark ink. */
  headline: string;
  /** Background image URL (used as a Ken Burns "video" stand-in). */
  image: string;
  /** Alt text for the background image. */
  imageAlt: string;
  /** Optional sub-line printed under the headline at smaller size. */
  sub?: string;
};

/**
 * VideoOverlayHero — Image 1 in the v5 spec.
 *
 * Full-bleed image hero with text overlay on the LEFT (canvas fade) and the
 * "video" image weighted to the RIGHT half. We use a Ken Burns image instead
 * of an embedded video per the project's hero-treatment decision so the page
 * stays fast and consistent with the topic-hero treatment.
 *
 * The "scroll pushes content up to cover the video" effect from the spec is
 * achieved by the NEXT section having `position: relative; z-index: 20` plus a
 * solid canvas background, so as the user scrolls the canvas section slides up
 * over the hero. No JS scroll listener needed.
 */
export function VideoOverlayHero({
  eyebrow,
  headline,
  image,
  imageAlt,
  sub,
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden bs-bg-canvas"
      style={{
        height: "100vh",
        minHeight: "620px",
        maxHeight: "840px",
      }}
      data-testid="video-overlay-hero"
    >
      {/* Background image, right half emphasis, Ken Burns slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bs-kenburns absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "right center" }}
          />
        </div>
        {/* Left fade to canvas so text remains legible regardless of image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #F7F5F2 0%, #F7F5F2 26%, rgba(247,245,242,0.92) 42%, rgba(247,245,242,0.55) 58%, rgba(247,245,242,0) 74%)",
          }}
        />
      </div>

      {/* Foreground text */}
      <div className="relative z-10 h-full bs-container flex items-center">
        <div className="max-w-[640px]">
          <div
            className="text-[14px] uppercase tracking-[0.16em] font-medium mb-6"
            style={{ color: "hsl(var(--bs-forest-deep))" }}
          >
            {eyebrow}
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 5.4vw, 72px)",
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "hsl(var(--bs-ink))",
            }}
            data-testid="video-hero-headline"
          >
            {headline}
          </h1>
          {sub && (
            <p
              className="mt-6 text-[18px] md:text-[20px] max-w-[520px]"
              style={{ color: "hsl(var(--bs-ink-muted))", lineHeight: 1.5 }}
            >
              {sub}
            </p>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute left-0 right-0 z-10 flex justify-start bs-container"
        style={{ bottom: "44px" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          style={{ color: "hsl(var(--bs-ink))" }}
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </section>
  );
}
