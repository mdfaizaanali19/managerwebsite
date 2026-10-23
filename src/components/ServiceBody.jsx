/**
 * ServiceBody — the expandable content shown inside an accordion row.
 *
 * Shared by the Home page and the Services page so a service always reads
 * identically wherever it appears.
 */
export default function ServiceBody({ service }) {
  if (!service) return null;

  return (
    <>
      <p>{service.body}</p>
      <div className="rl-tags">
        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="rl-svc-meta">
        {service.meta.map((item) => <span key={item}>{item}</span>)}
      </div>
    </>
  );
}
