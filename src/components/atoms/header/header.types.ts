import { PropsWithChildren } from 'react';

import { Color, Fixed, JustifyContent, Shadow } from '@/types';

export interface HeaderProps extends PropsWithChildren {
  fixed?: Fixed;
  shadow?: Shadow;
  justifyContent?: JustifyContent;
  color?: Color;
}
