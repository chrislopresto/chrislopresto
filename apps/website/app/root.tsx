import type { LinksFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { useAtomValue } from 'jotai';
import styles from './index.css';
import { colorSchemeAtom, useColorScheme } from './styles/color-scheme';
import { css } from '../styled-system/css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  const [colorScheme] = useColorScheme();
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
        <LiveReload />
      </body>
    </html>
  );
}
