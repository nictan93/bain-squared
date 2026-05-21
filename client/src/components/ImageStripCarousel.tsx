import { useEffect, useState } from "react";

/**
 * Full-bleed 4-image strip carousel (matches Thoughtworks reference image 2).
 * Each card is a tall portrait image with an optional title overlay.
 *
 * - Desktop / large: 4 cards visible flush, no gaps (collage feel).
 * - Tablet: 2 cards.
 * - Mobile: 1.15 cards.
 *
 * Auto-rotates every 5s; pauses on hover.
 */

export type ImageStripCard = {
  /** Image src URL */
  image: string;
  /** Title overlay (bottom-left). Omit for clean photo-only card. */
  title?: string;
  /** Optional small label rendered above the title (e.g. category) */
  eyebrow?: string;
};

type Props = {
  cards: ImageStripCard[];
  /** Auto-rotate interval in ms. Omit to disable. */
  intervalMs?: number;
};

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

export function ImageStripCarousel({ cards, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardsVisible = useCardsVisible();
  const total = cards.length;
  const maxIndex = Math.max(0, total - Math.floor(cardsVisible));

  useEffect(() => {
    if (paused || !intervalMs) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
    }, intervalMs);
    return () => clearInterval(t);
  }, [paused, intervalMs, maxIndex]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="bs-bg-canvas"
      data-testid="image-strip-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (100% / ${cardsVisible})))`,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative"
              style={{
                width: `calc(100% / ${cardsVisible})`,
                aspectRatio: "3 / 4",
              }}
              data-testid={`image-strip-card-${i}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              {(card.title || card.eyebrow) && (
                <>
                  {/* Bottom gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                    {card.eyebrow && (
                      <div className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] opacity-90 mb-2">
                        {card.eyebrow}
                      </div>
                    )}
                    {card.title && (
                      <div className="text-[20px] md:text-[24px] font-bold leading-[1.2]">
                        {card.title}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
