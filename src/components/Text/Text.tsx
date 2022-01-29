import React, { forwardRef } from 'react';

import { TextProps } from './Text.models';
import { TextContainer } from './Text.styles';
import { mapFont, mapSize, mapSpacing, mapWeight } from './Text.utils';

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    children,
    size,
    weight,
    color = 'hiContrast',
    mb,
    align = 'left',
    variant = 'p',
    font,
    className,
  } = props;

  const mappedSize = size || mapSize[variant];
  const mappedWeight = weight || mapWeight[variant];
  const mappedSpacing = mb || mapSpacing[variant];
  const mappedFont = font || mapFont[variant];

  return (
    <TextContainer
      ref={ref}
      as={variant}
      className={className}
      css={{
        fontSize: '$' + mappedSize,
        fontWeight: mappedWeight,
        color: '$' + color,
        font: '$fonts$' + mappedFont,
      }}
      spacing={mappedSpacing}
      align={align}
      color={color}
      data-testid="text"
    >
      {children}
    </TextContainer>
  );
});

export default Text;
