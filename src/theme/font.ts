export const fontSizes = {
  /**
   * Normal - 18px
   */
  normal: '1.125rem',
  /**
   * Small - 10px
   */
  small: '0.6rem',
  /**
   * Info Label - 16px;
   */
  info: '1rem',
  /**
   * H1
   */
  h1: '2.5rem',
  /**
   * H2 - 32px
   */
  h2: '2rem',
  /**
   * H3 - 28px
   */
  h3: '1.75rem',
};

export const fontWeights = {
  /**
   * Thin - 200
   */
  thin: 200,
  /**
   * Normal - 400
   */
  normal: 400,
  /**
   * SemiBold - 600
   */
  semiBold: 600,
  /**
   * Bold - 800
   */
  bold: 800,
  /**
   * Black - 900
   */
  black: 900,
};

export type FontSizes = keyof typeof fontSizes;
export type FontWeights = keyof typeof fontWeights;
