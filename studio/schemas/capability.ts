import { defineType, defineField, defineArrayMember } from "sanity";

const switcherItem = defineArrayMember({
  type: "object",
  name: "switcherItem",
  title: "Tab",
  fields: [
    defineField({ name: "label", type: "string", title: "Tab label" }),
    defineField({ name: "title", type: "string", title: "Panel headline" }),
    defineField({ name: "body", type: "text", title: "Panel body", rows: 4 }),
    defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
    defineField({ name: "imageAlt", type: "string", title: "Image alt" }),
    defineField({ name: "caption", type: "string", title: "Image caption" }),
  ],
  preview: { select: { title: "label", subtitle: "title" } },
});

export const capability = defineType({
  name: "capability",
  title: "Capability page",
  type: "document",
  fields: [
    // ── Identity ──────────────────────────────────────────────────────
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "e.g. agentic-ai-automation, fractional-cfo",
      options: { source: "headline" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "practice",
      type: "string",
      title: "Practice area",
      options: {
        list: [
          { title: "AI & Automation", value: "ai" },
          { title: "Finance & CFO", value: "finance" },
          { title: "Valuation", value: "valuation" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Hero ──────────────────────────────────────────────────────────
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow label" }),
    defineField({ name: "headline", type: "string", title: "Hero headline", validation: (Rule) => Rule.required() }),
    defineField({ name: "sub", type: "text", title: "Hero sub-headline", rows: 2 }),
    defineField({ name: "heroImageUrl", type: "url", title: "Hero image URL" }),
    defineField({ name: "heroImageAlt", type: "string", title: "Hero image alt" }),

    // ── Intro (AI / Valuation style — paragraphs array) ───────────────
    defineField({
      name: "introParagraphs",
      type: "array",
      title: "Intro paragraphs (AI / Valuation pages)",
      of: [{ type: "text" }],
    }),

    // ── Intro (Finance style — centered accent intro) ─────────────────
    defineField({ name: "introParagraph", type: "text", title: "Intro paragraph (Finance pages)", rows: 4 }),
    defineField({ name: "introBefore", type: "string", title: "Intro accent: before text" }),
    defineField({ name: "introAccent", type: "string", title: "Intro accent: highlighted word(s)" }),
    defineField({ name: "introAfter", type: "string", title: "Intro accent: after text" }),

    // ── Stats (AI pages) ──────────────────────────────────────────────
    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "value", type: "string", title: "Value (e.g. 60%)" }),
          defineField({ name: "body", type: "text", title: "Description", rows: 2 }),
          defineField({ name: "color", type: "string", title: "Accent colour", options: { list: ["rose", "amber", "teal", "forest"] } }),
        ],
        preview: { select: { title: "value", subtitle: "body" } },
      })],
    }),

    // ── Switcher / tabs ───────────────────────────────────────────────
    defineField({ name: "switcherEyebrow", type: "string", title: "Switcher eyebrow" }),
    defineField({ name: "switcherHeading", type: "string", title: "Switcher heading" }),
    defineField({ name: "switcherItems", type: "array", title: "Switcher tabs", of: [switcherItem] }),

    // ── Method overlay (AI / Valuation pages) ─────────────────────────
    defineField({ name: "methodImageUrl", type: "url", title: "Method image URL" }),
    defineField({ name: "methodImageAlt", type: "string", title: "Method image alt" }),
    defineField({
      name: "methodHeadlineLines",
      type: "array",
      title: "Method headline lines (one per line)",
      of: [{ type: "string" }],
    }),
    defineField({ name: "methodBody", type: "text", title: "Method body", rows: 3 }),

    // ── Recommender cards (AI pages) ──────────────────────────────────
    defineField({
      name: "recommenderCards",
      type: "array",
      title: "Growth partner recommender cards",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "title", type: "string", title: "Title" }),
          defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
        ],
        preview: { select: { title: "title" } },
      })],
    }),

    // ── Split blocks (Valuation pages) ───────────────────────────────
    defineField({
      name: "splitBlocks",
      type: "array",
      title: "Split blocks (Valuation pages)",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
          defineField({ name: "title", type: "string", title: "Title" }),
          defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
          defineField({ name: "tags", type: "array", title: "Tags", of: [{ type: "string" }] }),
        ],
        preview: { select: { title: "title", subtitle: "eyebrow" } },
      })],
      validation: (Rule) => Rule.max(2),
    }),

    // ── Whitepaper feature (Finance pages) ───────────────────────────
    defineField({ name: "whitepaperHeadline", type: "string", title: "Whitepaper headline" }),
    defineField({ name: "whitepaperBody", type: "text", title: "Whitepaper body", rows: 3 }),
    defineField({ name: "whitepaperImageUrl", type: "url", title: "Whitepaper image URL" }),

    // ── Team CTA ──────────────────────────────────────────────────────
    defineField({ name: "teamHeadline", type: "string", title: "Team CTA headline" }),
    defineField({ name: "teamBody", type: "text", title: "Team CTA body", rows: 2 }),
    defineField({ name: "teamCta", type: "string", title: "Team CTA button label" }),

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

    // ── Relations ─────────────────────────────────────────────────────
    defineField({
      name: "relatedInsights",
      type: "array",
      title: "Related insights",
      of: [{ type: "reference", to: [{ type: "insight" }] }],
    }),
    defineField({
      name: "featuredInsight",
      type: "reference",
      title: "Featured insight",
      to: [{ type: "insight" }],
    }),
    defineField({ name: "lastUpdated", type: "date", title: "Last updated" }),
  ],
  preview: {
    select: { title: "headline", subtitle: "slug.current" },
  },
  orderings: [{ title: "Practice area", name: "practiceAsc", by: [{ field: "practice", direction: "asc" }] }],
});
