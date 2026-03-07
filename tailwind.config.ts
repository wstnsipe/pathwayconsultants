import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:       '#0F2040',
        'navy-mid': '#152D56',
        'navy-deep':'#0A1628',
        gold:       '#C9A84C',
        'gold-lt':  '#E0BC6B',
        'gold-dim': 'rgba(201,168,76,0.15)',
        cream:      '#FAFAF7',
        warm:       '#F0EDE6',
        charcoal:   '#111827',
        body:       '#4B5563',
        heading:    '#1A1A2E',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        inter:   ['var(--font-inter)',   'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
    },
  },
  plugins: [],
}

export default config
