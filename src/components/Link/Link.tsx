import NextLink from 'next/link';
import React from 'react';

import { LinkProps } from './Link.models';
import { StyledLink } from './Link.styles';

const Link: React.FC<LinkProps> = (props) => {
  const {
    children,
    size = 16,
    weight = 400,
    htmlLinkProps,
    variant = 'line',
    ...rest
  } = props;
  return (
    <NextLink {...rest} passHref={true}>
      <StyledLink
        {...htmlLinkProps}
        type={variant}
        css={{ fontSize: '$' + size, fontWeight: '$' + weight }}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
