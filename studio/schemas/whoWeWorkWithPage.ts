import { defineType, defineField, defineArrayMember } from "sanity";

const ctaItem = defineArrayMember({
  type: "object",
  name: "ctaItem",
  fields: [
    defineField({ name: "label", type: "string", title: "Button label" }),
    defineField({ name: "href", type: "string", title: "Link" }),
    defineField({
      name: "variant",
      type: "string",
      title: "Variant",
      options: { list: ["primary", "outline", "ghost"] },
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

const imageStripCard = defineArrayMember({
  type: "object",
  name: "imageStripCard",
  fields: [
    defineField({ name: "image", type: "url", title: "Image URL" }),
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
    defineField({ name: "title", type: "string", title: "Title" }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});

const relevantSegment = defineArrayMember({
  type: "object",
  name: "relevantSegment",
  title: "Segment tab",
  fields: [
    defineField({ name: "tab", type: "string", title: "Tab label" }),
    defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
    defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
    defineField({ name: "imageCaption", type: "string", title: "Image caption" }),
  ],
  preview: { select: { title: "tab" } },
});

export const whoWeWorkWithPage = defineType({
  name: "whoWeWorkWithPage",
  title: "Who we work with page",
  type: "document",
  fields: [
    // ── Page hero ─────────────────────────────────────────────────────
    defineField({
      name: "hero",
      type: "object",
      title: "Page hero",
      fields: [
        defineField({ name: "title", type: "string", title: "Title (plain)", description: 'e.g. "Who we"' }),
        defineField({ name: "accentSuffix", type: "string", title: "Accent suffix", description: 'e.g. "work with"' }),
        defineField({ name: "lead", type: "text", title: "Lead line", rows: 2 }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 4 }),
        defineField({ name: "ctas", type: "array", title: "CTA buttons", of: [ctaItem] }),
      ],
    }),

    // ── Image strip cards ─────────────────────────────────────────────
    defineField({
      name: "imageStripCards",
      type: "array",
      title: "Image strip cards",
      of: [imageStripCard],
    }),

    // ── Relevant companies switcher ───────────────────────────────────
    defineField({
      name: "relevantCompanies",
      type: "object",
      title: "Relevant companies",
      fields: [
        defineField({ name: "introParagraph", type: "text", title: "Intro paragraph", rows: 3 }),
        defineField({ name: "headlineBefore", type: "string", title: "Headline before accent" }),
        defineField({ name: "headlineAccent", type: "string", title: "Headline accent" }),
        defineField({ name: "headlineAfter", type: "string", title: "Headline after accent" }),
        defineField({ name: "segments", type: "array", title: "Segment tabs", of: [relevantSegment] }),
      ],
    }),

    // ── Client story flipped ──────────────────────────────────────────
    defineField({
      name: "clientStory",
      type: "object",
      title: "Featured client story",
      fields: [
        defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
        defineField({ name: "headline", type: "string", title: "Headline" }),
        defineField({ name: "body", type: "text", title: "Body", rows: 4 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
        defineField({ name: "imageAlt", type: "string", title: "Image alt" }),
      ],
    }),

    // ── Partner ecosystems ────────────────────────────────────────────
    defineField({
      name: "partnerEcosystems",
      type: "object",
      title: "Partner ecosystems",
      fields: [
        defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
        defineField({ name: "before", type: "string", title: "Headline before accent" }),
        defineField({ name: "accent", type: "string", title: "Headline accent" }),
        defineField({ name: "after", type: "string", title: "Headline after accent" }),
        defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
      ],
    }),

    // ── Whitepaper feature ────────────────────────────────────────────
    defineField({
      name: "whitepaper",
      type: "object",
      title: "Whitepaper feature",
      fields: [
        defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
        defineField({ name: "headline", type: "string", title: "Headline" }),
        defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
        defineField({ name: "imageAlt", type: "string", title: "Image alt" }),
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
  preview: { prepare: () => ({ title: "Who we work with page" }) },
});
