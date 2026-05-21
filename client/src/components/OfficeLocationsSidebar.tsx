/**
 * OfficeLocationsSidebar — right-rail "More information / our locations".
 * Reused on Careers Form page and Contact page.
 */

type Office = {
  city: string;
  address: string;
};

const offices: Office[] = [
  {
    city: "Singapore",
    address:
      "7 Temasek Boulevard, Suntec Tower One, Singapore 038987",
  },
];

type Props = {
  heading?: string;
};

export function OfficeLocationsSidebar({
  heading = "More information",
}: Props) {
  return (
    <aside
      data-testid="office-locations-sidebar"
      className="lg:sticky lg:top-32"
    >
      <h3
        className="font-display mb-8"
        style={{
          fontSize: "clamp(22px, 1.8vw, 28px)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          color: "hsl(var(--bs-ink))",
        }}
      >
        {heading}
      </h3>

      <div
        className="text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-bold mb-6"
        style={{ color: "hsl(var(--bs-forest-deep))" }}
      >
        Our locations
      </div>

      <ul className="space-y-6">
        {offices.map((o) => (
          <li
            key={o.city}
            className="pb-6 border-b"
            style={{ borderColor: "hsl(var(--bs-hairline))" }}
          >
            <div
              className="text-[16px] md:text-[17px] font-bold mb-2"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {o.city}
            </div>
            <div
              className="text-[15px] leading-[1.55]"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {o.address}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
