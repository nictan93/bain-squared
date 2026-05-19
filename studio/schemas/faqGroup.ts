import { defineType, defineField, defineArrayMember } from "sanity";

const faqItem = defineArrayMember({
  type: "object",
  name: "faqItem",
  title: "FAQ item",
  fields: [
    defineField({ name: "q", type: "string", title: "Question", validation: (Rule) => Rule.required() }),
    defineField({ name: "a", type: "text", title: "Answer", rows: 4, validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: "q" },
  },
});

export const faqGroup = defineType({
  name: "faqGroup",
  title: "FAQ group",
  type: "document",
  fields: [
    defineField({ name: "id", type: "string", title: "ID (slug)", description: "e.g. general, valuation, cfo, ai, engagement", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", type: "string", title: "Group title", validation: (Rule) => Rule.required() }),
    defineField({ name: "intro", type: "text", title: "Intro text", rows: 2 }),
    defineField({ name: "order", type: "number", title: "Display order" }),
    defineField({
      name: "items",
      type: "array",
      title: "Questions",
      of: [faqItem],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
