import { useState } from 'react'
import { Mail, Send, CheckCircle, ArrowUpRight, Check } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import Select from '../ui/Select'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@dynamindz.com', href: 'mailto:info@dynamindz.com' },
]

const interestOptions = [
  'IT Services',
  'Resource Augmentation',
  'IT Research & Development',
  'Tendering',
  'Not sure yet',
]

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center mb-5">
        <CheckCircle className="w-7 h-7 text-brand-600" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-ink-900 mb-2">Message received.</h3>
      <p className="text-ink-600">We&apos;ll respond within one business day.</p>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to Formspree / EmailJS / API endpoint
    setSubmitted(true)
  }

  const labelClass = 'block text-sm font-medium text-ink-700 mb-2'
  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white border border-ink-200 text-ink-900 placeholder-ink-400 ' +
    'text-sm focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all'

  return (
    <section id="contact" className="section overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 lg:items-center">
          {/* Left — info */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get in touch"
              title="Let's build something that lasts."
              subtitle="Whether you have a fully scoped RFP or a hunch on a napkin — we'd like to hear about it."
              centered={false}
              marginBottom="mb-10"
            />

            <div className="space-y-3 mb-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-ink-200 bg-white hover:border-ink-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink-500">{item.label}</p>
                    <p className="text-ink-900">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
              <h4 className="text-sm font-semibold text-ink-900 mb-5">
                Why teams choose Dynamindz
              </h4>
              <ul className="space-y-3.5">
                {[
                  'Fixed-price or T&M — your choice',
                  'Weekly demos and progress updates',
                  'Full source-code ownership, always',
                  'Post-launch support included',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-ink-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-600" strokeWidth={2.5} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="card p-7 sm:p-9">
              {submitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="name">Full name</label>
                      <input
                        id="name" name="name" type="text" required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="email">Email address</label>
                      <input
                        id="email" name="email" type="email" required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="company">Company / project</label>
                    <input
                      id="company" name="company" type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="interest">Area of interest</label>
                    <Select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={(v) => setFormData((p) => ({ ...p, interest: v }))}
                      options={interestOptions}
                      placeholder="Select a discipline..."
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="message">Tell us about your project</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you trying to build? Where are you stuck? Any deadlines?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
