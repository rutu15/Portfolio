import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 120px)',

        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 80px)',

        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 60px )',
      },
    },
  },
  plugins: [],
};
export default config;
