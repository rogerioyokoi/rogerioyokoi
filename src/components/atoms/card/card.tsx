import { Rounded, Shadow, Size, Variant } from '@/types';
import clsx from 'clsx';
import { FC, PropsWithChildren, ReactNode } from 'react';

export interface CardProps extends PropsWithChildren {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  shadow?: Shadow;
  header?: ReactNode;
  footer?: ReactNode;
}

const Card: FC<CardProps> = ({
  children,
  variant = 'outlined',
  size = 'large',
  rounded = 'large',
  shadow = 'md',
  header,
  footer,
}) => {
  const getContainerClasses = clsx({
    'border border-gray-300 dark:border-gray-700': variant === 'outlined',
    'bg-neutral-200 dark:bg-gray-800': variant === 'contained',
  });

  const getSizeClasses = clsx({
    'py-6 px-10': size === 'large',
    'px-10 py-2': size === 'large' && header && footer,
    'px-10 pt-2 pb-6': size === 'large' && header && !footer,
  });

  const getSizeHeaderClasses = clsx({
    'px-10 pt-6 pb-1': size === 'large',
  });
  const getSizeFooterClasses = clsx({
    'px-10 pb-6 pt-1': size === 'large',
  });

  const getRoundedClass = clsx({
    'rounded-lg': rounded === 'large',
  });

  const getShadowClass = clsx({
    'shadow-md': shadow === 'md',
  });

  const cardClasses = clsx(getContainerClasses, getRoundedClass, getShadowClass);

  return (
    <div data-testid="card-container" className={cardClasses}>
      {header && (
        <header data-testid="card-header" className={getSizeHeaderClasses}>
          {header}
        </header>
      )}
      <div data-testid="card-content" className={getSizeClasses}>
        {children}
      </div>
      {footer && (
        <footer data-testid="card-footer" className={getSizeFooterClasses}>
          {footer}
        </footer>
      )}
    </div>
  );
};

export default Card;
