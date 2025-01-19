import { defineConfig } from '@pandacss/dev';
import { cssReset } from './theme/css-reset';
import pandaPreset from '@pandacss/preset-panda';
import { textStyles } from './theme/text-styles';

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
        transform(value, { token }) {
          if (!value) return {};
          return {
            marginBottom: token('spacing.2'),
            '@breakpoint sm': {
              marginBottom: token('spacing.3'),
            },
            '@breakpoint md': {
              marginBottom: token('spacing.4'),
            },
            '@breakpoint lg': {
              marginBottom: token('spacing.5'),
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

  presets: [pandaPreset, cssReset],
});
