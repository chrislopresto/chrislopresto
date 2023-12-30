import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { Signature } from '../components/signature/signature';
import underConstruction from '../images/under-construction.gif';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Link to="/about">About</Link>
      <section>
        <h1>Hi there</h1>
        <img src={underConstruction} alt="This site is under construction" />
      </section>
      <Signature />
    </div>
  );
}
