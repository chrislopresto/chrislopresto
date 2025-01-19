import { Heading } from '../heading/heading';
import { css, cva } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';

const customSize = cva({
  base: {
    '--clop-base-size': '31px',
    '--clop-responsive-multiplier': '1.5',
    fontSize: { base: 'var(--clop-base-size)', md: 'calc(var(--clop-base-size) * var(--clop-responsive-multiplier))' },
  },
});
const customCap = cva({
  base: {
    '--clop-base-size': '37px',
    fontSize: { base: 'var(--clop-base-size)', md: 'calc(var(--clop-base-size) * var(--clop-responsive-multiplier))' },
  },
});

type NameLedeProps = {
  css?: SystemStyleObject;
};

export function NameLede({ css: cssProp = {} }: NameLedeProps) {
  const className = css.raw(customSize.raw(), cssProp);
  return (
    <Heading as="h1" css={className}>
      <span className={customCap()}>C</span>hris <span className={customCap()}>L</span>o
      <span className={customCap()}>P</span>resto
    </Heading>
  );
}
