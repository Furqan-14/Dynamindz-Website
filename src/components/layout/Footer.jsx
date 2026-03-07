import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import LogoSrc from '../../assets/Logo.png'

const serviceLinks = [
  'Custom Software Development',
  'Product Development',
  'IT Consulting',
  'Mobile Development',
  'Cloud & DevOps',
  'Security & Compliance',
]

const companyLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process',   href: '#process'   },
  { label: 'Team',      href: '#team'      },
  { label: 'Contact',   href: '#contact'   },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src={LogoSrc}
              alt="Dynamindz"
              className="h-8 w-auto invert opacity-90 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building software that matters. Custom development, product innovation, and
              IT consulting for teams that need it done right.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@dynamindz.com"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@dynamindz.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@dynamindz.com
                </a>
              </li>
              <li className="text-sm text-gray-400">Remote · Available Worldwide</li>
              <li className="text-sm text-gray-400">Response within 24 hours</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dynamindz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
