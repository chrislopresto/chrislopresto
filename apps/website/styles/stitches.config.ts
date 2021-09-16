import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/core';
import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
  },
  media: {
    bp1: '(min-width: 575px)',
    bp2: '(min-width: 750px)',
    bp3: '(min-width: 1000px)',
    bp4: '(min-width: 1200px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});

export type CSS = Stitches.CSS<typeof config>;
