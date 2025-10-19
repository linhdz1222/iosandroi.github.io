const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const base = path.join(__dirname, '..');
const input = path.join(base, 'bgr (1).jpg');
const outDir = path.join(base, 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [72, 192, 512];

async function make() {
  for (const s of sizes) {
    const out = path.join(outDir, `icon-${s}x${s}.png`);
    await sharp(input).resize(s, s).png({ quality: 90 }).toFile(out);
    console.log('Wrote', out);
  }
}

make().catch(err => { console.error(err); process.exit(1); });
