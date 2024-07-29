export type Size = 'small' | 'medium' | 'large';
export type SizeShort = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Color = 'primary' | 'secondary' | 'neutral' | 'white';
export type Variant = 'contained' | 'outlined';
export type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';
export type ColorVariant = {
  color?: Color;
  variant?: Variant;
};
export type Shadow = 'md';
export type JustifyContent = `justify-${'start' | 'end' | 'between' | 'around' | 'stretch'}`;
export type Fixed = 'top' | 'left' | 'right' | 'bottom';
