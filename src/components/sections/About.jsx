import { Zap, Target, Eye, Layers } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const values = [
  {
    icon: Zap,
    title: 'Velocity with rigor',
    desc: 'We move fast because we plan well — not because we cut corners. No spaghetti code, no tech debt left for next quarter.',
  },
  {
    icon: Target,
    title: 'Outcomes over output',
    desc: 'We measure our work by the business impact it creates, not the volume of code shipped or the hours invoiced.',
  },
  {
    icon: Eye,
    title: 'Transparent by default',
    desc: 'Honest estimates, weekly demos, and a clear paper trail. No black boxes, no mid-project surprises.',
  },
  {
    icon: Layers,
    title: 'Built to last',
    desc: 'Every system we ship is one we would be willing to maintain ourselves three years from now.',
  },
]

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 lg:items-center">
          {/* Left — headline + body */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <SectionHeader
              eyebrow="About Dynamindz"
              title="A technology company designed for long horizons."
              centered={false}
              marginBottom="mb-8"
            />
            <p className="text-ink-600 text-lg leading-relaxed mb-5">
              The businesses that win the next decade will be the ones that
              treat technology as core infrastructure — not as a line item.
            </p>
            <p className="text-ink-600 text-lg leading-relaxed">
              So we work the way infrastructure has to work: plan deliberately,
              build durably, document everything, and stay around long enough to
              be accountable for what we ship.
            </p>
          </AnimatedSection>

          {/* Right — values */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-ink-200/70 rounded-2xl overflow-hidden border border-ink-200/70">
              {values.map((v) => (
                <div key={v.title} className="group relative bg-white p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-11 h-11 rounded-lg bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-colors">
                    <v.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-ink-900 mb-1.5">
                    {v.title}
                  </h4>
                  <p className="text-ink-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
