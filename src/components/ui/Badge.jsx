/**
 * Pill badge — calm, sentence-case label.
 *   variant - 'brand' | 'ink'
 */
export default function Badge({ children, variant = 'brand', className = '' }) {
  const variants = {
    brand: 'bg-brand-500/10 text-brand-200 border-brand-500/20',
    ink:   'bg-white/[0.04] text-ink-200 border-white/[0.08]',
  }
  return (
    <span
      className={`inline-flex items-center text-xs px-2.5 py-1 rounded-md border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
