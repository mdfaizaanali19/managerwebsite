import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

/**
 * Magnetic — element gently follows the cursor while hovered.
 * Wrap buttons/links for a premium micro-interaction.
 */
export default function Magnetic({ children, strength = 0.4, className = '', as = 'span' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.span;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  if (reduce) return <Comp className={className}>{children}</Comp>;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <Comp
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </Comp>
  );
}
