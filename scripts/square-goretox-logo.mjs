import sharp from "sharp";
import path from "path";

const SRC = path.resolve(process.cwd(), "src/assets/images/companies/goretox/logos/logo.png");
const OUT_DIR = path.resolve(process.cwd(), "src/assets/images/companies/goretox/logos");

const BLUE = { r: 0, g: 65, b: 167 };
const COLOR_DIST_THRESHOLD = 60;

const run = async () => {
  const img = sharp(SRC);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // bounding box of the existing circle badge
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // isolate the icon glyph: zero-out alpha for pixels close to the circle's blue
  const iconBuffer = Buffer.from(data);
  for (let i = 0; i < iconBuffer.length; i += channels) {
    const r = iconBuffer[i], g = iconBuffer[i + 1], b = iconBuffer[i + 2];
    const dist = Math.sqrt((r - BLUE.r) ** 2 + (g - BLUE.g) ** 2 + (b - BLUE.b) ** 2);
    if (dist < COLOR_DIST_THRESHOLD) {
      iconBuffer[i + 3] = 0;
    }
  }

  const iconLayer = sharp(iconBuffer, { raw: { width, height, channels } }).png();

  const squareSize = Math.max(maxX - minX + 1, maxY - minY + 1);
  const squareBadge = await sharp({
    create: {
      width: squareSize,
      height: squareSize,
      channels: 4,
      background: { r: BLUE.r, g: BLUE.g, b: BLUE.b, alpha: 1 },
    },
  }).png().toBuffer();

  const canvas = sharp({
    create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  });

  const iconBuf = await iconLayer.toBuffer();

  const result = await canvas
    .composite([
      { input: squareBadge, left: minX, top: minY },
      { input: iconBuf, left: 0, top: 0 },
    ])
    .png()
    .toBuffer();

  await sharp(result).toFile(path.join(OUT_DIR, "logo.png"));
  console.log("wrote square logo.png", { width, height, squareSize, minX, minY });
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
