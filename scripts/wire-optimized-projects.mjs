import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "src/assets/images/projects/index.ts");
const IMAGES_ROOT = path.join(ROOT, "src/assets/images/projects");

const content = fs.readFileSync(INDEX_PATH, "utf8");

const exportRe = /export \{ default as (\w+) \} from "(\.\/[^"]+)";/g;
const existingOptimized = new Set(
  [...content.matchAll(/export const (optimized\w+) =/g)].map((m) => m[1])
);

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const WIDTHS = [480, 768, 1200, 1600];

const blocksByDir = new Map();
const generatedMap = []; // { plainName, optimizedName }

let match;
while ((match = exportRe.exec(content))) {
  const [, varName, relPath] = match;
  const optimizedName = `optimized${cap(varName)}`;
  if (existingOptimized.has(optimizedName)) continue;

  // relPath like "./GoretoX/mentors.jpg"
  const withoutDotSlash = relPath.replace(/^\.\//, "");
  const dir = path.dirname(withoutDotSlash); // GoretoX
  const fileName = path.basename(withoutDotSlash); // mentors.jpg
  const base = fileName.replace(/\.[^.]+$/, ""); // mentors

  const optDirAbs = path.join(IMAGES_ROOT, dir, "optimized");
  if (!fs.existsSync(optDirAbs)) continue;
  const optFiles = fs.readdirSync(optDirAbs);

  const availableWidths = WIDTHS.filter((w) =>
    optFiles.includes(`${base}-${w}.avif`)
  );
  if (availableWidths.length === 0) continue;

  const maxWidth = Math.max(...availableWidths);

  const importLines = [];
  const avifVars = [];
  const webpVars = [];
  for (const w of availableWidths) {
    const avifVar = `${varName}Avif${w}`;
    const webpVar = `${varName}Webp${w}`;
    importLines.push(`import ${avifVar} from "./${dir}/optimized/${base}-${w}.avif";`);
    importLines.push(`import ${webpVar} from "./${dir}/optimized/${base}-${w}.webp";`);
    avifVars.push(`\${${avifVar}} ${w}w`);
    webpVars.push(`\${${webpVar}} ${w}w`);
  }
  const fallbackVar = `${varName}Fallback`;
  importLines.push(`import ${fallbackVar} from "./${dir}/optimized/${base}-${maxWidth}.jpg";`);

  const block = [
    ...importLines,
    "",
    `export const ${optimizedName} = {`,
    `  avif: \`${avifVars.join(", ")}\`,`,
    `  webp: \`${webpVars.join(", ")}\`,`,
    `  fallback: ${fallbackVar},`,
    `};`,
  ].join("\n");

  if (!blocksByDir.has(dir)) blocksByDir.set(dir, []);
  blocksByDir.get(dir).push(block);
  generatedMap.push({ plainName: varName, optimizedName });
}

let appended = `\n// ─── Auto-generated optimized gallery images ───\n`;
for (const [dir, blocks] of blocksByDir) {
  appended += `\n// ─── ${dir} (gallery) ───\n`;
  appended += blocks.join("\n\n") + "\n";
}

fs.writeFileSync(INDEX_PATH, content + appended, "utf8");
fs.writeFileSync(
  path.join(ROOT, "scripts/.generated-map.json"),
  JSON.stringify(generatedMap, null, 2)
);

console.log(`Generated ${generatedMap.length} optimized exports across ${blocksByDir.size} projects.`);
