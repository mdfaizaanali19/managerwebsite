/**
 * GrainOverlay — fixed cinematic film-grain + vignette layer.
 * Pure CSS (see .mv-grain / .mv-vignette in style.css); pointer-events none.
 */
export default function GrainOverlay() {
  return (
    <>
      <div className="mv-grain" aria-hidden="true" />
      <div className="mv-vignette" aria-hidden="true" />
    </>
  );
}
