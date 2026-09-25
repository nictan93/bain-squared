import media from "@/data/homepage-media.json";
import { useEffect, useState } from "react";

/**
 * HomeHero — full-bleed hero with Ken Burns zoom + scroll cue.
 * Static image placeholder until real video is provided.
 * Headline: "Driving Growth / Today. Tomorrow. Beyond."
 */
export function HomeHero() {
  const [scrolled, setScrolled] = useState(0);
  const [playMotion, setPlayMotion] = useState(false);
  useEffect(() => {const query=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setPlayMotion(!query.matches);update();query.addEventListener("change",update);return ()=>query.removeEventListener("change",update);}, []);

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
      className="relative w-full overflow-hidden h-[72vh] min-h-[480px] md:h-screen md:min-h-[640px]"
      data-testid="home-hero"
    >
      {/* Background image with Ken Burns slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bs-kenburns"
          style={{
            backgroundImage:
              `url('${media.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {media.video && playMotion && <video className="absolute inset-0 h-full w-full object-cover" src={media.video} poster={media.image} autoPlay muted loop playsInline aria-hidden="true" />}
        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
      </div>

      {media.video && <button type="button" onClick={()=>setPlayMotion(!playMotion)} className="absolute bottom-6 right-6 z-20 px-3 py-2 text-sm bg-white text-black">{playMotion ? "Pause video" : "Play video"}</button>}
      {/* Headline */}
      <div
        className="relative z-10 h-full bs-container flex items-center"
        style={{ opacity, transform: `translateY(${translate}px)` }}
      >
        <div className="max-w-[900px]">
          <h1
            className="font-display text-white"
            style={{
              fontSize: "var(--bs-type-display)",
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "-0.02em", fontFamily: "Bitter, Georgia, serif"}}
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
