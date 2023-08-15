import daisyui from 'daisyui'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          neutral: '#fefefe',
        },
      },
      {
        dark: {
          neutral: '#0c0c0D',
        },
      },
    ],
  },
  theme: {
    fontFamily: {},
  },
  plugins: [daisyui],
}
