import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Dark-themed custom select.
 *   options - string[]
 *   value   - string
 *   onChange - (value: string) => void
 *   placeholder - string
 */
export default function Select({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option',
  id,
  name,
  className = '',
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Hidden native input keeps the value in form-state for handleSubmit consumers */}
      <input type="hidden" id={id} name={name} value={value} />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
          bg-ink-900 border text-left text-sm transition-all
          ${open
            ? 'border-brand-400/60 ring-2 ring-brand-400/20 text-white'
            : 'border-white/[0.08] text-white hover:border-white/[0.16]'}`}
      >
        <span className={value ? 'text-white' : 'text-ink-500'}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-ink-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-30 mt-1 max-h-72 overflow-auto rounded-lg border border-white/[0.08] bg-ink-850/95 backdrop-blur-xl shadow-xl shadow-black/40 py-1"
          >
            {options.map((opt) => {
              const selected = opt === value
              return (
                <li key={opt}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange?.(opt)
                      setOpen(false)
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm
                      transition-colors
                      ${selected
                        ? 'text-white bg-brand-500/10'
                        : 'text-ink-200 hover:text-white hover:bg-white/[0.04]'}`}
                  >
                    <span>{opt}</span>
                    {selected && <Check className="w-4 h-4 text-brand-300" />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
