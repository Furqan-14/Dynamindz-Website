/**
 * Pill badge label.
 * Props:
 *   children - string
 *   variant  - 'blue' | 'gray' (default 'blue')
 *   className - string
 */
export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-blue-100 text-blue-700',
    gray:   'bg-gray-100 text-gray-600',
  }

  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
