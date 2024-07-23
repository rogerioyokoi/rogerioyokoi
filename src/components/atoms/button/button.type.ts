import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { ColorVariant, Rounded, Size } from '@/types';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ColorVariant & {
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    size?: Size;
    rounded?: Rounded;
  };

export enum BUTTON_TESTID {
  ANCHOR = 'button-anchor',
  BUTTON = 'button-button',
  START = 'button-start',
  END = 'button-end',
  CONTENT = 'button-content',
}
