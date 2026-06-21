/**
 * Section header. The title supports a string OR JSX (so callers can mix
 * sans + italic-serif spans for typographic accent — the design signature).
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  marginBottom = 'mb-20',
  className = '',
}) {
  return (
    <div className={`${marginBottom} max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`mb-6 ${centered ? 'flex justify-center' : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-medium text-ink-900 leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg text-ink-500 leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
