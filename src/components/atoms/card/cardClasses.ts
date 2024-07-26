import { Size, Variant } from '@/types';
import { roundedClassGenerator, shadowClassGenerator } from '@/utils/generators';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { CardProps } from './card.types';

export const cardColorsClasses = (variant?: Variant): string =>
  clsx({
    'border border-gray-300 dark:border-gray-700': variant === 'outlined',
    'bg-neutral-200 dark:bg-gray-800': variant === 'contained',
  });

export const cardContainerClasses = ({ variant, rounded, shadow }: CardProps) =>
  clsx(cardColorsClasses(variant), roundedClassGenerator(rounded), shadowClassGenerator(shadow));

export const cardContentClasses = (size?: Size, header?: ReactNode, footer?: ReactNode): string =>
  clsx({
    'py-6 px-10': size === 'large',
    'px-10 py-2': size === 'large' && header && footer,
    'px-10 pt-2 pb-6': size === 'large' && header && !footer,
  });

export const cardHeaderClasses = (size?: Size) =>
  clsx({
    'px-10 pt-6 pb-1': size === 'large',
  });

export const cardFooterClasses = (size?: Size) =>
  clsx({
    'px-10 pb-6 pt-1': size === 'large',
  });
