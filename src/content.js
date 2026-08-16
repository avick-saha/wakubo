/**
 * Every number, price and promise on the site lives here.
 * Change it once and it updates everywhere it is quoted.
 */

/* Used to build mailto: links. Never printed on the page. */
export const CONTACT_EMAIL = 'hello@studio.wakubo.in';

/* What a visitor can ask for. `lead` becomes the opening line of the drafted
   email, so it is written in their voice, not ours. */
export const SERVICES = [
  {
    id: 'test-look',
    label: 'A free test look',
    lead: 'We would like to start with a free test look on one garment.',
  },
  {
    id: 'stills',
    label: 'Product stills',
    lead: 'We are looking for product stills for our collection.',
  },
  {
    id: 'reels',
    label: 'Motion reels',
    lead: 'We are looking for motion reels for our collection.',
  },
  {
    id: 'both',
    label: 'Stills and reels together',
    lead: 'We are looking for a full set — stills and motion — for every garment.',
  },
  {
    id: 'ghost',
    label: 'Ghost-mannequin cutouts',
    lead: 'We are looking for ghost-mannequin cutouts of our garments.',
  },
];

export const PROMISE = {
  lowestPerLook: '$1.20',
  startingPerLook: '$6',
  turnaround: '48 hours',
  firstProofIn: '24 hours',
  revisions: 'Unlimited',
};

/* Traditional-shoot figures are the market rates we benchmark against.
   Update if you quote different comparisons. */
export const VERSUS = [
  {
    metric: 'Cost per look',
    traditional: '$250 – $400',
    wakubo: `${PROMISE.lowestPerLook} – ${PROMISE.startingPerLook}`,
  },
  {
    metric: 'Time to first images',
    traditional: '4 – 6 weeks',
    wakubo: PROMISE.firstProofIn,
  },
  {
    metric: 'Re-shooting a look',
    traditional: '$1,500+ to re-book',
    wakubo: 'Free, same day',
  },
  {
    metric: 'Video from the same shoot',
    traditional: 'Second crew, second budget',
    wakubo: 'Included',
  },
  {
    metric: 'Model consistency across a collection',
    traditional: 'Re-book the same model, hope for the same light',
    wakubo: 'One locked model, every garment',
  },
];

export const STEPS = [
  {
    n: '01',
    when: 'Day 0',
    title: 'Send the garment',
    body:
      'A flat lay, your existing packshot, or a phone photo on a hanger. Anything that shows the fabric, the cut and the colour. No studio booking, no courier if you already have shots.',
  },
  {
    n: '02',
    when: 'Within 24 hours',
    title: 'We cast your model and shoot',
    body:
      'We build one model for your label and lock the face, body and lighting so every garment in the collection looks like it came from the same day on set. First proofs land for your notes.',
  },
  {
    n: '03',
    when: 'Within 48 hours',
    title: 'You get the full set',
    body:
      '4K stills at every angle, 9:16 reels for social, detail crops and ghost-mannequin cuts — sized for your storefront, ads and feed. Revisions are free until it is right.',
  },
];

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For a first drop or a small label',
    price: 49,
    perLook: '$6.00',
    features: [
      '25 stills a month',
      '5 motion reels a month',
      'Studio and plain backgrounds',
      'Ghost-mannequin cutouts',
      'Full commercial usage rights',
    ],
    cta: 'Start with Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For brands shipping a season at a time',
    price: 199,
    perLook: '$2.50',
    popular: true,
    features: [
      '200 stills a month',
      '30 motion reels a month',
      'One model cast and locked to your brand',
      '12+ lighting and location setups',
      '4K exports',
      'Priority queue',
    ],
    cta: 'Start with Growth',
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For full catalogues and multi-brand retailers',
    price: 499,
    perLook: '$1.20',
    features: [
      'Unlimited stills',
      '100 reels and 360° spins a month',
      'Unlimited model castings',
      'Custom locations built to brief',
      'Shopify and API catalogue sync',
      'Dedicated stylist and 1-hour SLA',
    ],
    cta: 'Talk to us about Scale',
  },
];

/* Stills produced from the single flat lay shown in the Proof section. */
export const LOOKS = [
  { slug: 'look-full', alt: 'Full-length front view of the knitted polo and wide-leg trousers', label: 'Full length', ratio: '2 / 3' },
  { slug: 'look-three-quarter', alt: 'Three-quarter view showing the knit texture and collar', label: 'Three-quarter', ratio: '2 / 3' },
  { slug: 'look-overhead', alt: 'High-angle view of the same outfit', label: 'High angle', ratio: '2 / 3' },
  { slug: 'look-portrait', alt: 'Close portrait showing the collar, buttons and knit', label: 'Portrait crop', ratio: '2 / 3' },
  { slug: 'look-profile', alt: 'Side profile in low-key studio lighting', label: 'Low key', ratio: '9 / 16' },
  { slug: 'look-back', alt: 'Back view showing the shoulder seam and hem', label: 'Back', ratio: '9 / 16' },
  { slug: 'look-detail', alt: 'Detail crop of the trouser break over leather boots', label: 'Detail crop', ratio: '9 / 16' },
];

export const REELS = [
  { slug: 'motion-stand', alt: 'Model standing, subtle motion', label: 'Look reel', meta: '2:3 · 7s' },
  { slug: 'motion-walk', alt: 'Model walking toward camera', label: 'Walk', meta: '9:16 · 5s' },
  { slug: 'motion-turn', alt: 'Model turning to show the garment', label: 'Turn', meta: '2:3 · 4s' },
];

/* Second shoot — womenswear on high-key white. Each card swaps the packshot
   for the finished look in place, so the transformation reads in one gesture. */
export const SETS = [
  {
    id: 'a',
    garment: 'Halter bodysuit',
    flat: 'set-a-flat',
    worn: 'set-a-worn',
    face: 'set-a-face',
    flatAlt: 'Packshot of a teal halter bodysuit with a crossover neckline',
    wornAlt: 'The same teal bodysuit worn, full length on a white studio background',
    faceAlt: 'Close portrait of the model in the teal set',
  },
  {
    id: 'b',
    garment: 'Asymmetric bodysuit',
    flat: 'set-b-flat',
    worn: 'set-b-worn',
    face: 'set-b-face',
    flatAlt: 'Packshot of a dark green one-shoulder bodysuit with a scarf tie',
    wornAlt: 'The same green bodysuit worn, styled with a leather shoulder bag',
    faceAlt: 'Close portrait of the model in the green set',
  },
];

/* The long cut, shown on its own below the grid. */
export const FEATURE_REEL = {
  slug: 'motion-feature',
  alt: 'Full-length continuous take of the model in the knitted polo and wide-leg trousers',
  meta: '2:3 · 13s · one continuous take',
};
