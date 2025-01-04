import { definePreset } from '@pandacss/dev';

// CSS reset based on https://piccalil.li/blog/a-more-modern-css-reset/
export const cssReset = definePreset({
  globalCss: {
    extend: {
      // Box sizing rules
      '*, *:before,  *:after,': { boxSizing: 'border-box' },

      html: {
        // Prevent font size inflation
        '-moz-text-size-adjust': 'none',
        '-webkit-text-size-adjust': 'none',
        textSizeAdjust: 'none',
      },

      // Remove default margin in favor of better control in authored CSS
      'body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd': {
        marginBlockEnd: 0,
      },

      // Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed
      'ul[role="list"], ol[role="list"]': {
        listStyle: 'none',
      },

      // Set core body defaults
      body: {
        minHeight: '100vh',
        lineHeight: 1.5,
      },

      // Set shorter line heights on headings and interactive elements
      'h1, h2, h3, h4, h5, h6, button, input, label': {
        lineHeight: 1.1,
      },

      // Balance text wrapping on headings
      'h1, h2, h3, h4, h5, h6': {
        textWrap: 'balance',
      },

      // A elements that don't have a class get default styles
      'a:not([class])': {
        textDecorationSkipInk: 'auto',
        color: 'currentColor',
      },

      // Make images easier to work with
      'img, picture': {
        maxWidth: '100%',
        display: 'block',
      },

      // Inherit fonts for inputs and buttons
      'input, button, textarea, select': {
        font: 'inherit',
      },

      // Make sure textareas without a rows attribute are not tiny
      'textarea:not([rows])': {
        minHeight: '10em',
      },

      // Anything that has been anchored to should have extra scroll margin
      ':target': {
        scrollMarginBlock: '5ex',
      },
    },
  },
  name: 'cssReset',
});
