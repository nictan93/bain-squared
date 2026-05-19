import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

/**
 * Capabilities carousel — 7 cards, auto-scrolls every 4 seconds.
 * - White overlay card sits at the bottom-left of each image, fixed height
 *   so titles are vertically centered regardless of title length.
 * - Wider gap between cards.
 * - Prev/Next arrow buttons + dot indicators.
 */

type Capability = {
  title: string;
  href: string;
  image: string;
};

const capabilities: Capability[] = [
  {
    title: "Agentic AI Automation",
    href: "/what-we-do/agentic-ai-automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "LLM Optimization (LLMO)",
    href: "/what-we-do/llm-optimization",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Financial Transformation",
    href: "/what-we-do/financial-transformation",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Intangibles Assets Valuation",
    href: "/what-we-do/intangibles-valuation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ESOP Valuation",
    href: "/what-we-do/esop-valuation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fractional CFO",
    href: "/what-we-do/fractional-cfo",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Managed Services",
    href: "/what-we-do/managed-services",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
];

const ROTATE_MS = 4000;
// Horizontal gap between cards (Tailwind mx-3 => 12px each side => 24px total)
const CARD_GAP_PX = 24;

function useCardsVisible() {
  const [n, setN] = useState(4);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1.15);
      else if (w < 1024) setN(2);
      else if (w < 1280) setN(3);
      else setN(4);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return n;
}

type Props = {
  heading?: string;
  alignLeft?: boolean;
  /** Tightens the gap between heading and the carousel track. */
  tightHeading?: boolean;
};

export function CapabilitiesCarousel({ heading, alignLeft, tightHeading }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = capabilities.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardsVisible = useCardsVisible();

  // Max start index so trailing cards don't reveal whitespace
  const maxIndex = Math.max(0, total - Math.floor(cardsVisible));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, maxIndex]);

  // Clamp index when cardsVisible changes (resize)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((i) => (i - 1 < 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));

  // Each card slot width = (100% / cardsVisible). Translate by index * slot width.
  const trackTranslate = `translateX(calc(-${index} * (100% / ${cardsVisible})))`;

  return (
    <section
      className="bs-bg-canvas py-20 md:py-28"
      data-testid="capabilities-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bs-container">
        {heading && (
          <div className={alignLeft ? "" : "text-center"}>
            <h2
              className={`font-display ${tightHeading ? "mb-6 md:mb-8" : "mb-12 md:mb-16"}`}
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              {heading}
            </h2>
          </div>
        )}
      </div>

      {/* Carousel track — aligned to container padding */}
      <div className="bs-container">
        <div className="relative overflow-hidden -mx-3">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: trackTranslate }}
          >
          {capabilities.map((cap, i) => (
            <a
              key={cap.title}
              href={cap.href}
              className="flex-shrink-0 relative group block overflow-hidden mx-3"
              style={{
                width: `calc(100% / ${cardsVisible} - ${CARD_GAP_PX}px)`,
                aspectRatio: "3 / 4.2",
              }}
              data-testid={`capability-card-${i}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                style={{ backgroundImage: `url('${cap.image}')` }}
              />
              {/* Top-to-bottom gradient so titles always sit on dark base */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.88) 100%)",
                }}
              />
              {/* In-image title block, no white box. Title bottom-left, hairline above CTA */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3
                  className="font-display text-white text-[19px] md:text-[22px] leading-[1.15] line-clamp-2"
                  style={{ fontWeight: 700, letterSpacing: "-0.005em" }}
                >
                  {cap.title}
                </h3>
                <div
                  className="mt-4 pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.28)" }}
                >
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    Learn more
                    <ChevronRight
                      size={15}
                      strokeWidth={2.5}
                      className="text-white transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>
      </div>

      {/* Controls: prev/next arrows + dots */}
      <div className="bs-container mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous capabilities"
          className="grid place-items-center h-10 w-10 border border-[hsl(var(--bs-ink))] text-[hsl(var(--bs-ink))] hover:bg-[hsl(var(--bs-ink))] hover:text-white transition-colors"
          data-testid="carousel-prev"
        >
          <ChevronLeft size={18} strokeWidth={2.25} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show capability ${i + 1}`}
              className="h-[3px] transition-all duration-300"
              style={{
                width: i === index ? "32px" : "16px",
                backgroundColor:
                  i === index
                    ? "hsl(var(--bs-forest-deep))"
                    : "hsl(var(--bs-hairline))",
              }}
              data-testid={`carousel-dot-${i}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next capabilities"
          className="grid place-items-center h-10 w-10 border border-[hsl(var(--bs-ink))] text-[hsl(var(--bs-ink))] hover:bg-[hsl(var(--bs-ink))] hover:text-white transition-colors"
          data-testid="carousel-next"
        >
          <ChevronRight size={18} strokeWidth={2.25} />
        </button>
      </div>
    </section>
  );
}
