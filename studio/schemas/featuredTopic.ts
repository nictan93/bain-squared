import { defineType, defineField } from "sanity";

export const featuredTopic = defineType({
  name: "featuredTopic",
  title: "Featured topic",
  type: "document",
  fields: [
    // ── Identity ──────────────────────────────────────────────────────
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL key, e.g. ai, financial-transformation, intangibles-valuation, growth-strategy",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    // ── Hero (TopicVideoHero) ──────────────────────────────────────────
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow", description: 'e.g. "Featured topic"' }),
    defineField({ name: "title", type: "string", title: "Topic title", validation: (Rule) => Rule.required() }),
    defineField({ name: "titleAccent", type: "string", title: "Title accent / sub-line", description: 'Short punchy line shown below the title, e.g. "Built to act, not just chat."' }),
    defineField({ name: "lede", type: "text", title: "Lede", rows: 2, description: "One-sentence topic description shown in the hero." }),
    defineField({ name: "heroImageUrl", type: "url", title: "Hero image URL" }),

    // ── Centred intro (CenteredIntro) ─────────────────────────────────
    defineField({ name: "introParagraph", type: "text", title: "Intro paragraph", rows: 4 }),
    defineField({ name: "introBefore", type: "string", title: "Intro headline before accent" }),
    defineField({ name: "introAccent", type: "string", title: "Intro headline accent" }),
    defineField({ name: "introAfter", type: "string", title: "Intro headline after accent" }),

    // ── Article grid ──────────────────────────────────────────────────
    defineField({
      name: "gridHeading",
      type: "string",
      title: "Article grid heading",
      description: 'e.g. "What we have been thinking about"',
    }),

    // ── CTA strip ─────────────────────────────────────────────────────
    defineField({
      name: "ctaStrip",
      type: "object",
      title: "Bottom CTA strip",
      fields: [
        defineField({ name: "text", type: "string", title: "Text" }),
        defineField({ name: "buttonLabel", type: "string", title: "Button label" }),
        defineField({ name: "href", type: "string", title: "Link" }),
      ],
    }),

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
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare({ title, subtitle }: { title: string; subtitle?: string }) {
      return { title, subtitle: subtitle ? `/${subtitle}` : "" };
    },
  },
  orderings: [
    { title: "Title A→Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
