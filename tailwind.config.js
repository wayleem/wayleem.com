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

          'base-content': '#59453e',
          'base-100': '#2e2522',
        },
      },
      {
        dark: {
          neutral: '#2e2522',
          '.text-readable': { color: '#fefefe' },

          'base-content': '#fefefe',
          'base-100': '#f2eae6',
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
  },
  plugins: [daisyui],
}
