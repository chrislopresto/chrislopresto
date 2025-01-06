import type { Preview, Decorator } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import './storybook-preview.css';
import '../app/app.css';
import '../app/fonts';
import { storybookAddonThemes as themes } from './color-modes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators: Decorator[] = [
  withThemeByDataAttribute({
    themes,
    defaultTheme: 'light',
    attributeName: 'data-color-mode',
  }),
];
