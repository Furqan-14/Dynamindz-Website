import { Zap, Target, Users, Sparkles } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'

const stats = [
  { value: '50+',  label: 'Projects Delivered'     },
  { value: '3',    label: 'Own Products Shipped'    },
  { value: '100%', label: 'Client Retention Rate'   },
  { value: '2+',   label: 'Years of Excellence'     },
]

const values = [
  {
    icon: Zap,
    title: 'Speed Without Shortcuts',
    desc: 'We move fast because we plan well. No spaghetti code, no tech debt bombs.',
  },
  {
    icon: Target,
    title: 'Outcome Obsessed',
    desc: 'We measure our work by business impact, not lines of code or hours billed.',
  },
  {
    icon: Users,
    title: 'Transparent by Default',
    desc: 'Clear communication, honest estimates, no surprises mid-project.',
  },
  {
    icon: Sparkles,
    title: 'Craft in Every Commit',
    desc: 'We take pride in clean code, thoughtful UI, and systems that hold up over time.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — text */}
          <AnimatedSection direction="left">
            <SectionHeader
              eyebrow="About Us"
              title="We Ship. We Consult. We Build."
              centered={false}
            />
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Dynamindz was founded with a simple belief: software should solve real problems,
              ship on time, and be maintainable years from now. We're a focused team of engineers
              who care deeply about craft — and who hold ourselves accountable to outcomes,
              not just outputs.
            </p>

            {/* Values list */}
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right column — stats */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} hover className="text-center py-8">
                  <div className="text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Quote card */}
            <div className="mt-4 p-6 bg-gray-900 rounded-2xl text-white">
              <p className="text-lg leading-relaxed font-medium mb-4">
                "The best software is invisible — it just works, every time, without asking
                anything of the user."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm font-bold">
                  M
                </div>
                <div>
                  <div className="text-sm font-semibold">Muzaffar</div>
                  <div className="text-xs text-gray-400">Founder, Dynamindz</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
