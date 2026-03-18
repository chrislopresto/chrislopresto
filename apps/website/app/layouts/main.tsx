import { lazy, Suspense } from 'react';
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
const MobileNav = lazy(() => import('../components/nav/mobile-nav').then((m) => ({ default: m.MobileNav })));
import { CommandPalette } from '../components/command-palette/command-palette';
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
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr 1fr' },
        gap: '4',
        rowGap: { base: '8', md: '4' },
      })}
    >
      <div>
        <p className={css({ vr: true })}>Thanks for swinging by.</p>
        <Signature variant="hyper" />
      </div>

      <div>
        <p className={css({ mb: '1', textStyle: 'subheading', textTransform: 'uppercase', opacity: 0.6 })}>Social</p>
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

      <div>
        <p className={css({ mb: '1', textStyle: 'subheading', textTransform: 'uppercase', opacity: 0.6 })}>
          Color Mode
        </p>
        <ToggleGroup
          value={[colorMode]}
          onValueChange={updateColorMode}
          className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}
        >
          <Toggle
            aria-label="Light mode"
            value="light"
            render={(props, state) => {
              const Icon = state.pressed ? RiSunFill : RiSunLine;
              return (
                <button
                  {...props}
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textStyle: 'body',
                    fontWeight: state.pressed ? 'bold' : 'normal',
                  })}
                >
                  <Icon size={ICON_SIZE} className={css({ mr: '1' })} />
                  Light
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
                <button
                  {...props}
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textStyle: 'body',
                    fontWeight: state.pressed ? 'bold' : 'normal',
                  })}
                >
                  <Icon size={ICON_SIZE} className={css({ mr: '1' })} />
                  Dark
                </button>
              );
            }}
          />
          <Toggle
            aria-label="Match system color mode"
            value="system"
            render={(props, state) => (
              <button
                {...props}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textStyle: 'body',
                  fontWeight: state.pressed ? 'bold' : 'normal',
                })}
              >
                <RiRefreshLine size={ICON_SIZE} className={css({ mr: '1' })} />
                System
              </button>
            )}
          />
        </ToggleGroup>
      </div>
    </div>
  );
}

export function Main() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', minHeight: '100dvh' })}>
      <CommandPalette />
      <section
        className={css({
          zIndex: '1',
          position: 'sticky',
          top: '0',
          bg: 'background',
          p: '2',
        })}
      >
        <div
          className={css({
            display: 'flex',
            gap: '8',
            alignItems: 'center',
            justifyContent: { base: 'space-between', md: 'flex-start' },
            maxWidth: '1000px',
            mx: 'auto',
          })}
        >
          <NavLink to="/">
            <NameLede css={{ display: 'inline' }} />
          </NavLink>
          <Nav css={{ display: { base: 'none', md: 'inline-flex' } }} />
          <Suspense>
            <MobileNav css={{ display: { base: 'inline-flex', md: 'none' } }} />
          </Suspense>
        </div>
      </section>
      <section className={css({ px: '2' })}></section>
      <section className={css({ p: '2', flex: '1', maxWidth: '1000px', mx: 'auto', width: '100%' })}>
        <Outlet />
      </section>
      <section
        className={css({
          mt: '8',
          bg: 'backgroundSecondary',
          borderTop: '1px solid',
          borderColor: 'border',
          width: '100vw',
          p: '4',
        })}
      >
        <div className={css({ maxWidth: '1000px', mx: 'auto' })}>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Main;
