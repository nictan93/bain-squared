import { defineType, defineField, defineArrayMember } from "sanity";

const reviewItem = defineArrayMember({
  type: "object",
  name: "review",
  title: "Review",
  fields: [
    defineField({ name: "quote", type: "text", title: "Quote", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "reviewer", type: "string", title: "Reviewer role (e.g. Founder & CEO)" }),
    defineField({ name: "companyType", type: "string", title: "Company type (e.g. Singapore B2B SaaS, Series A)" }),
    defineField({ name: "service", type: "string", title: "Service used" }),
    defineField({ name: "problem", type: "text", title: "Problem", rows: 2 }),
    defineField({ name: "outcome", type: "text", title: "Outcome", rows: 2 }),
  ],
  preview: {
    select: { title: "reviewer", subtitle: "companyType" },
  },
});

export const reviewGroup = defineType({
  name: "reviewGroup",
  title: "Review group",
  type: "document",
  fields: [
    defineField({ name: "id", type: "string", title: "ID (slug)", description: "e.g. valuation, cfo, ai", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", type: "string", title: "Group title", validation: (Rule) => Rule.required() }),
    defineField({ name: "intro", type: "text", title: "Intro text", rows: 3 }),
    defineField({ name: "order", type: "number", title: "Display order" }),
    defineField({
      name: "reviews",
      type: "array",
      title: "Reviews",
      of: [reviewItem],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
