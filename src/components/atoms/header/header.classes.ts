import { colorClassesGenerator, fixedClassGenerator, shadowClassGenerator } from '@/utils/generators';
import clsx from 'clsx';
import { HeaderProps } from './header.types';

export const headerClasses = ({ shadow, color, fixed, justifyContent }: HeaderProps): string =>
  clsx(
    'w-full flex h-16 items-center px-6',
    colorClassesGenerator({ color }),
    shadowClassGenerator(shadow),
    fixedClassGenerator(fixed),
    justifyContent
  );
