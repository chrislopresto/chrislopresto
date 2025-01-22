import { COLOR_SCHEME_KEY, useColorScheme } from './styles/color-scheme';
import { css } from '../styled-system/css';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
// eslint-disable-next-line import/no-unresolved
import stylesheet from './app.css?url';

import { Provider } from 'jotai';

export const links: Route.LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

function App() {
  const { colorScheme } = useColorScheme();
  return (
    <html lang="en" data-color-mode={colorScheme}>
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
                const preferredColorScheme = colorSchemeMediaQuery.matches ? 'dark' : 'light';
                const storedColorScheme = JSON.parse(localStorage.getItem('${COLOR_SCHEME_KEY}') || '""');
                const resolvedColorScheme = storedColorScheme || preferredColorScheme;

                document.documentElement.setAttribute('data-color-mode', resolvedColorScheme);
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
