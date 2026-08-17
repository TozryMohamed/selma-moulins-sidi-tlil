/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        // Bleu industriel — confiance, structure, machinerie
        indigo: {
          950: '#061B32',
          900: '#0A2B4D',
          800: '#0E3E6C',
          700: '#134E86',
          600: '#1A63A8',
        },
        // Jaune blé — céréale, chaleur, récolte
        wheat: {
          50: '#FDF8EC',
          100: '#FAEECB',
          300: '#F0CE7C',
          500: '#E3AC3D',
          600: '#C88E24',
          700: '#9C6C17',
        },
        // Rouge — accent rare, alerte qualité
        grain: {
          600: '#B23A2E',
          700: '#93261C',
        },
        stone: {
          50: '#F7F6F3',
          100: '#EFEDE7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        arabic: ['"Cairo"', 'sans-serif'],
      },
      backgroundImage: {
        'grain-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 43, 77, 0.18)',
        card: '0 4px 24px -6px rgba(10, 43, 77, 0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        drift: 'drift 40s linear infinite',
      },
    },
  },
  plugins: [],
}
