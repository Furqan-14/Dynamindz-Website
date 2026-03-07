import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import SectionHeader from '../ui/SectionHeader'
import { projects } from '../../data/projects'

const filters = [
  { id: 'all',     label: 'All Projects'  },
  { id: 'client',  label: 'Client Work'   },
  { id: 'product', label: 'Own Products'  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Work"
            title="Projects We're Proud Of"
            subtitle="A mix of client engagements and products we've built for ourselves."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <Card hover padding="lg" className="h-full flex flex-col">
                  {/* Category badge */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={project.category === 'client' ? 'gray' : 'blue'}>
                      {project.category === 'client' ? 'Client Work' : 'Own Product'}
                    </Badge>
                    {project.featured && (
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="bg-blue-50 rounded-xl px-4 py-3 text-blue-700 text-sm font-semibold mb-4">
                    ✦ {project.outcome}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="gray">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
