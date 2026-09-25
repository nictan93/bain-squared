import React from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import App from "../client/src/App";
import { routes, metadata, SITE } from "../client/src/data/seo";
const esc=(v:string)=>v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
export async function prerender() {
 const template=await readFile("dist/public/index.html","utf8");
 for(const path of [...routes,"/404"]) {
  const m=metadata(path);
  const head=`<title>${esc(m.title)}</title><meta name="description" content="${esc(m.description)}"/><meta name="robots" content="${m.index?'index, follow, max-image-preview:large':'noindex, follow'}"/><link rel="canonical" href="${m.url}"/>`+
  Object.entries({title:m.title,description:m.description,url:m.url,image:m.image,type:m.type,site_name:"Bain Squared",locale:"en_SG"}).map(([k,v])=>`<meta property="og:${k}" content="${esc(v)}"/>`).join("")+
  `<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${esc(m.title)}"/><meta name="twitter:description" content="${esc(m.description)}"/><meta name="twitter:image" content="${m.image}"/><script id="page-schema" type="application/ld+json">${JSON.stringify(m.schema).replace(/</g,"\\u003c")}</script>`;
  const html=template.replace('<!--page-metadata-->',head).replace('<div id="root"></div>',`<div id="root">${renderToString(<App ssrPath={path}/>)}</div>`);
  const file=path==="/"?"dist/public/index.html":path==="/404"?"dist/public/404.html":`dist/public${path}.html`;
  await mkdir(file.substring(0,file.lastIndexOf("/")),{recursive:true});await writeFile(file,html);
 }
 const indexable=routes.filter(p=>metadata(p).index);
 await writeFile("dist/public/sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable.map(p=>`<url><loc>${metadata(p).url}</loc></url>`).join("")}</urlset>`);
 await writeFile("dist/public/robots.txt",`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
 await writeFile("dist/public/llms.txt",`# Bain Squared\n\nSingapore-based advisory and AI operations across finance, valuation and practical AI deployment.\n\n${indexable.map(p=>`- [${metadata(p).title}](${SITE}${p}): ${metadata(p).description}`).join("\n")}\n`);
 console.log(`Prerendered ${routes.length} pages with unique metadata and readable content.`);
}
