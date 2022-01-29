export const fontSizes = {
  /**
   * Body - 18px
   */
  body: '1.125rem',
  8: '0.5rem',
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  36: '2.25rem',
  40: '2.5rem',
  44: '2.75rem',
  48: '3rem',
  50: '3.125rem',
  60: '3.75rem',
};

export const fontWeights = {
  /**
   * Thin - 100
   */
  100: 100,
  /**
   * ExtraLight - 200
   */
  200: 200,
  /**
   * light - 300
   */
  300: 300,
  /**
   * normal - 400
   */
  400: 400,
  /**
   * medium - 500
   */
  500: 500,
  /**
   * SemiBold - 600
   */
  600: 600,
  /**
   * Bold - 700
   */
  700: 700,
  /**
   * ExtraBold - 800
   */
  800: 800,
  /**
   * Black - 900
   */
  900: 900,
};

export const fonts = {
  abril: "'Abril Fatface', cursive;",
  mulish: "'Mulish', sans-serif",
};

export type Fonts = keyof typeof fonts;
export type FontSizes = keyof typeof fontSizes;
export type FontWeights = keyof typeof fontWeights;
