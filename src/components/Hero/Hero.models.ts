/**
 * Hero component for most pages
 *
 * If children is passed then only expanded prop will work
 */
export type HeroProps = (HeroWithChildren | HeroWithCustomProps) & {
  /**
   * Expands the container to occupy the full height of the viewport
   * @defaults false
   */
  expand?: boolean;
};

export interface HeroWithChildren {
  children?: React.ReactNode;
  title?: never;
  description?: never;
  date?: never;
  image?: never;
  tags?: never;
}

export interface HeroWithCustomProps {
  children?: never;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  tags?: string[];
}
