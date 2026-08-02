/**
 * Turns the raw shoot in /sample-1 into web-ready media in /public/media,
 * and the brand mark in /brand into favicons in /public.
 *
 * The originals are 2–29 MB PNGs and up to 31 MB of 4K video — unusable on a
 * landing page. This produces responsive WebP stills, small H.264 loops with
 * poster frames, and prints a size report.
 *
 * Run: npm run assets   (needs sharp + ffmpeg-static, both devDependencies)
 */
import { mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';

const SRC = 'sample-1';
const OUT = 'public/media';

/* Favicons: [output name, pixel size]. Rendered from brand/wakubo-mark.png. */
const MARK = 'brand/wakubo-mark.png';
const ICONS = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
];

/* Stills: [source, output slug, widths to emit]. First width is the fallback src. */
const STILLS = [
  ['photos/img-5.png', 'look-full', [1400, 800]],
  ['photos/img-4.png', 'look-three-quarter', [1400, 800]],
  ['photos/img-1.png', 'look-profile', [1400, 800]],
  ['photos/img-2.png', 'look-back', [1400, 800]],
  ['photos/img-7.png', 'look-overhead', [1400, 800]],
  ['photos/img-6.png', 'look-portrait', [1400, 800]],
  ['photos/img-3.png', 'look-detail', [1400, 800]],
  ['videos/hf_20260801_104507_05516834-90ac-4e45-a40b-01745707a15d.png', 'look-branded', [1400, 800]],
  ['upper-body-attire.png', 'flat-top', [520]],
  ['lower-body-attire.png', 'flat-bottom', [520]],
  ['outfit.png', 'flat-outfit', [720]],
];

/* Detail crops: [source, output slug, region, output width].
   Proof shots — a logo or weave at 1:1, to back the "your label, not a stand-in" claim. */
const CROPS = [
  [
    'videos/hf_20260801_104507_05516834-90ac-4e45-a40b-01745707a15d.png',
    'detail-logo',
    { left: 770, top: 560, width: 430, height: 320 },
    860,
  ],
];

/* Loops: [source, slug, target width, crop filter or null, seconds for the poster frame] */
const LOOPS = [
  ['videos/video-3.mp4', 'motion-stand', 720, null, 1.5],
  ['videos/video-1.mp4', 'motion-walk', 608, null, 2],
  ['videos/video-2.mp4', 'motion-turn', 608, null, 1.5],
  ['videos/video-5.mp4', 'motion-feature', 720, 'crop=1080:1604:0:158', 4],
];

const kb = (p) => statSync(p).size / 1024;
const fmt = (n) => (n > 1024 ? `${(n / 1024).toFixed(1)} MB` : `${Math.round(n)} KB`);

function ff(args) {
  execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let before = 0;
let after = 0;

for (const [src, slug, widths] of STILLS) {
  const from = join(SRC, src);
  before += kb(from);
  for (const [i, w] of widths.entries()) {
    const to = join(OUT, i === 0 ? `${slug}.webp` : `${slug}-${w}.webp`);
    await sharp(from)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(to);
    after += kb(to);
  }
  console.log(`still  ${slug.padEnd(20)} ${fmt(kb(from)).padStart(9)} -> ${fmt(kb(join(OUT, `${slug}.webp`)))}`);
}

for (const [src, slug, region, width] of CROPS) {
  const to = join(OUT, `${slug}.webp`);
  await sharp(join(SRC, src)).extract(region).resize({ width }).webp({ quality: 86 }).toFile(to);
  after += kb(to);
  console.log(`crop   ${slug.padEnd(20)} ${''.padStart(9)}    ${fmt(kb(to))}`);
}

for (const [src, slug, width, crop, posterAt] of LOOPS) {
  const from = join(SRC, src);
  before += kb(from);
  const scale = `scale=${width}:-2`;
  const chain = crop ? `${crop},${scale}` : scale;

  ff(['-i', from, '-an', '-vf', chain, '-c:v', 'libx264', '-preset', 'slow', '-crf', '27',
      '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart',
      join(OUT, `${slug}.mp4`)]);

  ff(['-ss', String(posterAt), '-i', from, '-vframes', '1', '-vf', chain,
      '-c:v', 'libwebp', '-quality', '78', join(OUT, `${slug}.webp`)]);

  after += kb(join(OUT, `${slug}.mp4`)) + kb(join(OUT, `${slug}.webp`));
  console.log(`loop   ${slug.padEnd(20)} ${fmt(kb(from)).padStart(9)} -> ${fmt(kb(join(OUT, `${slug}.mp4`)))}`);
}

/* Favicons. The mark sits on a lot of dead canvas, so trim it back to its own
   bounds and re-pad evenly — otherwise it shrinks to an illegible speck at 16px. */
{
  const trimmed = await sharp(MARK).trim({ threshold: 20 }).toBuffer();
  const { width, height } = await sharp(trimmed).metadata();
  const side = Math.round(Math.max(width, height) * 1.08);
  const square = await sharp({
    create: { width: side, height: side, channels: 4, background: '#000000' },
  })
    .composite([{ input: trimmed, gravity: 'center' }])
    .png()
    .toBuffer();

  for (const [name, px] of ICONS) {
    const to = join('public', name);
    await sharp(square).resize(px, px, { kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toFile(to);
    console.log(`icon   ${name.padEnd(20)} ${''.padStart(9)}    ${fmt(kb(to))}`);
  }
}

const total = readdirSync(OUT).reduce((sum, f) => sum + kb(join(OUT, f)), 0);
console.log(`\nsource ${fmt(before)}  ->  public/media ${fmt(total)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
