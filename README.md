# Wakubo

Marketing site for Wakubo — AI fashion production for clothing brands.

The pitch the whole page is built around: **send one garment, get back a full set
of campaign-grade stills and reels, cheaper and faster than any studio day.**
Every section exists to prove one of those three claims, in that order.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built site
npm run lint
```

## Structure

One component per section, in `src/components/`:

| Section | File | Job |
| --- | --- | --- |
| Hero | `Hero.jsx` | The claim, a live loop, and the four numbers that back it |
| The work | `Work.jsx` | Three flat lays in → seven stills out, plus a 100% crop proving logos survive |
| Motion | `Motion.jsx` | Reels and b-roll, to show video is not a separate line item |
| How it works | `Process.jsx` | Three steps with the clock against each one |
| Pricing | `Pricing.jsx` | Plans, per-look cost, and the same collection priced the old way |
| Start | `Contact.jsx` | Free-test-look brief |

`Header`, `Footer`, `GrainOverlay` and `Reveal` (scroll-in animation) support them.

### Changing the offer

**Do not edit prices or promises in the components.** Everything the page quotes
— prices, per-look cost, turnaround, the comparison table, the process steps —
lives in `src/content.js`. Change it there and it updates everywhere.

The brief form has no backend: it composes the enquiry and hands it to the
visitor's mail client via `mailto:`. Point it at a real endpoint when there is
one; the address it uses is `CONTACT_EMAIL` in `src/content.js`.

## Media

`sample-1/` holds the original shoot: 155 MB of 4K PNGs and up to 31 MB of video
per clip. Nothing there is served directly.

`npm run assets` rebuilds `public/media/` from it — responsive WebP stills, H.264
loops at web resolution with poster frames, and a detail crop — taking 155 MB
down to about 2.5 MB. `public/media/` is committed, so you only need to run this
when the source shoot changes.

The pipeline is `scripts/build-assets.mjs`; add a garment by appending to the
`STILLS`, `CROPS` or `LOOPS` tables at the top and re-running it. It needs
`sharp` and `ffmpeg-static`, both devDependencies.

The same command also renders the favicons in `public/` from the brand mark at
`brand/wakubo-mark.png` — replace that file and re-run to change the icon.

`sample-1/` is gitignored — keep the originals backed up somewhere other than
this repo.

## Stack

React 19 + Vite. No router, no UI library, no CSS framework — one stylesheet
(`src/index.css`) holding the design tokens and every rule on the page.
