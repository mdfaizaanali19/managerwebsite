import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Faq — light variant of the reference accordion.
 * items: [{ q, a }]
 */
export default function Faq({ items = [], defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rl-faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`rl-faq-item ${isOpen ? 'is-open' : ''}`} key={it.q}>
            <button
              type="button"
              className="rl-faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{it.q}</span>
              <span className="rl-faq-icon" aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="rl-faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
