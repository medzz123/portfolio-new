import React, { FunctionComponent } from 'react';

import { TextProps } from './Text.models';
import { TextContainer } from './Text.styles';
import { mapFont, mapSize, mapSpacing, mapWeight } from './Text.utils';

const Text: FunctionComponent<TextProps> = (props) => {
  const {
    children,
    level,
    weight,
    color = 'normal',
    mb,
    align = 'left',
    variant = 'p',
    font,
  } = props;

  const mappedLevel = level || mapSize[variant];
  const mappedWeight = weight || mapWeight[variant];
  const mappedSpacing = mb || mapSpacing[variant];
  const mappedFont = font || mapFont[variant];

  return (
    <TextContainer
      as={variant}
      spacing={mappedSpacing}
      font={mappedFont}
      align={align}
      weight={mappedWeight}
      color={color}
      level={mappedLevel}
      data-testid="text"
    >
      {children}
    </TextContainer>
  );
};

export default Text;
