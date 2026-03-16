import { useState } from 'react';
import { NavLink } from 'react-router';
import { Drawer } from '@base-ui/react/drawer';
import { RiMenuLine, RiCloseLine } from '@remixicon/react';
import { css } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';
import { pages, colorModes, socials } from '../command-palette/command-palette-items';
import { useColorMode } from '../../styles/color-mode';
import { NameLede } from '../name-lede/name-lede';

const ICON_SIZE = 16;

const triggerStyle = css({
  bg: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'default',
  p: '1',
  display: 'flex',
  alignItems: 'center',
});

const backdropStyle = css({
  position: 'fixed',
  inset: 0,
  bg: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
});

const popupStyle = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: { base: '100vw', sm: '300px' },
  bg: 'background',
  zIndex: 101,
  overflowY: 'auto',
});

const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '2',
});

const sectionHeadingStyle = css({
  textStyle: 'subheading',
  color: 'default',
  opacity: 0.6,
  textTransform: 'uppercase',
  px: '2',
  py: '1',
  mt: '4',
});

const linkStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  px: '2',
  py: '2',
  borderRadius: 'md',
  cursor: 'pointer',
  textStyle: 'body',
  color: 'default',
  textDecoration: 'none',
  _hover: { bg: 'backgroundSecondary' },
});

const nestedLinkStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  pl: '6',
  pr: '2',
  py: '2',
  borderRadius: 'md',
  cursor: 'pointer',
  textStyle: 'body',
  color: 'default',
  textDecoration: 'none',
  _hover: { bg: 'backgroundSecondary' },
});

const buttonStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  px: '2',
  py: '2',
  borderRadius: 'md',
  cursor: 'pointer',
  textStyle: 'body',
  color: 'default',
  width: '100%',
  bg: 'transparent',
  border: 'none',
  textAlign: 'left',
  _hover: { bg: 'backgroundSecondary' },
});

function pathDepth(path: string) {
  return path.replace(/\/$/, '').split('/').length - 1;
}

const topLevelPages = pages.filter((p) => pathDepth(p.path) <= 1);

const nestedPagesByParent = new Map<string, typeof pages>();
for (const page of pages) {
  if (pathDepth(page.path) > 1) {
    const parentPath = '/' + page.path.split('/')[1];
    const siblings = nestedPagesByParent.get(parentPath) ?? [];
    siblings.push(page);
    nestedPagesByParent.set(parentPath, siblings);
  }
}

type MobileNavProps = {
  css?: SystemStyleObject;
  defaultOpen?: boolean;
};

export function MobileNav({ css: cssProp = {}, defaultOpen = false }: MobileNavProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { setLight, setDark, matchSystem } = useColorMode();

  return (
    <div className={css(cssProp)}>
      <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="right">
        <Drawer.Trigger className={triggerStyle} aria-label="Open navigation menu">
          <RiMenuLine size={24} />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={backdropStyle} />
          <Drawer.Popup className={popupStyle}>
            <div className={headerStyle}>
              <NameLede css={{ display: 'inline', top: '-0.5px', position: 'relative' }} />
              <Drawer.Close className={triggerStyle} aria-label="Close navigation menu">
                <RiCloseLine size={24} />
              </Drawer.Close>
            </div>

            <nav className={css({ px: '2' })}>
              <div className={sectionHeadingStyle}>Pages</div>
              {topLevelPages.map((page) => {
                const children = nestedPagesByParent.get(page.path);
                return (
                  <div key={page.path}>
                    {page.external ? (
                      <a href={page.path} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                        <page.icon size={ICON_SIZE} />
                        {page.label}
                      </a>
                    ) : (
                      <NavLink to={page.path} className={linkStyle} onClick={() => setOpen(false)}>
                        <page.icon size={ICON_SIZE} />
                        {page.label}
                      </NavLink>
                    )}
                    {children?.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={nestedLinkStyle}
                        onClick={() => setOpen(false)}
                      >
                        <child.icon size={ICON_SIZE} />
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                );
              })}

              <div className={sectionHeadingStyle}>Color Mode</div>
              {colorModes.map((mode) => (
                <button
                  key={mode.value}
                  className={buttonStyle}
                  onClick={() => {
                    if (mode.value === 'light') setLight();
                    if (mode.value === 'dark') setDark();
                    if (mode.value === 'system') matchSystem();
                    setOpen(false);
                  }}
                >
                  <mode.icon size={ICON_SIZE} />
                  {mode.label}
                </button>
              ))}

              <div className={sectionHeadingStyle}>Social</div>
              {socials.map((social) => (
                <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                  <social.icon size={ICON_SIZE} />
                  {social.label}
                </a>
              ))}
            </nav>
          </Drawer.Popup>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
