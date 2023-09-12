import daisyui from 'daisyui'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          neutral: '#FEF0EB',
          '.text-readable': { color: '#59453e' },
          '.bg-inactive': { 'background-color': '#fefefe' },
          '.bg-scroll': { 'background-color': '#59453e' },

          'base-content': '#59453e',
          'base-100': '#2e2522',

          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      {
        dark: {
          neutral: '#2e2522',
          '.text-readable': { color: '#fefefe' },
          '.bg-inactive': { 'background-color': '#1c1412' },
          '.bg-scroll': { 'background-color': '#fefefe' },

          'base-content': '#fefefe',
          'base-100': '#f2eae6',

          info: '#4c7cdc',
          success: '#27dd73',
          warning: '#f7a94b',
          error: '#E4725E',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      header: ['Comfortaa', 'sans-serif'],
      subtitle: ['Quicksand', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      keyframes: {
        expand: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '80%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shrink: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        popInOut: {
          '0%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'shoot-out': 'expand 0.5s ease-out forwards',
        'shoot-in': 'shrink 0.2s ease-in forwards',
        'pop-in-out': 'popInOut 0.1s',
      },
    },
  },
  plugins: [daisyui],
}
