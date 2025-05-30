import type { MetaFunction } from 'react-router';
import { Signature } from '../components/signature/signature';
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
import { NameLede } from '../components/name-lede/name-lede';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

const ICON_SIZE = 16;

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
    <>
      <section
        className={css({
          zIndex: '1',
          position: 'sticky',
          top: '0',
          bg: 'background',
          p: '2',
        })}
      >
        <div className={css({ display: 'flex', gap: '8', alignItems: 'center' })}>
          <NavLink to="/">
            <NameLede css={{ display: 'inline' }} />
          </NavLink>
          <Nav css={{ display: 'inline-flex' }} />
        </div>
      </section>
      <section className={css({ px: '2' })}></section>
      <section className={css({ p: '2' })}>
        <Outlet />
      </section>
      <section className={css({ p: '2' })}>
        <Footer />
      </section>
    </>
  );
}

export default Main;
