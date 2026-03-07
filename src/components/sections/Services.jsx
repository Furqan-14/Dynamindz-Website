import AnimatedSection from '../ui/AnimatedSection'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-blue-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What We Do"
            title="Services Built Around Your Goals"
            subtitle="From strategy to deployment, we cover the full spectrum of software needs — so you don't have to look anywhere else."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={Math.min(index * 0.1, 0.5)}>
              <Card hover className="h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5 flex-grow">{service.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.highlights.map((h) => (
                    <Badge key={h} variant="blue">
                      {h}
                    </Badge>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
