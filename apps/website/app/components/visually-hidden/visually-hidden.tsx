import { css } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';
import { useEffect, useState } from 'react';

type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement> & {
  css?: SystemStyleObject;
};

// https://github.com/radix-ui/primitives/blob/main/packages/react/visually-hidden/src/visually-hidden.tsx
const visuallyHiddenCss = css({
  '&:not(:focus):not(:active)': {
    position: 'absolute',
    border: '0',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)' /* Legacy property for Internet Explorer */,
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  },
});

// https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
export const VisuallyHidden = ({ children, ...delegated }: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Alt') {
        setForceShow(true);
      }
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
      if (ev.key === 'Alt') {
        setForceShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (forceShow) {
    return <span className={css({ textStyle: 'deemphasized', mx: '1' })}>{children}</span>;
  }

  return (
    <span className={visuallyHiddenCss} {...delegated}>
      {children}
    </span>
  );
};
