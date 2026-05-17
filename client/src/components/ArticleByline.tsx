import { Share2, Printer, Download } from "lucide-react";

/**
 * ArticleByline — byline + action icons row.
 * Mirrors McKinsey Quarterly: "By X and Y with Z" left,
 * Share / Print / Download icons right.
 * NO Save, NO Summarize per spec.
 *
 * Optional dek (lead paragraph) renders directly below.
 */

type Author = { name: string; href?: string };

type Props = {
  authors: Author[];     // at least one
  withAuthors?: Author[]; // optional "with" list
  dek?: string;          // lead paragraph below byline
};

export function ArticleByline({ authors, withAuthors = [], dek }: Props) {
  return (
    <section className="bs-bg-canvas" data-testid="article-byline">
      <div className="bs-container">
        <div className="max-w-[860px] mx-auto pt-12 md:pt-16">
          {/* Byline row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10 border-b" style={{ borderColor: "hsl(var(--bs-hairline))" }}>
            {/* By + authors */}
            <div className="text-[14px] leading-[1.7]" style={{ color: "hsl(var(--bs-ink))" }}>
              <span style={{ color: "hsl(var(--bs-ink-muted))" }}>By </span>
              {authors.map((a, i) => (
                <span key={a.name}>
                  {a.href ? (
                    <a
                      href={a.href}
                      className="underline underline-offset-[3px] decoration-[hsl(var(--bs-ink-muted))] hover:decoration-[hsl(var(--bs-forest-deep))] hover:text-[hsl(var(--bs-forest-deep))]"
                    >
                      {a.name}
                    </a>
                  ) : (
                    <span>{a.name}</span>
                  )}
                  {i < authors.length - 2 ? ", " : i === authors.length - 2 ? " and " : ""}
                </span>
              ))}
              {withAuthors.length > 0 && (
                <>
                  <br />
                  <span style={{ color: "hsl(var(--bs-ink-muted))" }}>with </span>
                  {withAuthors.map((a, i) => (
                    <span key={a.name}>
                      {a.name}
                      {i < withAuthors.length - 2 ? ", " : i === withAuthors.length - 2 ? " and " : ""}
                    </span>
                  ))}
                </>
              )}
            </div>

            {/* Action icons */}
            <div className="flex items-start gap-7" aria-label="Article actions">
              <ActionIcon
                Icon={Share2}
                label="Share"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
                  } else if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href).catch(() => {});
                  }
                }}
              />
              <ActionIcon
                Icon={Printer}
                label="Print"
                onClick={() => window.print()}
              />
              <ActionIcon
                Icon={Download}
                label="Download"
                onClick={() => window.print()}
              />
            </div>
          </div>

          {/* Optional dek */}
          {dek && (
            <p
              className="mt-10 text-[20px] md:text-[22px] leading-[1.5]"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {dek}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ActionIcon({
  Icon,
  label,
  onClick,
}: {
  Icon: typeof Share2;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 text-[hsl(var(--bs-ink-muted))] hover:text-[hsl(var(--bs-forest-deep))] transition-colors"
      data-testid={`button-${label.toLowerCase()}`}
    >
      <Icon size={18} strokeWidth={1.75} />
      <span className="text-[11px]">{label}</span>
    </button>
  );
}
