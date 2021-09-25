import { styled } from '@theme/config';

export const TextContainer = styled('p', {
  margin: '$0',
  lineHeight: '1.5',
  variants: {
    level: {
      normal: {
        fontSize: '$normal',
      },
      small: {
        fontSize: '$small',
      },
      info: {
        fontSize: '$info',
      },
      h1: {
        fontSize: '$h1',
        lineHeight: '1',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '1.3',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '1.3',
      },
    },
    weight: {
      thin: {
        fontWeight: '$thin',
      },
      normal: {
        fontWeight: '$normal',
      },
      semiBold: {
        fontWeight: '$semiBold',
      },
      bold: {
        fontWeight: '$bold',
      },
      black: { fontWeight: '$black' },
    },
    color: {
      success: {
        color: '$hiContrast',
      },
      error: {
        color: '$error',
      },
      info: {
        color: '$hiContrast',
      },
      normal: {
        color: '$hiContrast',
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    spacing: {
      none: {
        marginBottom: '$0',
      },
      small: {
        marginBottom: '$20',
      },
      large: {
        marginBottom: '$30',
      },
    },
    font: {
      abril: {
        fontFamily: '$abril',
      },
      mulish: {
        fontFamily: '$mulish',
      },
    },
  },
});
