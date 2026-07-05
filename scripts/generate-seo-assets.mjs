import sharp from "sharp";
import path from "path";
import fs from "fs";

const ROOT = process.cwd();
const SRC_PHOTO = path.join(ROOT, "src/assets/images/logos/admin_bw.jpg");
const PUBLIC_DIR = path.join(ROOT, "public");

const run = async () => {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  const makeCircular = async (size) => {
    const square = await sharp(SRC_PHOTO).resize(size, size, { fit: "cover" }).png().toBuffer();
    const mask = Buffer.from(
      `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`
    );
    return sharp(square).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  };

  // Circular favicons / app icons (brand photo, transparent corners)
  // Google's favicon requirements (https://developers.google.com/search/docs/appearance/favicon-in-search)
  // want a square image sized as a multiple of 48px, referenced via a direct <link rel="icon">.
  const circularSizes = [
    { file: "favicon-16x16.png", size: 16 },
    { file: "favicon-32x32.png", size: 32 },
    { file: "favicon-48x48.png", size: 48 },
    { file: "favicon-96x96.png", size: 96 },
    { file: "icon-192.png", size: 192 },
    { file: "icon-512.png", size: 512 },
  ];
  for (const { file, size } of circularSizes) {
    const buf = await makeCircular(size);
    await sharp(buf).toFile(path.join(PUBLIC_DIR, file));
    console.log("wrote", file);
  }

  // Apple touch icon: circular photo composited onto a solid white square
  // (transparency isn't reliably honored by iOS, so we flatten onto white instead of leaving alpha)
  const appleCircular = await makeCircular(180);
  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([{ input: appleCircular, top: 0, left: 0 }])
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  console.log("wrote apple-touch-icon.png (circular on white)");

  // ICO fallback favicon (circular, 48x48 to match Google's favicon size guidance)
  const favicon48 = await makeCircular(48);
  await sharp(favicon48).toFormat("png").toFile(path.join(PUBLIC_DIR, "favicon.ico"));
  console.log("wrote favicon.ico (48x48 circular png-as-ico)");

  // Open Graph / Twitter share image (1200x630)
  const OG_W = 1200;
  const OG_H = 630;
  const photoSize = 380;

  const photoBuffer = await sharp(SRC_PHOTO)
    .resize(photoSize, photoSize, { fit: "cover" })
    .png()
    .toBuffer();

  // circular mask for the photo
  const circleMask = Buffer.from(
    `<svg width="${photoSize}" height="${photoSize}"><circle cx="${photoSize / 2}" cy="${photoSize / 2}" r="${photoSize / 2}" fill="#fff"/></svg>`
  );
  const circularPhoto = await sharp(photoBuffer)
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const svgBg = `
  <svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e3a8a"/>
      </linearGradient>
    </defs>
    <rect width="${OG_W}" height="${OG_H}" fill="url(#bg)"/>
    <circle cx="${OG_W - 80}" cy="${OG_H - 60}" r="220" fill="#2563eb" opacity="0.15"/>
    <circle cx="60" cy="40" r="160" fill="#9333ea" opacity="0.12"/>
    <text x="470" y="270" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">Suman Regmi</text>
    <text x="470" y="325" font-family="Arial, sans-serif" font-size="30" font-weight="500" fill="#93c5fd">Full Stack Web Developer</text>
    <text x="470" y="380" font-family="Arial, sans-serif" font-size="22" fill="#cbd5e1">React &#183; Django &#183; Laravel &#183; TypeScript</text>
  </svg>`;

  await sharp({
    create: { width: OG_W, height: OG_H, channels: 4, background: { r: 15, g: 23, b: 42, alpha: 1 } },
  })
    .composite([
      { input: Buffer.from(svgBg), top: 0, left: 0 },
      { input: circularPhoto, top: Math.round((OG_H - photoSize) / 2), left: 60 },
    ])
    .png()
    .toFile(path.join(PUBLIC_DIR, "og-image.png"));
  console.log("wrote og-image.png");
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
