import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'motion/react';

/**
 * Preloader — cinematic intro: monogram, percentage counter and gold progress
 * bar, then split panels wipe away. Runs once per full page load.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const count = useMotionValue(0);
  const rounded = useDisplayCount(count);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 1.3, ease: [0.65, 0, 0.35, 1] });
    const t = setTimeout(() => setDone(true), 1650);
    return () => { controls.stop(); clearTimeout(t); };
  }, [count]);

  return (
    <AnimatePresence>
      {!done && mounted && (
        <motion.div
          className="mv-preloader"
          initial={false}
          exit={{ transition: { staggerChildren: 0.08, delayChildren: 0.1 } }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex' }}
        >
          {['l', 'r'].map((k, i) => (
            <motion.div
              key={k}
              className="mv-preloader-panel"
              variants={{ exit: { y: '-100%' } }}
              initial={{ y: 0 }}
              exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            />
          ))}
          <motion.div
            className="mv-preloader-content"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
          >
            <div className="mv-preloader-mono">SV</div>
            <div className="mv-preloader-name">SOHEAL VASEEM</div>
            <div className="mv-preloader-bar">
              <motion.div className="mv-preloader-fill" style={{ scaleX: count }} />
            </div>
            <div className="mv-preloader-count">{rounded}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function useDisplayCount(mv) {
  const [v, setV] = useState(0);
  useEffect(() => mv.on('change', (latest) => setV(Math.round(latest))), [mv]);
  return v;
}
