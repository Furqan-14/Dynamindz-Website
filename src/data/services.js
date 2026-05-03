import {
  Code2,
  Smartphone,
  Building2,
  GitMerge,
  Cloud,
  ShieldCheck,
  Database,
  Compass,
  LifeBuoy,
} from 'lucide-react'

export const services = [
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Web applications designed and built around your exact workflow — not generic templates.',
    tags: ['Web Apps', 'APIs', 'Dashboards'],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform iOS and Android apps with native performance and a single, maintainable codebase.',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise Systems',
    description:
      'ERP, CRM, HR and finance platforms tailored to how your business actually operates.',
    tags: ['ERP', 'CRM', 'Workflow'],
  },
  {
    id: 'integration',
    icon: GitMerge,
    title: 'System Integration',
    description:
      'Connect legacy systems, third-party APIs and modern services into one coherent platform.',
    tags: ['APIs', 'ETL', 'Middleware'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Computing',
    description:
      'Architecture, migration and operations across AWS, Azure and GCP — done with cost discipline.',
    tags: ['AWS', 'Azure', 'GCP'],
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Hardened auth, encryption, vulnerability assessments and compliance baked in from day one.',
    tags: ['Pen Test', 'IAM', 'Compliance'],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Management',
    description:
      'Pipelines, warehouses and dashboards that turn raw events into decisions you can trust.',
    tags: ['Pipelines', 'Warehouse', 'BI'],
  },
  {
    id: 'consulting',
    icon: Compass,
    title: 'IT Consulting',
    description:
      'Architecture reviews, technology audits and roadmaps aligned with where your business is going.',
    tags: ['Audit', 'Strategy', 'Roadmap'],
  },
  {
    id: 'support',
    icon: LifeBuoy,
    title: 'Maintenance & Support',
    description:
      'Long-term partnerships — not drop-and-disappear. We stay on the line after launch.',
    tags: ['SLAs', '24/7', 'Iteration'],
  },
]
