import { defineType, defineField } from "sanity";

export const openRole = defineType({
  name: "openRole",
  title: "Open role",
  type: "document",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Role label",
      description: "e.g. Consultant, Senior Consultant, Associate",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      type: "url",
      title: "Image URL",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display order",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "description" },
    prepare({ title, subtitle }: { title: string; subtitle?: string }) {
      return { title, subtitle: subtitle?.substring(0, 80) };
    },
  },
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" as const }] },
  ],
});
