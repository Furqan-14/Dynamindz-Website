import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by deeply understanding your goals, users, and constraints. No assumptions — only questions and listening.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'We design the technical blueprint: stack, data models, API contracts, infrastructure plan. Before a line of code is written.',
  },
  {
    number: '03',
    title: 'Build & iterate',
    description:
      'We ship in focused sprints with weekly demos. You see real progress every week, not after months of silence.',
  },
  {
    number: '04',
    title: 'Test & harden',
    description:
      'QA, performance testing, and security review happen before code touches production. No exceptions, no shortcuts.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deployment, monitoring, runbooks, and full documentation. The landing is as smooth as the flight.',
  },
  {
    number: '06',
    title: 'Evolve',
    description:
      'Post-launch support, feature iteration, and a long-term partnership. We do not disappear after delivery.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How we work"
            title="A process built for clarity."
            subtitle="No black boxes, no month-long silences — just transparent, structured work from first call to long-term partnership."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-ink-100 border border-ink-100">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={Math.min(i * 0.05, 0.3)}>
              <div className="h-full bg-white hover:bg-ink-50 transition-colors duration-300 p-7 group">
                <div className="flex items-end gap-3 mb-5">
                  <span className="font-display text-4xl font-medium text-brand-600 tabular-nums leading-none group-hover:text-brand-700 transition-colors">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-500/40 to-transparent mb-2" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
