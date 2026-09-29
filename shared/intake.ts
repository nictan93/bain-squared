import { z } from "zod";

const text = (max: number) => z.string().trim().min(1).max(max);
const common = {
  requestId: z.string().uuid(),
  first: text(100), last: text(100), email: z.string().trim().email().max(254),
  terms: z.literal(true), website: z.string().max(0),
};
export const intakeSchema = z.discriminatedUnion("kind", [
  z.object({ ...common, kind: z.literal("enquiry"), organization: text(200), jobTitle: text(200), service: text(100), message: text(10000) }),
  z.object({ ...common, kind: z.literal("application"), phone: text(80), location: text(200), function: text(100), linkedin: z.string().url().max(1000), intro: text(10000), resumeName: z.string().max(1000) }),
]);
export function intakeAnswers(input: z.infer<typeof intakeSchema>) {
  const common = { Name: `${input.first} ${input.last}`, Email: input.email,
    "Privacy acknowledgement": "I have read the privacy notice and agree that Bain Squared may use these details to respond to this request." };
  if (input.kind === "enquiry") return { ...common, Company: input.organization,
    "Area of interest": /AI|LLM|Managed/.test(input.service) ? "AI automation" : /CFO|Financial/.test(input.service) ? "Finance" : /Valuation/.test(input.service) ? "Valuation" : "Other",
    "What would you like to change?": `Service: ${input.service}\nJob title: ${input.jobTitle}\n\n${input.message}`,
    "Timing or deadline": "" };
  return { ...common, "Role or area of interest": input.function, "LinkedIn or portfolio URL": input.linkedin,
    "Relevant experience": `Phone: ${input.phone}\nLocation: ${input.location}\nCV link: ${input.resumeName || "To follow by email"}\n\n${input.intro}`, Availability: "" };
}
