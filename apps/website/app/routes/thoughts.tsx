import type { MetaFunction } from '@remix-run/cloudflare';
import { Main } from '../layouts/main';
import React from 'react';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | Thoughts' }, { name: 'description', content: 'Chris LoPresto | Thoughts' }];
};

export default function Index() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}
