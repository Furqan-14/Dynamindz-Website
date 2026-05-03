import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import LogoSrc from '../../assets/Logo-white.png'

const capabilityLinks = [
  { label: 'Infrastructure',     href: '#capabilities' },
  { label: 'R&D',                href: '#capabilities' },
  { label: 'Technical training', href: '#capabilities' },
  { label: 'Tendering',          href: '#capabilities' },
  { label: 'IT services',        href: '#capabilities' },
]

const companyLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Services',     href: '#services'     },
  { label: 'About',        href: '#about'        },
  { label: 'Process',      href: '#process'      },
  { label: 'Contact',      href: '#contact'      },
]

const socials = [
  { icon: Github,   href: '#',                          label: 'GitHub'   },
  { icon: Linkedin, href: '#',                          label: 'LinkedIn' },
  { icon: Twitter,  href: '#',                          label: 'Twitter'  },
  { icon: Mail,     href: 'mailto:info@dynamindz.com',  label: 'Email'    },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={LogoSrc} alt="Dynamindz" className="h-7 w-auto mb-5 opacity-95" />
            <p className="text-ink-300 text-sm leading-relaxed mb-6 max-w-md">
              A technology company designed for long horizons. Infrastructure, R&amp;D,
              technical training, tendering, and IT services — built to last.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-ink-300 hover:text-white hover:border-white/20 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilityLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-200 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-200 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@dynamindz.com"
                  className="text-ink-200 hover:text-white transition-colors"
                >
                  info@dynamindz.com
                </a>
              </li>
              <li className="text-ink-400">Response within 24h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Dynamindz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
