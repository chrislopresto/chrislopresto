import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { Signature } from '../components/signature/signature';
import underConstruction from '../images/under-construction.gif';
import { css } from '../../styled-system/css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Link
        to="/about"
        className={css({
          color: 'teal.600',
          textDecoration: 'underline',
          _hover: { color: 'sky.600' },
          _active: { color: 'sky.600' },
          _focus: { color: 'sky.600' },
        })}
      >
        About
      </Link>
      <section className={css({ mb: '4' })}>
        <h1 className={css({ fontWeight: 'bold', fontSize: '8xl' })}>Hi there</h1>
        <img src={underConstruction} alt="This site is under construction" />
      </section>
      <Signature />
    </div>
  );
}
