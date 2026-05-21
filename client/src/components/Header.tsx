import { useEffect, useRef, useState } from "react";
import { X, Menu, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Logo } from "./Logo";

/* ============================================================
 * NAVIGATION DATA
 * Drives both desktop mega-panels and mobile accordion.
 * ============================================================ */

interface NavColumn {
  heading: string;
  items: { label: string; href: string; description?: string }[];
}

interface NavItem {
  label: string;
  href: string;
  /** When set, item opens a mega-panel on click. */
  panel?: {
    overviewHref: string;
    overviewLabel: string;
    columns: NavColumn[];
  };
}

const NAV: NavItem[] = [
  {
    label: "What we do",
    href: "/what-we-do",
    panel: {
      overviewHref: "/what-we-do",
      overviewLabel: "Go to overview",
      columns: [
        {
          heading: "Capabilities",
          items: [
            { label: "Agentic AI Automation", href: "/what-we-do/agentic-ai-automation" },
            { label: "Managed Services", href: "/what-we-do/managed-services" },
            { label: "LLM Optimization (LLMO)", href: "/what-we-do/llm-optimization" },
          ],
        },
        {
          heading: "",
          items: [
            { label: "Fractional CFO", href: "/what-we-do/fractional-cfo" },
            { label: "Financial Transformation", href: "/what-we-do/financial-transformation" },
          ],
        },
        {
          heading: "",
          items: [
            { label: "ESOP Valuation", href: "/what-we-do/esop-valuation" },
            { label: "Intangibles Assets Valuation", href: "/what-we-do/intangibles-valuation" },
          ],
        },
      ],
    },
  },
  {
    label: "Who we work with",
    href: "/who-we-work-with",
  },
  {
    label: "Insights",
    href: "/insights",
    panel: {
      overviewHref: "/insights",
      overviewLabel: "Go to overview",
      columns: [
        {
          heading: "Featured topics",
          items: [
            { label: "AI", href: "/insights/topics/ai" },
            { label: "Financial Transformation", href: "/insights/topics/financial-transformation" },
            { label: "Intangibles Valuation", href: "/insights/topics/intangibles-valuation" },
            { label: "Growth Strategy", href: "/insights/topics/growth-strategy" },
          ],
        },
        {
          heading: "Publications",
          items: [
            { label: "Perspectives", href: "/insights/perspectives", description: "Quarterly essays from the team on what we are seeing in the seat." },
            { label: "Squared Reports", href: "/insights/squared-reports", description: "Long-form research and original frameworks, published twice a year." },
            { label: "Looking Glass", href: "/insights/looking-glass", description: "The signals we track inside Bain Squared, made public." },
          ],
        },
        {
          heading: "All Insights",
          items: [
            { label: "Field Notes", href: "/insights/field-notes", description: "Short, opinionated posts from operators mid-engagement." },
            { label: "Client Stories", href: "/insights/client-stories", description: "How the work actually played out, with the numbers behind it." },
            { label: "Inside Bain Squared HQ", href: "/insights/inside-hq", description: "Case studies, toolkits, and the way we run our own firm." },
          ],
        },
      ],
    },
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ============================================================
 * COMPONENT
 * ============================================================ */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>("What we do");
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  /* Scroll behavior — hide on scroll down, show on scroll up,
     compress height past 80px. Mirrors Thoughtworks. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Don't hide while a panel is open
      if (!openPanel) {
        setHidden(y > lastY.current && y > 200);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openPanel]);

  /* Close panel on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPanel(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Close panel on outside click. Use click (not mousedown) so the button
     toggle handler fires first; otherwise the panel opens and closes on the
     same gesture. */
  useEffect(() => {
    if (!openPanel) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    };
    // Defer attaching the listener to the next tick so the click that
    // opened the panel doesn't immediately close it.
    const t = setTimeout(() => document.addEventListener("click", onClick), 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", onClick);
    };
  }, [openPanel]);

  /* Lock scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-200 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "hsl(var(--bs-canvas))" }}
      data-testid="header-main"
    >
      {/* ============================================================
       * TIER 1 — Logo bar
       * Logo left, Subscribe pill far right (same row, per spec)
       * ============================================================ */}
      <div className="bs-container">
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            scrolled ? "h-[54px]" : "h-[58px]"
          }`}
        >
          <Logo size={28} />

          <div className="flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 px-2 py-2 -mr-2 text-[15px] font-semibold text-[hsl(var(--bs-ink))]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-testid="button-mobile-toggle"
            >
              {mobileOpen ? (
                <>
                  <span>Close</span>
                  <X size={20} strokeWidth={2.25} />
                </>
              ) : (
                <>
                  <span>Menu</span>
                  <Menu size={20} strokeWidth={2.25} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
       * TIER 2 — Primary nav (desktop)
       * Left-aligned, semibold, flamingo-equivalent active underline
       * ============================================================ */}
      <nav
        className="hidden lg:block border-b"
        style={{ borderColor: "hsl(var(--bs-hairline))" }}
        aria-label="Primary"
      >
        <div className="bs-container">
          <ul className="flex items-center gap-10">
            {NAV.map((item) => {
              const isOpen = openPanel === item.label;
              return (
                <li key={item.label} className="relative">
                  {item.panel ? (
                    <button
                      type="button"
                      onClick={() => setOpenPanel(item.label)}
                      onMouseEnter={() => setOpenPanel(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className="relative inline-flex items-center pt-0 pb-5 text-[15px] font-semibold tracking-[0.005em] text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
                      data-testid={`button-nav-${slugify(item.label)}`}
                    >
                      <span className="relative">
                        {item.label}
                        {/* Active underline — Forest Deep, 1.5px, 4px offset */}
                        <span
                          className={`absolute left-0 right-0 -bottom-1.5 h-[1.5px] transition-opacity duration-150 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ backgroundColor: "hsl(var(--bs-forest-deep))" }}
                        />
                      </span>
                    </button>
                  ) : (
                    <a
                      href={toHash(item.href)}
                      className="inline-flex items-center pt-0 pb-5 text-[15px] font-semibold tracking-[0.005em] text-[hsl(var(--bs-ink))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
                      data-testid={`link-nav-${slugify(item.label)}`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ============================================================
         * Mega-panel — full viewport width, drops below nav row
         * ============================================================ */}
        {NAV.filter((n) => n.panel).map((item) => {
          const isOpen = openPanel === item.label;
          if (!isOpen) return null;
          return (
            <div
              key={`panel-${item.label}`}
              onMouseLeave={() => setOpenPanel(null)}
              className={`absolute left-0 right-0 transition-[opacity,transform] duration-200 ease-out opacity-100 translate-y-0 pointer-events-auto`}
              style={{
                top: "100%",
                backgroundColor: "hsl(var(--bs-canvas))",
                borderTop: "1px solid hsl(var(--bs-hairline))",
                borderBottom: "1px solid hsl(var(--bs-hairline))",
              }}
              aria-hidden={!isOpen}
            >
              <div className="bs-container py-10">
                {/* Go to overview */}
                <a
                  href={toHash(item.panel!.overviewHref)}
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[hsl(var(--bs-ink))] mb-10 group/overview"
                  data-testid={`link-overview-${slugify(item.label)}`}
                >
                  <span
                    className="border-b pb-0.5"
                    style={{ borderColor: "hsl(var(--bs-ink))" }}
                  >
                    {item.panel!.overviewLabel}
                  </span>
                  <ChevronRight
                    size={18}
                    strokeWidth={2.5}
                    className="text-[hsl(var(--bs-forest-deep))] transition-transform duration-150 group-hover/overview:translate-x-0.5"
                  />
                </a>

                {/* Columns */}
                <div className="grid grid-cols-3 gap-x-10 gap-y-2 pb-4">
                  {item.panel!.columns.map((col, ci) => (
                    <div key={ci}>
                      <div
                        className="text-[14px] font-medium mb-6"
                        style={{ color: "hsl(var(--bs-ink-muted))" }}
                        aria-hidden={!col.heading}
                      >
                        {col.heading || "\u00A0"}
                      </div>
                      <ul className="space-y-5">
                        {col.items.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={toHash(sub.href)}
                              className="group/link block"
                              data-testid={`link-mega-${slugify(sub.label)}`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <span className="text-[16px] font-bold leading-snug text-[hsl(var(--bs-ink))] group-hover/link:text-[hsl(var(--bs-forest-deep))] transition-colors">
                                  {sub.label}
                                </span>
                                <ChevronRight
                                  size={18}
                                  strokeWidth={2.5}
                                  className="shrink-0 mt-0.5 text-[hsl(var(--bs-forest-deep))] opacity-0 group-hover/link:opacity-100 transition-opacity"
                                />
                              </div>
                              {sub.description && (
                                <p
                                  className="text-[13px] mt-1.5 leading-relaxed"
                                  style={{ color: "hsl(var(--bs-ink-muted))" }}
                                >
                                  {sub.description}
                                </p>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Hairline below logo bar on mobile (no nav row) */}
      <div
        className="lg:hidden border-b"
        style={{ borderColor: "hsl(var(--bs-hairline))" }}
      />
    </header>

      {/* ============================================================
       * MOBILE FULL-SCREEN OVERLAY — sibling of <header> so the header's
       * transform doesn't create a containing block for position:fixed.
       * ============================================================ */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 overflow-y-auto"
          style={{ backgroundColor: "hsl(var(--bs-canvas))", top: scrolled ? "64px" : "80px" }}
          data-testid="overlay-mobile-menu"
        >
          <nav className="bs-container py-2" aria-label="Mobile primary">
            <ul>
              {NAV.map((item) => {
                const expanded = mobileExpanded === item.label;
                return (
                  <li
                    key={item.label}
                    className="border-b"
                    style={{ borderColor: "hsl(var(--bs-hairline))" }}
                  >
                    {item.panel ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(expanded ? null : item.label)}
                          aria-expanded={expanded}
                          className="flex items-center justify-between py-5 text-left transition-colors duration-150"
                          style={{
                            backgroundColor: expanded
                              ? "hsl(var(--bs-forest-soft))"
                              : "transparent",
                            width: expanded ? "100vw" : "100%",
                            marginLeft: expanded ? "calc(50% - 50vw)" : "0",
                            paddingLeft: expanded ? "max(1.5rem, calc(50vw - 720px + 1.5rem))" : "0",
                            paddingRight: expanded ? "max(1.5rem, calc(50vw - 720px + 1.5rem))" : "0",
                          }}
                          data-testid={`button-mobile-${slugify(item.label)}`}
                        >
                          <span className="text-[19px] font-bold text-[hsl(var(--bs-ink))]">
                            {item.label}
                          </span>
                          {expanded ? (
                            <ChevronUp
                              size={22}
                              strokeWidth={2.5}
                              className="text-[hsl(var(--bs-forest-deep))]"
                            />
                          ) : (
                            <ChevronDown
                              size={22}
                              strokeWidth={2.5}
                              className="text-[hsl(var(--bs-ink))]"
                            />
                          )}
                        </button>
                        {expanded && (
                          <div className="pb-6 pt-1">
                            {/* Go to overview */}
                            <a
                              href={toHash(item.panel.overviewHref)}
                              className="inline-flex items-center gap-2 text-[15px] font-bold text-[hsl(var(--bs-ink))] mb-6 pl-1"
                              data-testid={`link-mobile-overview-${slugify(item.label)}`}
                            >
                              <span
                                className="border-b pb-0.5"
                                style={{ borderColor: "hsl(var(--bs-ink))" }}
                              >
                                {item.panel.overviewLabel}
                              </span>
                              <ChevronRight
                                size={16}
                                strokeWidth={2.5}
                                className="text-[hsl(var(--bs-forest-deep))]"
                              />
                            </a>
                            {item.panel.columns.map((col, ci) => (
                              <div key={ci} className="mb-6 last:mb-0">
                                {col.heading && (
                                  <div
                                    className="text-[16px] font-bold mb-3 pl-1"
                                    style={{ color: "hsl(var(--bs-ink-muted))" }}
                                  >
                                    {col.heading}
                                  </div>
                                )}
                                <ul>
                                  {col.items.map((sub, si) => (
                                    <li
                                      key={sub.label}
                                      className={si === 0 && col.heading ? "" : "border-t"}
                                      style={{ borderColor: "hsl(var(--bs-hairline))" }}
                                    >
                                      <a
                                        href={toHash(sub.href)}
                                        className="flex items-center justify-between py-4 pl-1"
                                        data-testid={`link-mobile-sub-${slugify(sub.label)}`}
                                      >
                                        <span className="text-[16px] font-bold text-[hsl(var(--bs-ink))]">
                                          {sub.label}
                                        </span>
                                        <ChevronRight
                                          size={20}
                                          strokeWidth={2.5}
                                          className="text-[hsl(var(--bs-forest-deep))] shrink-0"
                                        />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={toHash(item.href)}
                        className="flex items-center justify-between py-5 text-[19px] font-bold text-[hsl(var(--bs-ink))]"
                        data-testid={`link-mobile-${slugify(item.label)}`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          size={20}
                          strokeWidth={2.5}
                          className="text-[hsl(var(--bs-forest-deep))]"
                        />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

          </nav>
        </div>
      )}
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * Convert an internal path like "/what-we-do" to its hash-router form "#/what-we-do".
 * Leaves already-hashed, absolute (http), tel/mailto, or anchor links untouched.
 */
function toHash(href: string): string {
  if (!href) return href;
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }
  if (href.startsWith("/")) return `#${href}`;
  return href;
}
