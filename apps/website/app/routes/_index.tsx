import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { Signature } from '../components/signature/signature';
import underConstruction from '../images/under-construction.gif';
import { css } from '../../styled-system/css';
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from '@remixicon/react';
import { token } from '../../styled-system/tokens';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

const ICON_SIZE = 16;

export default function Index() {
  return (
    <div className={css({ p: '2', minWidth: '320px' })}>
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
        <h1
          className={css({ textStyle: 'zazzTitle' })}
          style={{ textShadow: `3px 3px 0px ${token.var('colors.teal.200')}` }}
        >
          Chris L<span className={css({ fontSize: { base: '5xl', md: '7xl' } })}>o</span>Presto
        </h1>
        <p className={css({ fontSize: 'sm' })}>Engineering leader. Musician.</p>
      </section>
      <section className={css({ mb: '4' })}>
        <h2
          className={css({ textStyle: 'zazzSubtitle', mb: '2' })}
          style={{ textShadow: `3px 3px 0px ${token.var('colors.teal.200')}` }}
        >
          Hello
        </h2>
        <p className={css({ textStyle: 'body', mb: '2' })}>
          Thanks for stopping by. Back in the day, websites used to greet readers conversationally. In that spirit,
          hello.
        </p>
        <p className={css({ textStyle: 'body', mb: '2' })}>
          Also in that spirit, here's an ostensibly temporary indication that my site will soon have more content.
        </p>
        <img src={underConstruction} alt="This site is under construction" />
      </section>
      <section className={css({ mb: '4' })}>
        <h2
          className={css({ textStyle: 'zazzSubtitle', mb: '2' })}
          style={{ textShadow: `3px 3px 0px ${token.var('colors.teal.200')}` }}
        >
          Say hello
        </h2>
        <a href="https://twitter.com/chrislopresto" className={css({ display: 'flex', mb: '1', textStyle: 'body' })}>
          <AccessibleIcon label="Twitter X">
            <RiTwitterXFill size={ICON_SIZE} className={css({ mr: '1' })} />
          </AccessibleIcon>
          @chrislopresto
        </a>
        <a href="https://github.com/chrislopresto/" className={css({ display: 'flex', mb: '1', textStyle: 'body' })}>
          <AccessibleIcon label="GitHub">
            <RiGithubFill size={ICON_SIZE} className={css({ mr: '1' })} />
          </AccessibleIcon>
          @chrislopresto
        </a>
        <a
          href="https://www.linkdin.com/in/chrislopresto/"
          className={css({ display: 'flex', mb: '1', textStyle: 'body' })}
        >
          <AccessibleIcon label="LinkedIn">
            <RiLinkedinBoxFill size={ICON_SIZE} className={css({ mr: '1' })} />
          </AccessibleIcon>
          chrislopresto
        </a>
      </section>
      <section>
        <Signature css={{ color: 'teal.200' }} />
      </section>
    </div>
  );
}
