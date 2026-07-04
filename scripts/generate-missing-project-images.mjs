import sharp from "sharp";
import path from "path";
import fs from "fs";

const ROOT = path.resolve(process.cwd(), "src/assets/images/projects");
const WIDTHS = [480, 768, 1200, 1600];
const DIRS = ["GoretoX", "workhub", "pathshalabms", "pathshalatms"];

const run = async () => {
  for (const dir of DIRS) {
    const full = path.join(ROOT, dir);
    const optDir = path.join(full, "optimized");
    fs.mkdirSync(optDir, { recursive: true });

    const files = fs.readdirSync(full).filter((f) => /\.(jpe?g|png)$/i.test(f));
    const optFiles = fs.existsSync(optDir) ? fs.readdirSync(optDir) : [];

    for (const file of files) {
      const base = file.replace(/\.[^.]+$/, "");
      const hasOpt = optFiles.some((o) => o.startsWith(`${base}-`));
      if (hasOpt) continue;

      const input = path.join(full, file);
      const meta = await sharp(input).metadata();
      const widths = WIDTHS.filter((w) => w <= (meta.width ?? Infinity));
      if (widths.length === 0) widths.push(meta.width);

      for (const width of widths) {
        const avifPath = path.join(optDir, `${base}-${width}.avif`);
        const webpPath = path.join(optDir, `${base}-${width}.webp`);
        const jpgPath = path.join(optDir, `${base}-${width}.jpg`);

        await sharp(input).resize({ width }).avif({ quality: 60 }).toFile(avifPath);
        await sharp(input).resize({ width }).webp({ quality: 75 }).toFile(webpPath);
        await sharp(input).resize({ width }).flatten({ background: "#ffffff" }).jpeg({ quality: 80 }).toFile(jpgPath);
      }
      console.log(`done: ${dir}/${file} -> widths [${widths.join(", ")}]`);
    }
  }
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
