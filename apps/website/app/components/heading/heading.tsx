import type { ReactNode } from 'react';
import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';

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
      title: {
        textStyle: 'title',
        textShadow: { _light: '3px 3px 0px token(colors.teal.200)', _dark: '3px 3px 0px token(colors.teal.600)' },
      },
      subtitle: {
        textStyle: 'subtitle',
        textShadow: { _light: '3px 3px 0px token(colors.teal.200)', _dark: '3px 3px 0px token(colors.teal.600)' },
      },
      heading: {
        textStyle: 'heading',
        textDecoration: 'underline',
        // textDecorationStyle: 'wavy',
        textDecorationColor: 'teal.200',
      },
      subheading: {
        textStyle: 'subheading',
        textDecoration: 'underline',
        textDecorationStyle: 'double',
        textDecorationColor: 'teal.200',
      },
    },
  },
});

export function Heading({
  variant = 'title',
  css: cssProp = {},
  as: HeadingElement = 'h2',
  children,
  ...props
}: HeadingProps) {
  const className = css(headingCss.raw({ variant }), cssProp);
  return (
    <HeadingElement className={className} {...props}>
      {children}
    </HeadingElement>
  );
}
