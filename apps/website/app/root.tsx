import { useColorScheme } from './styles/color-scheme';
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        data-color-mode={colorScheme}
        className={css({ p: '2', minWidth: '320px', maxWidth: '1000px', textStyle: 'body', bg: 'background' })}
      >
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
