/**
 * Canonical service catalogue.
 *
 * This is the only place service names are defined. The Home page shows a
 * curated subset, the Services page shows the full list, and the Contact form
 * derives its dropdown from the same array — so a visitor can never click a
 * service on one page and land on a differently-named service on another.
 *
 * `featured: true` marks the services surfaced on the Home page accordion.
 */
export const services = [
  {
    id: 'brand-strategy',
    num: '(01)',
    title: 'Brand Strategy & Positioning',
    body: 'Finding the one thing your brand should stand for — and building everything from it. Positioning, narrative and market architecture defined before any visual or campaign work begins.',
    tags: ['Research', 'Positioning', 'Narrative'],
    meta: ['4 – 8 weeks', 'Clarity before scale'],
    featured: true
  },
  {
    id: 'advertising',
    num: '(02)',
    title: 'Advertising & Performance Marketing',
    body: 'Synchronised cross-channel campaigns, media planning and creative direction across broadcast, digital and outdoor — built to engage qualified customers and maximise return on marketing investment.',
    tags: ['Campaign Direction', 'Media Strategy', 'Performance'],
    meta: ['Concept to launch', 'Measured outcomes'],
    featured: false
  },
  {
    id: 'branding-design',
    num: '(03)',
    title: 'Branding & Graphic Design',
    body: 'Corporate marks, cohesive typographic systems, brand guidelines, packaging and stationery that establish premium market positioning and immediate recognition.',
    tags: ['Identity Systems', 'Visual Architecture', 'Packaging'],
    meta: ['Design with intent', 'Built to scale'],
    featured: true
  },
  {
    id: 'website-development',
    num: '(04)',
    title: 'Website Design & Development',
    body: 'Elegant, mobile-first, high-performance web experiences with intuitive information architecture and structured customer pathways that convert traffic into enquiries.',
    tags: ['UI / UX', 'Web Platforms', 'E-Commerce'],
    meta: ['Fast by default', 'Conversion-led'],
    featured: true
  },
  {
    id: 'digital-marketing',
    num: '(05)',
    title: 'Digital Marketing & Social Media',
    body: 'Content narratives, platform strategy, community engagement and digital activations that build brand authority across the touchpoints that matter.',
    tags: ['Content', 'Social Strategy', 'Community'],
    meta: ['Always-on presence', 'Voice consistency'],
    featured: false
  },
  {
    id: 'seo',
    num: '(06)',
    title: 'Search Engine Optimisation',
    body: 'Technical architecture, metadata structure and search-intent alignment that build organic authority — so prospective clients find the brand naturally over time.',
    tags: ['Technical SEO', 'Content Discovery', 'Authority'],
    meta: ['Compounding visibility', 'Built on intent'],
    featured: false
  },
  {
    id: 'filmmaking-production',
    num: '(07)',
    title: 'Filmmaking & Creative Production',
    body: 'Television commercials, corporate documentaries, product films and brand assets with 4K cinematography, direction and precision sound design.',
    tags: ['TVCs', 'Brand Films', 'Post-Production'],
    meta: ['Directorial craft', 'Cinematic standard'],
    featured: true
  },
  {
    id: 'events-consulting',
    num: '(08)',
    title: 'Events & Strategic Consulting',
    body: 'Senior advisory for launches, turnkey brand setups, corporate event direction and feasibility consulting for leadership teams.',
    tags: ['Turnkey Advisory', 'Brand Inception', 'Events'],
    meta: ['Board-level counsel', 'Launch readiness'],
    featured: false
  }
];

export const featuredServices = services.filter((s) => s.featured);

export const serviceTitleById = (id) => services.find((s) => s.id === id)?.title ?? '';
