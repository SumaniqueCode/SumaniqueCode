// ─── Goretox ───

import goretoxLogoAvif200 from "./goretox/logos/goretox-200.avif";
import goretoxLogoAvif400 from "./goretox/logos/goretox-400.avif";
import goretoxLogoWebp200 from "./goretox/logos/goretox-200.webp";
import goretoxLogoWebp400 from "./goretox/logos/goretox-400.webp";
import goretoxLogoFallback from "./goretox/logos/goretox-400.jpg";

export const optimizedGoretoxLogo = {
  avif: `${goretoxLogoAvif200} 200w, ${goretoxLogoAvif400} 400w`,
  webp: `${goretoxLogoWebp200} 200w, ${goretoxLogoWebp400} 400w`,
  fallback: goretoxLogoFallback,
};

// ─── Digital Pathshala ───

import digitalPathshalaAvif200 from "./optimized/digital_pathshala-200.avif";
import digitalPathshalaAvif400 from "./optimized/digital_pathshala-400.avif";
import digitalPathshalaWebp200 from "./optimized/digital_pathshala-200.webp";
import digitalPathshalaWebp400 from "./optimized/digital_pathshala-400.webp";
import digitalPathshalaFallback from "./optimized/digital_pathshala-400.jpg";

export const optimizedDigitalPathshalaLogo = {
  avif: `${digitalPathshalaAvif200} 200w, ${digitalPathshalaAvif400} 400w`,
  webp: `${digitalPathshalaWebp200} 200w, ${digitalPathshalaWebp400} 400w`,
  fallback: digitalPathshalaFallback,
};

// ─── Hunchha Digital ───

import hunchhaDigitalAvif200 from "./optimized/hunchha_digital-200.avif";
import hunchhaDigitalWebp200 from "./optimized/hunchha_digital-200.webp";
import hunchhaDigitalFallback from "./optimized/hunchha_digital-200.jpg";

export const optimizedHunchhaDigitalLogo = {
  avif: `${hunchhaDigitalAvif200} 200w`,
  webp: `${hunchhaDigitalWebp200} 200w`,
  fallback: hunchhaDigitalFallback,
};