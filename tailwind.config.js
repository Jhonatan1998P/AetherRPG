/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    './aether/index.html',
    './aether/src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          950: '#050913',
          900: '#0a1222',
          850: '#111b30',
        },
        panel: {
          900: '#0f1729',
          800: '#142036',
        },
        neon: {
          cyan: '#22d3ee',
          fuchsia: '#d946ef',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(34,211,238,.22), 0 0 20px rgba(34,211,238,.16), 0 14px 44px rgba(8,47,73,.30)',
        violet: '0 0 0 1px rgba(217,70,239,.22), 0 0 20px rgba(217,70,239,.14), 0 14px 44px rgba(88,28,135,.28)',
        gold: '0 0 0 1px rgba(251,191,36,.22), 0 0 20px rgba(251,191,36,.14), 0 14px 44px rgba(146,64,14,.30)',
        pane: '0 20px 80px rgba(2,6,23,.52)',
        insetglass: 'inset 0 1px 0 rgba(255,255,255,.14), inset 0 -1px 0 rgba(255,255,255,.03)',
        rail: '0 16px 36px rgba(2,6,23,.28)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rise-in': 'riseIn .24s ease-out',
      },
      backgroundImage: {
        'hud-grid': 'linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px)',
        'panel-sheen': 'linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.04) 42%, rgba(34,211,238,.05) 100%)',
      },
    },
  },
  plugins: [],
};
