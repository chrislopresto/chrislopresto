import type { MetaFunction } from 'react-router';
import { Signature } from '../components/signature/signature';
import { css } from '../../styled-system/css';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiSunFill,
  RiSunLine,
  RiMoonFill,
  RiMoonLine,
  RiRefreshLine,
} from '@remixicon/react';
import { useColorMode } from '../styles/color-mode';
import { Nav } from '../components/nav/nav';
import { NavLink, Outlet } from 'react-router';
import { NameLede } from '../components/name-lede/name-lede';
import { VisuallyHidden } from '../components/visually-hidden/visually-hidden';
import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

const ICON_SIZE = 16;

function Footer() {
  const { setLight, setDark, matchSystem, colorMode } = useColorMode();
  const updateColorMode = (groupValue: Array<'light' | 'dark' | 'system'>) => {
    const value = groupValue[0];
    if (value === 'light') setLight();
    if (value === 'dark') setDark();
    if (value === 'system') matchSystem();
  };

  return (
    <>
      <div className={css({ vr: true })}></div>
      <section>
        <div className={css({ vr: true })}>
          <Signature variant="hyper" />
        </div>

        <div className={css({ vr: true })}>
          <a href="https://twitter.com/chrislopresto" className={css({ display: 'flex', mb: '1', textStyle: 'body' })}>
            <RiTwitterXFill size={ICON_SIZE} className={css({ mr: '1' })} />
            <VisuallyHidden>Twitter X</VisuallyHidden>
            @chrislopresto
          </a>
          <a href="https://github.com/chrislopresto/" className={css({ display: 'flex', mb: '1', textStyle: 'body' })}>
            <RiGithubFill size={ICON_SIZE} className={css({ mr: '1' })} />
            <VisuallyHidden>GitHub</VisuallyHidden>
            @chrislopresto
          </a>
          <a
            href="https://www.linkedin.com/in/chrislopresto/"
            className={css({ display: 'flex', mb: '1', textStyle: 'body' })}
          >
            <RiLinkedinBoxFill size={ICON_SIZE} className={css({ mr: '1' })} />
            <VisuallyHidden>LinkedIn</VisuallyHidden>
            chrislopresto
          </a>
        </div>
        <ToggleGroup value={[colorMode]} onValueChange={updateColorMode}>
          <Toggle
            aria-label="Light mode"
            value="light"
            render={(props, state) => {
              const Icon = state.pressed ? RiSunFill : RiSunLine;
              return (
                <button {...props}>
                  <Icon size={ICON_SIZE} className={css({ cursor: 'pointer', mr: '1', display: 'inline' })} />
                </button>
              );
            }}
          />
          <Toggle
            aria-label="Dark mode"
            value="dark"
            render={(props, state) => {
              const Icon = state.pressed ? RiMoonFill : RiMoonLine;
              return (
                <button {...props}>
                  <Icon size={ICON_SIZE} className={css({ cursor: 'pointer', mr: '1', display: 'inline' })} />
                </button>
              );
            }}
          />
          <Toggle aria-label="Match system color mode" value="system">
            <RiRefreshLine size={ICON_SIZE} className={css({ cursor: 'pointer', mr: '1', display: 'inline' })} />
          </Toggle>
        </ToggleGroup>
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
