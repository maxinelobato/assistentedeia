import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand100: '#7A38FF',
        brand200: '#6E5BFE',
        brand300: '#08A3F8',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-directional-shadows')],
}
export default config
