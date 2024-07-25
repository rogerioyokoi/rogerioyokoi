/**
 * @file Tailwind Class Generators
 * @description This file contains utility functions to generate Tailwind CSS classes
 *              based on given parameters such as size, color, and variant. These functions
 *              help in dynamically applying styles to components in a consistent manner.
 */

import { ColorVariant, Rounded, Size } from '@/types';
import clsx from 'clsx';

/**
 * Generates text size classes for Tailwind CSS based on the provided size.
 *
 * @param {Size} size - The size variant, can be 'small', 'medium', or 'large'.
 * @returns {string} Tailwind CSS class for text size.
 */
export const sizeTextClassesGenerator = (size: Size): string =>
  clsx({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'text-lg': size === 'large',
  });

/**
 * Generates rounded corner classes for Tailwind CSS based on the provided rounded size.
 *
 * @param {Rounded} rounded - The rounded size, can be "sm" | "md" | "lg" | "full" | "none".
 * @returns {string} Tailwind CSS class for rounded corners.
 */
export const roundedClassGenerator = (rounded: Rounded): string =>
  clsx({
    rounded: rounded === 'sm',
    'rounded-md': rounded === 'md',
    'rounded-lg': rounded === 'lg',
    'rounded-full': rounded === 'full',
    'rounded-none': rounded === 'none',
  });

/**
 * Generates color and variant classes for Tailwind CSS based on the provided color and variant.
 *
 * @param {ColorClassesGenerator} params - An object containing `color` and `variant`.
 * @param {Color} params.color - The color variant, can be 'primary', 'secondary', 'neutral', etc.
 * @param {Variant} params.variant - The style variant, can be 'content' or 'outlined'.
 * @returns {string} Tailwind CSS class for color and variant.
 */
export const colorClassesGenerator = ({ color, variant }: ColorVariant): string => {
  return clsx({
    'bg-amber-400 hover:bg-amber-600 text-slate-900': color === 'primary' && variant === 'contained',
    'bg-blue-400 hover:bg-blue-600': color === 'secondary' && variant === 'contained',
    'bg-neutral-800 text-neutral-200 hover:bg-neutral-950': color === 'neutral' && variant === 'contained',

    'border border-amber-400 text-amber-400': color === 'primary' && variant === 'outlined',
    'border border-blue-400 text-blue-400': color === 'secondary' && variant === 'outlined',
    'border border-neutral-800 text-neutral-800 dark:border-neutral-200 dark:text-neutral-200':
      color === 'neutral' && variant === 'outlined',
  });
};
