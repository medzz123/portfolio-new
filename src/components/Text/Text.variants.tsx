import { forwardRef } from 'react';

import Text from './Text';
import { TextProps } from './Text.models';

const H1 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  (props, ref) => (
    <Text ref={ref} variant="h1" {...props}>
      {props?.children}
    </Text>
  )
);

const H2 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  (props, ref) => (
    <Text ref={ref} variant="h2" {...props}>
      {props?.children}
    </Text>
  )
);

const H3 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  (props, ref) => (
    <Text ref={ref} variant="h3" {...props}>
      {props?.children}
    </Text>
  )
);

const P = forwardRef<HTMLParagraphElement, Omit<TextProps, 'variant'>>(
  (props, ref) => (
    <Text ref={ref} variant="p" {...props}>
      {props?.children}
    </Text>
  )
);

const S = forwardRef<HTMLParagraphElement, Omit<TextProps, 'variant'>>(
  (props, ref) => (
    <Text ref={ref} variant="span" {...props}>
      {props?.children}
    </Text>
  )
);

export { H1, H2, H3, P, S };
