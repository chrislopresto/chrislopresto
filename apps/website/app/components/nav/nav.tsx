import { NavLink } from 'react-router';
import { Link } from '../link/link';
import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';
import type { SystemStyleObject } from '../../../styled-system/types';

type NavProps = {
  css?: SystemStyleObject;
};

export function Nav({ css: cssProp = {} }: NavProps) {
  const className = css(hstack.raw({ gap: 3 }), cssProp);
  return (
    <div className={className}>
      <Link asChild>
        <NavLink to="/">Home</NavLink>
      </Link>
      <Link asChild>
        <NavLink to="/thoughts">Thoughts</NavLink>
      </Link>
    </div>
  );
}
