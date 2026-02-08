import { COLOR_MODE_KEY, useColorMode } from './styles/color-mode';
import { css } from '../styled-system/css';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import stylesheet from './app.css?url';

import { Provider } from 'jotai';

export const links: Route.LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

function App() {
  const { colorMode } = useColorMode();
  return (
    <html lang="en" {...(colorMode ? { 'data-color-mode': colorMode } : {})}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const preferredColorMode = colorSchemeMediaQuery.matches ? 'dark' : 'light';
                const storedColorMode = JSON.parse(localStorage.getItem('${COLOR_MODE_KEY}') || '""');
                const resolvedColorMode = storedColorMode || preferredColorMode;

                document.documentElement.setAttribute('data-color-mode', resolvedColorMode);
              }
            `,
          }}
        />
      </head>
      <body className={css({ minWidth: '320px', maxWidth: '1000px', textStyle: 'body', bg: 'background' })}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function WrappedApp() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
