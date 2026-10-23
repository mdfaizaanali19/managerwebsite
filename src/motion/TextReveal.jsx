import { motion, useReducedMotion } from 'motion/react';

/**
 * TextReveal — staged word-by-word headline entrance.
 * Pass a plain string; splits on whitespace and animates each word up.
 */
export default function TextReveal({
  text,
  as = 'span',
  className = '',
  delay = 0,
  stagger = 0.06,
  duration = 0.6,
  style
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.span;
  const words = String(text ?? '').split(' ');

  if (reduce) return <Comp className={className} style={style}>{text}</Comp>;

  return (
    <Comp
      className={className}
      style={{ display: 'inline', ...style }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
