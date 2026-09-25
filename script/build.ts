import { syncMedia } from "./sync-media";
import { syncSanity } from "./sync-sanity";
import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "node:fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  const snapshot = process.argv.includes("--snapshot");
  if (snapshot && process.env.VERCEL) throw new Error("Snapshot builds are for local migration verification only");
  if (!snapshot) await syncSanity();
  await syncMedia();
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  await esbuild({entryPoints:["script/prerender.tsx"],platform:"node",bundle:true,packages:"external",format:"esm",outfile:"dist/prerender.mjs",jsx:"automatic",alias:{"@":process.cwd()+"/client/src"}});
  const { prerender } = await import(process.cwd()+"/dist/prerender.mjs");
  await prerender();
  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
