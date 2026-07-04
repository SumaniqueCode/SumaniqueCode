import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, "src/data/ProjectData.ts");

const generatedMap = JSON.parse(
  fs.readFileSync(path.join(ROOT, "scripts/.generated-map.json"), "utf8")
);

// thumbnail pairs generated earlier in the session, not covered by generatedMap
const preExisting = [
  ["goretoxLanding", "optimizedGoretoxLanding"],
  ["shareinsightnepalLanding", "optimizedShareinsightnepalLanding"],
  ["dailyrepoDashboard", "optimizedDailyrepoDashboard"],
  ["skillkarmaLandingPage", "optimizedSkillkarmaLandingPage"],
  ["saanokaamMainUI1", "optimizedSaanokaamMainUI1"],
  ["cchubLanding", "optimizedCchubLanding"],
  ["pathshalaTmsLanding", "optimizedPathshalaTmsLanding"],
  ["pathshalaBmsLanding", "optimizedPathshalaBmsLanding"],
  ["workhubLanding", "optimizedWorkhubLanding"],
];

const pairs = [
  ...generatedMap.map((g) => [g.plainName, g.optimizedName]),
  ...preExisting,
];

let content = fs.readFileSync(DATA_PATH, "utf8");

for (const [plain, optimized] of pairs) {
  const re = new RegExp(`\\b${plain}\\b`, "g");
  content = content.replace(re, optimized);
}

// De-duplicate the named import list (first `import { ... } from` block)
content = content.replace(
  /import \{([\s\S]*?)\} from "@\/assets\/images\/projects";/,
  (full, inner) => {
    const names = inner
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const seen = new Set();
    const deduped = [];
    for (const n of names) {
      if (!seen.has(n)) {
        seen.add(n);
        deduped.push(n);
      }
    }
    return `import {\n  ${deduped.join(", ")}\n} from "@/assets/images/projects";`;
  }
);

fs.writeFileSync(DATA_PATH, content, "utf8");
console.log("ProjectData.ts rewritten.");
