import { useEffect, useState } from "react";

/**
 * HomeHero — full-bleed hero with Ken Burns zoom + scroll cue.
 * Static image placeholder until real video is provided.
 * Headline: "Driving Growth / Today. Tomorrow. Beyond."
 */
export function HomeHero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Parallax shift on hero content as user scrolls
  const opacity = Math.max(1 - scrolled / 400, 0);
  const translate = -scrolled * 0.25;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "640px" }}
      data-testid="home-hero"
    >
      {/* Background image with Ken Burns slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bs-kenburns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
      </div>

      {/* Headline */}
      <div
        className="relative z-10 h-full bs-container flex items-center"
        style={{ opacity, transform: `translateY(${translate}px)` }}
      >
        <div className="max-w-[900px]">
          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
            data-testid="hero-headline"
          >
            <span className="block">Driving Growth</span>
            <span
              className="block"
              style={{ color: "hsl(var(--bs-forest-accent))" }}
            >
              Today. Tomorrow. Beyond.
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute left-1/2 bottom-10 -translate-x-1/2 z-10 text-white/90 hover:text-white transition-colors"
        aria-label="Scroll to next section"
        data-testid="hero-scroll-cue"
        style={{ opacity }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
          <path d="M6 14l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
