import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-200 rounded-full opacity-25 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-300 rounded-full opacity-20 blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-[80px] animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#111827 1px, transparent 1px), linear-gradient(to right, #111827 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-widest">
              Software · Products · Consulting
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.02] tracking-tight text-gray-900 mb-6">
            We Build Software
            <br />
            <span className="text-gradient">That Works.</span>
          </h1>
        </AnimatedSection>

        {/* Sub-headline */}
        <AnimatedSection delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Dynamindz is a software company that ships custom applications, builds its own
            products, and helps teams make the right technology decisions — fast.
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href="#portfolio">
              See Our Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Start a Project
            </Button>
          </div>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '3',   label: 'Own Products' },
              { value: '100%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <AnimatedSection delay={0.6} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          onClick={() =>
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </AnimatedSection>
    </section>
  )
}
