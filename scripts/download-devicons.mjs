import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "src/assets/icons/devicons");

const urls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/htmx/htmx-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
];

const run = async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let ok = 0;
  let failed = [];

  for (const url of urls) {
    const filename = url.split("/").pop();
    const dest = path.join(OUT_DIR, filename);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (!text.trim().startsWith("<svg") && !text.trim().startsWith("<?xml")) {
        throw new Error("Response doesn't look like SVG");
      }
      fs.writeFileSync(dest, text, "utf8");
      console.log("OK  ", filename);
      ok++;
    } catch (err) {
      console.error("FAIL", filename, err.message);
      failed.push(filename);
    }
  }

  console.log(`\n${ok}/${urls.length} downloaded.`);
  if (failed.length) {
    console.log("Failed:", failed.join(", "));
    process.exit(1);
  }
};

run();
