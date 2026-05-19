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

const whyTab = defineArrayMember({
  type: "object",
  name: "whyTab",
  title: "Tab",
  fields: [
    defineField({ name: "label", type: "string", title: "Tab label" }),
    defineField({ name: "body", type: "text", title: "Body paragraph", rows: 4 }),
    defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
    defineField({ name: "imageCaption", type: "string", title: "Image caption" }),
  ],
  preview: { select: { title: "label" } },
});

export const careersPage = defineType({
  name: "careersPage",
  title: "Careers page",
  type: "document",
  fields: [
    // ── Page hero ─────────────────────────────────────────────────────
    defineField({
      name: "hero",
      type: "object",
      title: "Page hero",
      fields: [
        defineField({ name: "title", type: "string", title: "Title (plain)" }),
        defineField({ name: "accentSuffix", type: "string", title: "Accent suffix" }),
        defineField({ name: "lead", type: "text", title: "Lead line", rows: 2 }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 4 }),
        defineField({ name: "ctas", type: "array", title: "CTA buttons", of: [ctaItem] }),
      ],
    }),

    // ── Image strip cards ─────────────────────────────────────────────
    defineField({
      name: "imageStripCards",
      type: "array",
      title: "Image strip cards (culture strip)",
      of: [imageStripCard],
    }),

    // ── Why Bain Squared tabs ─────────────────────────────────────────
    defineField({
      name: "whyBainSquaredTabs",
      type: "array",
      title: "Why Bain Squared tabs",
      description: "Tabbed switcher covering culture, process, and support.",
      of: [whyTab],
    }),

    // ── You Matter section ────────────────────────────────────────────
    defineField({
      name: "youMatter",
      type: "object",
      title: "You Matter section",
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

    // ── Inside HQ section ────────────────────────────────────────────
    defineField({
      name: "insideHQSection",
      type: "object",
      title: "Inside HQ editorial section",
      description: "Articles are pulled automatically from insights of type 'inside-hq'. Configure the section heading and see-all link here.",
      fields: [
        defineField({ name: "heading", type: "string", title: "Section heading" }),
        defineField({ name: "seeAllLabel", type: "string", title: "See-all link label" }),
        defineField({ name: "seeAllHref", type: "string", title: "See-all link" }),
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
  preview: { prepare: () => ({ title: "Careers page" }) },
});
