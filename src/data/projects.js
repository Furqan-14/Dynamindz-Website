export const projects = [
  // Client Work
  {
    id: 'erp-platform',
    category: 'client',
    title: 'Enterprise ERP Platform',
    description:
      'A full-featured ERP system for a logistics company managing 500+ employees, with real-time inventory, HR, and financials in one unified dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    outcome: 'Reduced operational overhead by 40%',
    featured: true,
  },
  {
    id: 'ecommerce-engine',
    category: 'client',
    title: 'Multi-Vendor E-Commerce Engine',
    description:
      'A white-label e-commerce platform supporting 200+ vendors with dynamic storefronts, payment gateways, and a real-time analytics dashboard.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
    outcome: '$2M+ in transactions processed',
    featured: true,
  },
  {
    id: 'healthcare-portal',
    category: 'client',
    title: 'Healthcare Patient Portal',
    description:
      'A HIPAA-compliant patient management portal enabling appointment booking, teleconsultations, and secure medical record access.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    outcome: '10,000+ patients onboarded in 3 months',
    featured: false,
  },
  // Own Products
  {
    id: 'flowdesk',
    category: 'product',
    title: 'FlowDesk',
    description:
      'Our internal project management SaaS built for small dev teams who need Kanban-style task tracking without the bloat of enterprise tools.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    outcome: 'Used by 3 internal teams daily',
    featured: true,
  },
  {
    id: 'apiforge',
    category: 'product',
    title: 'APIForge',
    description:
      'A visual API testing and documentation tool. Think Postman meets Notion — built for developers who value context switching less than good UX.',
    tech: ['Electron', 'React', 'TypeScript', 'SQLite'],
    outcome: 'Beta launching Q3 2025',
    featured: true,
  },
  {
    id: 'auditlog',
    category: 'product',
    title: 'AuditLog SaaS',
    description:
      'A plug-and-play audit trail service for SaaS products. Drop in the SDK and get immutable, queryable logs with a polished admin UI.',
    tech: ['Node.js', 'ClickHouse', 'React', 'Stripe'],
    outcome: 'In active development',
    featured: false,
  },
]
