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
      options: {
        list: [
          { title: "Paragraph", value: "p" },
          { title: "Heading (H2)", value: "h2" },
          { title: "Pull quote", value: "quote" },
          { title: "List", value: "list" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "text", type: "text", title: "Text" }),
    defineField({ name: "dropcap", type: "boolean", title: "Drop cap on first letter" }),
    defineField({ name: "attribution", type: "string", title: "Quote attribution" }),
    defineField({
      name: "items",
      type: "array",
      title: "List items",
      of: [{ type: "string" }],
    }),
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

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "headline" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "headline", type: "string", title: "Headline", validation: (Rule) => Rule.required() }),
    defineField({ name: "dek", type: "text", title: "Dek (sub-headline)", rows: 3 }),
    defineField({ name: "publication", type: "string", title: "Publication label" }),
    defineField({
      name: "contentType",
      type: "string",
      title: "Content type",
      options: {
        list: ["Field Note", "Perspective", "Article", "Report", "Playbook", "Brief", "Infographic", "Webinar", "Checklist", "Template", "Explainer"],
      },
    }),
    defineField({
      name: "topic",
      type: "string",
      title: "Topic",
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
      name: "publicationSeries",
      type: "string",
      title: "Publication series",
      options: {
        list: [
          { title: "Perspectives", value: "perspectives" },
          { title: "Squared Reports", value: "squared-reports" },
          { title: "Whitepaper", value: "whitepaper" },
          { title: "Field Notes", value: "field-notes" },
          { title: "Client Stories", value: "client-stories" },
          { title: "Inside HQ", value: "inside-hq" },
        ],
      },
    }),
    defineField({ name: "date", type: "date", title: "Publish date" }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero image (upload)",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImageUrl",
      type: "url",
      title: "Hero image URL (external / Unsplash placeholder)",
      description: "Use this until a proper image is uploaded above.",
    }),
    defineField({
      name: "authors",
      type: "array",
      title: "Authors",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "href", type: "string", title: "Profile link" }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),
    defineField({
      name: "withAuthors",
      type: "array",
      title: "With (contributing authors)",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "href", type: "string", title: "Profile link" }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Article body",
      of: [articleBlock],
    }),
  ],
  preview: {
    select: { title: "headline", subtitle: "date" },
  },
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
