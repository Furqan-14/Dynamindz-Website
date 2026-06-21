export default function Badge({ children, variant = 'brand', className = '' }) {
  const variants = {
    brand: 'bg-brand-50 text-brand-700 border-brand-200',
    ink:   'bg-ink-50 text-ink-600 border-ink-200',
  }
  return (
    <span
      className={`inline-flex items-center text-xs px-2.5 py-1 rounded-md border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
