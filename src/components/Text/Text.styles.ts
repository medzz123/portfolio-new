import { styled } from '@theme/config';

export const TextContainer = styled('p', {
  margin: '$0',
  lineHeight: '1.5',
  variants: {
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
  },
});
