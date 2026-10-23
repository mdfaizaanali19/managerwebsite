import { useEffect, useRef } from 'react';

/**
 * HeroCanvas — full-bleed animated dark backdrop.
 * A lightweight 2D-canvas interpretation of the reference site's WebGL
 * hero: slow-moving luminous gradient fields over near-black ink.
 */
export default function HeroCanvas({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const blobs = [
      { x: 0.22, y: 0.30, r: 0.55, c: 'rgba(122, 150, 200, 0.20)', sx: 0.00013, sy: 0.00009, ax: 0.10, ay: 0.06, p: 0 },
      { x: 0.78, y: 0.28, r: 0.52, c: 'rgba(157, 120, 68, 0.16)', sx: 0.00011, sy: 0.00017, ax: 0.08, ay: 0.08, p: 2 },
      { x: 0.55, y: 0.72, r: 0.62, c: 'rgba(90, 110, 160, 0.16)', sx: 0.00008, sy: 0.00012, ax: 0.12, ay: 0.05, p: 4 },
      { x: 0.30, y: 0.80, r: 0.42, c: 'rgba(185, 150, 98, 0.10)', sx: 0.00016, sy: 0.00010, ax: 0.06, ay: 0.10, p: 1 }
    ];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#05080C';
      ctx.fillRect(0, 0, w, h);

      for (const b of blobs) {
        const cx = (b.x + Math.sin(t * b.sx + b.p) * b.ax) * w;
        const cy = (b.y + Math.cos(t * b.sy + b.p) * b.ay) * h;
        const rad = b.r * Math.max(w, h);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, b.c);
        g.addColorStop(0.55, b.c.replace(/[\d.]+\)$/, '0.05)'));
        g.addColorStop(1, 'rgba(5, 8, 12, 0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // faint horizon glow
      const hg = ctx.createLinearGradient(0, h * 0.55, 0, h);
      hg.addColorStop(0, 'rgba(5,8,12,0)');
      hg.addColorStop(1, 'rgba(5,8,12,0.85)');
      ctx.fillStyle = hg;
      ctx.fillRect(0, 0, w, h);

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    if (reduce) draw(0); else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className={`rl-hero-canvas ${className}`} aria-hidden="true" />;
}
