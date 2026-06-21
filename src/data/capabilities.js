import {
  Cpu,
  Users,
  FlaskConical,
  FileSignature,
} from 'lucide-react'

export const capabilities = [
  {
    id: 'it-services',
    number: '01',
    icon: Cpu,
    title: 'IT Services',
    tagline: 'Custom software, end-to-end.',
    description:
      'We design, build, manage and support custom software across web, mobile and enterprise systems — together with system integration, cloud, security, data and ongoing operations.',
    bullets: [
      'Custom software development',
      'System integration',
      'Cloud computing & DevOps',
      'Cybersecurity & data',
    ],
  },
  {
    id: 'resource-augmentation',
    number: '02',
    icon: Users,
    title: 'Resource Augmentation',
    tagline: 'Your team, scaled on demand.',
    description:
      'We embed skilled IT professionals — developers, infrastructure engineers, QA specialists, project managers and analysts — directly into client teams, scaling capacity up or down without the overhead of permanent hiring.',
    bullets: [
      'Software development & QA talent',
      'Infrastructure & DevOps engineers',
      'Project managers & business analysts',
      'Short-term & long-term placements',
    ],
  },
  {
    id: 'rnd',
    number: '03',
    icon: FlaskConical,
    title: 'IT Research & Development',
    tagline: 'Where tomorrow gets prototyped.',
    description:
      'We invest in research and development across software platforms, AI models and cybersecurity protocols — turning ideas into shippable, production-grade products.',
    bullets: [
      'Applied AI & ML models',
      'Cybersecurity protocols',
      'Software platform R&D',
      'Proof-of-concept & prototyping',
    ],
  },
  {
    id: 'tendering',
    number: '04',
    icon: FileSignature,
    title: 'Tendering',
    tagline: 'Public sector ready, audit-trail clean.',
    description:
      'We apply for, secure and execute IT contracts and sub-contracts for government bodies, municipalities and private entities — with the documentation and delivery discipline expected at that level.',
    bullets: [
      'Government IT bids & RFPs',
      'Municipal & PSU IT contracts',
      'Private sector partnerships',
      'Sub-contracting & delivery',
    ],
  },
]
