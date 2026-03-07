import { Search, Layers, Code2, ShieldCheck, Rocket, RefreshCw } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by deeply understanding your goals, users, and constraints. No assumptions — just questions and listening.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'We design the technical blueprint: stack choices, data models, API contracts, and infrastructure plan — before a line of code is written.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description:
      'We ship in focused sprints with regular demos. You see progress every week, not after months of silence.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Test & Harden',
    description:
      'QA, performance testing, and security review happen before any code touches production. No exceptions.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deployment, monitoring setup, and full documentation. We make sure the landing is as smooth as the flight.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Evolve',
    description:
      "Post-launch support, feature iteration, and long-term partnership. We don't disappear after delivery.",
    icon: RefreshCw,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-blue-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How We Work"
            title="A Process Built for Clarity"
            subtitle="No black boxes. No month-long silences. Just transparent, structured work from first call to final delivery."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={Math.min(index * 0.1, 0.5)}>
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full hover:shadow-md hover:border-blue-200 transition-all duration-300">
                {/* Giant number — depth layer */}
                <span className="absolute -top-3 -left-1 text-7xl font-black text-blue-100 select-none leading-none">
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10 pt-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
