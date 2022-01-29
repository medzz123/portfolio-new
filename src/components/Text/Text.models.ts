import { Fonts, FontSizes, FontWeights } from '@theme/font';
import { Palette } from '@theme/palette';
import { ReactNode } from 'react';

export interface TextProps {
  /**
   * Type of element
   */
  variant?: TextVariant;
  /**
   * Replaces default variant
   */
  size?: FontSizes;
  /**
   * Font weight
   */
  weight?: FontWeights;
  /**
   * Color
   */
  color?: Palette;
  /**
   * Text Align
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Margin Bottom
   */
  mb?: SpacingVariants;
  /**
   * Font family
   */
  font?: Fonts;
  children?: ReactNode;
  className?: string;
}

export type SpacingVariants = 'none' | 'small' | 'large';

export type TextVariant = 'p' | 'span' | 'h1' | 'h2' | 'h3';
