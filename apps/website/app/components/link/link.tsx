import type { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';
import { Slot } from '@radix-ui/react-slot';

type ComponentProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
  asChild?: boolean;
};

type LinkProps = ComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const activeCss = css.raw({
  _light: {
    textShadow: '1px 1px 3px token(colors.accent/50)',
  },
  _dark: {
    textShadow: '1px 1px 2px token(colors.accent/90)',
  },
  textDecorationColor: 'accent',
  textDecorationThickness: '1px',
});

export const linkCss = css.raw({
  '&.active': { fontWeight: 'bold', textShadow: '2px 2px 0px token(colors.accentSecondary)' },
  color: 'link',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  textDecorationStyle: 'dotted',
  _hover: activeCss,
  _active: activeCss,
  _focus: {
    ...activeCss,
    outlineColor: 'transparent',
    _light: {
      boxShadow: '0 0 1px 1px token(colors.accent/50)',
      borderRadius: '2px',
    },
    _dark: {
      boxShadow: '0 0 1px 2.5px white',
      borderRadius: '1px',
    },
  },
});

export function Link({ css: cssProp = {}, asChild = false, children, ...props }: LinkProps) {
  const className = css(linkCss, cssProp);
  const LinkElement = asChild ? Slot : 'a';
  return (
    <LinkElement className={className} {...props}>
      {children}
    </LinkElement>
  );
}
