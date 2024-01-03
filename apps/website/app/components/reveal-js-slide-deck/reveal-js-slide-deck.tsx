import React from 'react';
import { css } from '../../../styled-system/css';

const DEFAULT_HEIGHT = '100vh';
const DEFAULT_WIDTH = '100vw';
const HOSTING_PROVIDER_BASE_URL = 'https://s3-us-west-2.amazonaws.com';

type Slug = 'living-style-guide-driven-development' | 'betterment-rebranding-bonanza';

type ComponentProps = {
  title: string;
  height?: string;
  width?: string;
  showControls?: boolean;
  slug: Slug;
};

export const RevealJsSlideDeck: React.FC<ComponentProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  showControls = true,
  slug,
  title,
}) => {
  let h = '0';
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    h = urlParams.get('h') || h;
  }
  const src = `${HOSTING_PROVIDER_BASE_URL}/${slug}-index/index.html#/?ph=${height}&pw=${width}&c=${showControls}&h=${h}`;
  const style = {
    height,
    width,
  };

  return (
    <iframe
      title={title}
      className={css({ display: 'block', border: 0 })}
      style={style}
      src={src}
      width={width}
      height={height}
    />
  );
};
