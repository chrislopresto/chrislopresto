import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginStorybook from 'eslint-plugin-storybook';
import type { Linter } from 'eslint';

const ignores = ['public/*', 'build/*', 'styled-system/*', '.react-router/*', 'chromatic-artifacts/*'];

const filesTsAndTsx = ['app/**/*.{ts,tsx}'];
const filesTsxOnly = ['app/**/*.tsx'];
const filesTestsOnly = ['app/**/*.test.{ts,tsx}'];
const filesStories = ['app/**/*.stories.{ts,tsx}'];
const filesCjs = ['**/*.cjs'];

const customConfigTs: Linter.Config[] = [
  ...eslintTs.configs.recommended.map((config) => ({
    ...config,
    files: filesTsAndTsx,
    plugins: {
      react: pluginReact,
    },
  } as Linter.Config)),
  ...eslintTs.configs.stylistic.map((config) => ({
    ...config,
    files: filesTsAndTsx,
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  } as Linter.Config)),
];

const customConfigReact: Linter.Config = {
  files: filesTsAndTsx,
  ...pluginReact.configs.flat.recommended,
  ...pluginReact.configs.flat['jsx-runtime'],
};

const customConfigReactHooks: Linter.Config = {
  files: filesTsAndTsx,
  plugins: {
    'react-hooks': pluginReactHooks,
  },
  rules: pluginReactHooks.configs.recommended.rules,
};

const customConfigImport: Linter.Config = {
  ...pluginImport.flatConfigs.recommended,
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};

const customConfigTestingLibrary: Linter.Config = {
  files: filesTestsOnly,
  ...pluginTestingLibrary.configs['flat/react'],
  rules: {
    'testing-library/await-async-queries': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
  },
};

const customConfigCjs: Linter.Config = {
  files: filesCjs,
  languageOptions: {
    sourceType: 'commonjs',
    globals: {
      ...globals.node,
    },
  },
};

const customConfigJsxA11y: Linter.Config = {
  files: filesTsxOnly,
  ...pluginJsxA11y.flatConfigs.recommended,
  languageOptions: {
    ...pluginJsxA11y.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
};

const customConfigStorybook: Linter.Config[] = [
  ...pluginStorybook.configs['flat/recommended'],
  {
    files: filesStories,
    rules: {
      'storybook/hierarchy-separator': 'error',
    },
  },
];

export default [
  { ignores },
  eslintJs.configs.recommended,
  customConfigImport,
  customConfigReact,
  customConfigReactHooks,
  customConfigTestingLibrary,
  customConfigCjs,
  customConfigJsxA11y,
  ...customConfigStorybook,
  ...customConfigTs,
];
