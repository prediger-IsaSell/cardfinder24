import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Midnight base
        night: {
          DEFAULT: '#070B16',
          800: '#0B1120',
          700: '#0F1629',
          600: '#151E36',
        },
        // Electric mint accent
        mint: {
          DEFAULT: '#34E5C2',
          bright: '#5EEAD4',
          dark: '#10B996',
        },
        // Warm gold
        gold: {
          DEFAULT: '#E5C07B',
          soft: '#F0D6A0',
        },
        cloud: '#F2F5FA', // near-white text
        ash: '#94A3B8', // muted text
        hairline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1140px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(52,229,194,0.18), 0 30px 80px -30px rgba(52,229,194,0.35)',
        card: '0 40px 90px -40px rgba(0,0,0,0.9)',
        float: '0 30px 60px -25px rgba(0,0,0,0.85)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
