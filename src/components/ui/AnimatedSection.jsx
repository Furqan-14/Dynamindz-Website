import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade + slide animation.
 * Props:
 *   children   - ReactNode
 *   className  - string
 *   delay      - number (seconds, default 0)
 *   direction  - 'up' | 'left' | 'right' (default 'up')
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const directionMap = {
    up:    { y: 40, x: 0 },
    left:  { y: 0,  x: -40 },
    right: { y: 0,  x: 40 },
  }

  const initial = { opacity: 0, ...directionMap[direction] }
  const animate = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
