import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: ['./app/routes/**/*.{ts,tsx,js,jsx}', './app/components/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  utilities: {
    extend: {
      truncate: {
        className: 'truncate',
        values: { type: 'boolean' },
        transform(value) {
          if (!value) return {};
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        },
      },
      verticalRhythm: {
        className: 'verticalRhythm',
        shorthand: 'vr',
        values: { type: 'boolean' },
        transform(value) {
          if (!value) return {};
          return {
            '@breakpoint sm': {
              marginBottom: 'token(spacing.1)',
            },
            '@breakpoint md': {
              marginBottom: 'token(spacing.3)',
            },
            '@breakpoint lg': {
              marginBottom: 'token(spacing.5)',
            },
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
