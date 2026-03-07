import { Github, Linkedin, Plus } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { team } from '../../data/team'

export default function Team() {
  return (
    <section id="team" className="bg-slate-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="The Team"
            title="Small Team, Big Output"
            subtitle="We keep the team lean so every engineer is senior, accountable, and deeply invested in your success."
          />
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <AnimatedSection
              key={member.id}
              delay={Math.min(index * 0.1, 0.4)}
              className="w-full sm:w-80"
            >
              <Card hover padding="lg" className="text-center h-full flex flex-col">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 flex-shrink-0">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">{member.initials}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{member.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {member.skills.map((s) => (
                    <Badge key={s} variant="gray">
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </AnimatedSection>
          ))}

          {/* We're Hiring card */}
          <AnimatedSection delay={Math.min(team.length * 0.1, 0.5)} className="w-full sm:w-80">
            <div className="h-full rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-8 text-center flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Plus className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Team</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We're always looking for talented engineers and designers who care about craft.
              </p>
              <Button variant="outline" size="sm" href="#contact">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
