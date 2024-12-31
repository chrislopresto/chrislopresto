import React from 'react';
import type { FC, ReactNode } from 'react';
import { css, cva } from '../../../styled-system/css';
import type { RecipeVariantProps, SystemStyleObject } from '../../../styled-system/types';

type BaseProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
};

const Body: FC<BaseProps> = ({ css: cssProp = {}, children }) => {
  const className = css({ p: '4' }, cssProp);
  return <div className={className}>{children}</div>;
};

type CardImageVariants = RecipeVariantProps<typeof cardImageCss>;
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  CardImageVariants & {
    css?: SystemStyleObject;
  };

export const cardImageCss = cva({
  variants: {
    variant: {
      default: {},
      stylized: {
        filter: 'grayscale(40%) contrast(130%) brightness(110%)',
        // mixBlendMode: 'none',
      },
    },
  },
});

const cardImageContainerCss = css({
  display: 'inline-block',
  position: 'relative',
  lineHeight: 0,
  background: 'white',

  _after: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    content: '""',
    background: 'rgba(0, 255, 255, 0.2)',
  },
});

const Image: FC<ImageProps> = ({ css: cssProp = {}, variant = 'default', alt = '', ...props }) => {
  const className = css(
    cardImageCss.raw({ variant }),
    {
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      width: '100%',
      height: 'auto',
    },
    cssProp,
  );
  return (
    <div className={variant === 'stylized' ? cardImageContainerCss : ''}>
      <img alt={alt} className={className} {...props} />
    </div>
  );
};

const CardComponent: FC<BaseProps> = ({ css: cssProp = {}, children }) => {
  const className = css(
    {
      boxShadow: '4px 4px 0 token(colors.teal.200)',
      border: 'solid 2px token(colors.indigo.400)',
      borderRadius: 'md',
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
