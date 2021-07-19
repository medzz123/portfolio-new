import { styled } from '@theme/config';

export const LayoutContainer = styled('div', {
  width: '$sizes$full',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  maxWidth: '$6xl',
  margin: '0 auto',
  padding: '$24',

  '@bp768': {
    padding: '$64',
  },
});
