import React from 'react';

import Text from './Text';
import { TextProps } from './Text.models';

export const H1: React.FunctionComponent<TextProps> = (props) => {
  return <Text variant="h1" {...props} />;
};

export const H2: React.FunctionComponent<TextProps> = (props) => {
  return <Text variant="h2" {...props} />;
};

export const H3: React.FunctionComponent<TextProps> = (props) => {
  return <Text variant="h3" {...props} />;
};

export const P: React.FunctionComponent<TextProps> = (props) => {
  return <Text variant="p" {...props} />;
};

export const S: React.FunctionComponent<TextProps> = (props) => {
  return <Text variant="span" {...props} />;
};
