/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39ff14',
          orange: '#ff5e00',
          yellow: '#ffff00',
          cyan: '#00ffff',
          pink: '#ff00ff',
          purple: '#9d00ff',
        },
        cyber: {
          light: '#f0f9ff',
          dark: '#0a0a0f',
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 12s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
        'neon-green': 'neon-green 2s ease-in-out infinite',
        'neon-orange': 'neon-orange 2s ease-in-out infinite',
        'neon-yellow': 'neon-yellow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.1)' },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.2)' },
        },
        'neon-pulse': {
          '0%, 100%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0ff, 0 0 82px #0ff, 0 0 92px #0ff, 0 0 102px #0ff, 0 0 151px #0ff' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #0ff, 0 0 73px #0ff, 0 0 82px #0ff, 0 0 94px #0ff, 0 0 140px #0ff' },
        },
        'neon-green': {
          '0%, 100%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #39ff14, 0 0 82px #39ff14, 0 0 92px #39ff14' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #39ff14, 0 0 73px #39ff14' },
        },
        'neon-orange': {
          '0%, 100%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff5e00, 0 0 82px #ff5e00' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #ff5e00, 0 0 73px #ff5e00' },
        },
        'neon-yellow': {
          '0%, 100%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff0, 0 0 82px #ff0' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #ff0, 0 0 73px #ff0' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 5px #39ff14, 0 0 20px #39ff14, 0 0 40px rgba(57, 255, 20, 0.5)',
        'neon-orange': '0 0 5px #ff5e00, 0 0 20px #ff5e00, 0 0 40px rgba(255, 94, 0, 0.5)',
        'neon-yellow': '0 0 5px #ff0, 0 0 20px #ff0, 0 0 40px rgba(255, 255, 0, 0.5)',
        'neon-cyan': '0 0 5px #0ff, 0 0 20px #0ff, 0 0 40px rgba(0, 255, 255, 0.5)',
        'neon-purple': '0 0 5px #9d00ff, 0 0 20px #9d00ff, 0 0 40px rgba(157, 0, 255, 0.5)',
        'cyber-card': '0 20px 40px -15px rgba(0,255,255,0.3)',
      },
    },
  },
  plugins: [],
}
