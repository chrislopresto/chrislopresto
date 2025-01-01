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

const cardImageContainerCss = css({
  '--base': '#00ffff',
  '--bg-blend': 'multiply',
  '--blur': '0px',
  '--fg-blend': 'lighten',
  '--foreground': '#003333',
  '--opacity': '1',
  '--spacing': '0px',

  backgroundColor: 'var(--base)',
  overflow: 'hidden',
  padding: 'var(--spacing)',
  position: 'relative',
  borderTopRadius: 'sm',

  _before: {
    backgroundColor: 'var(--foreground)',
    bottom: 0,
    content: '""',
    height: '100%',
    left: 0,
    mixBlendMode: 'var(--fg-blend)',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 1,
  },
});

export const cardImageCss = cva({
  variants: {
    variant: {
      default: {},
      stylized: {
        filter: 'grayscale(100%) contrast(1) blur(var(--blur))',
        flex: '1 0 100%',
        height: '100%',
        maxWidth: '100%',
        mixBlendMode: 'var(--bg-blend)',
        objectFit: 'cover',
        opacity: 'var(--opacity)',
        position: 'relative',
        width: '100%',
      },
    },
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
