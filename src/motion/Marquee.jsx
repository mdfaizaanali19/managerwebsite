/**
 * Marquee — seamless infinite horizontal ticker (CSS-driven, duplicated track).
 * Requires .mv-marquee styles (added in style.css).
 */
export default function Marquee({ items = [], speed = 32, reverse = false, separator = '✦', className = '' }) {
  const row = (
    <div className="mv-marquee-track" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}>
      {[0, 1].map((dup) => (
        <div className="mv-marquee-group" key={dup} aria-hidden={dup === 1}>
          {items.map((it, i) => (
            <span className="mv-marquee-item" key={i}>
              <span className="mv-marquee-text">{it}</span>
              <span className="mv-marquee-sep">{separator}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
  return <div className={`mv-marquee ${className}`}>{row}</div>;
}
