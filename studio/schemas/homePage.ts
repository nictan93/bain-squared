import { defineType, defineField, defineArrayMember } from "sanity";

const imageStripCard = defineArrayMember({
  type: "object",
  name: "imageStripCard",
  fields: [
    defineField({ name: "image", type: "url", title: "Image URL" }),
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow label" }),
    defineField({ name: "title", type: "string", title: "Card title" }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      type: "object",
      title: "Hero",
      fields: [
        defineField({ name: "line1", type: "string", title: "Headline line 1", description: 'e.g. "Driving Growth"' }),
        defineField({ name: "line2", type: "string", title: "Headline line 2 (accent colour)", description: 'e.g. "Today. Tomorrow. Beyond."' }),
        defineField({ name: "backgroundImageUrl", type: "url", title: "Background image URL" }),
      ],
    }),

    // ── Callout section ───────────────────────────────────────────────
    defineField({
      name: "callout",
      type: "object",
      title: "Callout section",
      description: 'Rendered as "[before] [accent] [after]" in one headline.',
      fields: [
        defineField({ name: "headlineBefore", type: "string", title: "Headline before accent", description: 'e.g. "Leaders want"' }),
        defineField({ name: "headlineAccent", type: "string", title: "Headline accent", description: 'e.g. "AI to work"' }),
        defineField({ name: "headlineAfter", type: "string", title: "Headline after accent", description: "e.g. \"by 'next Tuesday'.\"" }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
      ],
    }),

    // ── AI in action header ───────────────────────────────────────────
    defineField({
      name: "aiInAction",
      type: "object",
      title: "AI in action section",
      fields: [
        defineField({ name: "headlineAccent", type: "string", title: "Headline accent", description: 'e.g. "AI that works"' }),
        defineField({ name: "headlineAfter", type: "string", title: "Headline after accent", description: 'e.g. "in action"' }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 2 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
      ],
    }),

    // ── Client work image strip cards ─────────────────────────────────
    defineField({
      name: "clientWorkCards",
      type: "array",
      title: "Client work image strip cards",
      of: [imageStripCard],
    }),

    // ── Careers band ─────────────────────────────────────────────────
    defineField({
      name: "careersBand",
      type: "object",
      title: "Careers band",
      fields: [
        defineField({ name: "headline", type: "string", title: "Headline" }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "backgroundImageUrl", type: "url", title: "Background image URL" }),
      ],
    }),

    // ── Bottom CTA strip ─────────────────────────────────────────────
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
  preview: { prepare: () => ({ title: "Home page" }) },
});
