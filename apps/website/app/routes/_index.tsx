import type { MetaFunction } from '@remix-run/cloudflare';
import { Link as RemixLink } from '@remix-run/react';
import { Signature } from '../components/signature/signature';
import { Heading } from '../components/heading/heading';
import { css } from '../../styled-system/css';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiSunLine,
  RiMoonLine,
  RiRefreshLine,
} from '@remixicon/react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { useColorScheme } from '../styles/color-scheme';
import { Nav } from '../components/nav/nav';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

const ICON_SIZE = 16;

export default function Index() {
  const { toggle, setLight, setDark, matchSystem } = useColorScheme();

  return (
    <div>
      <section className={css({ vr: true })}>
        <Heading as="h1" onClick={() => toggle()} css={{ cursor: 'pointer', ml: '-1' }}>
          Chris L<span className={css({ fontSize: { base: '5xl', md: '7xl' } })}>o</span>Presto
        </Heading>
        <Nav />
      </section>
      <section className={css({ vr: true })}>
        <Heading variant="heading">Hello</Heading>
        <p className={css({ vr: true })}>
          Thanks for stopping by. Back in the day, websites used to greet readers conversationally. In that spirit,
          hello.
        </p>
        <p className={css({ vr: true })}>
          <RemixLink
            to="/about"
            className={css({
              color: 'teal.600',
              mb: '3',
              display: 'block',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              textDecorationStyle: 'dotted',
              _hover: {
                color: 'teal.800',
                textShadow: '0px 2px 4px magenta',
                textDecorationColor: 'magenta',
                textDecorationThickness: '1px',
              },
              _active: {
                color: 'teal.800',
                textShadow: '0px 2px 4px magenta',
                textDecorationColor: 'magenta',
                textDecorationThickness: '1px',
              },
              _focus: {
                color: 'teal.800',
                textShadow: '0px 2px 4px magenta',
                textDecorationColor: 'magenta',
                textDecorationThickness: '1px',
              },
            })}
          >
            Allow me to introduce myself.
          </RemixLink>
        </p>
      </section>
      <section className={css({ vr: true })}>
        <Heading variant="heading">Say hello</Heading>
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
          href="https://www.linkedin.com/in/chrislopresto/"
          className={css({ display: 'flex', mb: '1', textStyle: 'body' })}
        >
          <AccessibleIcon label="LinkedIn">
            <RiLinkedinBoxFill size={ICON_SIZE} className={css({ mr: '1' })} />
          </AccessibleIcon>
          chrislopresto
        </a>
      </section>
      <section className={css({ vr: true })}>
        <Heading variant="heading">Appearance</Heading>
        <AccessibleIcon label="Light theme">
          <RiSunLine
            size={ICON_SIZE}
            className={css({ cursor: 'pointer', mr: '1', display: 'inline' })}
            onClick={() => setLight()}
          />
        </AccessibleIcon>
        <AccessibleIcon label="Dark theme">
          <RiMoonLine
            size={ICON_SIZE}
            className={css({ cursor: 'pointer', mr: '1', display: 'inline' })}
            onClick={() => setDark()}
          />
        </AccessibleIcon>
        <AccessibleIcon label="Match system">
          <RiRefreshLine
            size={ICON_SIZE}
            className={css({ cursor: 'pointer', mr: '1', display: 'inline' })}
            onClick={() => matchSystem()}
          />
        </AccessibleIcon>
      </section>
      <section>
        <Signature css={{ color: 'teal.400' }} />
      </section>
    </div>
  );
}
