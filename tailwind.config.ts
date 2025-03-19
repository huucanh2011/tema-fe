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
      },
      fontFamily: {
        mont: ['var(--font-montserrat)', ...fontFamily.sans],
        playfair: ['var(--font-playfair-display)'],
      },
      fontSize: {
        '10': '0.625rem',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(50px)' },
          '50%': { transform: 'translateY(50px)' },
          '75%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        move: 'move 3s linear infinite',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
