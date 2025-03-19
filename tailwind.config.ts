import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        border: 'var(--border)',
        'dark-gray': 'var(--dark-gray)',
        'dark-gray2': 'var(--dark-gray2)',
        'light-gray': 'var(--light-gray)',
        blue: 'var(--blue)',
      },
      fontFamily: {
        mont: ['var(--font-montserrat)', ...fontFamily.sans],
        playfair: ['var(--font-playfair-display)'],
      },
      fontSize: {
        '10': '0.625rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '65': '4.0625rem',
        '80': '5rem',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(30px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(-30px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        move: 'move 4s linear infinite',
      },
      boxShadow: {
        'card-game': '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
