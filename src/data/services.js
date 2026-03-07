import {
  Code2,
  Layers,
  Lightbulb,
  Smartphone,
  Cloud,
  ShieldCheck,
} from 'lucide-react'

export const services = [
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'We build tailored web and desktop applications from the ground up — designed around your exact workflows, not generic templates.',
    highlights: ['Web Apps', 'APIs & Integrations', 'Dashboards & Portals'],
  },
  {
    id: 'product-development',
    icon: Layers,
    title: 'Product Development',
    description:
      'We ideate, design, and ship our own SaaS products. When we build for ourselves, we pour in the same rigor we apply to every client engagement.',
    highlights: ['SaaS Platforms', 'MVP Sprints', 'Product Strategy'],
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Not sure where to start? We audit your current stack, identify bottlenecks, and map a technology roadmap aligned with your business goals.',
    highlights: ['Tech Audits', 'Architecture Reviews', 'Digital Strategy'],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform iOS and Android apps built with React Native — one codebase, native performance, delivered fast.',
    highlights: ['iOS & Android', 'React Native', 'App Store Publishing'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'We architect scalable cloud infrastructure and automate deployments so your team ships confidently and your systems stay resilient under load.',
    highlights: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Containerization'],
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description:
      'Security built in from day one. Vulnerability assessments, best-practice authentication, encryption, and access control — done right.',
    highlights: ['Penetration Testing', 'OWASP Compliance', 'Auth Systems'],
  },
]
