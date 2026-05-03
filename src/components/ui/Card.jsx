/**
 * Confident dark card. Calm by default, subtle lift on hover.
 *   padding - 'sm' | 'md' | 'lg'
 *   hover   - boolean
 */
export default function Card({
  children,
  hover = true,
  className = '',
  padding = 'md',
}) {
  const paddings = { sm: 'p-5', md: 'p-7', lg: 'p-8' }
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  )
}
