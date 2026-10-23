import { motion, useReducedMotion } from 'motion/react';

/**
 * Reveal — scroll-triggered entrance wrapper.
 * Direction-aware, stagger-friendly, respects prefers-reduced-motion.
 */
const OFFSETS = {
  up:    { axis: 'y', sign: 1  },
  down:  { axis: 'y', sign: -1 },
  left:  { axis: 'x', sign: 1  },
  right: { axis: 'x', sign: -1 },
  fade:  null,
  scale: null
};

export default function Reveal({
  as = 'div',
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 32,
  blur = false,
  once = true,
  className = '',
  style
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;

  if (reduce) {
    return <Comp className={className} style={style}>{children}</Comp>;
  }

  const off = OFFSETS[direction];
  const hidden = { opacity: 0 };
  if (off) hidden[off.axis] = off.sign * distance;
  if (direction === 'scale') hidden.scale = 0.94;
  if (blur) hidden.filter = 'blur(8px)';

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <Comp
      className={className}
      style={style}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </Comp>
  );
}
