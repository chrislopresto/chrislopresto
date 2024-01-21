import React, { FC, ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { SystemStyleObject } from '../../../styled-system/types';

type BaseProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
};

const Body: FC<BaseProps> = ({ css: cssProp = {}, children }) => {
  const className = css({ p: '3' }, cssProp);
  return <div className={className}>{children}</div>;
};

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  css?: SystemStyleObject;
};

// eslint-disable-next-line react/prop-types
const Image: FC<ImageProps> = ({ css: cssProp = {}, alt = '', ...props }) => {
  const className = css(
    {
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      width: '100%',
      height: 'auto',
    },
    cssProp,
  );
  return <img alt={alt} className={className} {...props} />;
};

const CardComponent: FC<BaseProps> = ({ css: cssProp = {}, children }) => {
  const className = css(
    {
      boxShadow: '3px 3px 0px token(colors.border)',
      borderRadius: 'sm',
      bg: 'backgroundSecondary',
    },
    cssProp,
  );
  return <div className={className}>{children}</div>;
};

type CompositeComponent = typeof CardComponent & {
  Body: typeof Body;
  Image: typeof Image;
};

const Card = CardComponent as CompositeComponent;
Card.Body = Body;
Card.Image = Image;

Card.displayName = 'Card';
Card.Body.displayName = 'Card.Body';
Card.Image.displayName = 'Card.Image';

export { Card };
