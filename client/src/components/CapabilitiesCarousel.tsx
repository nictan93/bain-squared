import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Capability = { title: string; summary: string; href: string; image: string };

const capabilities: Capability[] = [
  {
    title: "Agentic AI Automation",
    summary: "Supervised workflows across sales, marketing and operations.",
    href: "/what-we-do/agentic-ai-automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "LLM Optimization (LLMO)",
    summary: "Clear content and search foundations for AI discovery.",
    href: "/what-we-do/llm-optimization",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Financial Transformation",
    summary: "Reporting, planning and controls built around your business.",
    href: "/what-we-do/financial-transformation",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Intangible Asset Valuation",
    summary: "Understand and document the value of what you have built.",
    href: "/what-we-do/intangibles-valuation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ESOP Valuation",
    summary: "Independent valuations for reporting and equity decisions.",
    href: "/what-we-do/esop-valuation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fractional CFO",
    summary: "Senior finance leadership across cash, planning and reporting.",
    href: "/what-we-do/fractional-cfo",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Managed Services",
    summary: "A dedicated operating team for the work you need delivered.",
    href: "/what-we-do/managed-services",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
];

function useCardsVisible() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => setCount(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

type Props = { heading?: string; alignLeft?: boolean; tightHeading?: boolean };

/** Editorial carousel: manual navigation and readable text below each image. */
export function CapabilitiesCarousel({ heading, alignLeft, tightHeading }: Props) {
  const [index, setIndex] = useState(0);
  const visible = useCardsVisible();
  const maxIndex = capabilities.length - visible;
  const start = Math.min(index, maxIndex);
  useEffect(() => setIndex(i => Math.min(i, maxIndex)), [maxIndex]);
  const controlClass = "grid place-items-center h-11 w-12 border border-[hsl(var(--bs-forest-deep))] text-[hsl(var(--bs-forest-deep))] hover:bg-[hsl(var(--bs-forest-soft))] disabled:opacity-40 disabled:cursor-default";

  return (
    <section className="bs-bg-canvas py-20 md:py-28" data-testid="capabilities-carousel" aria-label="Our capabilities" aria-roledescription="carousel">
      <div className="bs-container">
        {heading && <h2 className={`font-display text-[32px] md:text-[44px] leading-[1.15] font-bold ${alignLeft ? "" : "text-center"} ${tightHeading ? "mb-8" : "mb-12 md:mb-16"}`} style={{ fontSize: "var(--bs-type-section)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>{heading}</h2>}
        <div className="overflow-hidden -mx-3.5">
          <div className="flex transition-transform duration-500 motion-reduce:transition-none" style={{ transform: `translateX(-${start * 100 / visible}%)` }}>
            {capabilities.map((cap, i) => {
              const inView = i >= start && i < start + visible;
              return (
                <a key={cap.href} href={cap.href} tabIndex={inView ? 0 : -1} aria-hidden={!inView} className="flex-shrink-0 mx-3.5 flex flex-col group text-[hsl(var(--bs-ink))]" style={{ width: `calc(100% / ${visible} - 28px)` }} data-testid={`capability-card-${i}`}>
                  <img src={cap.image} alt="" className="w-full aspect-[8/5] object-cover" loading="lazy" />
                  <div className="flex flex-col flex-1 border-t-[3px] border-[hsl(var(--bs-forest-deep))] pt-6">
                    <h3 className="font-display text-[26px] md:text-[28px] leading-[1.2] font-bold md:min-h-[68px] group-hover:underline" style={{ fontSize: "var(--bs-type-card)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>{cap.title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.6] flex-1">{cap.summary}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-[14px] font-semibold">Explore service <ChevronRight size={16} aria-hidden="true" /></span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex justify-end items-center gap-3">
          <span className="text-[13px] mr-3" aria-live="polite" aria-atomic="true" data-testid="capabilities-position">{visible === 1 ? `${start + 1} of ${capabilities.length}` : `${start + 1}–${start + visible} of ${capabilities.length}`}</span>
          <button type="button" onClick={() => setIndex(start - 1)} disabled={start === 0} aria-label="Previous capabilities" className={controlClass} data-testid="carousel-prev"><ChevronLeft size={20} aria-hidden="true" /></button>
          <button type="button" onClick={() => setIndex(start + 1)} disabled={start === maxIndex} aria-label="Next capabilities" className={controlClass} data-testid="carousel-next"><ChevronRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
