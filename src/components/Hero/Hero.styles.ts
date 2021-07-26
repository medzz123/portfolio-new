import { styled } from '@theme/config';

export const HeroContainer = styled('div', {
  background:
    'rgba(0, 0, 0, 0) linear-gradient($secondaryBackground 80%, transparent 10%, transparent 10%) repeat scroll 0% 0%',
  margin: '$24',
  center: 'column',
  padding: '$20',

  variants: {
    expand: {
      true: {
        backgroundColor: '$secondaryBackground',
        height: '$full',
      },
    },
  },
});

export const CustomContainer = styled('div', {
  margin: 'auto',
});

export const Img = styled('img', {
  maxWidth: '$6xl',
  width: '$full',
  height: 'auto',
});
