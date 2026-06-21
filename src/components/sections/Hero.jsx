import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

const disciplines = [
  'IT Services',
  'Resource Augmentation',
  'IT Research & Development',
  'Tendering',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Atmospheric backdrop — faint grid + two soft pastel blue blobs */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-70" />
      <div className="absolute -top-40 -right-40 w-[1000px] h-[1000px] rounded-full bg-brand-400/[0.12] blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] rounded-full bg-brand-300/[0.10] blur-[160px] pointer-events-none" />

      {/* Main content — asymmetric left-aligned, lots of negative space */}
      <div className="relative z-10 flex-1 flex items-center container-wide pt-32 pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <AnimatedSection delay={0}>
            <p className="flex items-center gap-3 text-sm text-ink-500 mb-10">
              <span className="w-8 h-px bg-brand-500" />
              A technology company
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <h1 className="font-display font-medium text-ink-900 leading-[0.95] tracking-[-0.045em] text-[3.5rem] sm:text-[5rem] md:text-[6rem] xl:text-[7rem]">
              Design.
              <br />
              Build.
              <br />
              Operate.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-12 max-w-lg text-lg text-ink-600 leading-relaxed">
              We work across IT services, resource augmentation, applied
              research, and tendering — and we stay around long enough
              to be accountable for what we ship.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" href="#capabilities">
                See our capabilities
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="md" href="#contact">
                Start a conversation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom — five disciplines, with a brand hairline accent */}
      <AnimatedSection delay={0.25}>
        <div className="relative z-10 border-t border-ink-100">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent pointer-events-none" />
          <div className="container-wide px-4 sm:px-8 lg:px-12 py-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
              {disciplines.map((d, i) => (
                <div key={d} className="flex items-baseline gap-3 group">
                  <span className="text-sm font-medium text-brand-600 tabular-nums group-hover:text-brand-700 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ink-700 group-hover:text-ink-900 transition-colors">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
