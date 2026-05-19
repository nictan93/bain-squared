import { defineType, defineField, defineArrayMember } from "sanity";

const articleBlock = defineArrayMember({
  type: "object",
  name: "articleBlock",
  title: "Content block",
  fields: [
    defineField({
      name: "type",
      type: "string",
      title: "Block type",
      options: { list: [{ title: "Paragraph", value: "p" }, { title: "Heading (H2)", value: "h2" }, { title: "Pull quote", value: "quote" }, { title: "List", value: "list" }] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "text", type: "text", title: "Text" }),
    defineField({ name: "dropcap", type: "boolean", title: "Drop cap on first letter" }),
    defineField({ name: "attribution", type: "string", title: "Quote attribution" }),
    defineField({ name: "items", type: "array", title: "List items", of: [{ type: "string" }] }),
    defineField({ name: "ordered", type: "boolean", title: "Ordered (numbered) list" }),
  ],
  preview: {
    select: { type: "type", text: "text" },
    prepare({ type, text }) {
      const icons: Record<string, string> = { p: "¶", h2: "H2", quote: '"', list: "•" };
      return { title: `${icons[type] ?? type} ${(text ?? "").slice(0, 60)}` };
    },
  },
});

export const insight = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    // ── Identity ──────────────────────────────────────────────────────
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "dek", type: "text", title: "Dek (sub-headline)", rows: 3 }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      description: "2–3 sentence plain-text summary. Used for AI answer extraction and meta description fallback.",
      rows: 4,
    }),

    // ── Classification ────────────────────────────────────────────────
    defineField({
      name: "type",
      type: "string",
      title: "Publication type",
      description: "Controls which listing page this insight appears on.",
      options: {
        list: [
          { title: "Perspective", value: "perspective" },
          { title: "Squared Report", value: "squared-report" },
          { title: "Whitepaper", value: "whitepaper" },
          { title: "Field Note", value: "field-note" },
          { title: "Client Story", value: "client-story" },
          { title: "Inside HQ", value: "inside-hq" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentFormat",
      type: "string",
      title: "Content format",
      description: "Display label shown on cards.",
      options: {
        list: ["Essay", "Report", "Field Note", "Case Story", "Brief", "Playbook", "Webinar", "Checklist", "Template", "Explainer", "Infographic", "Interactive", "Snap Chart"],
      },
    }),
    defineField({
      name: "practiceTags",
      type: "array",
      title: "Practice tags",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Agentic AI", value: "ai" },
          { title: "Financial Transformation", value: "financial-transformation" },
          { title: "Intangibles Valuation", value: "intangibles-valuation" },
          { title: "Growth Strategy", value: "growth-strategy" },
        ],
      },
    }),
    defineField({
      name: "audienceTags",
      type: "array",
      title: "Audience tags",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Founders", value: "founders" },
          { title: "CFOs", value: "cfos" },
          { title: "Boards", value: "boards" },
          { title: "Investors", value: "investors" },
        ],
      },
    }),
    defineField({ name: "category", type: "string", title: "Category label", description: "Display label on cards, e.g. 'Agentic AI', 'FP&A'." }),

    // ── Dates & status ────────────────────────────────────────────────
    defineField({ name: "publishedAt", type: "date", title: "Published date" }),
    defineField({ name: "updatedAt", type: "date", title: "Last updated" }),
    defineField({ name: "featured", type: "boolean", title: "Featured", initialValue: false }),

    // ── Authors ───────────────────────────────────────────────────────
    defineField({
      name: "authors",
      type: "array",
      title: "Authors",
      of: [defineArrayMember({ type: "object", fields: [defineField({ name: "name", type: "string", title: "Name" }), defineField({ name: "href", type: "string", title: "Profile link" })], preview: { select: { title: "name" } } })],
    }),
    defineField({
      name: "withAuthors",
      type: "array",
      title: "With (contributing)",
      of: [defineArrayMember({ type: "object", fields: [defineField({ name: "name", type: "string", title: "Name" }), defineField({ name: "href", type: "string", title: "Profile link" })], preview: { select: { title: "name" } } })],
    }),

    // ── Media ─────────────────────────────────────────────────────────
    defineField({ name: "heroImage", type: "image", title: "Hero image (upload)", options: { hotspot: true } }),
    defineField({ name: "heroImageUrl", type: "url", title: "Hero image URL (placeholder)" }),
    defineField({ name: "imageAlt", type: "string", title: "Image alt text" }),

    // ── Body (full articles) ──────────────────────────────────────────
    defineField({ name: "body", type: "array", title: "Article body", of: [articleBlock] }),

    // ── Client story fields (type == client-story) ────────────────────
    defineField({
      name: "stats",
      type: "array",
      title: "Stats (client stories)",
      of: [defineArrayMember({ type: "object", fields: [defineField({ name: "value", type: "string", title: "Value" }), defineField({ name: "label", type: "string", title: "Label" })], preview: { select: { title: "value", subtitle: "label" } } })],
    }),
    defineField({ name: "ctaHref", type: "string", title: "CTA / card link", description: "Internal path or external URL. Leave blank to link to this document's slug." }),
    defineField({ name: "order", type: "number", title: "Display order (client stories)" }),

    // ── SEO ───────────────────────────────────────────────────────────
    defineField({
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        defineField({ name: "title", type: "string", title: "Meta title" }),
        defineField({ name: "description", type: "text", title: "Meta description", rows: 3 }),
        defineField({ name: "ogImage", type: "image", title: "OG image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "canonicalUrl", type: "url", title: "Canonical URL", description: "Only set if this content is syndicated from another URL." }),
    defineField({ name: "noIndex", type: "boolean", title: "No-index", initialValue: false }),
  ],
  preview: {
    select: { title: "title", subtitle: "type", date: "publishedAt" },
    prepare({ title, subtitle, date }) {
      return { title, subtitle: `${subtitle ?? "—"} · ${date ?? "no date"}` };
    },
  },
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
