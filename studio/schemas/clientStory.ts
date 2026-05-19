import { defineType, defineField, defineArrayMember } from "sanity";

export const clientStory = defineType({
  name: "clientStory",
  title: "Client story",
  type: "document",
  fields: [
    defineField({ name: "headline", type: "string", title: "Headline", validation: (Rule) => Rule.required() }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats (up to 2)",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value (e.g. $42M)" }),
            defineField({ name: "label", type: "string", title: "Label" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
    defineField({ name: "imageAlt", type: "string", title: "Image alt text" }),
    defineField({ name: "ctaHref", type: "string", title: "CTA link" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  preview: {
    select: { title: "headline" },
  },
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
