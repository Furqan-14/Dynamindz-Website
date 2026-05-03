import {
  Server,
  FlaskConical,
  GraduationCap,
  FileSignature,
  Cpu,
} from 'lucide-react'

export const capabilities = [
  {
    id: 'infrastructure',
    number: '01',
    icon: Server,
    title: 'Infrastructure',
    tagline: 'Built to run, hardened to last.',
    description:
      'We establish, maintain and operate data centers, cloud hosting facilities and communication networks — the unseen backbone every modern business depends on.',
    bullets: [
      'Data center planning & operation',
      'Multi-region cloud hosting',
      'Communication networks & edge',
      '24/7 monitoring & SLAs',
    ],
  },
  {
    id: 'rnd',
    number: '02',
    icon: FlaskConical,
    title: 'Research & Development',
    tagline: 'Where tomorrow gets prototyped.',
    description:
      'We invest in research and development across new software, AI models, hardware components and cybersecurity protocols — turning ideas into shippable products.',
    bullets: [
      'Applied AI & ML models',
      'Hardware & embedded systems',
      'Cybersecurity protocols',
      'Software platform R&D',
    ],
  },
  {
    id: 'training',
    number: '03',
    icon: GraduationCap,
    title: 'Technical Training',
    tagline: 'Skill transfer, not knowledge hoarding.',
    description:
      'We provide training, consultancy and technical support services to clients and employees on the use of modern software and hardware — so teams own their stack.',
    bullets: [
      'Hands-on workshops',
      'Custom curriculum design',
      'Technical consultancy',
      'Long-term support contracts',
    ],
  },
  {
    id: 'tendering',
    number: '04',
    icon: FileSignature,
    title: 'Tendering',
    tagline: 'Public sector ready, audit-trail clean.',
    description:
      'We apply for, secure and execute contracts and sub-contracts from government bodies, municipalities and private entities — with the documentation and discipline expected at that level.',
    bullets: [
      'Government bids & RFPs',
      'Municipal contracts',
      'Private sector partnerships',
      'Sub-contracting & delivery',
    ],
  },
  {
    id: 'it-services',
    number: '05',
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
]
