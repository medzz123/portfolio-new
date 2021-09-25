import { styled } from '@theme/config';

export const BlogContainer = styled('main', {
  width: '$full',
});

export const Divider = styled('hr', {
  backgroundColor: '$hiContrast',
  border: 0,
  height: '$1',
});

export const TagsContainer = styled('div', {
  span: {
    marginRight: '$8',
  },
});

export const ArticleContainer = styled('div', {
  maxWidth: '$3xl',
  width: '$full',
  margin: '0 auto',
});

export const MainImageContainer = styled('div', {
  width: '$full',

  height: '$xl',
  backgroundColor: 'red',
  position: 'relative',
  mb: '$16',
});

export const MainImage = styled('div', {
  position: 'absolute',
  right: '-288px',
  width: '400%',
  height: '$full',
  backgroundColor: 'blue',
});

export const Socials = styled('div', {
  position: 'sticky',
  top: 0,
  transform: 'translateX(-75px)',
});
