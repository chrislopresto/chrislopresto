/* eslint-disable import/no-unresolved */
/* eslint-disable import/namespace */
import React, { ReactNode } from 'react';
import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { SystemStyleObject } from '../../../styled-system/types';

type ComponentProps = {
  css?: SystemStyleObject;
  children?: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
type HeadingVariants = RecipeVariantProps<typeof headingCss>;
type HeadingProps = ComponentProps & HeadingVariants & React.HTMLAttributes<HTMLHeadingElement>;

export const headingCss = cva({
  variants: {
    variant: {
      title: { textStyle: 'title', textShadow: '3px 3px 0px token(colors.teal.200)' },
      subtitle: { textStyle: 'subtitle', textShadow: '3px 3px 0px token(colors.teal.200)' },
      heading: { textStyle: 'heading' },
      subheading: { textStyle: 'subheading' },
    },
  },
});

export const Heading: React.FC<HeadingProps> = ({
  variant = 'title',
  css: cssProp = {},
  as: HeadingElement = 'h2',
  children,
  ...props
}) => {
  const className = css(headingCss.raw({ variant }), cssProp);
  return (
    <HeadingElement className={className} {...props}>
      {children}
    </HeadingElement>
  );
};
