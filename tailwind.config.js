/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        // Display = Inter; we lean on weight + italic-serif for hierarchy
        display: ['Inter', 'system-ui', 'sans-serif'],
        // High-contrast italic serif for accent words
        serif:   ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#E6F4FF',
          100: '#CCE9FF',
          200: '#99D3FF',
          300: '#66BCFF',
          400: '#33A6FF',
          500: '#1FA2FF',
          600: '#0086E6',
          700: '#0069B3',
          800: '#004C80',
          900: '#002F4D',
        },
        ink: {
          950: '#06080F',
          900: '#0A0E18',
          850: '#0F1422',
          800: '#131A2B',
          700: '#1C2338',
          600: '#262E45',
          500: '#3B4564',
          400: '#5C6886',
          300: '#8893B5',
          200: '#B5BED4',
          100: '#D7DCEA',
          50:  '#F1F3F9',
        },
      },
      animation: {
        'float':         'float 9s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 4.5s infinite',
        'pulse-slow':    'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee':       'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-22px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow':    '0 0 20px rgba(31,162,255,0.30)',
        'glow-lg': '0 0 60px rgba(31,162,255,0.35)',
      },
    },
  },
  plugins: [],
}
