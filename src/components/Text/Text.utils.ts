import { Fonts, FontSizes, FontWeights } from '@theme/font';

import { SpacingVariants, TextVariant } from './Text.models';

export const mapSize: {
  [key in TextVariant]: FontSizes;
} = {
  p: 'body',
  span: 'body',
  h1: 36,
  h2: 24,
  h3: 20,
};

export const mapWeight: { [key in TextVariant]: FontWeights } = {
  p: 400,
  span: 400,
  h1: 400,
  h2: 700,
  h3: 700,
};

export const mapSpacing: { [key in TextVariant]: SpacingVariants } = {
  p: 'small',
  span: 'none',
  h1: 'large',
  h2: 'large',
  h3: 'large',
};

export const mapFont: { [key in TextVariant]: Fonts } = {
  p: 'mulish',
  span: 'mulish',
  h1: 'abril',
  h2: 'abril',
  h3: 'mulish',
};
