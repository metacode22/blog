import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    backgroundImage: {
      introduction: 'linear-gradient(rgb(0 0 0 / 0), white), url("/images/introduction-background.jpg")',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
