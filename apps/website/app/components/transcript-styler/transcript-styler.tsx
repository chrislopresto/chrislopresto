import { css } from '../../../styled-system/css';
import type { SystemStyleObject } from '../../../styled-system/types';
import React from 'react';

type TranscriptStylerProps = {
  css?: SystemStyleObject;
  children?: React.ReactNode;
};

export const transcriptStylerCss = css.raw({
  '& h1': {
    vr: true,
    textStyle: 'subtitle',
    textShadow: { _light: '3px 3px 0px token(colors.teal.200)', _dark: '3px 3px 0px token(colors.teal.600)' },
  },
  '& h2': {
    vr: true,
    textStyle: 'heading',
  },
  '& p': { vr: true },
  '& img': {
    borderRadius: 'md',
    boxShadow: '4px 4px 0 token(colors.teal.200)',
    border: 'solid 2px token(colors.indigo.400)',
    mb: '3',
  },
});

export function TranscriptStyler({ css: cssProp = {}, children }: TranscriptStylerProps) {
  const className = css(transcriptStylerCss, cssProp);
  return <div className={className}>{children}</div>;
}
