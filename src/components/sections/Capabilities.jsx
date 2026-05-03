import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { capabilities } from '../../data/capabilities'

export default function Capabilities() {
  return (
    <section id="capabilities" className="section overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Capabilities"
            title="Five disciplines, one team."
            subtitle="From the racks in the data center to the AI models that run on top — we work across the full stack of what a modern technology company is expected to do."
          />
        </AnimatedSection>

        {/* Vertical list with full-bleed dividers — feels editorial, not tile-y */}
        <div className="border-t border-white/[0.08]">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.id} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilityRow({ cap, index }) {
  const Icon = cap.icon
  return (
    <AnimatedSection>
      <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-white/[0.08] hover:bg-white/[0.015] transition-colors">
        {/* Number + icon */}
        <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start">
          <span className="text-3xl font-medium text-brand-300 tabular-nums leading-none lg:mb-4">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 lg:hidden bg-white/[0.06]" />
          <div className="hidden lg:flex w-11 h-11 rounded-lg bg-brand-500/15 border border-brand-500/30 items-center justify-center text-brand-200 group-hover:bg-brand-500/25 group-hover:border-brand-500/40 transition-colors">
            <Icon className="w-5 h-5" strokeWidth={1.6} />
          </div>
        </div>

        {/* Title + description */}
        <div className="lg:col-span-5">
          <div className="flex items-start gap-4 lg:gap-0">
            <div className="lg:hidden w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
              <Icon className="w-5 h-5" strokeWidth={1.6} />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-white leading-[1.1]">
              {cap.title}
            </h3>
          </div>
          <p className="mt-4 lg:mt-5 text-ink-300 leading-relaxed max-w-md">
            {cap.description}
          </p>
        </div>

        {/* Bullets */}
        <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pl-8 lg:border-l lg:border-white/[0.06] self-center">
          {cap.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink-200">
              <span className="mt-2 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}
