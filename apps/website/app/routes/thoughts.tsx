import type { MetaFunction } from '@remix-run/cloudflare';
import { Outlet } from '@remix-run/react';
import { Heading } from '../components/heading/heading';
import { css } from '../../styled-system/css';
import { useColorScheme } from '../styles/color-scheme';
import { Nav } from '../components/nav/nav';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | Thoughts' }, { name: 'description', content: 'Chris LoPresto | Thoughts' }];
};

export default function Index() {
  const { toggle } = useColorScheme();

  return (
    <div>
      <section className={css({ vr: true })}>
        <Heading as="h1" onClick={() => toggle()} css={{ cursor: 'pointer' }}>
          Thoughts
        </Heading>
        <Nav />
      </section>
      <section className={css({ vr: true })}>
        <Outlet />
      </section>
    </div>
  );
}
