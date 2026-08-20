/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      // ============================================
      // BREAKPOINTS RESPONSIVES
      // ============================================
      screens: {
        'xs': '400px',     // Très petits smartphones
        'sm': '640px',     // Smartphones
        'md': '768px',     // Tablettes
        'lg': '1024px',    // Petits laptops
        'xl': '1280px',    // Desktops
        '2xl': '1536px',   // Grands écrans
        '3xl': '1920px',   // Écrans ultra-larges
      },

      // ============================================
      // COULEURS
      // ============================================
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
          400: '#E8BF5E',
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

      // ============================================
      // TYPOGRAPHIE
      // ============================================
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        arabic: ['"Cairo"', 'sans-serif'],
      },

      // ============================================
      // TAILLES DE POLICE
      // ============================================
      fontSize: {
        'xxs': ['0.65rem', { lineHeight: '1rem' }],     // 10.4px
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],  // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],         // 48px
        '6xl': ['3.75rem', { lineHeight: '1.08' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1.06' }],      // 72px
      },

      // ============================================
      // ESPACEMENTS
      // ============================================
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },

      // ============================================
      // ARRIÈRE-PLANS
      // ============================================
      backgroundImage: {
        'grain-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },

      // ============================================
      // OMBRES
      // ============================================
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 43, 77, 0.18)',
        card: '0 4px 24px -6px rgba(10, 43, 77, 0.12)',
        'soft-lg': '0 20px 60px -12px rgba(10, 43, 77, 0.25)',
        'inner-light': 'inset 0 2px 4px rgba(255,255,255,0.05)',
      },

      // ============================================
      // BORDS ARRONDIS
      // ============================================
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        drift: 'drift 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}