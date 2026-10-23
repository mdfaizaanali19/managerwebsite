import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Accordion — numbered expandable rows in the reference style.
 * items: [{ num, title, body }]
 */
export default function Accordion({ items = [], defaultOpen = 0, className = '' }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`rl-accordion ${className}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`rl-acc-item ${isOpen ? 'is-open' : ''}`} key={i}>
            <button
              type="button"
              className="rl-acc-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="rl-acc-num">{it.num}</span>
              <span className="rl-acc-title">{it.title}</span>
              <span className="rl-acc-icon" aria-hidden="true">
                <span className="rl-acc-bar" />
                <span className="rl-acc-bar rl-acc-bar-v" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="rl-acc-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="rl-acc-inner">{it.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
