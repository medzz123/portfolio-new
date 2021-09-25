import { styled } from '@theme/config';

export const HeaderContainer = styled('header', {
  padding: '$48 $24',
  width: '$full',
  maxWidth: '$7xl',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Logo = styled('a', {
  fontWeight: '900',
  fontSize: '$sizes$24',
  cursor: 'pointer',
});

export const Menu = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
});

export const HeaderLink = styled('a', {
  cursor: 'pointer',
  marginLeft: '$16',
  fontSize: '$20',
  fontWeight: '900',

  '&:hover': {
    textDecoration: 'underline',
    textDecorationThickness: '$sizes$2',
  },
});
