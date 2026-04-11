// Original
export { default as hero_Section1Original } from "./Hero_Section_1.png";

// AVIF imports
import avif480 from "./optimized/hero_section_1-480.avif";
import avif768 from "./optimized/hero_section_1-768.avif";
import avif1200 from "./optimized/hero_section_1-1200.avif";
import avif1600 from "./optimized/hero_section_1-1600.avif";

// WebP imports
import webp480 from "./optimized/hero_section_1-480.webp";
import webp768 from "./optimized/hero_section_1-768.webp";
import webp1200 from "./optimized/hero_section_1-1200.webp";
import webp1600 from "./optimized/hero_section_1-1600.webp";

// JPG fallback
import fallback from "./optimized/hero_section_1-1600.jpg";

export const optimizedHero_Section1 = {
  avif: `${avif480} 480w, ${avif768} 768w, ${avif1200} 1200w, ${avif1600} 1600w`,
  webp: `${webp480} 480w, ${webp768} 768w, ${webp1200} 1200w, ${webp1600} 1600w`,
  fallback,
};
