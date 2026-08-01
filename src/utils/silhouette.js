const TONES = ['#3A362F', '#4A453A', '#5C5648', '#413C33', '#332F28'];
const ACCENTS = ['#A9814B', '#8A6636', '#C9AD82'];

export function silhouetteFrame(i) {
  const bodyTone = TONES[i % TONES.length];
  const accent = ACCENTS[i % ACCENTS.length];
  const shift = (i % 3) * 8 - 8;
  const rowLetter = String.fromCharCode(65 + Math.floor(i / 4));
  const frameNum = (i % 4) + 1;
  return { bodyTone, accent, shift, label: `${rowLetter}${frameNum}` };
}

export function reelDuration(i) {
  const seconds = 6 + ((i * 3) % 12);
  return `0:${String(seconds).padStart(2, '0')}`;
}

export function reelGeneratedTime(i) {
  return `${18 + ((i * 7) % 40)}s`;
}
