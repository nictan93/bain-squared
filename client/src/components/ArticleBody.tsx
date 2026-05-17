/**
 * ArticleBody — renders a structured array of content blocks.
 *
 * Block types:
 *   { type: "p", text: string, dropcap?: boolean }   // body paragraph
 *   { type: "h2", text: string }                      // section heading (serif)
 *   { type: "h3", text: string }                      // sub heading (sans bold)
 *   { type: "quote", text: string, attribution?: string }
 *   { type: "image", src: string, caption?: string }
 *   { type: "list", items: string[], ordered?: boolean }
 *
 * Text fields support a tiny inline syntax:
 *   **bold**   -> <strong>
 *   *italic*   -> <em>
 *   [text](url) -> <a href> (forest-deep, underlined)
 *   [^1]       -> superscript footnote ref (no link, just visual)
 *
 * Body type: serif (font-display / Bitter), 18-19px, 1.65 line-height.
 * Section H2 is the same serif, bolder + larger.
 */

export type Block =
  | { type: "p"; text: string; dropcap?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "address"; lines: string[] };

type Props = {
  blocks: Block[];
};

export function ArticleBody({ blocks }: Props) {
  return (
    <section className="bs-bg-canvas pb-20" data-testid="article-body">
      <div className="bs-container">
        <div className="max-w-[720px] mx-auto pt-10 md:pt-12">
          {blocks.map((b, i) => renderBlock(b, i))}
        </div>
      </div>
    </section>
  );
}

function renderBlock(b: Block, key: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2
          key={key}
          className="font-display"
          style={{
            color: "hsl(var(--bs-ink))",
            fontSize: "clamp(26px, 3.2vw, 34px)",
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: "-0.005em",
            marginTop: "2.5em",
            marginBottom: "0.6em",
          }}
        >
          {inline(b.text)}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="font-semibold"
          style={{
            color: "hsl(var(--bs-ink))",
            fontSize: "20px",
            lineHeight: 1.3,
            marginTop: "2em",
            marginBottom: "0.5em",
          }}
        >
          {inline(b.text)}
        </h3>
      );
    case "quote":
      return (
        <blockquote
          key={key}
          className="font-display"
          style={{
            borderLeft: "2px solid hsl(var(--bs-forest-deep))",
            paddingLeft: "1.5rem",
            margin: "2.25em 0",
            fontSize: "22px",
            lineHeight: 1.45,
            color: "hsl(var(--bs-ink))",
            fontStyle: "italic",
          }}
        >
          {inline(b.text)}
          {b.attribution && (
            <footer
              className="mt-3 text-[13px] not-italic"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {b.attribution}
            </footer>
          )}
        </blockquote>
      );
    case "image":
      return (
        <figure key={key} style={{ margin: "2.5em 0" }}>
          <div className="overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
            <img
              src={b.src}
              alt={b.caption || ""}
              className="w-full h-full object-cover"
            />
          </div>
          {b.caption && (
            <figcaption
              className="mt-3 text-[13px] leading-[1.5]"
              style={{ color: "hsl(var(--bs-ink-muted))" }}
            >
              {b.caption}
            </figcaption>
          )}
        </figure>
      );
    case "address": {
      return (
        <address
          key={key}
          style={{
            fontStyle: "normal",
            fontFamily: "var(--font-display, Bitter, Georgia, serif)",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "hsl(var(--bs-ink))",
            margin: "1.25em 0",
          }}
        >
          {b.lines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </address>
      );
    }
    case "list": {
      const Tag = b.ordered ? "ol" : "ul";
      return (
        <Tag
          key={key}
          className={b.ordered ? "list-decimal" : "list-disc"}
          style={{
            paddingLeft: "1.5rem",
            margin: "1.25em 0",
            color: "hsl(var(--bs-ink))",
            fontFamily: "var(--font-display, Bitter, Georgia, serif)",
            fontSize: "18px",
            lineHeight: 1.65,
          }}
        >
          {b.items.map((it, idx) => (
            <li key={idx} style={{ marginBottom: "0.5em" }}>
              {inline(it)}
            </li>
          ))}
        </Tag>
      );
    }
    case "p":
    default: {
      const isDrop = (b as { dropcap?: boolean }).dropcap;
      return (
        <p
          key={key}
          className={isDrop ? "bs-dropcap" : ""}
          style={{
            color: "hsl(var(--bs-ink))",
            fontFamily: "var(--font-display, Bitter, Georgia, serif)",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "1.25em",
          }}
        >
          {inline((b as { text: string }).text)}
        </p>
      );
    }
  }
}

/**
 * Tiny inline markdown: **bold**, *italic*, [text](url), [^n] footnote refs.
 * Returns array of React nodes; safe (no dangerouslySetInnerHTML).
 */
function inline(input: string): React.ReactNode[] {
  if (!input) return [];
  // Tokenize in passes to keep things simple. Process links first, then bold, then italic, then footnotes.
  // Use a placeholder strategy: split on regex with capture group; map each piece.
  type Node = string | React.ReactNode;
  let parts: Node[] = [input];

  // helper: apply a regex to all string parts
  const apply = (
    re: RegExp,
    build: (match: RegExpExecArray, key: string) => React.ReactNode
  ) => {
    const next: Node[] = [];
    parts.forEach((part, idx) => {
      if (typeof part !== "string") {
        next.push(part);
        return;
      }
      let lastIdx = 0;
      let m: RegExpExecArray | null;
      // global regex; reset state
      re.lastIndex = 0;
      while ((m = re.exec(part)) !== null) {
        if (m.index > lastIdx) {
          next.push(part.slice(lastIdx, m.index));
        }
        next.push(build(m, `${idx}-${m.index}`));
        lastIdx = m.index + m[0].length;
        if (m[0].length === 0) re.lastIndex++;
      }
      if (lastIdx < part.length) next.push(part.slice(lastIdx));
    });
    parts = next;
  };

  // Links
  apply(/\[([^\]]+)\]\(([^)]+)\)/g, (m, key) => (
    <a
      key={`a-${key}`}
      href={m[2]}
      className="underline underline-offset-[3px] hover:no-underline"
      style={{ color: "hsl(var(--bs-forest-deep))" }}
    >
      {m[1]}
    </a>
  ));
  // Bold
  apply(/\*\*([^*]+)\*\*/g, (m, key) => (
    <strong key={`b-${key}`} style={{ fontWeight: 700 }}>
      {m[1]}
    </strong>
  ));
  // Italic
  apply(/\*([^*]+)\*/g, (m, key) => (
    <em key={`i-${key}`} style={{ fontStyle: "italic" }}>
      {m[1]}
    </em>
  ));
  // Footnote refs [^1]
  apply(/\[\^(\d+)\]/g, (m, key) => (
    <sup
      key={`fn-${key}`}
      className="text-[11px] align-super"
      style={{ color: "hsl(var(--bs-forest-deep))" }}
    >
      [{m[1]}]
    </sup>
  ));

  return parts as React.ReactNode[];
}
