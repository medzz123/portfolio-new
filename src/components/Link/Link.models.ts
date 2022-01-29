import { ComponentProps } from '@stitches/react';
import { FontSizes, FontWeights } from '@theme/font';
import { LinkProps as NextLinkProps } from 'next/link';

import { StyledLink } from './Link.styles';

export interface LinkProps extends NextLinkProps {
  weight?: FontWeights;
  size?: FontSizes;
  variant?: 'line' | 'box';
  htmlLinkProps?: ComponentProps<typeof StyledLink>;
}
