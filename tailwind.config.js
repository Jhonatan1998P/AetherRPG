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
        bg: {
          deep: '#030712',
          base: '#0a0f1a',
          elevated: '#111827',
          surface: '#1a2235',
          overlay: '#1e2a42',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
        status: {
          success: '#4ade80',
          warning: '#fbbf24',
          danger: '#f87171',
          info: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 24px rgba(167, 139, 250, 0.25)',
        'glow-emerald': '0 0 24px rgba(52, 211, 153, 0.2)',
        'glow-amber': '0 0 24px rgba(245, 158, 11, 0.2)',
        'glow-rose': '0 0 24px rgba(248, 113, 113, 0.2)',
        surface: '0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.4)',
        elevated: '0 8px 24px rgba(0, 0, 0, 0.4), 0 16px 48px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease forwards',
        'slide-up': 'slideUp 0.4s ease forwards',
        'scale-in': 'scaleIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
};
