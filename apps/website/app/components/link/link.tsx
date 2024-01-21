import { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { SystemStyleObject } from '../../../styled-system/types';
import { Slot } from '@radix-ui/react-slot';

type ComponentProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
  asChild?: boolean;
};

type LinkProps = ComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const activeCss = css.raw({
  textShadow: '2px 2px 10px token(colors.accent)',
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
  _focus: activeCss,
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
