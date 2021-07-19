import { FontSizes, FontWeights } from '@theme/font';

import { TextVariant } from './Text.models';

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
  h1: 'black',
  h2: 'bold',
  h3: 'bold',
};
