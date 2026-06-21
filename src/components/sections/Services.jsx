import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="section overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            eyebrow="IT Services"
            title="The full stack your business needs."
            subtitle="Inside our IT services umbrella we cover the disciplines most teams need to outsource — design, build, integrate, secure, and operate."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-ink-100 border border-ink-100">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={Math.min(i * 0.04, 0.3)}>
              <ServiceTile service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceTile({ service }) {
  const Icon = service.icon
  return (
    <div className="group relative h-full bg-white hover:bg-ink-50 transition-colors duration-300 p-7 overflow-hidden">
      {/* hover hairline accent */}
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-11 h-11 rounded-lg bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" strokeWidth={1.6} />
      </div>

      <h3 className="font-display text-lg font-semibold text-ink-900 mb-2">
        {service.title}
      </h3>
      <p className="text-ink-600 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <Badge key={t} variant="ink">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}
