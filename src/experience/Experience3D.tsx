import { Suspense, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Environment, Float, Icosahedron, Lightformer, RoundedBox, Scroll, ScrollControls, Sparkles, Sphere, Stars, Svg, useScroll } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { ArrowRight, Code2, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import { djangoIcon, dockerIcon, laravelIcon, nextjsIcon, postgresqlIcon, reactIcon, tailwindcssIcon, typescriptIcon } from "@/assets/icons/devicons";

interface Experience3DProps {
  onComplete: () => void;
  progressRef: RefObject<HTMLDivElement>;
  startAtEnd?: boolean;
}

const GAP = 14;

const stations = [
  { z: 0, color: "#60a5fa", accent: "#c084fc" },        // intro — code glyph
  { z: -GAP, color: "#22d3ee", accent: "#60a5fa" },     // about — globe
  { z: -GAP * 2, color: "#c084fc", accent: "#22d3ee" }, // skills — logos
  { z: -GAP * 3, color: "#f59e0b", accent: "#38bdf8" }, // experience — briefcase
  { z: -GAP * 4, color: "#60a5fa", accent: "#c084fc" }, // projects — windows
  { z: -GAP * 5, color: "#a78bfa", accent: "#38bdf8" }, // contact — rocket
] as const;

const techLogos = [reactIcon, typescriptIcon, nextjsIcon, djangoIcon, laravelIcon, postgresqlIcon, tailwindcssIcon, dockerIcon];

/* Flies the camera down the z-axis as the user scrolls, with a little pointer
   parallax, and reports progress + completion back to the overlay. */
const LAST = stations.length - 1;
// One trailing empty card past the finale gives room to scroll it out and exit.
const NSEC = stations.length + 1;

function Rig({ onComplete, progressRef, startAtEnd, exiting }: Experience3DProps & { exiting: { current: boolean } }) {
  const scroll = useScroll();
  const { camera, pointer } = useThree();
  const done = useRef(false);
  const snapUntil = useRef(0);

  useFrame((_, delta) => {
    // On exit, keep diving forward through the scene while the overlay fades, so the
    // hand-off to the portfolio reads as flying deeper rather than a cut.
    if (exiting.current) {
      camera.position.z -= delta * 26;
      camera.lookAt(0, 0, camera.position.z - 6);
      return;
    }

    const el = scroll.el;
    const maxScroll = el.scrollHeight - el.clientHeight;

    // Re-entered by scrolling up: drei ignores scroll events right after mount, so drive its
    // target directly. Starting the offset past the finale makes the card and camera glide back.
    if (startAtEnd && maxScroll > 10 && (snapUntil.current === 0 || performance.now() < snapUntil.current)) {
      const target = LAST / (NSEC - 1);
      if (snapUntil.current === 0) {
        snapUntil.current = performance.now() + 450;
        scroll.offset = (LAST + 0.3) / (NSEC - 1);
      }
      el.scrollTop = target * maxScroll;
      // `scroll` is drei's damping target; present at runtime but missing from its types.
      (scroll as typeof scroll & { scroll: { current: number } }).scroll.current = target;
    }

    // Follow drei's damped offset (the same value that moves the cards) so camera and
    // cards stay in lockstep both ways. Each card is one page, so offset * (NSEC-1) = station.
    const s = scroll.offset * (NSEC - 1);
    // A little overshoot past the finale pushes toward the exit dive (and back on re-entry).
    const cs = THREE.MathUtils.clamp(s, 0, LAST + 0.2);
    camera.position.z = 6 - GAP * cs;
    // Keep the parallax subtle so the object stays centered behind its card.
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.3, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.18, 3, delta);
    camera.lookAt(0, 0, camera.position.z - 6);

    if (progressRef.current) progressRef.current.style.width = `${(THREE.MathUtils.clamp(cs / LAST, 0, 1) * 100).toFixed(1)}%`;

    // Scrolling the finale up and out (into the trailing spacer) exits to the portfolio.
    if (!done.current && s > LAST + 0.55) {
      done.current = true;
      onComplete();
    }
  });
  return null;
}

/* One angled bar; two make a chevron. */
const Bar = ({ y, rot, color }: { y: number; rot: number; color: string }) => (
  <mesh position={[0, y, 0]} rotation={[0, 0, rot]}>
    <boxGeometry args={[1, 0.17, 0.17]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} metalness={0.95} roughness={0.13} envMapIntensity={1.4} />
  </mesh>
);

/* A 3D "</>" code glyph — the clearest "developer" mark. */
function CodeGlyph({ color, accent }: { color: string; accent: string }) {
  return (
    <group scale={1.05}>
      <group position={[-1.05, 0, 0]}>
        <Bar y={0.26} rot={0.52} color={color} />
        <Bar y={-0.26} rot={-0.52} color={color} />
      </group>
      <mesh rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.17, 1.7, 0.17]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.32} metalness={0.95} roughness={0.13} envMapIntensity={1.4} />
      </mesh>
      <group position={[1.05, 0, 0]}>
        <Bar y={0.26} rot={-0.52} color={color} />
        <Bar y={-0.26} rot={0.52} color={color} />
      </group>
    </group>
  );
}

/* Wireframe globe = "building the web". */
function Globe({ color, accent }: { color: string; accent: string }) {
  const ring = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (ring.current) ring.current.rotation.z += d * 0.5;
  });
  return (
    <group scale={0.95}>
      <Icosahedron args={[1.4, 3]}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
      </Icosahedron>
      <Sphere args={[1.36, 48, 48]}>
        <meshStandardMaterial color="#0b1b3a" emissive={accent} emissiveIntensity={0.12} transparent opacity={0.75} roughness={0.15} metalness={0.95} envMapIntensity={1.5} />
      </Sphere>
      <group ref={ring} rotation={[Math.PI / 2.2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2, 0.03, 16, 120]} />
          <meshBasicMaterial color={color} transparent opacity={0.55} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}

/* A single vector tech logo: centered, scaled, flipped upright (SVG is y-down),
   and billboarded so it always faces the viewer and never mirrors. */
function LogoSprite({ url, position }: { url: string; position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Frosted backing so dark marks (e.g. Django) stay legible; kept just under the bloom threshold. */}
      <mesh position={[0, 0, -0.04]}>
        <circleGeometry args={[0.72, 48]} />
        <meshBasicMaterial color="#d9e0ea" transparent opacity={0.78} toneMapped={false} />
      </mesh>
      <Center scale={0.0055}>
        <Svg src={url} fillMaterial={{ side: THREE.DoubleSide }} />
      </Center>
    </group>
  );
}

/* Real tech logos in a static ring facing the viewer (kept flat so vector marks
   render upright and never mirror). Nudged down to sit above the content card. */
function TechLogos() {
  const n = techLogos.length;
  const R = 2.05;
  return (
    <group position={[0, 0, 0]}>
      {techLogos.map((url, i) => {
        const a = (i / n) * Math.PI * 2;
        return <LogoSprite key={i} url={url} position={[Math.cos(a) * R, Math.sin(a) * R, 0]} />;
      })}
    </group>
  );
}

/* A browser window — representing shipped web apps. */
function BrowserWindow({ accent, ...props }: { accent: string } & JSX.IntrinsicElements["group"]) {
  const dots = ["#ef4444", "#f59e0b", "#22c55e"];
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[3, 2, 0.12]} />
        <meshStandardMaterial color="#0b1222" roughness={0.12} metalness={0.7} envMapIntensity={1.3} />
      </mesh>
      <mesh position={[0, 0.8, 0.07]}>
        <boxGeometry args={[3, 0.4, 0.06]} />
        <meshStandardMaterial color={accent} roughness={0.15} metalness={0.6} envMapIntensity={1.3} />
      </mesh>
      {dots.map((c, i) => (
        <mesh key={i} position={[-1.3 + i * 0.22, 0.8, 0.12]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color={c} />
        </mesh>
      ))}
      {[0.25, -0.05, -0.35, -0.65].map((y, i) => (
        <mesh key={i} position={[-0.35 + (i % 2) * 0.1, y, 0.07]}>
          <boxGeometry args={[i === 0 ? 2 : 1.6 - i * 0.2, 0.12, 0.04]} />
          <meshBasicMaterial color="#334155" />
        </mesh>
      ))}
    </group>
  );
}

/* A speech bubble with typing dots — "let's connect / get in touch". */
function ChatBubble({ color, accent }: { color: string; accent: string }) {
  return (
    <group rotation={[0, 0.2, 0]}>
      <RoundedBox args={[2.9, 1.9, 0.5]} radius={0.38} smoothness={5}>
        <meshPhysicalMaterial color={color} roughness={0.1} metalness={0.3} clearcoat={1} clearcoatRoughness={0.08} envMapIntensity={1.4} />
      </RoundedBox>
      {/* tail */}
      <mesh position={[-0.7, -1.15, 0]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.4, 0.85, 4]} />
        <meshPhysicalMaterial color={color} roughness={0.1} metalness={0.3} clearcoat={1} clearcoatRoughness={0.08} envMapIntensity={1.4} />
      </mesh>
      {/* typing dots */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.28]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color="#ffffff" emissive={accent} emissiveIntensity={0.9} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

/* Ascending bars rising to an arrow — career growth / experience. */
function GrowthBars({ color, accent }: { color: string; accent: string }) {
  const heights = [0.9, 1.5, 2.1, 2.8];
  const base = -1.4;
  return (
    <group rotation={[0, -0.35, 0]} position={[-0.2, 0, 0]}>
      {heights.map((h, i) => {
        const top = i === heights.length - 1;
        return (
          <mesh key={i} position={[(i - 1.5) * 0.82, base + h / 2, 0]}>
            <boxGeometry args={[0.56, h, 0.56]} />
            <meshStandardMaterial color={top ? accent : color} emissive={top ? accent : color} emissiveIntensity={0.2} roughness={0.14} metalness={0.92} envMapIntensity={1.4} />
          </mesh>
        );
      })}
      {/* arrow tip over the tallest bar */}
      <mesh position={[(heights.length - 1 - 1.5) * 0.82, base + heights[heights.length - 1] + 0.32, 0]}>
        <coneGeometry args={[0.32, 0.55, 4]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.4} roughness={0.14} metalness={0.9} envMapIntensity={1.4} />
      </mesh>
    </group>
  );
}

function Station({ index }: { index: number }) {
  const { z, color, accent } = stations[index];
  const spin = useRef<THREE.Group>(null);
  // Logos (2) and browser windows (4) stay flat and front-facing so they never
  // turn edge-on; the rest slowly spin.
  const flat = index === 2 || index === 4;
  useFrame((_, delta) => {
    if (spin.current && !flat) spin.current.rotation.y += delta * 0.25;
  });

  // The intro glyph sits a little above its card; every other object is centered.
  const offsetY = index === 0 ? 0.55 : 0;

  return (
    <group position={[0, offsetY, z]}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.35}>
        <group ref={spin}>
          {index === 0 && <CodeGlyph color={color} accent={accent} />}
          {index === 1 && <Globe color={color} accent={accent} />}
          {index === 2 && <TechLogos />}
          {index === 3 && <GrowthBars color={color} accent={accent} />}
          {index === 4 && (
            <>
              <BrowserWindow accent={accent} />
              <BrowserWindow accent={color} position={[-2.5, 0.3, -1.2]} rotation={[0, 0.5, 0]} scale={0.65} />
              <BrowserWindow accent={color} position={[2.5, -0.3, -1.2]} rotation={[0, -0.5, 0]} scale={0.65} />
            </>
          )}
          {index === 5 && <ChatBubble color={color} accent={accent} />}
        </group>
      </Float>
    </group>
  );
}

const sectionBase = "flex h-screen w-screen items-center justify-center px-5 text-white";
// Intro keeps its content at the bottom so the glyph owns the space above it.
const sectionBottom = "flex h-screen w-screen items-end justify-center px-5 pb-16 text-white";
// A dark halo that keeps the text clearly the focus (the 3D stays visible around
// it since the halo fades out before the object edges).
const card = "w-full max-w-2xl px-6 py-10 text-center bg-[radial-gradient(ellipse_at_center,_rgba(4,6,14,0.92)_36%,_rgba(4,6,14,0.6)_60%,_rgba(4,6,14,0)_82%)] [text-shadow:0_2px_12px_rgba(0,0,0,0.95)] md:px-10";
const eyebrow = "mb-3 text-xs font-semibold uppercase tracking-[0.35em]";
// pointer-events-auto re-enables clicks on links inside the (otherwise inert) Scroll overlay.
const linkChip = "pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:border-blue-400 hover:text-blue-300";
const projLink = "pointer-events-auto inline-flex items-center gap-1 rounded-md border border-white/15 px-2 py-0.5 text-[11px] text-gray-300 transition-colors hover:border-blue-400 hover:text-blue-300";

function HtmlJourney({ onComplete }: { onComplete: () => void }) {
  return (
    <Scroll html>
      {/* Intro */}
      <section className={sectionBottom}>
        <div className={card}>
          <p className={`${eyebrow} text-blue-300/80`}>Welcome</p>
          <h1 className="text-5xl font-bold md:text-6xl">Suman Regmi</h1>
          <p className="mt-3 text-lg text-blue-200 md:text-xl">Full Stack Web Developer</p>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            I build efficient, scalable, and user-friendly web applications with React, Django, and Laravel — from API to interface.
          </p>
          <p className="mt-3 text-xs text-gray-400">Based in Itahari, Nepal · 4+ years experience</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a className={linkChip} href="https://github.com/SumaniqueCode" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className={linkChip} href="https://linkedin.com/in/suman-regmi-0b2440244" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a className={linkChip} href="mailto:helpmeforhelp@gmail.com"><Mail className="h-4 w-4" /> Email</a>
          </div>
          <p className="mt-6 animate-pulse text-sm text-gray-400">Scroll to explore ↓</p>
        </div>
      </section>

      {/* About */}
      <section className={sectionBase}>
        <div className={card}>
          <p className={`${eyebrow} text-cyan-300/80`}>About me</p>
          <h2 className="text-3xl font-bold md:text-4xl">Turning ideas into web apps</h2>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            A passionate full-stack developer who loves clean, maintainable code and elegant solutions — from database design to polished interfaces. I enjoy mentoring, exploring new tech, and shipping products that solve real problems.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-5 md:gap-10">
            {[["4+", "Years"], ["10+", "Projects"], ["5", "Roles"], ["Full", "Stack"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-cyan-300 md:text-3xl">{n}</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">{l}</div>
              </div>
            ))}
          </div>
          <a className={`${linkChip} mt-5`} href="https://github.com/SumaniqueCode" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> Explore my GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className={sectionBase}>
        <div className={card}>
          <p className={`${eyebrow} text-purple-300/80`}>Skills</p>
          <h2 className="text-3xl font-bold md:text-4xl">A full-stack toolkit</h2>
          <div className="mt-5 grid grid-cols-2 gap-4 text-left sm:grid-cols-4">
            {[
              ["Frontend", "React · TypeScript · Next.js · Redux · Tailwind · MUI"],
              ["Backend", "Django · Laravel · Node · REST APIs"],
              ["Databases", "PostgreSQL · MySQL · MongoDB · Redis"],
              ["Tools", "Docker · Git · CI/CD · Figma · Postman"],
            ].map(([h, body]) => (
              <div key={h}>
                <div className="mb-1 text-sm font-semibold text-purple-300">{h}</div>
                <div className="text-xs text-gray-300">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={sectionBase}>
        <div className={card}>
          <p className={`${eyebrow} text-amber-300/80`}>Experience</p>
          <h2 className="text-3xl font-bold md:text-4xl">Where I've worked</h2>
          <ul className="mt-5 space-y-3 text-left">
            {[
              { role: "React · Django Full Stack", co: "GoretoX", meta: "Feb 2026 – Now · Remote, US", href: "https://goretox.com/" },
              { role: "Python · Django Full Stack", co: "Digital Pathshala", meta: "2025 · Itahari, Nepal" },
              { role: "Jr. Full Stack Developer", co: "Hunchha Digital", meta: "2023–24 · Kathmandu" },
              { role: "Freelance Full Stack", co: "Various clients", meta: "2019 – Present · Remote" },
            ].map((e: { role: string; co: string; meta: string; href?: string }) => (
              <li key={e.co} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                <span className="text-sm">
                  <span className="font-semibold text-amber-200">
                    {e.href ? (
                      <a className="pointer-events-auto hover:underline" href={e.href} target="_blank" rel="noopener noreferrer">{e.co}</a>
                    ) : (
                      e.co
                    )}
                  </span>
                  <span className="text-gray-400"> — {e.role}</span>
                </span>
                <span className="text-[11px] text-gray-500">{e.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className={sectionBase}>
        <div className={card}>
          <p className={`${eyebrow} text-blue-300/80`}>Projects</p>
          <h2 className="text-3xl font-bold md:text-4xl">Things I've shipped</h2>
          <ul className="mt-5 space-y-2.5 text-left">
            {[
              { n: "GoretoX", d: "Mentorship marketplace — React · Django", live: "https://goretox.com/" },
              { n: "Workhub", d: "AI-powered job portal for Nepal", code: "https://github.com/SumaniqueCode/WorkHub" },
              { n: "Share Insight Nepal", d: "Stock portfolio & P/L tracker", live: "https://shareinsightnepal.up.railway.app", code: "https://github.com/SumaniqueCode/shareInsightNepal" },
              { n: "Daily Repo", d: "Team daily reporting system", code: "https://github.com/SumaniqueCode/Daily-report-react-laravel" },
              { n: "Skill Karma", d: "Time-based skill-exchange platform", code: "https://github.com/SumaniqueCode/skill-karma" },
            ].map((p: { n: string; d: string; live?: string; code?: string }) => (
              <li key={p.n} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold text-blue-200">{p.n}</span>
                <span className="text-xs text-gray-400">{p.d}</span>
                <span className="ml-auto flex gap-1.5">
                  {p.live && (
                    <a className={projLink} href={p.live} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /> Live</a>
                  )}
                  {p.code && (
                    <a className={projLink} href={p.code} target="_blank" rel="noopener noreferrer"><Code2 className="h-3 w-3" /> Code</a>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <a className={`${linkChip} mt-4`} href="https://github.com/SumaniqueCode?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> 10+ projects on GitHub
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className={sectionBase}>
        <div className={card}>
          <p className={`${eyebrow} text-purple-300/80`}>Let's connect</p>
          <h2 className="text-3xl font-bold md:text-4xl">Let's build something</h2>
          <p className="mt-3 text-sm text-gray-300 md:text-base">
            Open to freelance, full-time roles, and collaborations. Reach out through any channel.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a className={linkChip} href="mailto:helpmeforhelp@gmail.com"><Mail className="h-4 w-4" /> Email</a>
            <a className={linkChip} href="https://github.com/SumaniqueCode" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className={linkChip} href="https://linkedin.com/in/suman-regmi-0b2440244" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a className={linkChip} href="https://instagram.com/regmisuman_2000" target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /> Instagram</a>
            <a className={linkChip} href="https://www.youtube.com/@sumaniquecode" target="_blank" rel="noopener noreferrer"><Youtube className="h-4 w-4" /> YouTube</a>
            <a className={linkChip} href="https://maps.google.com/?q=Itahari,Nepal" target="_blank" rel="noopener noreferrer"><MapPin className="h-4 w-4" /> Itahari, Nepal</a>
          </div>
          <button
            onClick={onComplete}
            className="pointer-events-auto mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
            Enter Portfolio
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Trailing spacer: scrolling into it exits the intro to the portfolio. */}
      <section className="h-screen w-screen" aria-hidden />
    </Scroll>
  );
}

/* A continuous corridor of rings running the whole depth of the journey, so the
   camera always has something streaming past — it reads as diving through one
   space rather than cutting between separate screens. */
function Tunnel() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (group.current) group.current.rotation.z += d * 0.04;
  });
  const rings = useMemo(() => {
    const arr: { z: number; r: number; rot: number; c: string }[] = [];
    const start = 5;
    const end = -(GAP * LAST) - 12;
    let i = 0;
    for (let z = start; z >= end; z -= 3) {
      arr.push({ z, r: 4.2 + Math.sin(i * 0.5) * 0.8, rot: i * 0.14, c: i % 2 ? "#5b8cff" : "#9a6bff" });
      i++;
    }
    return arr;
  }, []);
  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={i} position={[0, 0, r.z]} rotation={[0, 0, r.rot]}>
          <torusGeometry args={[r.r, 0.02, 6, 48]} />
          <meshBasicMaterial color={r.c} transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function Experience3D({ onComplete, progressRef, startAtEnd }: Experience3DProps) {
  // Shared exit flag: scrolling past the finale or pressing Enter triggers the dive-out.
  const exiting = useRef(false);
  const finish = () => {
    exiting.current = true;
    onComplete();
  };
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.15 }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <color attach="background" args={["#05060f"]} />
      <fog attach="fog" args={["#05060f", 6, 22]} />
      <ambientLight intensity={0.22} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} color="#cfe0ff" />
      <pointLight position={[-6, -4, 2]} intensity={30} color="#c084fc" distance={34} />
      <pointLight position={[6, 4, 2]} intensity={30} color="#38bdf8" distance={34} />

      {/* Studio reflections — gives every surface a physically-lit, cinematic sheen. */}
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.4} color="#9ab8ff" position={[0, 4, -6]} scale={[9, 9, 1]} />
        <Lightformer intensity={2} color="#c084fc" position={[-6, -2, -3]} scale={[5, 5, 1]} />
        <Lightformer intensity={2} color="#38bdf8" position={[6, 0, -3]} scale={[5, 5, 1]} />
        <Lightformer intensity={1.2} color="#ffffff" position={[0, -5, 3]} scale={[10, 2, 1]} />
      </Environment>

      <Stars radius={60} depth={50} count={1600} factor={4} saturation={0} fade speed={1} />
      <Tunnel />
      {/* Dust that fills the corridor so motion reads continuously while diving. Kept
          faint so it stays ambient and the content leads. */}
      <Sparkles count={90} scale={[13, 9, GAP * LAST + 18]} position={[0, 0, -(GAP * LAST) / 2]} size={1.2} speed={0.25} opacity={0.28} color="#9db4ff" />

      <ScrollControls pages={NSEC} damping={0.12}>
        <Rig onComplete={finish} progressRef={progressRef} startAtEnd={startAtEnd} exiting={exiting} />
        <Suspense fallback={null}>
          {stations.map((_, i) => (
            <Station key={i} index={i} />
          ))}
        </Suspense>
        <HtmlJourney onComplete={finish} />
      </ScrollControls>

      {/* Cinematic post: soft glow on emissive edges + a gentle vignette. */}
      <EffectComposer multisampling={4}>
        <Bloom intensity={1.15} luminanceThreshold={0.6} luminanceSmoothing={0.3} mipmapBlur radius={0.8} />
        <Vignette offset={0.25} darkness={0.85} eskil={false} />
      </EffectComposer>
    </Canvas>
  );
}
