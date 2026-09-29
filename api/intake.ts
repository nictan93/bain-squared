import type { IncomingMessage, ServerResponse } from "node:http";
import { createHmac } from "node:crypto";
import { intakeSchema, intakeAnswers } from "../shared/intake.js";

export default async function handler(req: IncomingMessage & {body?: unknown}, res: ServerResponse) {
  const reply = (status: number, data: unknown) => {res.statusCode=status;res.setHeader("Content-Type","application/json");res.setHeader("Cache-Control","no-store");res.end(JSON.stringify(data));};
  if (req.method !== "POST") {res.setHeader("Allow","POST");return reply(405,{error:"Use POST."});}
  const origins = new Set(["https://bain-squared.vercel.app","https://www.bainsquared.com","https://bainsquared.com"]);
  if (!origins.has(String(req.headers.origin || ""))) return reply(403,{error:"Please submit using the Bain Squared website."});
  if (!String(req.headers["content-type"]).startsWith("application/json")) return reply(415,{error:"Unsupported request."});
  const endpoint = process.env.BS_INTAKE_URL, secret = process.env.BS_INTAKE_SECRET;
  if (!endpoint || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint) || !secret || secret.length < 32)
    return reply(503,{error:"Online submission is not available yet. Please email hello@bainsquared.com."});
  try {
    let body = req.body;
    if (body === undefined) {
      const chunks: Buffer[]=[]; let size=0;
      for await (const chunk of req) {const part=Buffer.from(chunk);size+=part.length;if(size>32000)return reply(413,{error:"Your message is too long."});chunks.push(part);}
      try { body=JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return reply(400,{error:"Invalid request."}); }
    } else if (typeof body === "string") {if(body.length>32000)return reply(413,{error:"Your message is too long."});try { body=JSON.parse(body); } catch { return reply(400,{error:"Invalid request."}); }}
    const parsed=intakeSchema.safeParse(body);
    if(!parsed.success)return reply(400,{error:"Please check the required fields and privacy acknowledgement."});
    const ip=String(req.headers["x-vercel-forwarded-for"] || req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim();
    const payload=JSON.stringify({requestId:parsed.data.requestId,kind:parsed.data.kind,answers:intakeAnswers(parsed.data),
      clientHash:createHmac("sha256",secret).update(ip).digest("hex"),timestamp:Date.now()});
    const signature=createHmac("sha256",secret).update(payload).digest("hex");
    const upstream=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({payload,signature}),signal:AbortSignal.timeout(25000)});
    const result=await upstream.json() as {ok?:boolean;code?:string;reference?:string};
    if(result.ok && result.reference)return reply(200,{ok:true,reference:result.reference});
    if(result.code==="rate_limit")return reply(429,{error:"Too many submissions. Please wait before trying again, or email hello@bainsquared.com."});
    return reply(502,{error:"We could not confirm receipt. Please retry once or contact hello@bainsquared.com."});
  } catch {return reply(502,{error:"We could not confirm receipt. Please retry once or contact hello@bainsquared.com."});}
}
