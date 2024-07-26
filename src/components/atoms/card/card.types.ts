import { PropsWithChildren, ReactNode } from 'react';

import { Rounded, Shadow, Size, Variant } from '@/types';

export interface CardProps extends PropsWithChildren {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  shadow?: Shadow;
  header?: ReactNode;
  footer?: ReactNode;
}

export enum CARD_TESTID {
  CONTAINER = 'card-container',
  HEADER = 'card-header',
  CONTENT = 'card-content',
  FOOTER = 'card-footer',
}
