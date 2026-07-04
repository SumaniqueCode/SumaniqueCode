import sharp from "sharp";
import path from "path";
import fs from "fs";

const ROOT = path.resolve(process.cwd(), "src/assets/images");
const WIDTHS = [480, 768, 1200, 1600];

const jobs = [
  { input: `${ROOT}/projects/GoretoX/landing.jpg`, outDir: `${ROOT}/projects/GoretoX/optimized`, base: "landing", widths: WIDTHS },
  { input: `${ROOT}/projects/workhub/landing.jpg`, outDir: `${ROOT}/projects/workhub/optimized`, base: "landing", widths: WIDTHS },
  { input: `${ROOT}/projects/pathshalabms/landing.jpg`, outDir: `${ROOT}/projects/pathshalabms/optimized`, base: "landing", widths: WIDTHS },
  { input: `${ROOT}/projects/pathshalatms/landing.jpg`, outDir: `${ROOT}/projects/pathshalatms/optimized`, base: "landing", widths: WIDTHS },
  { input: `${ROOT}/companies/digital_pathshala.png`, outDir: `${ROOT}/companies/optimized`, base: "digital_pathshala", widths: [200, 400] },
  { input: `${ROOT}/companies/hunchha_digital.png`, outDir: `${ROOT}/companies/optimized`, base: "hunchha_digital", widths: [200, 400] },
];

const run = async () => {
  for (const job of jobs) {
    if (!fs.existsSync(job.input)) {
      console.error(`MISSING SOURCE: ${job.input}`);
      continue;
    }
    fs.mkdirSync(job.outDir, { recursive: true });

    const meta = await sharp(job.input).metadata();
    const widths = job.widths.filter((w) => w <= (meta.width ?? Infinity));
    if (widths.length === 0) widths.push(meta.width);

    for (const width of widths) {
      const avifPath = path.join(job.outDir, `${job.base}-${width}.avif`);
      const webpPath = path.join(job.outDir, `${job.base}-${width}.webp`);
      const jpgPath = path.join(job.outDir, `${job.base}-${width}.jpg`);

      await sharp(job.input).resize({ width }).avif({ quality: 60 }).toFile(avifPath);
      await sharp(job.input).resize({ width }).webp({ quality: 75 }).toFile(webpPath);
      await sharp(job.input).resize({ width }).flatten({ background: "#ffffff" }).jpeg({ quality: 80 }).toFile(jpgPath);

      console.log(`done: ${job.base}-${width} -> ${job.outDir}`);
    }
  }
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
