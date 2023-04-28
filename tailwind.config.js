/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        likeVideo: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        likeVideo: 'likeVideo 300ms linear'
      }
    }
  },
  plugins: []
}
