import React, { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { SystemStyleObject } from '../../../styled-system/types';
import { Slot } from '@radix-ui/react-slot';

type ComponentProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
  asChild?: boolean;
};

type LinkProps = ComponentProps & React.LinkHTMLAttributes<HTMLAnchorElement>;

const activeCss = css.raw({
  color: 'teal.800',
  textShadow: '2px 2px 10px magenta',
  textDecorationColor: 'magenta',
  textDecorationThickness: '1px',
});

export const linkCss = css.raw({
  '&.active': { fontWeight: 'bold', textShadow: '2px 2px 0px token(colors.teal.200)' },
  color: 'teal.600',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  textDecorationStyle: 'dotted',
  _hover: activeCss,
  _active: activeCss,
  _focus: activeCss,
});

export const Link: React.FC<LinkProps> = ({ css: cssProp = {}, asChild = false, children, ...props }) => {
  const className = css(linkCss, cssProp);
  const LinkElement = asChild ? Slot : 'a';
  return (
    <LinkElement className={className} {...props}>
      {children}
    </LinkElement>
  );
};