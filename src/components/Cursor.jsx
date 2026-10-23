import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Cursor — bespoke pointer: a precise dot + a trailing ring that expands
 * over interactive elements. Auto-disabled on touch / reduced-motion devices.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add('mv-cursor-on');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target.closest('a, button, [data-cursor], input, textarea, select, .rl-grid-card, .rl-work-card, .rl-cap-card');
      if (el) {
        setHovering(true);
        setLabel(el.getAttribute('data-cursor') || '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('mv-cursor-on');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="mv-cursor-dot" style={{ x, y }} />
      <motion.div
        className={`mv-cursor-ring ${hovering ? 'is-hover' : ''}`}
        style={{ x: ringX, y: ringY }}
      >
        {label ? <span className="mv-cursor-label">{label}</span> : null}
      </motion.div>
    </>
  );
}
