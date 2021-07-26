import { FontSizes, FontWeights } from '@theme/font';

import { FontVariant, SpacingVariants, TextVariant } from './Text.models';

export const mapSize: {
  [key in TextVariant]: FontSizes;
} = {
  p: 'normal',
  span: 'normal',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};

export const mapWeight: { [key in TextVariant]: FontWeights } = {
  p: 'normal',
  span: 'normal',
  h1: 'normal',
  h2: 'bold',
  h3: 'bold',
};

export const mapSpacing: { [key in TextVariant]: SpacingVariants } = {
  p: 'small',
  span: 'none',
  h1: 'large',
  h2: 'large',
  h3: 'large',
};

export const mapFont: { [key in TextVariant]: FontVariant } = {
  p: 'mulish',
  span: 'mulish',
  h1: 'abril',
  h2: 'abril',
  h3: 'abril',
};
