export const nativeIntakeEnabled = import.meta.env.VITE_NATIVE_INTAKE === "true";
export async function sendIntake(kind: "enquiry" | "application", fields: object, requestId: string, website: string) {
  const response = await fetch("/api/intake", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...fields,kind,requestId,website})});
  const result = await response.json();
  if (!response.ok || result.ok !== true) throw new Error(result.error || "We could not confirm receipt. Please email hello@bainsquared.com.");
  return result.reference as string;
}
