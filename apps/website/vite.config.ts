import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import pandacss from '@pandacss/dev/postcss';
import mdx from '@mdx-js/rollup';
const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: './workers/app.ts',
        }
      : undefined,
  },
  css: {
    postcss: {
      plugins: [pandacss, autoprefixer],
    },
  },
  ssr: {
    target: 'webworker',
    noExternal: true,
    resolve: {
      conditions: ['workerd', 'browser'],
    },
    optimizeDeps: {
      include: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom', 'react-dom/server', 'react-router'],
    },
  },
  plugins: [
    { enforce: 'pre', ...mdx() },
    cloudflareDevProxy({
      getLoadContext({ context }) {
        return { cloudflare: context.cloudflare };
      },
    }),
    !isStorybook && reactRouter(),
    tsconfigPaths(),
  ],
}));
