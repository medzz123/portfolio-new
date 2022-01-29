import { createStitches } from '@stitches/react';

import { breakpoints } from './breakpoints';
import { fonts, fontSizes, fontWeights } from './font';
import { dark, light } from './palette';
import { sizes } from './sizes';
import { stitchesUtils } from './utils';
import { zIndices } from './zIndices';

export const { styled, getCssText, globalCss, theme, createTheme } =
  createStitches({
    theme: {
      colors: light,
      sizes,
      space: sizes,
      fontSizes,
      fontWeights,
      fonts,
      zIndices,
    },
    utils: stitchesUtils,
    media: breakpoints,
  });

export const globalStyles = globalCss({
  '*, ::before, ::after': { boxSizing: 'border-box' },
  body: { margin: 0, backgroundColor: '$mainBackground' },
  '*': {
    fontFamily: '$font$mulish',
  },
  html: {
    display: 'flex',
    minHeight: '$full',
  },
  'body, #__next, main': {
    display: 'flex',
    flex: 1,
    height: 'auto',
    minHeight: 'auto',
  },
  main: {
    flexDirection: 'column',
  },
});

export const darkTheme = createTheme({
  colors: dark,
});
