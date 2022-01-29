import { PropertyValue } from '@stitches/react';

export const stitchesUtils = {
  m: (value: PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mt: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
  }),
  mr: (value: PropertyValue<'margin'>) => ({
    marginRight: value,
  }),
  mb: (value: PropertyValue<'margin'>) => ({
    marginBottom: value,
  }),
  ml: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
  }),

  p: (value: PropertyValue<'padding'>) => ({
    padding: value,
  }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  pt: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
  }),
  pr: (value: PropertyValue<'padding'>) => ({
    paddingRight: value,
  }),
  pb: (value: PropertyValue<'padding'>) => ({
    paddingBottom: value,
  }),
  pl: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
  }),

  bg: (value: PropertyValue<'background'>) => ({
    background: value,
  }),
  bc: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  size: (value: PropertyValue<'width' | 'height'>) => ({
    width: value,
    height: value,
  }),
  br: (value: PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  center: (value: PropertyValue<'flexDirection'>) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: value,
  }),
};
