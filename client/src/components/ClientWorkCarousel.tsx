import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * Featured client story carousel — 3 stories, auto-scroll every 5s.
 * Split-screen layout mirrors Thoughtworks image 6:
 *  Left: "Bold steps forward" eyebrow + title + impact stat blocks + "Read story"
 *  Right: large image
 */

type Stat = { value: string; label: string };
type Story = {
  eyebrow: string;
  title: string;
  stats: Stat[];
  href: string;
  image: string;
};

const stories: Story[] = [
  {
    eyebrow: "Featured client success story",
    title: "An EPC Leader Transforms Itself Amid Intense Volatility",
    stats: [
      { value: "$300M", label: "saved over two years" },
      { value: "2.5x", label: "stock price increase over two years" },
    ],
    href: "#/insights/epc-leader-transforms",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "Featured client success story",
    title: "Series B SaaS Founder Rebuilds the Operating Model in 90 Days",
    stats: [
      { value: "42%", label: "gross margin lift" },
      { value: "18mo", label: "cash runway extension" },
    ],
    href: "#/insights/saas-operating-model-90-days",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "Featured client success story",
    title: "Family-Owned Group Defends an ESOP Valuation Under Audit",
    stats: [
      { value: "$48M", label: "valuation defended" },
      { value: "0", label: "audit adjustments" },
    ],
    href: "#/insights/family-owned-esop-defense",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
];

const ROTATE_MS = 5000;

export function ClientWorkCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = stories.length;

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  const story = stories[index];

  return (
    <section
      className="bg-white pb-20 md:pb-28"
      data-testid="client-work-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:pt-8">
            {/* (mobile image is injected between title and impact below) */}
            <p
              className="text-[12px] md:text-[13px] tracking-[0.08em] uppercase mb-5 pb-3 border-b"
              style={{
                color: "hsl(var(--bs-ink-muted))",
                borderColor: "hsl(var(--bs-hairline))",
              }}
            >
              {story.eyebrow}
            </p>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              Bold steps forward.
            </h3>
            <h4
              className="mt-6 text-[24px] md:text-[30px] font-bold leading-[1.2] min-h-[100px]"
              style={{ color: "hsl(var(--bs-ink))" }}
              key={story.title}
            >
              {story.title}
            </h4>

            {/* Mobile-only image: sits between title and impact */}
            <div className="mt-6 lg:hidden">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                {stories.map((s, i) => (
                  <div
                    key={s.title}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                    style={{
                      backgroundImage: `url('${s.image}')`,
                      opacity: i === index ? 1 : 0,
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="mt-8 text-[14px] font-bold text-[hsl(var(--bs-ink))]">
              The impact
            </p>
            {/* Two separate tinted impact boxes, side-by-side */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {story.stats.map((s) => (
                <div
                  key={s.label}
                  className="px-6 py-7 md:px-7 md:py-8"
                  style={{
                    backgroundColor: "#E6EFEC",
                    borderLeft: "3px solid hsl(var(--bs-forest-deep))",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(32px, 3.4vw, 44px)",
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      color: "hsl(var(--bs-forest-deep))",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-2 text-[14px] leading-[1.45]"
                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={story.href}
              className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-bold text-[hsl(var(--bs-forest-deep))] hover:underline"
              data-testid="link-read-story"
            >
              Read story
              <ChevronRight size={16} strokeWidth={2.5} />
            </a>

            {/* Dots */}
            <div className="mt-10 flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show story ${i + 1}`}
                  className="h-[3px] transition-all duration-300"
                  style={{
                    width: i === index ? "32px" : "16px",
                    backgroundColor:
                      i === index
                        ? "hsl(var(--bs-forest-deep))"
                        : "hsl(var(--bs-hairline))",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: image (desktop only — mobile uses inline image inside left col) */}
          <div className="hidden lg:block order-1 lg:order-2 lg:col-span-7">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
            >
              {stories.map((s, i) => (
                <div
                  key={s.title}
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                  style={{
                    backgroundImage: `url('${s.image}')`,
                    opacity: i === index ? 1 : 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
