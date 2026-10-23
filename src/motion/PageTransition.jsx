import { motion } from 'motion/react';

/**
 * PageTransition — wraps each route's content in a subtle enter animation.
 * Keyed by pathname in App so every navigation fades/slides in.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      className="mv-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
