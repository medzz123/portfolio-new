import { styled } from '@theme/config';

export const StyledLink = styled('a', {
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'relative',
  color: '$hiContrast',
  overflow: 'hidden',
  variants: {
    type: {
      line: {
        fontWeight: '$700',
        '&::before': {
          position: 'absolute',
          content: '',
          width: '$full',
          height: '$3',
          backgroundColor: '$accent',
          left: 0,
          bottom: 0,
        },
        '&::after': {
          position: 'absolute',
          content: '',
          width: '$12',
          height: '$3',
          backgroundColor: '$loContrast',
          left: '-$12',
          bottom: 0,
        },
      },
      box: {},
    },
  },
});
