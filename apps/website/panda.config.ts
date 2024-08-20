import { defineConfig, defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  title: {
    description: 'Zazzy title used for sci-fi-like effect',
    value: {
      fontFamily: 'marvinVisionsBig',
      fontWeight: 'bold',
      fontSize: { base: '6xl', md: '8xl' },
      lineHeight: 0.85,
    },
  },
  subtitle: {
    description: 'Zazzy subtitle used for sci-fi-like effect',
    value: {
      fontFamily: 'marvinVisionsBig',
      fontWeight: 'bold',
      fontSize: { base: '2xl', md: '4xl' },
      lineHeight: 0.85,
    },
  },
  heading: {
    description: 'Heading used for non-sci-fi-like delineation',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'bold',
      fontSize: 'lg',
      lineHeight: 'snug',
    },
  },
  subheading: {
    description: 'Subheading used for further non-sci-fi-like delineation',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'bold',
      fontSize: 'xs',
      lineHeight: 1.3,
    },
  },
  body: {
    description: 'Body copy',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: 'sm',
      lineHeight: 1.3,
    },
  },
});

export default defineConfig({
  outExtension: 'js',
  outdir: 'styled-system',
  jsxFramework: 'react',

  include: ['./app/**/*.{ts,tsx}'],
  exclude: [],

  prefix: 'clop',
  preflight: true,

  conditions: {
    extend: {
      light: '[data-color-mode=light] &',
      dark: '[data-color-mode=dark] &',
    },
  },

  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          marvinVisionsBig: { value: 'Marvin Visions Big, sans-serif' },
        },
      },
      semanticTokens: {
        colors: {
          default: { value: { base: '{colors.gray.800}', _light: '{colors.gray.800}', _dark: '{colors.gray.100}' } },
          background: { value: { base: '{colors.gray.100}', _light: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
          backgroundSecondary: {
            value: { base: '{colors.gray.200}', _light: '{colors.gray.200}', _dark: '{colors.gray.700}' },
          },
          border: { value: { base: '{colors.gray.300}', _light: '{colors.gray.300}', _dark: '{colors.gray.600}' } },
          accent: { value: { base: '#ff00ff', _light: '#ff00ff', _dark: '#ff00ff' } },
          accentSecondary: {
            value: { base: '{colors.teal.200}', _light: '{colors.teal.200}', _dark: '{colors.teal.800}' },
          },
          link: { value: { base: '{colors.teal.600}', _light: '{colors.teal.600}', _dark: '{colors.teal.300}' } },
        },
      },
    },
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
            marginBottom: 'token(spacing.2)',
            '@breakpoint sm': {
              marginBottom: 'token(spacing.3)',
            },
            '@breakpoint md': {
              marginBottom: 'token(spacing.4)',
            },
            '@breakpoint lg': {
              marginBottom: 'token(spacing.5)',
            },
          };
        },
      },
    },
  },

  globalCss: {
    body: {
      color: 'default',
    },
  },
});
