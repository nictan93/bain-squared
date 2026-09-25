import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
export async function syncMedia() {
 const image=["webp","jpg","png"].map(ext=>"/media/homepage."+ext).find(p=>existsSync("client/public"+p)) || "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80";
 const video=existsSync("client/public/media/homepage.mp4")?"/media/homepage.mp4":null;
 await writeFile("client/src/data/homepage-media.json",JSON.stringify({image,video},null,2));
}
