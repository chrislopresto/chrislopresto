import { NavLink } from 'react-router';
import { activeCss, Link } from '../link/link';
import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';
import type { SystemStyleObject } from '../../../styled-system/types';

type NavProps = {
  css?: SystemStyleObject;
};

export function Nav({ css: cssProp = {} }: NavProps) {
  const className = css(hstack.raw({ gap: 4, textTransform: 'uppercase' }), cssProp);
  return (
    <div className={className}>
      <Link
        render={
          <NavLink
            to="/"
            className={css({
              textDecoration: 'none',
              textUnderlineOffset: '14px',
              '&.active': activeCss,
              _hover: { textDecoration: 'underline' },
              _active: { textDecoration: 'underline' },
              _focus: { textDecoration: 'underline' },
            })}
          >
            Home
          </NavLink>
        }
      />
      <Link
        render={
          <NavLink
            to="/good-things"
            className={css({
              textDecoration: 'none',
              textUnderlineOffset: '14px',
              '&.active': activeCss,
              _hover: { textDecoration: 'underline' },
              _active: { textDecoration: 'underline' },
              _focus: { textDecoration: 'underline' },
            })}
          >
            Good Things
          </NavLink>
        }
      />
      <Link
        render={
          <NavLink
            to="/thoughts"
            className={css({
              textDecoration: 'none',
              textUnderlineOffset: '14px',
              '&.active': activeCss,
              _hover: { textDecoration: 'underline' },
              _active: { textDecoration: 'underline' },
              _focus: { textDecoration: 'underline' },
            })}
          >
            Thoughts
          </NavLink>
        }
      />
    </div>
  );
}
