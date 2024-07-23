import { colorClassesGenerator, roundedClassGenerator, sizeTextClassesGenerator } from '@/utils/generators';
import clsx from 'clsx';
import { ButtonProps } from './button.type';

export const buttonClasses = ({ endIcon, startIcon, size, color, variant, rounded }: ButtonProps): string => {
  const textSizeClasses = size ? sizeTextClassesGenerator(size) : '';
  const colorClasses = color && variant ? colorClassesGenerator({ color, variant }) : '';
  const roundedClasses = rounded ? roundedClassGenerator(rounded) : '';

  return clsx(
    'flex items-center justify-between gap-4 transition-colors ease-in-out duration-300 font-medium',
    {
      'pl-6': !startIcon && size === 'large',
      'pr-6': !endIcon && size === 'large',
    },
    textSizeClasses,
    colorClasses,
    roundedClasses
  );
};
