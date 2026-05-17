import { useState } from "react";

/**
 * RoleSwitcher — tabbed role selector with image + description per tab.
 * Matches Thoughtworks reference image 13.
 *
 * Tabs are clickable buttons. The active tab shows a Forest Deep underline
 * and the full content block below (image left + description right).
 */

export type Role = {
  label: string;
  description: string;
  image: string;
};

type Props = {
  roles: Role[];
};

export function RoleSwitcher({ roles }: Props) {
  const [active, setActive] = useState(0);
  const r = roles[active];

  return (
    <section
      className="bs-bg-canvas py-16 md:py-20"
      data-testid="role-switcher"
    >
      <div className="bs-container">
        {/* Tab strip */}
        <div
          className="border-b mb-12 md:mb-16 overflow-x-auto"
          style={{ borderColor: "hsl(var(--bs-hairline))" }}
        >
          <div className="flex gap-8 md:gap-12 whitespace-nowrap min-w-max">
            {roles.map((role, i) => {
              const isActive = i === active;
              return (
                <button
                  key={role.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative pb-4 text-[15px] md:text-[17px] transition-colors"
                  style={{
                    color: isActive
                      ? "hsl(var(--bs-ink))"
                      : "hsl(var(--bs-ink-muted))",
                    fontWeight: isActive ? 700 : 500,
                  }}
                  data-testid={`role-tab-${i}`}
                >
                  {role.label}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-px h-[2px]"
                      style={{
                        backgroundColor: "hsl(var(--bs-forest-deep))",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
            >
              <div
                key={`role-img-${active}`}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${r.image}')` }}
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "hsl(var(--bs-ink))",
              }}
            >
              {r.label}
            </h2>
            <p
              key={`role-desc-${active}`}
              className="text-[16px] md:text-[18px] leading-[1.6]"
              style={{ color: "hsl(var(--bs-ink))" }}
            >
              {r.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
