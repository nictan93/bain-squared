import { writeFile } from "node:fs/promises";
const endpoint="https://84yn8vov.api.sanity.io/v2025-02-19/data/query/production";
export async function syncSanity() {
 const query='*[_type == "insight" && !(_id in path("drafts.**")) && defined(body) && count(body)>0 && _id != "insight-operators-playbook-agentic-ai"] | order(publishedAt desc)';
 const res=await fetch(endpoint+"?perspective=published&query="+encodeURIComponent(query),{signal:AbortSignal.timeout(30000)});
 if(!res.ok) throw new Error("Sanity content sync failed: "+res.status);
 const {result}=await res.json();
 if(!Array.isArray(result) || result.length<1) throw new Error("Sanity response is missing the launch library. Build stopped to preserve the current deployment.");
 const names:Record<string,string>={"field-note":"Field Notes",perspective:"Perspectives","squared-report":"Squared Reports","looking-glass":"Looking Glass","inside-hq":"Inside Bain Squared HQ","client-story":"Client Stories"};
 const seen=new Set();
 const safeUrl=(s:unknown)=>typeof s==="string" && (/^https:\/\//.test(s)||(/^\/(?!\/)/.test(s)))?s:undefined;
 const docs=result.map((a:any)=>{
  if(!a.title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug?.current) || seen.has(a.slug.current)) throw new Error("Invalid or duplicate Sanity article slug");
  seen.add(a.slug.current);
  if (a.legacyPath && a.legacyPath!==`/post/${a.slug.current}`) throw new Error("Invalid preserved article path");
  if (a.legacyCanonical && a.legacyCanonical!==`https://www.bainsquared.com${a.legacyPath}`) throw new Error("Invalid preserved canonical address");
  if(!Array.isArray(a.body)||a.body.some((b:any)=>!["p","h2","h3","quote","list","image","address"].includes(b.type)))throw new Error("Unsupported article body format: "+a.slug.current);
  return {...a,launchId:a.launchId||a._id,publication:names[a.type]||a.publication||"Field Notes",contentFormat:a.contentFormat||"Article",dek:a.dek||a.summary||"",authors:a.authors?.length?a.authors:[{name:"Bain Squared"}],practiceTags:a.practiceTags||[],heroImageUrl:safeUrl(a.heroImageUrl)||"/img/editorial/r01.svg",seo:{title:a.seo?.title||a.title+" | Bain Squared",description:a.seo?.description||a.summary||a.dek},downloadUrl:safeUrl(a.downloadUrl)||null,downloadLabel:a.downloadLabel||"Download the companion"};
 });
 await writeFile("client/src/data/launch-articles.json",JSON.stringify(docs,null,2)+"\n");
 console.log(`Synced ${docs.length} published Sanity articles. No token is sent to the browser.`);
}
