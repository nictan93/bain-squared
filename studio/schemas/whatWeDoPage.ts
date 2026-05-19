import { defineType, defineField, defineArrayMember } from "sanity";

const pillarCard = defineArrayMember({
  type: "object",
  name: "pillar",
  title: "Pillar tab",
  fields: [
    defineField({ name: "tab", type: "string", title: "Tab label", description: 'e.g. "Build efficiency using existing systems"' }),
    defineField({ name: "description", type: "text", title: "Panel description", rows: 3 }),
    defineField({
      name: "card",
      type: "object",
      title: "Featured article card",
      fields: [
        defineField({ name: "tag", type: "string", title: "Card tag / practice label" }),
        defineField({ name: "title", type: "string", title: "Card headline" }),
        defineField({ name: "source", type: "string", title: "Source label", description: 'e.g. "Squared Report"' }),
        defineField({ name: "href", type: "string", title: "Card link" }),
        defineField({ name: "imageUrl", type: "url", title: "Card image URL" }),
      ],
    }),
  ],
  preview: { select: { title: "tab" } },
});

export const whatWeDoPage = defineType({
  name: "whatWeDoPage",
  title: "What we do page",
  type: "document",
  fields: [
    // ── Intro band ────────────────────────────────────────────────────
    defineField({
      name: "intro",
      type: "object",
      title: "Intro band",
      fields: [
        defineField({ name: "paragraph", type: "text", title: "Intro paragraph", rows: 4 }),
        defineField({ name: "headlineBefore", type: "string", title: "Headline before accent" }),
        defineField({ name: "headlineAccent", type: "string", title: "Headline accent", description: 'e.g. "growth"' }),
      ],
    }),

    // ── Pillar switcher ───────────────────────────────────────────────
    defineField({
      name: "pillarSwitcher",
      type: "array",
      title: "Pillar switcher tabs",
      of: [pillarCard],
      validation: (Rule) => Rule.max(4),
    }),

    // ── Capabilities carousel ─────────────────────────────────────────
    defineField({
      name: "capabilitiesHeading",
      type: "string",
      title: "Capabilities carousel heading",
      description: 'e.g. "Explore our capabilities"',
    }),

    // ── Perspective feature ───────────────────────────────────────────
    defineField({
      name: "perspectiveFeature",
      type: "object",
      title: "Perspective feature",
      description: "Full-bleed image card with headline, body, and CTA.",
      fields: [
        defineField({ name: "headline", type: "string", title: "Headline" }),
        defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
        defineField({ name: "backgroundImageUrl", type: "url", title: "Background image URL" }),
      ],
    }),

    // ── Squared Method ────────────────────────────────────────────────
    defineField({
      name: "squaredMethod",
      type: "object",
      title: "The Squared Method section",
      fields: [
        defineField({ name: "headlineBefore", type: "string", title: "Headline before accent" }),
        defineField({ name: "headlineAccent", type: "string", title: "Headline accent", description: 'e.g. "the Squared Method"' }),
        defineField({ name: "body", type: "text", title: "Body paragraph", rows: 4 }),
        defineField({
          name: "steps",
          type: "array",
          title: "Steps (ordered chips)",
          of: [{ type: "string" }],
          description: 'e.g. ["Diagnose", "Design", "Deploy", "Defend"]',
        }),
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
  preview: { prepare: () => ({ title: "What we do page" }) },
});
