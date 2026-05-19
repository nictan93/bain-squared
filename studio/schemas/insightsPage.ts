import { defineType, defineField, defineArrayMember } from "sanity";

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

export const insightsPage = defineType({
  name: "insightsPage",
  title: "Insights page",
  type: "document",
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      type: "object",
      title: "Hero",
      fields: [
        defineField({ name: "title", type: "string", title: "Page title", description: 'Large left headline, e.g. "Insights"' }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA button label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "headline", type: "string", title: "Right headline" }),
        defineField({ name: "body", type: "text", title: "Right body paragraph", rows: 4 }),
      ],
    }),

    // ── Image strip cards ─────────────────────────────────────────────
    defineField({
      name: "imageStripCards",
      type: "array",
      title: "Image strip cards",
      of: [imageStripCard],
    }),

    // ── Whitepaper panel ──────────────────────────────────────────────
    defineField({
      name: "whitepaperPanel",
      type: "object",
      title: "Whitepaper panel",
      fields: [
        defineField({ name: "headline", type: "string", title: "Headline" }),
        defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
        defineField({ name: "imageAlt", type: "string", title: "Image alt" }),
      ],
    }),

    // ── Newsletter section ────────────────────────────────────────────
    defineField({
      name: "newsletter",
      type: "object",
      title: "Newsletter subscribe section",
      fields: [
        defineField({ name: "heading", type: "string", title: "Section heading" }),
        defineField({ name: "subheading", type: "text", title: "Sub-heading / description", rows: 2 }),
        defineField({ name: "ctaLabel", type: "string", title: "Subscribe button label" }),
        defineField({ name: "successMessage", type: "text", title: "Success message after subscribe", rows: 2 }),
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
  preview: { prepare: () => ({ title: "Insights page" }) },
});
