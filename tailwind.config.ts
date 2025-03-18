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
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
