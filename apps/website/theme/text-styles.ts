import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  title: {
    description: 'Zazzy title used for sci-fi-like effect',
    value: {
      fontFamily: 'marvinVisionsBig',
      fontWeight: 'bold',
      fontSize: { base: '6xl', md: '8xl' },
      lineHeight: 0.85,
    },
  },
  subtitle: {
    description: 'Zazzy subtitle used for sci-fi-like effect',
    value: {
      fontFamily: 'marvinVisionsBig',
      fontWeight: 'bold',
      fontSize: { base: '2xl', md: '4xl' },
      lineHeight: 0.85,
    },
  },
  heading: {
    description: 'Heading used for non-sci-fi-like delineation',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'bold',
      fontSize: 'lg',
      lineHeight: 'snug',
    },
  },
  subheading: {
    description: 'Subheading used for further non-sci-fi-like delineation',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'bold',
      fontSize: 'xs',
      lineHeight: 1.3,
    },
  },
  body: {
    description: 'Body copy',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: 'sm',
      lineHeight: 1.3,
    },
  },
  deemphasized: {
    description: 'Footnotes and legalese',
    value: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '2xs',
      lineHeight: 1.3,
    },
  },
});
