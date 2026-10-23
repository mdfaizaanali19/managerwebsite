import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'motion/react';

/**
 * AnimatedCounter — counts up to `to` when scrolled into view.
 */
export default function AnimatedCounter({
  to = 100,
  from = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(from);
  const text = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { mv.set(to); return; }
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, to, duration, reduce, mv]);

  return <motion.span ref={ref} className={className}>{text}</motion.span>;
}
