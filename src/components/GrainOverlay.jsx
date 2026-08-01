export default function GrainOverlay() {
  return (
    <>
      <svg className="grain" width="0" height="0">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div className="grain" style={{ filter: 'url(#noiseFilter)' }}></div>
    </>
  );
}
