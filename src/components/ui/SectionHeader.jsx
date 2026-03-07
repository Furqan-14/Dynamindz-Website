/**
 * Consistent section header with eyebrow, title, and subtitle.
 * Props:
 *   eyebrow  - string (small uppercase label)
 *   title    - string (main heading)
 *   subtitle - string (optional)
 *   centered - boolean (default true)
 *   light    - boolean (default false) - white text for dark backgrounds
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
