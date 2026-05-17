import { useEffect, useState } from "react";

/**
 * TopicVideoHero — large display hero with subtle Ken Burns motion,
 * headline left, hero image right (image fills the right column).
 * Matches reference image 11.
 *
 * Reuses the same Ken Burns + parallax motion treatment as HomeHero.
 */

type Props = {
  /** Eyebrow above the headline (e.g. "Topic", "Series") */
  eyebrow?: string;
  /** Main headline; rendered as h1 */
  title: string;
  /** Optional second-line accent (Forest Deep colored) */
  titleAccent?: string;
  /** Supporting one-line lede under the headline */
  lede?: string;
  /** Background image url */
  image: string;
};

export function TopicVideoHero({
  eyebrow,
  title,
  titleAccent,
  lede,
  image,
}: Props) {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const opacity = Math.max(1 - scrolled / 400, 0);
  const translate = -scrolled * 0.2;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "640px", paddingTop: "96px", paddingBottom: "64px" }}
      data-testid="topic-video-hero"
    >
      {/* Background image, Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bs-kenburns"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Light wash for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,245,242,0.94) 0%, rgba(247,245,242,0.78) 38%, rgba(247,245,242,0.10) 70%, rgba(247,245,242,0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 bs-container flex items-center"
        style={{
          opacity,
          transform: `translateY(${translate}px)`,
          minHeight: "480px",
        }}
      >
        <div className="max-w-[760px]">
          {eyebrow && (
            <div
              className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold mb-5"
              style={{ color: "hsl(var(--bs-forest-deep))" }}
            >
              {eyebrow}
            </div>
          )}
          <h1
            className="font-display"
            style={{
              fontSize: titleAccent
                ? "clamp(36px, 4.8vw, 64px)"
                : "clamp(44px, 6.4vw, 84px)",
              lineHeight: 1.06,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "hsl(var(--bs-ink))",
            }}
            data-testid="topic-hero-headline"
          >
            <span className="block">{title}</span>
            {titleAccent && (
              <span
                className="block"
                style={{
                  color: "hsl(var(--bs-forest-deep))",
                  marginTop: "0.4em",
                  fontSize: "0.78em",
                }}
              >
                {titleAccent}
              </span>
            )}
          </h1>
          {lede && (
            <p
              className="mt-6 text-[16px] md:text-[18px] leading-[1.6]"
              style={{
                color: "hsl(var(--bs-ink))",
                maxWidth: "520px",
              }}
            >
              {lede}
            </p>
          )}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.78,
                behavior: "smooth",
              })
            }
            aria-label="Scroll to next section"
            className="mt-12 inline-flex transition-transform hover:translate-y-1"
            style={{ color: "hsl(var(--bs-ink))" }}
            data-testid="topic-hero-scroll-cue"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
