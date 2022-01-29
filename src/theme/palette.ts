export const light = {
  hiContrast: '#000000',
  loContrast: '#ffffff',
  mainBackground: '#f4f4f5',
  secondaryBackground: '#f9efe7',
  accent: '#ffe872',
};

export const dark = {
  loContrast: '#000000',
  hiContrast: '#ffffff',
  mainBackground: '#000000',
  secondaryBackground: '#f9efe7',
  accent: '#ffe872',
};

export type Palette = keyof typeof light & keyof typeof dark;
