/**
 * White rounded card container.
 * Props:
 *   children  - ReactNode
 *   hover     - boolean (default true) - adds lift on hover
 *   className - string
 *   padding   - 'sm' | 'md' | 'lg' (default 'md')
 */
export default function Card({
  children,
  hover = true,
  className = '',
  padding = 'md',
}) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={`
        bg-white rounded-2xl border border-gray-100 shadow-sm
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200' : ''}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
