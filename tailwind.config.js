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
          '.bg-inactive': { 'background-color': '#1c1412' },

          'base-content': '#59453e',
          'base-100': '#2e2522',
        },
      },
      {
        dark: {
          neutral: '#1c1614',
          '.text-readable': { color: '#fefefe' },
          '.bg-inactive': { 'background-color': '#1c1412' },

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
        slide: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0)' },
        },
        popInOut: {
          '0%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInOut: {
          '0%': { opacity: '1' },
          '50%': { opactiy: '0' },
          '100%': { opacity: '1' },
        },
        shadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.9' },
        },
        shadeOut: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'shoot-out': 'expand 0.5s ease-out forwards',
        'shoot-in': 'shrink 0.2s ease-in forwards',
        'pop-out': 'expand 0.4s ease-out forwards',
        'pop-in': 'shrink 0.2s ease-in forwards',
        'slide-in': 'slide 0.5s ease-in-out forwards',
        'pop-in-out': 'popInOut 0.1s',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'fade-in-out': 'fadeInOut 0.5s ease-in-out',
        'shade-in': 'shadeIn 0.5s ease-in-out forwards',
        'shade-out': 'shadeOut 0.5s ease-in-out',
        'slide-in-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-out-down': 'slideDown 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [daisyui],
}
