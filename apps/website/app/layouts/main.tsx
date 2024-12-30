import type { MetaFunction } from 'react-router';
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
import { NavLink, Outlet } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

const ICON_SIZE = 16;

function Header() {
  return (
    <section className={css({ vr: true })}>
      <NavLink to="/">
        <Heading as="h1">
          Chris L<span className={css({ fontSize: { base: '5xl', md: '7xl' } })}>o</span>Presto
        </Heading>
      </NavLink>
      <Nav />
    </section>
  );
}

function Footer() {
  const { setLight, setDark, matchSystem } = useColorScheme();

  return (
    <>
      <div className={css({ vr: true })}></div>
      <section>
        <div className={css({ vr: true })}>
          <Signature variant="hyper" />
        </div>

        <div className={css({ vr: true })}>
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
        </div>

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
    </>
  );
}

export function Main() {
  return (
    <div>
      <Header />
      <section className={css({ vr: true })}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default Main;
