/**
 * Reusable button/link component.
 * Props:
 *   variant  - 'primary' | 'outline' | 'ghost' (default 'primary')
 *   size     - 'sm' | 'md' | 'lg' (default 'md')
 *   href     - string (renders <a> if provided, else <button>)
 *   children - ReactNode
 *   className - string
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5',
    ghost:   'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
