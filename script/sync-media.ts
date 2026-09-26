import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
export async function syncMedia(snapshot = false) {
 let items: Array<{slot:string; url:string; alt?:string}> = [];
 if (snapshot) items = JSON.parse(await readFile("client/src/data/site-media.json", "utf8"));
 else {
  const query='*[_id == "bs-site-media"][0].items';
  const response=await fetch("https://84yn8vov.api.sanity.io/v2025-02-19/data/query/production?query="+encodeURIComponent(query), {signal:AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error("Site photo sync failed: "+response.status);
  const {result}=await response.json();
  if (result !== null && !Array.isArray(result)) throw new Error("Invalid site photo response");
  items=result || [];
  const seen=new Set<string>();
  for (const item of items) {
   if (!/^[a-z0-9-]+$/.test(item.slot) || !/^https:\/\/cdn\.sanity\.io\/images\/84yn8vov\/production\//.test(item.url) || seen.has(item.slot)) throw new Error("Invalid site photo slot");
   seen.add(item.slot);
  }
  await writeFile("client/src/data/site-media.json",JSON.stringify(items,null,2)+"\n");
 }
 const local=["webp","jpg","png"].map(ext=>"/media/homepage."+ext).find(p=>existsSync("client/public"+p));
 const image=items.find(item=>item.slot==="homepage")?.url || local || "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80";
 const video=existsSync("client/public/media/homepage.mp4")?"/media/homepage.mp4":null;
 await writeFile("client/src/data/homepage-media.json",JSON.stringify({image,video},null,2));
}
