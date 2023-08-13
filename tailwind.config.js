import daisyui from 'daisyui'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {},
      },
      {
        dark: {},
      },
    ],
  },
  theme: {
    fontFamily: {},
  },
  plugins: [daisyui],
}
