/**
 * Button / link with dark-theme variants.
 *   variant - 'primary' | 'outline' | 'ghost'
 *   size    - 'sm' | 'md' | 'lg'
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
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg ' +
    'transition-colors duration-200 cursor-pointer focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ' +
    'focus-visible:ring-offset-white whitespace-nowrap'

  const variants = {
    primary:
      'text-white bg-brand-500 hover:bg-brand-600 ' +
      'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_8px_24px_-12px_rgba(31,162,255,0.5)]',
    outline:
      'border border-ink-200 text-ink-800 hover:bg-ink-50 hover:border-ink-300',
    ghost:
      'text-ink-600 hover:text-ink-900 hover:bg-ink-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
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
