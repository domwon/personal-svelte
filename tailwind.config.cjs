/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    'link-primary', 'link-secondary', 'link-warning', 'link-accent',
    'opacity-0', 'transform', 'translate-y-5', 'transition-opacity', 'duration-1000'
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        wigglePulse: 'wigglePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wigglePulse: {
          '0%, 100%': { transform: 'rotate(-3deg)', opacity: 1 },
          '50%': { transform: 'rotate(3deg)', opacity: 0.75 },

        }
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#ec4899",
          secondary: "#ff5b6a",
          accent: "#ff863a",
          warning: "#eab308",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

