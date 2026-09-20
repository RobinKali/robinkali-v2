import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const cwd = process.cwd();
const publicDir = path.join(cwd, "public");
const mediaDir = path.join(publicDir, "media");

if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

// 1. Generate Apple Touch Icon (180x180 PNG)
const appleIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.35" />
      <stop offset="70%" stop-color="#a855f7" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#030712" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="#050814" />
  <circle cx="90" cy="90" r="80" fill="url(#glow)" />
  <circle cx="90" cy="90" r="70" fill="none" stroke="url(#neon)" stroke-width="4" stroke-opacity="0.9" />
  <circle cx="90" cy="90" r="78" fill="none" stroke="#00f2fe" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6,8" />
  <circle cx="90" cy="20" r="5" fill="#00f2fe" />
  <circle cx="160" cy="90" r="4.5" fill="#a855f7" />
  <text x="90" y="110" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="62" letter-spacing="2">RK</text>
</svg>`;

await sharp(Buffer.from(appleIconSvg))
  .png()
  .toFile(path.join(mediaDir, "apple-touch-icon.png"));
console.log("apple-touch-icon.png generated");

// 2. Generate Favicon PNG (32x32) & 48x48
const faviconSvg = fs.readFileSync(path.join(publicDir, "favicon.svg"));
await sharp(faviconSvg)
  .resize(32, 32)
  .png()
  .toFile(path.join(publicDir, "favicon.png"));
console.log("favicon.png generated");

// Also create a 48x48 favicon.ico (PNG inside ICO format standard)
await sharp(faviconSvg)
  .resize(48, 48)
  .png()
  .toFile(path.join(publicDir, "favicon.ico"));
console.log("favicon.ico generated");

// 3. Generate OG Image (1200x630 PNG)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050814" />
      <stop offset="50%" stop-color="#080c1d" />
      <stop offset="100%" stop-color="#020308" />
    </linearGradient>
    <linearGradient id="brandNeon" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#c084fc" />
    </linearGradient>
    <radialGradient id="cyanNebula" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#06b6d4" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="purpleNebula" cx="85%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.28" />
      <stop offset="50%" stop-color="#7c3aed" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#cyanNebula)" />
  <rect width="1200" height="630" fill="url(#purpleNebula)" />

  <!-- Outer Neon Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="url(#brandNeon)" stroke-width="1.5" stroke-opacity="0.4" />
  <rect x="36" y="36" width="1128" height="558" rx="20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />

  <!-- Content Left -->
  <!-- Eyebrow Badge -->
  <g transform="translate(80, 110)">
    <rect x="0" y="0" width="310" height="38" rx="19" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(0, 242, 254, 0.35)" stroke-width="1" />
    <circle cx="20" cy="19" r="4" fill="#00f2fe" />
    <text x="36" y="24" fill="#22d3ee" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="2">DEVELOPER &amp; DESIGNER</text>
  </g>

  <!-- Main Heading -->
  <text x="80" y="235" fill="#ffffff" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="82" font-weight="900" letter-spacing="4">ROBIN KALI</text>

  <!-- Role Subtitle -->
  <text x="82" y="295" fill="url(#brandNeon)" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" letter-spacing="2">Web Development, 3D Graphics &amp; Digital Media</text>

  <!-- Description paragraph -->
  <text x="82" y="365" fill="#94a3b8" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400">
    Personal portfolio and creative development showcase.
  </text>
  <text x="82" y="398" fill="#94a3b8" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400">
    Building fast web applications, 3D scenes, and interactive interfaces.
  </text>

  <!-- Tech Badges -->
  <g transform="translate(82, 470)">
    <!-- Astro -->
    <rect x="0" y="0" width="86" height="36" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
    <text x="43" y="23" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">Astro</text>

    <!-- Vue -->
    <rect x="98" y="0" width="76" height="36" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
    <text x="136" y="23" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">Vue</text>

    <!-- Vite -->
    <rect x="186" y="0" width="76" height="36" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
    <text x="224" y="23" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">Vite</text>

    <!-- GitHub -->
    <rect x="274" y="0" width="96" height="36" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
    <text x="322" y="23" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">GitHub</text>

    <!-- Tailwind -->
    <rect x="382" y="0" width="108" height="36" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
    <text x="436" y="23" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">Tailwind</text>

    <!-- Kali Web Works -->
    <rect x="502" y="0" width="168" height="36" rx="18" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(192, 132, 252, 0.4)" stroke-width="1" />
    <text x="586" y="23" text-anchor="middle" fill="#c084fc" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">Kali Web Works</text>
  </g>

  <!-- Orbital Constellation Graphic on the Right -->
  <g transform="translate(970, 315)">
    <!-- Rings -->
    <circle r="190" fill="none" stroke="rgba(168, 85, 247, 0.18)" stroke-width="1.2" />
    <circle r="150" fill="none" stroke="rgba(0, 242, 254, 0.3)" stroke-dasharray="8,10" stroke-width="1.5" />
    <circle r="110" fill="none" stroke="rgba(192, 132, 252, 0.35)" stroke-width="1.2" />
    <circle r="75" fill="none" stroke="rgba(0, 242, 254, 0.5)" stroke-dasharray="4,6" stroke-width="1" />

    <!-- Center Orb -->
    <circle r="55" fill="#070c18" stroke="url(#brandNeon)" stroke-width="2.5" />
    <text x="0" y="16" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="46" letter-spacing="3">RK</text>

    <!-- Orbit Nodes -->
    <circle cx="0" cy="-150" r="6" fill="#00f2fe" />
    <circle cx="150" cy="0" r="5" fill="#c084fc" />
    <circle cx="-106" cy="106" r="4.5" fill="#38bdf8" />
    <circle cx="106" cy="-106" r="4.5" fill="#a855f7" />
  </g>

  <!-- Bottom Brand URL -->
  <text x="82" y="560" fill="rgba(255,255,255,0.4)" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" letter-spacing="2">ROBINKALI.NL &#8226; KALI WEB WORKS</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png()
  .toFile(path.join(mediaDir, "og-image.png"));
console.log("og-image.png generated (1200x630)");
